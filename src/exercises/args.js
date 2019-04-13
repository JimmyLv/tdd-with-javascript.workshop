const DEFAULT_VALUES = {
  logging: false,
  port: 0,
  directory: '',
}

export const parseLogging = value => ({ logging: true })
export const parsePort = value => ({ port: Number(value) || 0 })
export const parseStrList = value => ({ g: value.split(',') })
export const parseDirectory = value =>
  value.includes(',')
    ? { directory: value.split(',').map(str => Number(str)) }
    : { directory: value || '' }

export const parserBy = flag => value => {
  const parser = {
    '-l': parseLogging,
    '-p': parsePort,
    '-g': parseStrList,
    '-d': parseDirectory,
  }[flag]

  if (!parser) {
    throw new Error(`error flag: ${flag}`)
  }
  return parser(value)
}

export const parseSchemas = commands => {
  const fragments = commands.split(' ')
  return fragments
    .map((fragment, index) => ({
      flag: fragment,
      value: fragments[index + 1],
    }))
    .filter(schema => schema.flag.startsWith('-'))
}

export default commands =>
  parseSchemas(commands)
    .map(({ flag, value }) => parserBy(flag)(value))
    .reduce((prev, current) => ({
      ...DEFAULT_VALUES,
      ...prev,
      ...current,
    }))
