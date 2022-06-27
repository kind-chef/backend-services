export default class Phonenumber {
  private value: string

  constructor(phonenumber: string) {
    this.setValue(phonenumber)
  }

  public getValue(): string {
    return this.value
  }

  public setValue(phonenumber: string) {
    if (!this.validate(phonenumber)) return
    this.value = phonenumber
  }

  private validate(phonenumber: any): boolean {
    if (!phonenumber) return false
    return new RegExp(/^\d+$/).test(phonenumber)
  }
}
