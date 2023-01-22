const fs = require('fs')
var Jimp = require('jimp')

const sourceRoot = './files/renamed/'
const destRoot = './files/resized/'

type Size = {
  p: string
  w: number
  h: number
}

const landscapes: Size[] = [
  { p: 'l0', w: 1024, h: 768 },
  { p: 'l1', w: 1366, h: 768 },
  { p: 'l2', w: 1920, h: 1200 },
].reverse()

const potraits: Size[] = [
  { p: 'p0', w: 412, h: 915 },
  { p: 'p1', w: 750, h: 1334 },
  { p: 'p2', w: 1440, h: 2560 },
].reverse()

function resize(
  source: string,
  sizes: Size[],
  hAlignment = Jimp.HORIZONTAL_ALIGN_CENTER
) {
  const sourceParts = source.split('.')

  // if already done, skip
  const sampleDest =
    destRoot +
    sourceParts[0] +
    '-' +
    sizes[0].p +
    '.' +
    sourceParts[1]
  if (
    fs.existsSync(sampleDest) &&
    fs.statSync(sampleDest).size
  )
    return false

  console.log('doing', source)

  Jimp.read(
    sourceRoot + source,
    (err: string, image: any) => {
      if (err) console.log(err)

      sizes.forEach((size) => {
        const { p, w, h } = size
        image
          .cover(w, h, hAlignment) // resize
          .quality(60) // set JPEG quality
          .write(
            destRoot +
              sourceParts[0] +
              '-' +
              p +
              '.' +
              sourceParts[1]
          )
      })
    }
  )

  return true
}

const files = fs.readdirSync(sourceRoot)

let i = 93
const maxI = 97
function resizeNext() {
  const file = files[i]

  if (i > maxI) if (!file) return

  const doingL = resize(file, landscapes)
  const doingP = resize(file, potraits)

  i++

  if (doingL || doingP) setTimeout(resizeNext, 10000)
  else setTimeout(resizeNext, 10)
}

resizeNext()

// redoing
const files2 = [
  // 'bukit_duabelas_1.jpg',
  // 'gunung_rinjani_1.jpg',
  // 'kelimutu_1.jpg',
  // 'kepulauan_togean_1.jpg',
  // 'sebangau_0.jpg',
]
// files2.forEach((file: string) => {
//   resize(file, landscapes)
//   resize(file, potraits)
// })

const files3 = [
  'bogani_nani_wartabone_1.jpg',
  'bantimurung-bulusaraung_1.jpg',
]
// files3.forEach((file: string) => {
//   resize(file, potraits, Jimp.HORIZONTAL_ALIGN_RIGHT)
// })

/*
recenter
- bantimurung
- bogani nani
redo
- bukit duabelas
- gunung rinjani
- kelimutu
- kepulauan togean
- sebangau
*/
