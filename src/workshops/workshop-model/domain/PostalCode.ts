const MAX_POSTCODE_CHARS = 5

export default class PostalCode {
  private value: String

  public City(value: String) {
    this.setValue(value)
  }

  public setValue(value: String) {
    if (!this.validate()) throw new PostalCodeMalFormattedException(`Postal code mal formatted`)
    this.value = value
  }

  public getValue(value: String) {
    this.value = value
  }

  private validate() {
    return this.value.length == MAX_POSTCODE_CHARS
  }
}
