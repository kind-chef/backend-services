export default class WorkshopId {
  private value: string

  constructor(value: string) {
    this.value = value
  }

  getValue(): string {
    return this.value
  }
}
