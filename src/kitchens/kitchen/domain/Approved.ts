export default class Approved {
  private value: boolean

  constructor(value: boolean) {
    this.setValue(value)
  }

  public getValue(): boolean {
    return this.value
  }

  public setValue(value: boolean) {
    this.value = value
  }
}
