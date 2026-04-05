import { CONTEXT } from "./CONTEXT.ts"

function paint() {
  CONTEXT.fillStyle = 'black'
  CONTEXT.fillRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
}

function loop() {
  paint()
  requestAnimationFrame(loop)
}

loop()