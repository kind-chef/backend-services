export default class ImageUrls {
  private value: string[]

  constructor(images: string[]) {
    this.setValue(images)
  }

  public setValue(images: string[]) {
    this.value = images
  }

  public getValue(): string[] {
    return this.value
  }
}
