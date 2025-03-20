"use client";


import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = ({planet ,setPlanet} :{planet : string ,setPlanet : React.Dispatch<React.SetStateAction<string | null>>}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });
  const slides = [
    { image: "/pluto.png", ellipse: "/plutoEc.svg" },
    { image: "/Jupiter.png", ellipse: null }, 
{ image: "/Neptune.png", ellipse: "/neptuneEc.svg" },
{ image: "/Uranus.png", ellipse: "/plutoEc.svg" },
{ image: "/Saturn.png", ellipse: "/plutoEc.svg" },
{ image: "/Mars.png", ellipse: "/marsEc.svg" },
{ image: "/Earth.png", ellipse: "/earthEc.svg" },
{ image: "/Mercury.png", ellipse: "/mercuryEc.svg" },
{ image: "/Venus.png", ellipse: "/venusEc.svg" },
{ image: "/Sun.png", ellipse: null } 
];


  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="select-none h-fit relative w-full max-w-5xl mx-auto px-4 pb-2">
      <button
        className="cursor-none absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full  hover:bg-white/30 transition-colors z-10"
        onClick={scrollPrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div 
              className="flex-[0_0_25%] min-w-0 pr-2 first:pl-0" 
              key={index}
            >
              <div onClick={()=>setPlanet(slide.image)} className={`${planet === slide.image ? 'bg-white/40 duration-150 backdrop-blur rounded-lg p-6 h-auto' : 'bg-[#26211b]/30 hover:bg-white/10 duration-150 backdrop-blur rounded-lg p-6 h-auto'}`}>
{slide.image === "/Jupiter.png" ? <div >
               <Image src={slide.image} alt={`Slide ${index}`} layout="responsive" width={1000} height={1000}  className='col-start-1 row-start-1   ' style={{transform : "scale(1.57)" }}/>
               </div> 
               :<div className='grid'>
               <Image src={slide.image} alt={`Slide ${index}`} layout="responsive" width={1000} height={1000}  className='col-start-1 row-start-1 '/>
               {slide.ellipse ? <Image src={slide.ellipse } alt={`Slide ${index}`} layout="responsive" width={1000} height={1000} className='col-start-1 row-start-1' />: null}
               </div> }
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="cursor-none absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full  hover:bg-white/30 transition-colors z-10"
        onClick={scrollNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default EmblaCarousel;

