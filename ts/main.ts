import { CONTEXT } from "./CONTEXT.ts"
import { tiles } from "./TileList.ts"
import { shots } from "./ShotList.ts"

function update() {
  shots.update()
}

function paint() {
  CONTEXT.fillStyle = 'black'
  CONTEXT.fillRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  tiles.paint()
  shots.paint()
}

function loop() {
  update()
  paint()
  requestAnimationFrame(loop)
}

loop()