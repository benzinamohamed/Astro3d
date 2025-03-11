"use client";

import React from 'react'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Image from 'next/image';
import {CardItem } from "@/components/ui/3d-card";

function SolarSystem() {
    return (
    <div className ="w-auto  bg-[url('/Stars.png')] bg-cover h-full flex flex-col justify-between items-center"  >
    <CardItem className= 'mt-4'>
     <h1 className = "text-white font-bold text-2xl">Solar System</h1>
     </CardItem>
    <CardItem className="h-[85%] w-full flex items-end bg-[url('/Orbits.svg')] bg-center bg-cover relative">
       <Image src={"/Pluto.png"} width={10000} height={10000} quality={100} alt="pluto" className="h-6 w-6 absolute top-[3.7%] left-[50%]" />
       <Image src={"/Ellipse.svg"} width={10000} height={10000} quality={100} alt="pluto" className="h-6 w-6 absolute right-82 top-1" />
    </CardItem>
    </div>
    );
}

export default SolarSystem