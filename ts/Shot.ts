import { CONTEXT } from "./CONTEXT.ts";
import { Vector } from "./Vector.ts"

export class Shot {
  private readonly points: Array<Vector>;

  constructor() {
    this.points = [
      new Vector(1, -1, 0),
      new Vector(1, -1, 10)
    ]
  }

  paint() {
    CONTEXT.strokeStyle = 'red'
    CONTEXT.lineWidth = 2
    CONTEXT.beginPath()
    const offsetX = CONTEXT.canvas.width / 2
    const offsetY = CONTEXT.canvas.height / 2
    const scale = 1000
    for(let i = 0; i < this.points.length; ++i) {
      this.points[i] = new Vector(
        this.points[i].x,
        this.points[i].y,
        this.points[i].z + 1
      )
      const v = this.points[i]
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