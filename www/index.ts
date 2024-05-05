import { Mandelbrot } from '../pkg'
import * as wasm from '../pkg/mandelbrot_bg.wasm'

const canvas = document.querySelector('canvas')
const mandelbrot = new Mandelbrot(canvas.width, canvas.height)
mandelbrot.draw(-1.8, -1.2, 0.004, 100)

const ctx = canvas.getContext('2d')
const pixels = new Uint8ClampedArray(wasm.memory.buffer, mandelbrot.pixels(), mandelbrot.size())
const image = new ImageData(pixels, mandelbrot.width, mandelbrot.height)
ctx.putImageData(image, 0, 0)
