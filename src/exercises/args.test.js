import parse, { parseDirectory, parseLogging, parsePort, parserBy, parseSchemas, parseStrList } from './args'

describe('Test Args', () => {
  describe('Test Schema parser from raw schema string', () => {
    it('should throw error message when parse incorrect flag', () => {
      // given
      const flag = '-x'

      // when
      function parseOutput() { parserBy(flag)('') }

      // then
      expect(parseOutput).toThrowError(`error flag: ${flag}`)
    })

    it('should handle -l flag as schema output => { logging: True }', () => {
      // given
      // when
      const result = parseLogging('')
      // then
      expect(result).toEqual({
        logging: true,
      })
    })

    it('should handle -p flag and value => { port: 8080 }', () => {
      // given
      // when
      const result = parsePort('8080')
      // then
      expect(result).toEqual({
        port: 8080,
      })
    })

    it('should handle (-p) => { port: 0 }', () => {
      // given
      // when
      const result = parsePort('')
      // then
      expect(result).toEqual({
        port: 0,
      })
    })

    it('should handle -d /usr/logs => { directory: "/usr/logs" }', () => {
      // given
      // when
      const result = parseDirectory('/usr/logs')
      // then
      expect(result).toEqual({
        directory: '/usr/logs',
      })
    })

    it('should handle -g this,is,a,list => { g: ["this", "is", "a", "list"] }', () => {
      // given
      // when
      const result = parseStrList('this,is,a,list')
      // then
      expect(result).toEqual({
        g: ['this', 'is', 'a', 'list'],
      })
    })

    it('should handle -d 1,2,-3,5 => { directory: [1,2,-3,5] }', () => {
      // given
      // when
      const result = parseDirectory('1,2,-3,5')
      // then
      expect(result).toEqual({
        directory: [1, 2, -3, 5],
      })
    })
  })

  describe('Test Multiple Args', () => {
    it('should parse fragments to schema array and result', () => {
      const command = '-p 8080 -d /usr/logs -g this,is,a,list'
      const result = parseSchemas(command)

      expect(result).toEqual([
        { flag: '-p', value: '8080' },
        { flag: '-d', value: '/usr/logs' },
        { flag: '-g', value: 'this,is,a,list' },
      ])
      expect(parse(command)).toEqual(
        {
          logging: false,
          port: 8080,
          directory: '/usr/logs',
          g: ['this', 'is', 'a', 'list'],
        },
      )
    })

    it('should parse fragments with default value to schema array and result', () => {
      const command = '-p 8080 -g this,is,a,list'
      const result = parseSchemas(command)

      expect(result).toEqual([
        { flag: '-p', value: '8080' },
        { flag: '-g', value: 'this,is,a,list' },
      ])
      expect(parse(command)).toEqual(
        {
          logging: false,
          port: 8080,
          directory: '',
          g: ['this', 'is', 'a', 'list'],
        },
      )
    })

    it('should parse mixed fragments to schema array and result', () => {
      const command = '-l -p 8080 -d /usr/logs -g this,is,a,list'
      const result = parseSchemas(command)

      expect(result).toEqual([
        { flag: '-l', value: '-p' },
        { flag: '-p', value: '8080' },
        { flag: '-d', value: '/usr/logs' },
        { flag: '-g', value: 'this,is,a,list' },
      ])
      expect(parse(command)).toEqual(
        {
          logging: true,
          port: 8080,
          directory: '/usr/logs',
          g: ['this', 'is', 'a', 'list'],
        },
      )
    })
  })

})
