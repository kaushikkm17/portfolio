import { OrbitControls, Text, Image } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { group } from "three";
import './App.css'

const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef();
  const [yPosition, setYPosition] = useState(0);

  const handleScroll = (event) => {
    setYPosition(event.target.scrollTop * 0.01); // adjust the factor to control the speed of the movement
  };

  return (
    <>
    <group onScroll={handleScroll}>
    <points ref={points}>
        <sphereGeometry args={[1,100,100]}/>
        <pointsMaterial color="#5786F5" size={0.01} sizeAttenuation />
    </points>
    <Text
        position={[0, 0, 0]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        onClick={() => window.open("https://developer.mozilla.org/en-US/HTMLAnchorElement", "_blank")}
    >
      Kaushik
        
    </Text>
    <Text
        position={[0, -0.1, 0]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
    >
        Full-Stack Developer
    </Text>
    <Image url="https://res.cloudinary.com/dtpgi0zck/image/upload/s--fMAvJ-9u--/c_fit,h_580,w_860/v1/EducationHub/photos/sun-blasts-a-m66-flare.jpg" transparent opacity={0.5} />
    </group>

    <group onScroll={handleScroll} position={[0,0,10]}>
    <points ref={points}>
        <sphereGeometry args={[1,100,100]} />
        <pointsMaterial color="#5786F5" size={0.01} sizeAttenuation />
    </points>
    <Text
        position={[0, 0, 0]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        onClick={() => window.open("https://developer.mozilla.org/en-US/HTMLAnchorElement", "_blank")}
    >
      Kaushik 2
        
    </Text>
    <Text
        position={[0, -0.1, 0]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
    >
        Full-Stack Developer
    </Text>
    <Image url="https://res.cloudinary.com/dtpgi0zck/image/upload/s--fMAvJ-9u--/c_fit,h_580,w_860/v1/EducationHub/photos/sun-blasts-a-m66-flare.jpg" transparent opacity={0.5} />
    </group>
    </>
  );
};

const Scene = () => {
  return (

    <Canvas camera={{ position: [1,1,1] }} style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <BasicParticles />
      <OrbitControls enableZoom={true} enableDamping={true} zoomSpeed={0.1}/>
    </Canvas>

  );
};


export default Scene
