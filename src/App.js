import React from 'react'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Brand from './components/Brand'
import WhatGPT3 from './components/WhatGPT3'
import Possibility from './components/Possibility'
import CTA from './components/Cta'

export default function App() {
  return (
    <div>

      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      
    </div>
  )
}