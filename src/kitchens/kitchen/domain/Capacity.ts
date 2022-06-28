export default class Capacity {
  private value: number

  constructor(value: number) {
    this.value = value
  }

  public setValue(value: number) {
    this.value = value
  }

  public getValue() {
    return this.value
  }
}
