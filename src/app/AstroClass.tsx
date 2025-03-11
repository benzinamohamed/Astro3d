"use client";

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three';
import { Html ,OrbitControls } from '@react-three/drei';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import SolarSystem from '@/components/ui/SolarSystem';

export function ThreeDCardDemo({ shouldMove, children }: { shouldMove: boolean, children: React.ReactNode }) {
  return (
    <CardContainer className="max-w-11/12 min-w-[97%] inter-var hover:cursor-default">
      <CardBody className={` backdrop-blur-xl relative group/card dark:hover:shadow-5xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.6] max-w-full min-w-8/12 sm:w-[30rem] max-h-9/12 rounded-xl p-6 transition-all duration-300 ${shouldMove ? 'border-6' : 'border'}`}>
        <CardItem >
          {children}
        </CardItem>
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
  const Tab3Ref = useRef();

  const [scaleTab1, setScaleTab1] = useState(false);
  const [scaleTab2, setScaleTab2] = useState(false);
  const [scaleTab3 , setScaleTab3] = useState(false);
  const [shouldMove , setShouldMove] = useState(false);
  //const {camera , } = useThree();

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth)*2 +9 ;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const handleEnterButton = (event) => {
    if (event.key === 'Enter') {
      setShouldMove(scaleTab1 || scaleTab2|| scaleTab3);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleEnterButton);
    return () => window.removeEventListener('keydown', handleEnterButton);
  }, [scaleTab1, scaleTab2 ,scaleTab3]);


  const handleEscButton = (event) => {
    if (event.key === 'Escape' && shouldMove) {
      setShouldMove(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleEscButton);
    return () => window.removeEventListener('keydown', handleEscButton);
  }, [shouldMove]);

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    cameraRef.current = camera;
    if(!shouldMove){
    camera.rotation.y = mouse.current.x * Math.PI * 0.5; 
    camera.rotation.x = mouse.current.y * Math.PI * 0; 
  }
  });

  useFrame(({camera}) => {
    if (Tab1Ref.current || Tab2Ref.current) {
       if(camera.rotation.y >14.9 && camera.rotation.y <16.3 ){
        setScaleTab1(true);
       }else {
        setScaleTab1(false);
       }   
     if(camera.rotation.y >16.4 && camera.rotation.y <18.3 ){
        setScaleTab2(true);
       }else {
        setScaleTab2(false);
       }
       if(camera.rotation.y<14.8){
        setScaleTab3(true)
       }else {
        setScaleTab3(false);
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
        className='w-screen flex justify-center'  center position={[1, 0, 200]} >
        <div  ref={Tab1Ref}  className={` w-[60%]  transition-transform duration-100 ease-out ${scaleTab1 ? 'scale-[1.5]' : 'scale-[1]'}`}>
           <ThreeDCardDemo shouldMove={shouldMove && scaleTab1} >
                                <SolarSystem></SolarSystem>
            </ThreeDCardDemo></div>
        </Html>
        <Html className='w-screen flex justify-center' center position={[750, 0, 200]}  rotation={[0, 0, Math.PI / 4]}>
         <div ref={Tab2Ref} className={`w-[60%]  transition-transform duration-100 ease-out ${scaleTab2 ? 'scale-[1.5]' : 'scale-[1]'}`} > 
          <ThreeDCardDemo shouldMove={shouldMove && scaleTab2}>
            
            </ThreeDCardDemo> </div>
        </Html>
        <Html  
         center position={[-750, 0, 200]} className='w-screen  flex justify-center'>
        <div  ref={Tab3Ref}  className={`w-[60%]  transition-transform duration-100 ease-out ${scaleTab3 ? 'scale-[1.5]' : 'scale-[1]'}`}> 
          <ThreeDCardDemo shouldMove={shouldMove && scaleTab3} >
            </ThreeDCardDemo></div>
        </Html>
      </Suspense>
    </>
  );
}

export default function Astro() {
  return (
    <div style={{ width: '100%', height: '100vh' }} className="cursor-[url('/pngegg.png%')]">
      <Canvas
        camera={{ position: [0, 1, 3], fov: 85 ,}} 
        
      >
        <Scene />
      </Canvas>
    </div>
  );
}