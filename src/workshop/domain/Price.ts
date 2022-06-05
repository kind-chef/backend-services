export default class Price {
  private value: Number

  constructor(value: Number) {
    this.value = value
  }

  public getValue(): Number {
    return this.value
  }
}
