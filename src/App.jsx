import ReactDOM from 'react-dom'
import React, { useRef, useState, Component, useEffect } from 'react'
import { Canvas, useFrame, extend, useThree} from '@react-three/fiber'
import * as THREE from 'three'
import {OrbitControls ,PerspectiveCamera, PositionalAudio, Stars } from '@react-three/drei'
import  './menu.css'
import { TextureLoader } from 'three'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

// extend({ OrbitControls })



function Torus(props) {
  const mesh = useRef()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.z += 0.07;
  })
  return (
    <mesh {...props} ref={mesh}>
      <torusGeometry  attach="geometry" args={[15, 1, 3, 21]} position={[0, 0, 0]} />
      
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
      <meshStandardMaterial  attach="material" color ={ 0xffffff}/>
    </mesh>
  )

}


function Menu(){
 

    return(

    <main>
      <div id="knowMenu">
        <div id="menu1">
        <nav className="nav__cont">
            <ul className="nav">
           
              <li className="nav__items "  >
                <p id="home"  >Home</p>
         
              </li>
              
              <li className="nav__items ">
               
                <p id="moveArround"  >Play arround</p>
              </li>
              <li className="nav__items ">
               
                <p id="reset"  > Reset </p>
                <li className="nav__items "  >
              <a href='https://joaqpareja.github.io/ReactPages/' ><p>Responsive Portfolio</p></a>
              </li>
              </li>
            </ul>
          </nav>
        </div>     
        </div>
      </main>

   )
    
    //
    
  }


function App() {
 const [setCamera] = useState({fov: 60, position: [0, 0, 45] })

ReactDOM.render(
  <>
  <Canvas style={{position:'fixed'}} camera={setCamera} >
  <OrbitControls  target={[0, 0, 0]} saveState={true} minDistance={-150}
   maxDistance={150}/>
  
  
    <ambientLight color={0xffffff} intensity={1}/>
    <pointLight position={[2, 2, 2]}color={0xffffff} />
    <group>
      <mesh

      >
    <Torus  
    />
    </mesh>
    {/* onMouseOut={Wheelus of the inner sphere (default=100)
      depth={50} // Depth s} */}
    <Stars
      radius={100} // Radiof area where stars should fit (default=50)
      count={4000} // Amount of stars (default=5000)
      factor={5} // Size factor (default=4)
      saturation={0} // Saturation 0-1 (default=0)
      fade onWheel={-10}// Faded dots (default=false)/>
     />

    </group>
  {/* <Controls/> */}

  </Canvas>
  <Menu/>
  </>,

  document.getElementById('root'),
)
}
export default App; 
