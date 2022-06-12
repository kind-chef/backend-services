export default class WorkshopNotFound extends Error {
  constructor(exOriginal: string) {
    super(exOriginal)
  }
}
