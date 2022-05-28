export default class Street {
  private value: string

  constructor(value: string) {
    this.value = value
  }

  public setValue(value: string) {
    this.value = value
  }

  public getValue() {
    return this.value
  }
}
