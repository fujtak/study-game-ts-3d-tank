import { CONTEXT } from "./CONTEXT.ts"
import { Vector } from "./Vector.ts"
import { keyboardPressing } from "./KeyboardPressing.ts"

export class DecorationTile {
  static readonly size = 10;
  private readonly y: number;
  private readonly points: Array<Vector>;
  constructor(x: number, z: number) {
    this.y = -5
    this.points = [
      new Vector(x, this.y, z),
      new Vector(x + DecorationTile.size, this.y, z),
      new Vector(x + DecorationTile.size, this.y, z - DecorationTile.size),
      new Vector(x, this.y, z - DecorationTile.size),
    ]
  }
  paint() {
    CONTEXT.strokeStyle = 'white'
    CONTEXT.beginPath()
    const offsetX = CONTEXT.canvas.width / 2
    const offsetY = CONTEXT.canvas.height / 2
    const scale = 1000
    const speed = 0.5
    const isLeft = keyboardPressing.has('ArrowLeft')
    const isRight = keyboardPressing.has('ArrowRight')
    const isUp = keyboardPressing.has('ArrowUp')
    const isDown = keyboardPressing.has('ArrowDown')
    for(let i = 0; i < this.points.length; ++i) {
      const rotated = (isLeft && isRight) ? this.points[i]
        : isLeft ? this.points[i].rotateHorizontal(1)
        : isRight ? this.points[i].rotateHorizontal(-1)
        : this.points[i]
      const moved = (isUp && isDown) ? rotated
        : isUp ? rotated.add(0, 0, -speed)
        : isDown ? rotated.add(0, 0, speed)
        : rotated
      this.points[i] = moved
      if(this.points[i].z < 0) continue
      const x = (this.points[i].x * scale / this.points[i].z) + offsetX
      const y = -(this.points[i].y * scale / this.points[i].z) + offsetY
      if(i === 0) {
        CONTEXT.moveTo(x, y)
        continue
      }
      CONTEXT.lineTo(x, y)
    }
    CONTEXT.stroke()
  }
}