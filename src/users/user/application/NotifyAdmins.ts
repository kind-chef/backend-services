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
    await this.sendNotification(emailList)
  }

  private async getAdminEmails(): Promise<string[]> {
    const emails = await this.repository.getAdminEmails()
    const emailList = emails.map((email: any) => String(email.email))
    return emailList
  }

  private async sendNotification(emailList: string[]) {
    const subject = 'A new Kitchen has been created and is ready to be checked'
    const content = `A new kitchen model has registered in the system, please verify the details on the administration panel`
    await this.emailManager.sendNotification(emailList, subject, content)
  }
}
