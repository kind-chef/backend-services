import fs from 'fs'

export default class WriteFyles {
  execute(files: any[]) {
    const directory = '/kind-chef/src/assets'
    files.forEach(async (file) => {
      const encodedstring = file.content.split(',')[1]
      const fileContents = Buffer.from(encodedstring, 'base64')
      fs.writeFileSync(`${directory}/${file.name}`, fileContents)
    })
  }
}
