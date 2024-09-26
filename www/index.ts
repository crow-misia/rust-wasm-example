import { Mandelbrot } from '@wasm/mandelbrot.js'
import * as wasm from '@wasm/mandelbrot_bg.wasm'

const drawMandelbrot = (context: CanvasRenderingContext2D) => {
  const canvas = context.canvas
  const mandelbrot = new Mandelbrot(canvas.width, canvas.height)
  mandelbrot.draw(-1.8, -1.2, 0.004, 100)

  const pixels = new Uint8ClampedArray(wasm.memory.buffer, mandelbrot.pixels(), mandelbrot.size())
  const image = new ImageData(pixels, mandelbrot.width, mandelbrot.height)
  context.putImageData(image, 0, 0)
}

const canvas = document.querySelector('canvas')
const ctx = canvas?.getContext('2d')
if (ctx) {
  drawMandelbrot(ctx)
} else {
  console.error('canvas not found')
}
