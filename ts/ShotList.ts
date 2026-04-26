import { Shot } from "./Shot.ts"
import { keyboardPressing } from "./KeyboardPressing.ts"

class ShotList {
  private frame: number
  private list: Array<Shot>

  constructor() {
    this.frame = 0
    this.list = []
  }

  private add() {
    const spacekey = ' '
    if(!keyboardPressing.has(spacekey)) return
    const interval = 32
    if(interval > this.frame) return 
    this.list.push(new Shot())
    this.frame = 0
  }

  private delete() {
    for(let i = 0; i < this.list.length; ++i) {
      const isFar = this.list[i].z > 1000
      if(!isFar) continue
      this.list.splice(i, 1)
    }
  }

  update() {
    this.frame++
    this.delete()
    for(let i = 0; i < this.list.length; ++i) {
      this.list[i] = this.list[i].update()
    }
    this.add()
  }

  paint() {
    for(const shot of this.list) {
      shot.paint()
    }
  }
}

export const shots = new ShotList()