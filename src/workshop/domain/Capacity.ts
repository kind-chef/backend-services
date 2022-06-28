export default class Capacity {
  private value: number

  constructor(value: number) {
    this.value = value
  }

  public getValue(): number {
    return this.value
  }
}
