import React from 'react'
import ImageApp from './components/ImageApp'
import CounterApp from './components/CounterApp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/counterapp" element={<CounterApp />} />
          <Route path="/imageapp" element={<ImageApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App