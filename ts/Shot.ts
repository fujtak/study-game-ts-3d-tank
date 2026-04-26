import { CONTEXT } from "./CONTEXT.ts";
import { Vector } from "./Vector.ts"

export class Shot {
  readonly z: number;
  private readonly points: Array<Vector>;

  constructor(z: number = 0) {
    this.z = z
    this.points = [
      new Vector(1, -1, this.z),
      new Vector(1, -1, this.z + 10)
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

  update() {
    return new Shot(this.z + 1)
  }
}