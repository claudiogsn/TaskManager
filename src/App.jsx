import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import FormElements from './pages/Form/FormElements'
import FormLayout from './pages/Form/FormLayout'
import Tables from './pages/Tables'

const App = () => {
  const [loading, setLoading] = useState(true)

  const preloader = document.getElementById('preloader')

  if(preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path='/' element={<Tables />} />
          <Route path='/forms/form-elements' element={<FormElements />} />
          <Route path='/forms/form-layout/:id' element={<FormLayout />} />
          <Route path='/tables' element={<Tables />} />
        </Routes>
      </>
    )
  )
}

export default App
