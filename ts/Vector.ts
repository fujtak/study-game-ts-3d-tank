import { Matrix } from "./Matrix.ts";

export class Vector {
  readonly x: number;
  readonly y: number;
  readonly z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  rotateHorizontal(degree: number) {
    const m = Matrix.forRotateHorizontal(degree)
    const x = m[0] * this.x + m[1] * this.y + m[2] * this.z
    const y = m[3] * this.x + m[4] * this.y + m[5] * this.z
    const z = m[6] * this.x + m[7] * this.y + m[8] * this.z
    return new Vector(x, y, z)
  }
}