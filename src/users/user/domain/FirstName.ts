export default class FirstName {
  private value: string

  constructor(firstName: string) {
    this.setValue(firstName)
  }

  public getValue(): string {
    return this.value
  }

  public setValue(firstName: string) {
    this.value = firstName
  }
}
