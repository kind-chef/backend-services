export default interface MailEventManager {
  sendNotification(emailToList: string[], subject: string, content: string): void
}
