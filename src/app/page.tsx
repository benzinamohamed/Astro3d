"use client";

import React from "react";
import Astro from "@/app/AstroClass";
import {isMobile} from 'react-device-detect';

export default function Home() {
  return (
    <div className="flex">
   {isMobile? (<div className="flex flex-1 justify-center items-center text-white m-12 "> ⚠️ Mobile Support Unavailable ⚠️

<br/>This website is not optimized for mobile devices. Please visit from a desktop or laptop for the best experience.

 </div>) :(<Astro>
   </Astro>)}
   </div>
  );
}


