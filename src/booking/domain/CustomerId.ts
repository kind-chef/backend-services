export default class CustomerId {
  private value: string

  constructor(value: string) {
    this.value = value
  }

  getValue(): string {
    return this.value
  }
}
