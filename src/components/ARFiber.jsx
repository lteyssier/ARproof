/* eslint-disable react/no-unknown-property */
import {Controllers, ARButton, XR} from "@react-three/xr"
import { Canvas } from "@react-three/fiber"
import {Vehicle} from "./vehicle"


const ARFiber = () => {
  return (
    <div
        className="container3D"
        style={{width:'100%', height:'100vh'}}
    >
    <ARButton />
    <Canvas vr="true">
        <XR>
        <Controllers/>
        <spotLight
        position={[-80, 90, 60]}
        angle={0.20}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      
        <Vehicle  position={[0,-0.5,-2]}/>
        </XR>
    </Canvas>
    </div>
  )
}

export default ARFiber