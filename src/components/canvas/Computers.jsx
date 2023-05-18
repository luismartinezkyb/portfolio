import React, {Suspense, useEffect, useState} from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { CanvasLoader } from '..';




const Computers=({isMobile})=>{
  const computer = useGLTF('./macbook_pro_2021/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive object={computer.scene}
      scale={isMobile? 10: 30} position={isMobile? [0,-3, -2.2]:[0,-3.25, -1.5]} 
      rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputerCanvas = ()=>{
  const [isMobile, setIsMobile] = useState(false)
  
  
  useEffect(()=>{

    //Add an event listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    //we set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);
    
    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange=(e)=>{
      setIsMobile(e.matches);
    }

    //Add the callback funcion as a listener for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    //remove the Listener whe the component is unmounted
    return ()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);
  return (
    <Canvas
    frameoop='demand'
    shadows
    camera={{position:[20,3,5], fow:25}}
    gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls autoRotateSpeed={2} autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputerCanvas