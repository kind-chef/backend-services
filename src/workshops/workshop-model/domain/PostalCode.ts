import PostalCodeMalFormattedException from './PostalCodeMalFormattedException'

const MAX_POSTCODE_CHARS = 5
export default class PostalCode {
  private value: String

  constructor(value: String) {
    this.setValue(value)
  }

  public setValue(value: String) {
    if (!this.validate(value)) throw new PostalCodeMalFormattedException(`Postal code mal formatted`)
    this.value = value
  }

  public getValue() {
    return this.value
  }

  private validate(value: String) {
    return value.length == MAX_POSTCODE_CHARS
  }
}
