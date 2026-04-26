import { CONTEXT } from "./CONTEXT.ts"
import { tiles } from "./TileList.ts"
import { Shot } from "./Shot.ts"

let shot = new Shot()

function paint() {
  CONTEXT.fillStyle = 'black'
  CONTEXT.fillRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  tiles.paint()
  shot.paint()
}

function loop() {
  paint()
  requestAnimationFrame(loop)
}

loop()