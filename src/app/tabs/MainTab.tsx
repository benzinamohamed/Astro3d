import EmblaCarousel from '@/components/ui/carousel';
import SolarSystem from '@/components/ui/SolarSystem';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

function MainTab() {
    const [planet ,setPlanet] = useState<string|null>(null);

    useEffect(()=>{
   console.log(`${planet?.toLowerCase().split(".").at(0)}Ec.svg`)
    },[planet])
  return (
    <>
      {planet ? <div className='flex flex-col h-full bg-[url(/Stars.png)]'>
        <div className='flex flex-col flex-1/2 justify-center items-center   '>
        <div className='grid'>
             <Image src={planet} alt="Planet" width={140} height={140} className='col-start-1 row-start-1' />
             <Image src={`${planet.toLowerCase().split(".").at(0)}Ec.svg`} alt="Planet" width={140} height={140} className='col-start-1 row-start-1' />
         </div>
       </div>         
       <div className='flex flex-1/12 flex-col justify-center'>
       <EmblaCarousel setPlanet={setPlanet} planet={planet}></EmblaCarousel>
       </div>
      </div> :
      
      <SolarSystem setPlanet={setPlanet} /> }
    </>
  )
}

export default MainTab