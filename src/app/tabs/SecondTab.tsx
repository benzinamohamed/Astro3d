"use client";
import { CardItem } from '@/components/ui/3d-card';
import React, { useEffect } from 'react'
import useSWR from "swr";


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
      <div
        key={index}
        className={`rounded-xl relative overflow-hidden ${
          index === 0 || index === 3 ? "col-span-3" : "col-span-2"
        } h-full flex items-center  duration-300 justify-start  group`}
      >
       
        <div 
          className="absolute inset-0 transition-all duration-300 bg-cover group group-hover:blur-md"
          style={{backgroundColor: "black", backgroundImage: `url('${post.background}')`}}
        ></div>
        
       
        <div className="relative z-10">
          <h1 className="text-white text-center font-bold group-hover:-translate-y-10 duration-200">{post.name}</h1>
          <div className='absolute top-28 group-hover:-translate-y-10  w-7xl h-52 duration-300'>
           <button className='rounded-xl w-[10%] h-[16%] bg-black shadow-2xl text-white'>Learn More</button>
           </div>
        </div>
      </div>
    ))}
  </div>
  
  
  
  )
}

export default SecondTab