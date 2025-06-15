'use client';

import Image from "next/image";
import MapboxUI from "./mapbox/page";
import YouTube from "react-youtube";

export default function Home() {

  const videoReady =(event) =>{
    
  }

  return (
    <div className="relative w-full h-screen text-white">
      <div className="absolute left-0 top-0 z-10 p-4">
        <div>深夜 EMO 電台</div>
        <div className="flex items-center gap-2 mt-2">
          <Image src="/girl.png" width={60} height={60} alt="girl" className="rounded-full" />
          <span>Hazel</span>
        </div>
      </div>
      <YouTube
      
      <MapboxUI className="z-0 absolute top-0 left-0 w-full h-full" />
    </div>
  );
}
