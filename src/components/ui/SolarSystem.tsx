"use client";

import React from 'react'
import Image from 'next/image';
import {CardItem } from "@/components/ui/3d-card";



function SolarSystem({ setPlanet }: { setPlanet: React.Dispatch<React.SetStateAction<string|null>> }) {
    return (
    <div className ="p-4 w-auto  bg-[url('/Stars.png')] bg-cover  h-full flex flex-col justify-between items-center "  >
    <CardItem className= 'mt-2'>
     <h1 className = "text-white font-bold text-3xl">Solar System</h1>
     </CardItem>
     <div className="h-[85%] w-full flex items-end bg-[url('/Orbits.svg')] bg-center bg-cover relative">
    <CardItem onClick={()=>setPlanet("/pluto.png")} className="flex items-center hover:contrast-200 cursor-pointer h-8 w-8  absolute top-[3.7%] left-[54%] lg:top-[3.7%] lg:left-[50%] ">
       <Image  src={"/pluto.png"} width={10000} height={10000} quality={100} alt="pluto" className="h-8 w-8 absolute top-[3.7%] left-[50%]" />
       <Image src={"/plutoEc.svg"} width={10000} height={10000} quality={100} alt="pluto" className="h-8 w-8 absolute top-[3.7%] left-[50%]" />
    </CardItem>
    <CardItem onClick={()=>setPlanet("/Neputune.png")} className=" flex items-center hover:contrast-200 cursor-pointer h-10 w-10 absolute top-[13%] left-[29%] md:top-[13%] md:left-[39%]">
       <Image  src={"/Neptune.png"} width={10000} height={10000} quality={100} alt="pluto" className="h-10 w-10 absolute top-[3.7%] left-[50%]" />
       <Image src={"/neptuneEc.svg"} width={10000} height={10000} quality={100} alt="pluto" className="h-10 w-10 absolute top-[3.7%] left-[50%]" />
    </CardItem>
    <CardItem onClick={()=>setPlanet("/Uranus.png")} className="flex items-center hover:contrast-200 cursor-pointer h-8 w-8 absolute md:top-[25%] left-[60%] top-[29%] md:left-[53%]">
       <Image  src={"/Uranus.png"} width={10000} height={10000} quality={100} alt="pluto" className=" absolute top-[3.7%] left-[50%]" />
       <Image src={"/plutoEc.svg"} width={10000} height={10000} quality={100} alt="pluto" className="h-8 w-8 absolute top-[3.7%] left-[50%]" />
    </CardItem>
    <CardItem onClick={()=>setPlanet("/Saturn.png")} className="flex items-center hover:contrast-200 cursor-pointer h-10 w-10 absolute md:top-[38%] md:left-[58%] left-[68%] top-[42%]">
       <Image  src={"/Saturn.png"} width={10000} height={10000} quality={100} alt="pluto" className=" absolute top-[3.7%] left-[50%]" />
       <Image src={"/plutoEc.svg"} width={10000} height={10000} quality={100} alt="pluto" className=" absolute top-[3.7%] left-[50%]" />
    </CardItem>
    <CardItem onClick={()=>setPlanet("/Jupiter.png")} className="flex items-center hover:contrast-200 cursor-pointer h-16 w-16 absolute md:top-[42%] top-[42%]  left-[9%] md:left-[30%]">
       <Image  src={"/Jupiter.png"} width={10000} height={10000} quality={100} alt="pluto" className=" absolute top-[3.7%] left-[50%]" />
    </CardItem>
    <CardItem onClick={()=>setPlanet("/Mars.png")} className="flex items-center hover:contrast-200 cursor-pointer h-8 w-8 absolute top-[56%] left-[50%]">
       <Image  src={"/Mars.png"} width={10000} height={10000} quality={100} alt="pluto" className=" absolute top-[3.7%] left-[50%]" />
       <Image src={"/marsEc.svg"} width={10000} height={10000} quality={100} alt="pluto" className="h-8 w-8 absolute top-[3.7%] left-[50%]" />
    </CardItem>
    <CardItem onClick={()=>setPlanet("/Earth.png")} className="flex items-center hover:contrast-200 cursor-pointer h-8 w-8 absolute top-[70%] left-[55%]  " >
       <Image  src={"/Earth.png"} width={10000} height={10000} quality={100} alt="pluto" className="absolute top-[3.7%] left-[50%] " />
       <Image src={"/earthEc.svg"} width={10000} height={10000} quality={100} alt="pluto" className="h-8 w-8 absolute top-[3.7%] left-[50%]" />
    </CardItem>
    <CardItem onClick={()=>setPlanet("/Mercury.png")} className="flex items-center hover:contrast-200 cursor-pointer h-8 w-8 absolute top-[77.5%] left-[50%]  " >
       <Image  src={"/Mercury.png"} width={10000} height={10000} quality={100} alt="pluto" className="absolute  " />
       <Image src={"/mercuryEc.svg"} width={10000} height={10000} quality={100} alt="pluto" className="absolute " />
    </CardItem>
    <CardItem onClick={()=>setPlanet("/Venus.png")} className="flex items-center hover:contrast-200 cursor-pointer h-4 w-6 absolute md:top-[93%] md:left-[36%] xl:left-[40%] left-[34%] top-[90%]   " >
       <Image  src={"/Venus.png"} width={10000} height={10000} quality={100} alt="pluto" className="absolute  " />
       <Image src={"/venusEc.svg"} width={10000} height={10000} quality={100} alt="pluto" className="h-8 w-8 absolute " />
    </CardItem>
    <CardItem onClick={()=>setPlanet("/Sun.png")} className="flex items-center hover:contrast-200 cursor-pointer h-8 md:w-38 w-24 absolute top-[106%] md:left-[31.7%] lg:left-[33%] xl:left-[38%]  md:top-[113%]   left-[36%] " >
       <Image  src={"/Sun.png"} width={10000} height={10000} quality={100} alt="pluto" className="absolute " />
    </CardItem>
    </div>
    </div>
    );
}

export default SolarSystem




