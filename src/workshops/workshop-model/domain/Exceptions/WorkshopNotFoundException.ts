export default class WorkshopNotFoundException extends Error {
  constructor(exOriginal: string) {
    super(exOriginal)
  }
}
