import { CONTEXT } from "./CONTEXT.ts"
import { tiles } from "./DecorationTileList.ts"

function paint() {
  CONTEXT.fillStyle = 'black'
  CONTEXT.fillRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  for(const tile of tiles.list) {
    tile.paint()
  }
}

function loop() {
  paint()
  requestAnimationFrame(loop)
}

loop()