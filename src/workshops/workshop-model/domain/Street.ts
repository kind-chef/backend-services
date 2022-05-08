export default class Street {
  private value: String

  constructor(value: String) {
    this.value = value
  }

  public setValue(value: String) {
    this.value = value
  }

  public getValue() {
    return this.value
  }
}
