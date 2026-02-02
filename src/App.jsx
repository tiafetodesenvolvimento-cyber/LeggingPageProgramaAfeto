import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SobreNexxus from './pages/SobreAfetoS'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nexxus" element={<SobreNexxus />} />
      </Routes>
    </BrowserRouter>
  )
}
