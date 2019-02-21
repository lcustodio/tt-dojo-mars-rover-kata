import {Direction, MarsRover} from "../src/MarsRover";
import * as assert from "assert";

describe("Mars Rover", function () {
  it("should be created with an initial starting point and initial direction", () => {
    const xPosition = 1;
    const yPosition = 1;
    const direction = Direction.E;
    const marsRover = new MarsRover(xPosition, yPosition, direction);
    assert.deepEqual(marsRover.getPosition(), {x: xPosition, y: yPosition});
    assert.deepEqual(marsRover.getDirection(), direction);
  });

  it('increases x position with 1 when moving right', function () {
    const xPosition = 1;
    const yPosition = 1;
    const marsRover = new MarsRover(xPosition, yPosition);
    marsRover.moveRight();
    assert.deepEqual(marsRover.getPosition(), {x: 2, y: 1});
  });

  it('decreases x position with 1 when moving left', function () {
    const xPosition = 2;
    const yPosition = 2;
    const marsRover = new MarsRover(xPosition, yPosition);
    marsRover.moveLeft();
    assert.deepEqual(marsRover.getPosition(), {x: 1, y: 2});
  });

  it('increases y position with 1 when moving up', function () {
    const xPosition = 1;
    const yPosition = 1;
    const marsRover = new MarsRover(xPosition, yPosition);
    marsRover.moveUp();
    assert.deepEqual(marsRover.getPosition(), {x: 1, y: 2});
  });

  it('decreases y position with 1 when moving down', function () {
    const xPosition = 2;
    const yPosition = 2;
    const marsRover = new MarsRover(xPosition, yPosition);
    marsRover.moveDown();
    assert.deepEqual(marsRover.getPosition(), {x: 2, y: 1});
  });

  it('moving up with a grid size of 10 when the current y position is 9 should result in y position being 0', () => {
    const marsRover = new MarsRover(2, 9);
    marsRover.moveUp();
    assert.deepEqual(marsRover.getPosition().y, 0);
  });

  it('moving down with a grid size of 5 when the current y position is 0 should result in y position being 4', () => {
    let worldSize = 5;
    let yPosition = 0;
    const marsRover = new MarsRover(2, yPosition, undefined, worldSize);
    marsRover.moveDown();
    assert.deepEqual(marsRover.getPosition().y, 4);
  });

  it('moving right with a grid size of 10 when the current x position is 9 should result in x position being 0', () => {
    const marsRover = new MarsRover(9, 2);
    marsRover.moveRight();
    assert.deepEqual(marsRover.getPosition().x, 0);
  });

  it('moving left with a grid size of 5 when the current x position is 0 should result in x position being 4', () => {
    let worldSize = 5;
    let xPosition = 0;
    const marsRover = new MarsRover(xPosition, 2, undefined, worldSize);
    marsRover.moveLeft();
    assert.deepEqual(marsRover.getPosition().x, 4);
  });

  it('turnLeft changes the rover direction anticlockwise', () => {
    const marsRover = new MarsRover(0, 0, Direction.N);
    marsRover.turnLeft();
    assert.deepEqual(marsRover.getDirection(), Direction.W);
  });

  it('turnRight changes the rover direction clockwise', () => {
    const marsRover = new MarsRover(0, 0, Direction.N);
    marsRover.turnRight();
    assert.deepEqual(marsRover.getDirection(), Direction.E);
  });

  it('should move in one vector', () => {
    const marsRover = new MarsRover(0, 0, Direction.N);

    const firstPosition = marsRover.run(['f', 'f']);
    assert.deepEqual(firstPosition, {
      x: 0,
      y: 2,
    });

    const secondPosition = marsRover.run(['f', 'b']);
    assert.deepEqual(secondPosition, {
      x: 0,
      y: 2,
    });
  });

  it('should be able to change direction and move in other vectors', () => {
    const marsRover = new MarsRover(0, 0, Direction.N);

    const firstPosition = marsRover.run(['f', 'r  ']);
    assert.deepEqual(firstPosition, {
      x: 0,
      y: 2,
    });
  })
});
