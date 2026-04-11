import { CONTEXT } from "./CONTEXT.ts"
import { Vector } from "./Vector.ts"

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
    for(let i = 0; i < this.points.length; ++i) {
      this.points[i] = this.points[i].rotateHorizontal(0.05)
      const yOrigin = -(this.points[i].y * scale / this.points[i].z)
      if(yOrigin < 0) continue
      const y = yOrigin + offsetY
      const x = (this.points[i].x * scale / this.points[i].z) + offsetX
      if(i === 0) {
        CONTEXT.moveTo(x, y)
        continue
      }
      CONTEXT.lineTo(x, y)
    }
    CONTEXT.stroke()
  }
}