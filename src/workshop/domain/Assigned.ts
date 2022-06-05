export default class Assigned {
  private value: Boolean

  constructor(value = false) {
    this.value = value
  }

  getValue(): Boolean {
    return this.value
  }
}
