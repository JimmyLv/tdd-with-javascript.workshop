import isUndefined from 'lodash/isUndefined'
import mapValues from 'lodash/mapValues'

const DEFAULT_VALUES = {
  bool: false,
  int: 0,
  str: '',
}

export const parseBool = value => true
export const parseInt = value => Number(value) || 0
export const parseIntList = value => value.split(',').map(str => Number(str))
export const parseStr = value => value || ''
export const parseStrList = value => value.split(',')

const parser = type => flag => {
  const parse = {
    'bool': parseBool,
    'int': parseInt,
    'str': parseStr,
    '[int]': parseIntList,
    '[str]': parseStrList,
  }[type]

  if (!parse) {
    throw new Error(`error schema type: ${type}`)
  }
  return {
    [flag]: {
      parse,
      default: isUndefined(DEFAULT_VALUES[type])
        ? []
        : DEFAULT_VALUES[type],
    },
  }
}

export const parsersBySchema = schemas =>
  schemas.split(',')
    .map(schema => schema.split(':'))
    .map(([flag, type]) => parser(type)(flag))
    .reduce((prev, current) => ({
      ...prev,
      ...current,
    }))

export const parserBy = parsers => flag => value => {
  const parser = parsers[flag]
  if (!parser) {
    throw new Error(`error flag: ${flag}`)
  }
  return parser.parse(value)
}

export const parseSchemas = commands => {
  const fragments = commands.split(' ')
  return fragments
    .map((fragment, index) => ({
      flag: fragment,
      value: fragments[index + 1],
    }))
    .filter(schema => schema.flag.startsWith('-'))
    .map(schema => ({
      ...schema,
      flag: schema.flag.split('-')[1],
    }))
}

export default class Parser {
  constructor(schemas) {
    this.parsers = parsersBySchema(schemas)
  }

  parse(commands) {
    const defaultBySchema = mapValues(this.parsers, o => o.default)

    return parseSchemas(commands)
      .map(({ flag, value }) => ({
        [flag]: parserBy(this.parsers)(flag)(value),
      }))
      .reduce((prev, current) => ({
        ...defaultBySchema,
        ...prev,
        ...current,
      }))
  }
}
