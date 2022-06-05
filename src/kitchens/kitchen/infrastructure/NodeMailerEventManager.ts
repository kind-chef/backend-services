import MailEventManager from '../domain/MailEventManager'
import nodemailer from 'nodemailer'

export default class NodeMailerEventManager implements MailEventManager {
  public async sendNotification(emailToList: string[]) {
    const transporter: nodemailer.Transporter = this.login()
    const mailOptions = this.getMailOptions(emailToList)
    await transporter.sendMail(mailOptions)
  }

  private login(): nodemailer.Transporter {
    return nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: 'kindchef',
        pass: 'bWKWHi44fVtfF,:9'
      }
    })
  }

  private getMailOptions(emailToList: string[]) {
    return {
      from: 'kindchef@zohomail.eu',
      to: emailToList.join(','),
      subject: 'New Kitchen Model pending to be verified',
      text: 'A new kitchen model has registered in the system, please verify the details on the administration panel',
      secure: false
    }
  }
}
