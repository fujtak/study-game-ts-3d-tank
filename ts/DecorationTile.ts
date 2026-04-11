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
    const isLeft = keyboardPressing.has('ArrowLeft')
    const isRight = keyboardPressing.has('ArrowRight')
    for(let i = 0; i < this.points.length; ++i) {
      this.points[i] = (isLeft && isRight) ? this.points[i]
        : isLeft ? this.points[i].rotateHorizontal(1)
        : isRight ? this.points[i].rotateHorizontal(-1)
        : this.points[i]
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