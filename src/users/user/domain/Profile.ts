export default class Profile {
  private value: string

  constructor(value: string) {
    this.setValue(value)
  }

  public getValue(): string {
    return this.value
  }

  public setValue(profile: string) {
    if (!this.validate(profile)) return
    this.value = profile
  }

  private validate(profile: string): Boolean {
    return true
  }
}
