export default class Capacity {
  private value: Number

  constructor(value: Number) {
    this.value = value
  }

  public setValue(value: Number) {
    this.value = value
  }

  public getValue() {
    return this.value
  }
}
