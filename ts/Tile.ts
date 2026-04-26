import { CONTEXT } from "./CONTEXT.ts"
import { Vector } from "./Vector.ts"
import { TilePoint } from "./TilePoint.ts"

export class Tile {
  static readonly size = 10;
  private readonly y: number;
  private readonly points: Array<TilePoint>;

  constructor(x: number, z: number) {
    this.y = -5
    this.points = [
      new TilePoint(new Vector(x, this.y, z)),
      new TilePoint(new Vector(x + Tile.size, this.y, z)),
      new TilePoint(new Vector(x + Tile.size, this.y, z - Tile.size)),
      new TilePoint(new Vector(x, this.y, z - Tile.size)),
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