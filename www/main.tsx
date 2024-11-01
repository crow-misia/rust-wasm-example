import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Mandelbrot from './mandlbrot'

// Render the app
const rootElement = document.getElementById('root')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Mandelbrot width={600} height={600} />
    </StrictMode>,
  )
}
