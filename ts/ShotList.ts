import { Shot } from "./Shot.ts"
import { keyboardPressing } from "./KeyboardPressing.ts"

class ShotList {
  private list: Array<Shot>

  constructor() {
    this.list = []
  }

  private add() {
    if(!keyboardPressing.has(' ')) return
    this.list.push(new Shot())
  }

  update() {
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