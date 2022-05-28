export default class LastName {
  private value: string

  constructor(lastName: string) {
    this.setValue(lastName)
  }

  public getValue(): string {
    return this.value
  }

  public setValue(lastName: string) {
    this.value = lastName
  }
}
