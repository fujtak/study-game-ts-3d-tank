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
    if(this.frame % interval > 0) return
    this.list.push(new Shot())
  }

  update() {
    this.frame++
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