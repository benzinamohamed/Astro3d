"use client";

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var  hover:cursor-default">
      <CardBody className="  backdrop-blur-xl  relative group/card  dark:hover:shadow-5xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

function Model() {
  const gltf = useLoader(GLTFLoader, '/anime_class_room.glb');
  
  
  return (
    <primitive 
      object={gltf.scene} 
      scale={[1, 1, 1]}
      position={[1, -1, -3]}
    />
  );
}

function Scene() {
  const cameraRef = useRef();
  const mouse = useRef({ x: 11, y: 0});
  const Tab1Ref = useRef();
  const Tab2Ref = useRef();
  const [scaleTab1, setScaleTab1] = useState(1);
  const [scaleTab2, setScaleTab2] = useState(1);
  const [shouldMove , setShouldMove] = useState(true);
  //const {camera , } = useThree();
  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth)*2 +9 ;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    cameraRef.current = camera;
    if(shouldMove){
    camera.rotation.y = mouse.current.x * Math.PI * 0.5; 
    camera.rotation.x = mouse.current.y * Math.PI * 0; 
  }

  });

  useFrame(({camera}) => {
    if (Tab1Ref.current || Tab2Ref.current) {
       if(camera.rotation.y >14.9 && camera.rotation.y <16.3 ){
        setScaleTab1(1.5)
       }else {
        setScaleTab1(1)
       }   
     if(camera.rotation.y >16.4 && camera.rotation.y <18.3 ){
        setScaleTab2(1.5)
       }else {
        setScaleTab2(1)
       } 
         
     
    }
  });

  

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={<Html><div>Loading...</div></Html>}>
        <Model />
        <Html  
          center position={[1, 0, 200]} className=''>
        <div onMouseEnter={()=>setShouldMove(false)} onMouseLeave={()=>setShouldMove(true)} ref={Tab1Ref}  style={{
          transform: `scale(${scaleTab1})`,
          transition: "transform 0.1s ease-out",
        }}> <ThreeDCardDemo ></ThreeDCardDemo></div>
        </Html>
        <Html  center position={[400, 0, 200]}  rotation={[0, 0, Math.PI / 4]}>
         <div ref={Tab2Ref}  style={{ transform: `scale(${scaleTab2})`,
          transition: "transform 0.1s ease-out", }} > <ThreeDCardDemo /> </div>
        </Html>
      </Suspense>
    </>
  );
}

export default function Astro() {
  return (
    <div style={{ width: '100%', height: '100vh' }} className='cursor-none'>
      <Canvas
        camera={{ position: [0, 1, 3], fov: 85 ,}} 
        
      >
        <Scene />
      </Canvas>
    </div>
  );
}