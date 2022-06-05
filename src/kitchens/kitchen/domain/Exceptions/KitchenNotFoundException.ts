export default class KitchenNotFoundException extends Error {
  constructor(exOriginal: string) {
    super(exOriginal)
  }
}
