import {Controllers, ARButton, XR, XRButton} from "@react-three/xr"
import { Canvas } from "@react-three/fiber"

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
        <mesh position={[0,0,-0.5]}>
            <boxBufferGeometry args={[0.3,0.3,0.3]}/>
            <meshBasicMaterial color={"#ff0000"}/>
        </mesh>
        </XR>
    </Canvas>
    </div>
  )
}

export default ARFiber