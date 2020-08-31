mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct Mandelbrot {
    pixels: Vec<u8>,
    #[wasm_bindgen(readonly)]
    pub width: u32,
    #[wasm_bindgen(readonly)]
    pub height: u32,
}


fn create_buffer(width: u32, height: u32) -> Vec<u8> {
    let size = (width * height << 2) as usize;
    let mut bytes = Vec::with_capacity(size);
    bytes.resize(size, 0);
    bytes
}

#[wasm_bindgen]
impl Mandelbrot {
    #[wasm_bindgen(constructor)]
    pub fn new(width: u32, height: u32) -> Self {
        Mandelbrot {
            pixels: create_buffer(width, height),
            width,
            height,
        }
    }

    pub fn draw(&mut self, x0: f64, y0: f64, d: f64, limit: u32) {
        let mut offset: usize = 0;
        let mut y = y0;
        for _sx in 0..self.width {
            let mut x = x0;
            for _sy in 0..self.height {
                let k = repeat(x, y, limit);
                let v = (k * 255 / limit) as u8;

                self.pixels[offset] = v;
                self.pixels[offset + 1] = v;
                self.pixels[offset + 2] = v;
                self.pixels[offset + 3] = 255;
                x += d;
                offset += 4;
            }
            y += d;
        }
    }

    pub fn size(&self) -> usize {
        self.pixels.len()
    }

    pub fn pixels(&self) -> *const u8 {
        self.pixels.as_ptr()
    }
}

fn repeat(x: f64, y: f64, limit: u32) -> u32 {
    let mut real = 0.;
    let mut imaginary = 0.;

    for i in 0..limit {
        let x = real * real - imaginary * imaginary + x;
        let y = 2. * real * imaginary + y;

        if x * x + y * y >= 4. {
            return i;
        }

        real = x;
        imaginary = y;
    }

    limit
}