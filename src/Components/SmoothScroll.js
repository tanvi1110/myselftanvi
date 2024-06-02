'use client'

import { ReactLenis } from 'lenis/react'

function SmoothScroll({children}) {
  
  return (
    <ReactLenis root options={{
        lerp: 0.05,
        scrollTouch: true,
        duration: 1.5,
    }}>
      { children }
    </ReactLenis>
  )
}

export default SmoothScroll