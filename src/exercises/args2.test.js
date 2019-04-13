import Parser from './args2'

describe('Test Args', () => {
  let parser

  beforeEach(() => {
    const schemas = 'l:bool,p:int,d:str,q:[int],g:[str]'
    parser = new Parser(schemas)
  })

  describe('Test Multiple Args', () => {
    it('should parse fragments to schema array and result', () => {
      // given
      const command = '-p 8080 -d /usr/logs -g this,is,a,list'

      // when
      const result = parser.parse(command)

      // then
      expect(result).toEqual(
        {
          l: false,
          p: 8080,
          d: '/usr/logs',
          g: ['this', 'is', 'a', 'list'],
          q: [],
        },
      )
    })

    it('should parse fragments with default value to schema array and result', () => {
      // given
      const command = '-p 8080 -g this,is,a,list'

      // when
      const result = parser.parse(command)

      // then
      expect(result).toEqual(
        {
          l: false,
          p: 8080,
          d: '',
          q: [],
          g: ['this', 'is', 'a', 'list'],
        },
      )
    })

    it('should parse mixed fragments to schema array and result', () => {
      // given
      const command = '-l -p 8080 -d /usr/logs -g this,is,a,list'

      // when
      const result = parser.parse(command)

      // then
      expect(result).toEqual(
        {
          l: true,
          p: 8080,
          d: '/usr/logs',
          g: ['this', 'is', 'a', 'list'],
          q: [],
        },
      )
    })
  })

})
