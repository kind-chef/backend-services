export default class Price {
  private value: number

  constructor(value: number) {
    this.value = value
  }

  public getValue(): number {
    return this.value
  }
}
