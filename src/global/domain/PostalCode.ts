import PostalCodeMalFormattedException from './exceptions/PostalCodeMalFormattedException'

const MAX_POSTCODE_CHARS = 5
export default class PostalCode {
  private value: string

  constructor(value: string) {
    this.setValue(value)
  }

  public setValue(value: string) {
    if (!this.validate(value)) throw new PostalCodeMalFormattedException(`Postal code mal formatted`)
    this.value = value
  }

  public getValue() {
    return this.value
  }

  private validate(value: string) {
    return value.length == MAX_POSTCODE_CHARS
  }
}
