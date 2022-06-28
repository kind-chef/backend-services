import MailEventManager from '../domain/MailEventManager'
import nodemailer from 'nodemailer'

export default class NodeMailerEventManager implements MailEventManager {
  public async sendNotification(emailToList: string[], subject: string, content: string) {
    const transporter: nodemailer.Transporter = this.login()
    const mailOptions = this.getMailOptions(emailToList, subject, content)
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

  private getMailOptions(emailToList: string[], subject: string, content: string) {
    return {
      from: 'kindchef@zohomail.eu',
      to: emailToList.join(','),
      subject: subject,
      text: content,
      secure: false
    }
  }
}
