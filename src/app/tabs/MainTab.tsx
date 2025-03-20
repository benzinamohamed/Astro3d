"use client"
import EmblaCarousel from '@/components/ui/carousel';
import SolarSystem from '@/components/ui/SolarSystem';
import React, { useState } from 'react'
import { Data } from '../constants/Constatns';
import { motion, AnimatePresence } from "framer-motion";

function MainTab() {
    const [planet, setPlanet] = useState<string | null>(null);
    
  return (
    <>
      <AnimatePresence mode="wait">
        {planet ? (
          <motion.div 
            key={'details'}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className='flex flex-col h-full bg-[url(/Stars.png)] cursor-none select-none'
          >

            <button 
              onClick={() => setPlanet(null)} 
              className='absolute p-1 left-1 top-1 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors z-10 cursor-none' 
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

         
            <div className='flex flex-row flex-1/2 justify-end items-center'>
              <div className='flex w-1/4'></div>

          
              <div className='grid w-fit relative'>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={planet} 
                    src={planet}
                    alt="Planet"
                    width={140}
                    height={140}
                    className='col-start-3 row-start-1 scale-125'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.img
                    key={`${planet}-eclipse`} 
                    src={`${planet.toLowerCase().split(".").at(0)}Ec.svg`}
                    alt="Planet Eclipse"
                    width={140}
                    height={140}
                    className='col-start-3 row-start-1 scale-125 absolute'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>

             
              <motion.div 
                key={`${planet}-text`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className='flex w-1/2 flex-col text-white p-4 md:p-8'
              >
                <h1 className='text-2xl font-semibold top-4'>
                  {Data.find(Planet => Planet.name.toLowerCase() === planet.replace(/^\/|\.png$/g, "").toLowerCase())?.name}
                </h1>
                <p className='text-balance text-sm font-thin opacity-90'>
                  {Data.find(Planet => Planet.name.toLowerCase() === planet.replace(/^\/|\.png$/g, "").toLowerCase())?.description}
                </p>
              </motion.div>
            </div>

            {/* 🔹 Carousel */}
            <div className='flex flex-1/12 flex-col justify-center'>
              <EmblaCarousel setPlanet={setPlanet} planet={planet} />
            </div>
          </motion.div> 
        ) : (
          <motion.div 
            key={'solar-system'}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className='h-full w-full'
          >  
            <SolarSystem setPlanet={setPlanet} />  
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainTab;
