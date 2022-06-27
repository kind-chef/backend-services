export default class Phonenumber {
  private value: string

  constructor(value: string) {
    this.setValue(value)
  }

  public setValue(value: string) {
    if (!this.validate(value)) return
    this.value = value
  }

  private validate(value: string): boolean {
    if (!value) return false
    return new RegExp(/^\d+$/).test(value)
  }

  public getValue(): string {
    return this.value
  }
}
