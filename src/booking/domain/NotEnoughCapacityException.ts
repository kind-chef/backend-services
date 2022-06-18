export default class NotEnoughCapacityException extends Error {
  constructor(exOriginal: string) {
    super(exOriginal)
  }
}
