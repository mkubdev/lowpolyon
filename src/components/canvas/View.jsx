'use client'

import { Three } from '@/helpers/components/Three'
import { Environment, OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Suspense, forwardRef, useImperativeHandle, useRef } from 'react'

// Common is the ambient light and camera
export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color='blue' />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
    <Environment preset="city" />
  </Suspense>
)

// SceneAndCamera is the ambient light and camera
export const SceneAndCamera = ({ color }) => (
	<Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
		<Environment preset='city' />
    <ambientLight intensity={0.3} />
  </Suspense>
)

// View is the canvas
const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
