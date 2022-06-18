import fs from 'fs'

export default class WriteFyles {
  execute(files: any[]) {
    let directory = '/kind-chef/src/assets'
    files.forEach(async (file) => {
      let encodedString = file.content.split(',')[1]
      const fileContents = Buffer.from(encodedString, 'base64')
      fs.writeFileSync(`${directory}/${file.name}`, fileContents)
    })
  }
}
