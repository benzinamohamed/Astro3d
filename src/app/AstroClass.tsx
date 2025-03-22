"use client";

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html  } from '@react-three/drei';
import MainTab from './tabs/MainTab';
import { Pointer } from "@/components/magicui/pointer";
import WebIntro from '../components/ui/WebIntro';
import SecondTab from './tabs/SecondTab';
import ClassRoom from './Models/CLass3d';
import ThreeDCardDemo from '@/components/ui/Tab';
import ThirdTab from './tabs/ThirdTab';






function Scene() {
  const mouse = useRef({ x: 10, y: 0});
  const Tab1Ref = useRef(null);
  const Tab2Ref = useRef(null);
  const Tab3Ref = useRef(null);

  const [scaleTab1, setScaleTab1] = useState(false);
  const [scaleTab2, setScaleTab2] = useState(false);
  const [scaleTab3 , setScaleTab3] = useState(false);
  const [shouldMove , setShouldMove] = useState(false);


  const handleMouseMove = (event: MouseEvent) => {
    mouse.current.x = (event.clientX / window.innerWidth)*2 +9 ;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const handleEnterButton = (event : KeyboardEvent) => {
    if (event.key === 'Enter') {
      setShouldMove(scaleTab1 || scaleTab2|| scaleTab3);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleEnterButton);
    return () => window.removeEventListener('keydown', handleEnterButton);
  }, [scaleTab1, scaleTab2 ,scaleTab3]);


  const handleEscButton = (event: KeyboardEvent) => {
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
    if(!shouldMove){
    camera.rotation.y = mouse.current.x * Math.PI * 0.5; 
    camera.rotation.x = mouse.current.y * Math.PI * 0; 
  }
  });

  useFrame(({camera}) => {
    if (Tab1Ref.current || Tab2Ref.current || Tab3Ref.current) {
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
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={<Html ><div>Loading...</div></Html>}>
        <ClassRoom />
        <Html  className='w-screen flex justify-center  pointer-events-none '  center position={[1, 0, 200]}  >
        <div ref={Tab1Ref}  className={`pointer-events-none  w-[60%] transition-transform duration-100 ease-out ${scaleTab1 ? 'scale-[1.5]' : 'scale-[1]'}`}>
          
           <ThreeDCardDemo shouldMove={shouldMove && scaleTab1} >
            <MainTab/>
            </ThreeDCardDemo></div>
        </Html>
        <Html  className='w-screen flex justify-center' center position={[750, 0, 200]}  rotation={[0, 0, Math.PI / 4]}>
         <div ref={Tab2Ref} className={`w-[60%]  transition-transform duration-100 ease-out ${scaleTab2 ? 'scale-[1.5]' : 'scale-[1]'}`} > 
          <ThreeDCardDemo shouldMove={shouldMove && scaleTab2}>
            <SecondTab/>
            </ThreeDCardDemo> </div>
        </Html>
        <Html  
         center position={[-750, 0, 200]} className='w-screen  flex justify-center'>
     
        <div ref={Tab3Ref} className={`w-[60%] transition-transform duration-100 ease-out ${scaleTab3 ? 'scale-[1.5]' : 'scale-[1]'}`}> 
          <ThreeDCardDemo shouldMove={shouldMove && scaleTab3}>
            <ThirdTab/>
          </ThreeDCardDemo>
        </div> 
      _
        </Html>
      
      </Suspense>
    </>
  );
}

export default function Astro() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div style={{ width: '100%', height: '100vh' }} >
                <Pointer>
              <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" className="fill-gray-400" />
                    <circle cx="12" cy="12" r="5" className="fill-white" />
              </svg>
                </Pointer>
                {showIntro ? (
        <WebIntro onFinish={() => setShowIntro(false)} />
      ) :(

      <Canvas
        camera={{ position: [0, 1, 3], fov: 85 ,}} >
        <Scene />
      </Canvas>
      )}
    </div>
  );
}