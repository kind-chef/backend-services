import MailEventManager from '../domain/MailEventManager'
import nodemailer from 'nodemailer'

export default class NodeMailerEventManager implements MailEventManager {
  public async sendNotification(emailToList: String[]) {
    const transporter: nodemailer.Transporter = this.login()
    const mailOptions = this.getMailOptions(emailToList)
    await transporter.sendMail(mailOptions)
  }

  private login(): nodemailer.Transporter {
    return nodemailer.createTransport({
      service: 'zohomail',
      auth: {
        user: 'kindchef@zohomail.com',
        pass: 'bWKWHi44fVtfF,:9'
      }
    })
  }

  private getMailOptions(emailToList: String[]) {
    return {
      from: 'kindchef@zohomail.com',
      to: emailToList.join(','),
      subject: 'New Workshop Model pending to be verified',
      text: 'A new workshop model has registered in the system, please verify the details on the administration panel'
    }
  }
}
