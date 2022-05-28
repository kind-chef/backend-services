export default interface MailEventManager {
  sendNotification(emailToList: string[]): void
}
