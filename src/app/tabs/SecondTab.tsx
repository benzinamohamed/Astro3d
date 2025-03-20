"use client";
import { CardItem } from '@/components/ui/3d-card';
import React, { useEffect } from 'react'
import useSWR from "swr";
import Image from 'next/image'

 function SecondTab() {
  const fetcher = async (url: string): Promise<any> => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  };

  const { data, error, isLoading } = useSWR("https://api.spaceflightnewsapi.net/v4/articles/?limit=4", fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;



  const features1 = data.results.map((post , index)=>({
    name: post.title ,
    description : post.summary,
    href : post.url,
    cta : "learn more",
    className : `col-span-${index+1}`,
    background :post.image_url

  }))
  


   
  
  return (
    <div className="w-full h-full grid grid-cols-5 gap-2 p-2">
    {features1.map((post, index) => (
      <a
        key={index}
        className={`bg-black/30 rounded-xl relative overflow-hidden ${
          index === 0 || index === 3 ? "col-span-3" : "col-span-2"
        } h-full flex flex-col items-center  duration-300 justify-start p-1 group hover:bg-white/30  selct-none cursor-none`}
    href={post.href}
    target="_blank"
    >
       
       <div  className='w-[98%] h-[55%] rounded-xl bg-cover group-hover:scale-125 duration-300 overflow-auto' style={{backgroundImage : `url(${post.background})`}}  ></div>
       
        <div className="flex gap-2 flex-col justify-start items-start h-[60%]">
          <h1 className="text-white font-bold z-[99999] text-balance  ">{post.name}</h1>
         <p className='text-white text-sm text-balance opacity-40   group-hover:blure-none'>{post.description}</p>
        </div>
      </a>
    ))}
  </div>
  
  
  
  )
}

export default SecondTab