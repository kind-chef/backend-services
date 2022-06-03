export default class Approved {
  private value: Boolean

  constructor(value: Boolean) {
    this.setValue(value)
  }

  public getValue(): Boolean {
    return this.value
  }

  public setValue(value: Boolean) {
    this.value = value
  }
}
