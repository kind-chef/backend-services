export default class Assigned {
  private value: string

  constructor(value = '') {
    this.value = value
  }

  getValue(): string {
    return this.value
  }
}
