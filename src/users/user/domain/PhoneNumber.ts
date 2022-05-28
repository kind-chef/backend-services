export default class PhoneNumber {
  private value: string

  constructor(phoneNumber: string) {
    this.setValue(phoneNumber)
  }

  public getValue(): string {
    return this.value
  }

  public setValue(phoneNumber: string) {
    if (!this.validate(phoneNumber)) return
    this.value = phoneNumber
  }

  private validate(phoneNumber: any): Boolean {
    if (!phoneNumber) return false
    return new RegExp(/^\d+$/).test(phoneNumber)
  }
}
