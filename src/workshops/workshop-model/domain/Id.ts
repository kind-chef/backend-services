export default class Id {
  private value: String

  constructor(value: String) {
    this.value = value
  }

  public getValue(): String {
    return this.value
  }
}
