import { Mandelbrot as MandelbrotWasm } from '@wasm/mandelbrot.js'
import * as wasm from '@wasm/mandelbrot_bg.wasm'
import { useLayoutEffect, useRef } from 'react'

type Props = {
  width: number
  height: number
}

const drawMandelbrot = (context: CanvasRenderingContext2D) => {
  const canvas = context.canvas
  const mandelbrot = new MandelbrotWasm(canvas.width, canvas.height)
  mandelbrot.draw(-1.8, -1.2, 0.004, 100)

  const pixels = new Uint8ClampedArray(wasm.memory.buffer, mandelbrot.pixels(), mandelbrot.size())
  const image = new ImageData(pixels, mandelbrot.width, mandelbrot.height)
  context.putImageData(image, 0, 0)
}

const Mandelbrot = ({ width, height }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const ctx = ref.current?.getContext('2d')
    if (ctx) {
      drawMandelbrot(ctx)
    }
  }, [])

  return <canvas ref={ref} width={width} height={height} />
}

export default Mandelbrot
