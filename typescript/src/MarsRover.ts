export enum Direction { N, E, S, W }

type Position = {
  x: number;
  y: number;
}

export class MarsRover {
  public constructor(private xPosition: number, private yPosition: number, private direction: Direction = Direction.E, private worldSize = 10) {
  }

  private static directions = ['N', 'E', 'S', 'W'];

  getPosition() {
    return {
      x: this.xPosition,
      y: this.yPosition
    }
  }

  moveRight() {
    const newXPosition = this.xPosition + 1;

    this.xPosition = newXPosition === this.worldSize ? 0 : newXPosition;
  }

  moveLeft() {
    const newXPosition = this.xPosition - 1;

    this.xPosition = newXPosition < 0 ? this.worldSize - 1 : newXPosition;
  }

  moveUp() {
    const newYPosition = this.yPosition + 1;

    this.yPosition = newYPosition === this.worldSize ? 0 : newYPosition;
  }

  moveDown() {
    const newYPosition = this.yPosition - 1;

    this.yPosition = newYPosition < 0 ? this.worldSize - 1 : newYPosition;
  }

  getDirection() {
    return this.direction;
  }

  turnLeft() {
    this.direction = Direction.W;
    return this.direction;
  }

  turnRight() {
    this.direction = Direction.E;
    return this.direction;
  }

  run(commands: string[]): Position {
    commands.forEach(command => {
      switch (command) {
        default:
        case 'f':
          this.moveUp();
          break;
        case 'b':
          this.moveDown();
          break;
      }
    });

    return this.getPosition()
  }
}
