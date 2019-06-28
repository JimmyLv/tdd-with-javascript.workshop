import { last } from 'lodash'
import shell from 'shelljs'

export const moveFiles = (source, dest) => shell.find(source)
  .filter(file => file.match(/\.jpg$/))
  .map(file => {
    const filename = last(file.split('/'))
    const target = generate(filename, dest)

    console.log('filename:', filename, target)

    move(file, target)

    return { source: filename, target }
  })

function generate(filename, dest) {
  const { spuCode } = spilt(filename)

  if (isSpu(filename)) {
    return `${dest}/${spuCode}/main`
  }

  const skuFolder = `${spuCode}/颜色/${spuCode.substr(-2)}`
  if (isSku(filename)) {
    return `${dest}/${skuFolder}/main`
  }
  if (isThumb(filename)) {
    return `${dest}/${skuFolder}/thumb`
  }

  return dest
}

export const move = (file, target) => {
  shell.mkdir('-p', target)
  shell.cp(file, target)
}

export const spilt = filename => {
  const words = filename
    .replace('.jpg', '')
    .split('_')
  return { spuCode: last(words) }
}

export const isSku = filename => filename.startsWith('mac_sku')
export const isSpu = filename => filename.startsWith('mac_spu')
export const isThumb = filename => filename.startsWith('mac_smoosh')
