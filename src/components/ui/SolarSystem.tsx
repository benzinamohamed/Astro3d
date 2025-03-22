"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CardItem } from "@/components/ui/3d-card";

const MotionImage = motion(Image);

function SolarSystem({ setPlanet }: { setPlanet: React.Dispatch<React.SetStateAction<string|null>> }) {
    return (
    <div className="cursor-none p-4 w-auto bg-[url('/Stars.png')] bg-cover h-full flex flex-col justify-between items-center">
      <CardItem className="mt-2">
        <h1 className="text-white font-bold text-3xl">Solar System</h1>
      </CardItem>
      <div className="h-[85%] w-full flex items-end bg-[url('/Orbits.svg')] bg-center bg-cover relative">
        <CardItem onClick={()=>setPlanet("/pluto.png")} className="flex items-center hover:contrast-200  h-8 w-8 absolute top-[3.7%] left-[54%] lg:top-[3.7%] lg:left-[50%]">
          <MotionImage
            src={"/Pluto.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="pluto"
            className="h-8 w-8 absolute top-[3.7%] left-[50%]"
            initial={{ rotate: 30 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <Image src={"/plutoEc.svg"} width={10000} height={10000} quality={100} alt="pluto" className="h-8 w-8 absolute top-[3.7%] left-[50%]" />
        </CardItem>
        <CardItem onClick={()=>setPlanet("/Neptune.png")} className="flex items-center hover:contrast-200  h-10 w-10 absolute top-[13%] left-[29%] md:top-[13%] md:left-[39%]">
          <MotionImage
            src={"/Neptune.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="neptune"
            className="h-10 w-10 absolute top-[3.7%] left-[50%]"
            initial={{ rotate: 35 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <Image src={"/neptuneEc.svg"} width={10000} height={10000} quality={100} alt="neptune" className="h-10 w-10 absolute top-[3.7%] left-[50%]" />
        </CardItem>
        <CardItem onClick={()=>setPlanet("/Uranus.png")} className="flex items-center hover:contrast-200  h-8 w-8 absolute md:top-[25%] left-[60%] top-[29%] md:left-[53%]">
          <MotionImage
            src={"/Uranus.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="uranus"
            className="absolute top-[3.7%] left-[50%]"
            initial={{ rotate: 30 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <Image src={"/plutoEc.svg"} width={10000} height={10000} quality={100} alt="uranus" className="h-8 w-8 absolute top-[3.7%] left-[50%]" />
        </CardItem>
        <CardItem onClick={()=>setPlanet("/Saturn.png")} className="flex items-center hover:contrast-200  h-10 w-10 absolute md:top-[38%] md:left-[58%] left-[68%] top-[42%]">
          <MotionImage
            src={"/Saturn.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="saturn"
            className="absolute top-[3.7%] left-[50%]"
            initial={{ rotate: 30 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.7, ease: "easeOut" }}
          />
          <Image src={"/plutoEc.svg"} width={10000} height={10000} quality={100} alt="saturn" className="absolute top-[3.7%] left-[50%]" />
        </CardItem>
        <CardItem onClick={()=>setPlanet("/Jupiter.png")} className="flex items-center hover:contrast-200  h-16 w-16 absolute md:top-[42%] top-[42%] left-[9%] md:left-[30%]">
          <MotionImage
            src={"/Jupiter.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="jupiter"
            className="absolute top-[3.7%] left-[50%]"
            initial={{ rotate:30 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.9, ease: "easeOut" }}
          />
        </CardItem>
        <CardItem onClick={()=>setPlanet("/Mars.png")} className="flex items-center hover:contrast-200  h-8 w-8 absolute top-[56%] left-[50%]">
          <MotionImage
            src={"/Mars.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="mars"
            className="absolute top-[3.7%] left-[50%]"
            initial={{ rotate: 30 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <Image src={"/marsEc.svg"} width={10000} height={10000} quality={100} alt="mars" className="h-8 w-8 absolute top-[3.7%] left-[50%]" />
        </CardItem>
        <CardItem onClick={()=>setPlanet("/Earth.png")} className="flex items-center hover:contrast-200  h-8 w-8 absolute top-[70%] left-[55%]">
          <MotionImage
            src={"/Earth.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="earth"
            className="absolute top-[3.7%] left-[50%]"
            initial={{ rotate: 30 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
          <Image src={"/earthEc.svg"} width={10000} height={10000} quality={100} alt="earth" className="h-8 w-8 absolute top-[3.7%] left-[50%]" />
        </CardItem>
        <CardItem onClick={()=>setPlanet("/Mercury.png")} className="flex items-center hover:contrast-200  h-8 w-8 absolute top-[77.5%] left-[50%]">
          <MotionImage
            src={"/Mercury.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="mercury"
            className="absolute"
            initial={{ rotate: -30 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          />
          <Image src={"/mercuryEc.svg"} width={10000} height={10000} quality={100} alt="mercury" className="absolute" />
        </CardItem>
        <CardItem onClick={()=>setPlanet("/Venus.png")} className="flex items-center hover:contrast-200  h-4 w-6 absolute md:top-[93%] md:left-[36%] xl:left-[40%] left-[34%] top-[90%]">
          <MotionImage
            src={"/Venus.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="venus"
            className="absolute"
            initial={{ rotate: 30 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          <Image src={"/venusEc.svg"} width={10000} height={10000} quality={100} alt="venus" className="h-8 w-8 absolute" />
        </CardItem>
        <CardItem onClick={()=>setPlanet("/Sun.png")} className="flex items-center hover:contrast-200  h-8 md:w-38 w-24 absolute top-[106%] md:left-[31.7%] lg:left-[33%] xl:left-[38%] md:top-[113%] left-[36%]">
          <MotionImage
            src={"/Sun.png"}
            width={10000}
            height={10000}
            quality={100}
            alt="sun"
            className="absolute"
            initial={{ rotate: -30, scale: 0.95 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </CardItem>
      </div>
    </div>
    );
}

export default SolarSystem