import MarsRover from './mars-rover'
// import parseCommand from './parse-command'
//
// jest.mock('./parse-command', () => jest.fn().mockReturnValue('M'))

describe('MarsRover', () => {
  describe('status', () => {
    it('should return status of marsRover when given initial position and direction', () => {
      const marsRover = new MarsRover(0, 0, 'N')

      const status = marsRover.status()

      expect(status).toBe('0 0 N')
    })

    it('should throw exception when marsRover get position out of range', () => {
      // expect(() => new MarsRover(-1, 6, 'N')).toThrowError('Invalid position!')
    })

    it('should throw exception when receive empty command', () => {
      const marsRover = new MarsRover(0, 0, 'N')

      expect(() => marsRover.execute(undefined)).toThrowError(
        'Please input commands!',
      )
    })
    it('should throw exception when receive invalid command', () => {
      const marsRover = new MarsRover(0, 0, 'N')

      expect(() => marsRover.execute('Unknown')).toThrowError(
        'Invalid commands!',
      )
    })
  })

  describe('single command', () => {
    it('should move forward to North when receive one M command', () => {
      const marsRover = new MarsRover(0, 0, 'N')

      const status = marsRover.execute('M')

      expect(status).toBe('0 1 N')
    })

    it('should move forward to East when receive one M command', () => {
      const marsRover = new MarsRover(0, 0, 'E')

      const status = marsRover.execute('M')

      expect(status).toBe('1 0 E')
    })
  })

  describe('turn command', () => {
    it('should turn left when receive L command', () => {
      const marsRover = new MarsRover(0, 0, 'N')

      const status = marsRover.execute('L')

      expect(status).toBe('0 0 W')
    })

    it('should turn right when receive R command', () => {
      const marsRover = new MarsRover(0, 0, 'N')

      const status = marsRover.execute('R')

      expect(status).toBe('0 0 E')
    })
  })

  describe('multiple commands', function() {
    it('should move back when receive multiple command', () => {
      const marsRover = new MarsRover(1, 1, 'N')

      const status = marsRover.execute('RRM')

      expect(status).toBe('1 0 S')
    })

    it('should return when receive multiple command', () => {
      const marsRover = new MarsRover(1, 1, 'N')

      const status = marsRover.execute('MLRLM')

      expect(status).toBe('0 2 W')
    })
  })

  describe('boundary', function() {
    it('should not across 0 when receive move command', () => {
      const marsRover = new MarsRover(0, 0, 'W')

      const status = marsRover.execute('M')

      expect(status).toBe('0 0 W')
    })
    it('should not across 5 when receive move command', () => {
      const marsRover = new MarsRover(0, 5, 'N')

      const status = marsRover.execute('M')

      expect(status).toBe('0 5 N')
    })
  })
})
