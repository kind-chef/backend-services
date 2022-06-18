export default class Date {
  private value: Date

  constructor(value: Date) {
    this.value = value
  }

  public getValue(): Date {
    return this.value
  }
}
