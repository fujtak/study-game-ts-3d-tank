import { Shot } from "./Shot.ts"
import { keyboardPressing } from "./KeyboardPressing.ts"

class ShotList {
  private list: Array<Shot>

  constructor() {
    this.list = []
  }

  private add() {
    if(!keyboardPressing.has(' ')) return
    const shot = new Shot()
    this.list.push(shot)
  }

  update() {
    this.add()
  }

  paint() {
    for(const shot of this.list) {
      shot.paint()
    }
  }
}

export const shots = new ShotList()