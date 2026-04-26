import { DecorationTile } from "./DecorationTile.ts"

class DecorationTileList {
  private list: Array<DecorationTile>;

  constructor() {
    this.list = []
  }

  initialize() {
    for(let x = -200; x < 200; x += DecorationTile.size) {
      for(let z = -200; z < 200; z += DecorationTile.size) {
        const tile = new DecorationTile(x, z)
        this.list.push(tile)
      }
    }
  }

  paint() {
    for(const tile of this.list) {
      tile.paint()
    }
  }
}

const tiles = new DecorationTileList()
tiles.initialize()

export { tiles }