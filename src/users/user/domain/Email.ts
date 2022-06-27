export default class Email {
  private value: string

  constructor(email: string) {
    this.setValue(email)
  }

  public getValue(): string {
    return this.value
  }

  public setValue(value: string) {
    if (!this.validate(value)) return
    this.value = value
  }

  private validate(email: string): boolean {
    if (!email) return false
    const regex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    return regex.test(email)
  }
}
