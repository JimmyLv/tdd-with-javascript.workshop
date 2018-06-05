const LOWER_BOUNDARY = 0
const UPPER_BOUNDARY = 5

const VECTORS = {
  N: { offsetX: 0, offsetY: 1 },
  E: { offsetX: 1, offsetY: 0 },
  S: { offsetX: 0, offsetY: -1 },
  W: { offsetX: -1, offsetY: 0 },
}
const DIRECTIONS = Object.keys(VECTORS)

const COMMANDS = ['M', 'L', 'R']

function parseCommand(rawCommands) {
  if (!rawCommands) {
    throw new Error('Please input commands!')
  }

  const commands = rawCommands.split('')
  const validCommands = commands.filter(command => COMMANDS.includes(command))
  const notAllValidCommands = validCommands.length !== rawCommands.length

  if (notAllValidCommands) {
    throw new Error('Invalid commands!')
  }
  return commands
}

function limit(number) {
  if (number > UPPER_BOUNDARY) return UPPER_BOUNDARY
  if (number < LOWER_BOUNDARY) return LOWER_BOUNDARY
  return number
}

class MarsRover {
  constructor(x, y, direction) {
    this.x = x
    this.y = y
    this.direction = direction
  }

  executors = {
    M: () => {
      const { offsetX, offsetY } = VECTORS[this.direction]
      this.x = limit(this.x + offsetX)
      this.y = limit(this.y + offsetY)
    },
    L: () =>
      (this.direction =
        DIRECTIONS[(DIRECTIONS.indexOf(this.direction) + 3) % 4]),
    R: () =>
      (this.direction =
        DIRECTIONS[(DIRECTIONS.indexOf(this.direction) + 1) % 4]),
  }

  execute(commands) {
    parseCommand(commands)
      .map(command => this.executors[command])
      .forEach(executor => executor())
    return this.status()
  }

  status() {
    return `${this.x} ${this.y} ${this.direction}`
  }
}

export default MarsRover
