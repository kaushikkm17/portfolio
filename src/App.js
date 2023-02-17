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
        position={[0, -0.3, 0.2]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        onClick={() => window.open("https://www.linkedin.com/in/kaushikdev", "_blank")}
    >
      Kaushik
        
    </Text>
    <Text
        position={[0, -0.5, 0.1]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
    >
        Full-Stack Developer
    </Text>
    <Image url="IMG_2781.jpg" transparent opacity={0.9} position={[0,0.3, 0]}/>
    </group>

    <group onScroll={handleScroll} position={[0,0,5]}>
    <points ref={points} >
        <sphereGeometry args={[1,100,100]} />
        <pointsMaterial color="#5786F5" size={0.01} sizeAttenuation />
    </points>
    <Text
        position={[0, -0.3, -0.5]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        onClick={() => window.open("https://developer.mozilla.org/en-US/HTMLAnchorElement", "_blank")}
    >
      Career Tracker
        
    </Text>
    <Text
        position={[0, -0.5, -0.5]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
    >
        Job search app built with django
    </Text>
    <Text
        position={[0, -0.7, -0.5]}
        fontSize={0.1}
        color="#bbb222"
        anchorX="center"
        anchorY="middle"
        onClick={() => window.open("https://careertracker.herokuapp.com/", "_blank")}
    >
      Click here to view
    </Text>
    <Image url="career_tracker.png" opacity={1} position={[0,0.3, -0.5]}/>
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
