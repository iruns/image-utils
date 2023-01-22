const fs = require('fs')
const decodeUrl = require('urldecode')

const images = JSON.parse(
  fs.readFileSync('./files/images.json', 'utf8')
)

for (let i = 0; i < images.length; i++) {
  const image = images[i]
  const urlParts: string[] = image.url.split('/')
  const url = urlParts.pop()

  // if already renamed, skip
  const destPath = './files/renamed/' + image.dest
  if (fs.existsSync(destPath)) continue

  let origPath = url as string
  if (!origPath.length) continue

  const origRoot = './files/orig/'
  origPath = decodeUrl(origPath)

  if (!fs.existsSync(origRoot + origPath)) {
    console.log('not found:', origRoot + origPath)
    continue
  }

  fs.copyFile(
    origRoot + origPath,
    destPath,
    (err: string) => {
      if (err) console.log('ERROR: ' + err)
    }
  )
}
