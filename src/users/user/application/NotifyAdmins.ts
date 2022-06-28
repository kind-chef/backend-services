import MailEventManager from '../../../global/domain/MailEventManager'
import UserRepository from '../domain/UserRepository'

export default class NotifyAdmins {
  private repository: UserRepository
  private emailManager: MailEventManager

  constructor(repository: UserRepository, emailManager: MailEventManager) {
    this.repository = repository
    this.emailManager = emailManager
  }

  public async execute(eventContent: string) {
    const emailList = await this.getAdminEmails()
    console.log('this is the list of emails ---> ', emailList)
    await this.sendNotification(emailList, eventContent)
  }

  private async getAdminEmails(): Promise<string[]> {
    const emails = await this.repository.getAdminEmails()
    const emailList = emails.map((email: any) => String(email.email))
    return emailList
  }

  private async sendNotification(emailList: string[], eventContent: string) {
    const subject = 'A new Kitchen has been created and is ready to be checked'
    const eventContenObj = JSON.parse(eventContent)
    const kitchenUrl = `http://localhost:3000/kitchen/${eventContenObj.id}`
    const content = `A new kitchen model has registered in the system, please verify the details on the administration panel with this url: 
      ${kitchenUrl}`
    await this.emailManager.sendNotification(emailList, subject, content)
  }
}
