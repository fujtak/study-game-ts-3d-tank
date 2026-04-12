import { CONTEXT } from "./CONTEXT.ts"
import { Vector } from "./Vector.ts"
import { DecorationTilePoint } from "./DecorationTilePoint.ts"

export class DecorationTile {
  static readonly size = 10;
  private readonly y: number;
  private readonly points: Array<DecorationTilePoint>;

  constructor(x: number, z: number) {
    this.y = -5
    this.points = [
      new DecorationTilePoint(new Vector(x, this.y, z)),
      new DecorationTilePoint(new Vector(x + DecorationTile.size, this.y, z)),
      new DecorationTilePoint(new Vector(x + DecorationTile.size, this.y, z - DecorationTile.size)),
      new DecorationTilePoint(new Vector(x, this.y, z - DecorationTile.size)),
    ]
  }

  paint() {
    CONTEXT.strokeStyle = 'white'
    CONTEXT.beginPath()
    const offsetX = CONTEXT.canvas.width / 2
    const offsetY = CONTEXT.canvas.height / 2
    const scale = 1000
    for(let i = 0; i < this.points.length; ++i) {
      this.points[i] = this.points[i].update()
      const v = this.points[i].v
      if(v.z < 0) {
        continue
      }
      const x = (v.x * scale / v.z) + offsetX
      const y = -(v.y * scale / v.z) + offsetY
      if(i === 0) {
        CONTEXT.moveTo(x, y)
        continue
      }
      CONTEXT.lineTo(x, y)
    }
    CONTEXT.stroke()
  }
}