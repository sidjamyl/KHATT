"use client"

import { useState } from "react";
import Image from "next/image";
import CardFormDialog from "./CardFormDialog";

export default function HoverButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-4 2xl:gap-5">
        <button 
          onClick={() => setIsDialogOpen(true)}
          className="relative text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-transparent border-none cursor-pointer group"
        >
          <span className="block after:content-[''] after:w-0 after:h-0.5 after:bg-[#F06A2A] after:block after:transition-all after:duration-500 before:content-[''] before:w-0 before:h-0.5 before:bg-[#F06A2A] before:block before:ml-auto before:transition-all before:duration-500 group-hover:after:w-full group-hover:before:w-full">
            Get Your Card 
          </span>
        </button>

      {/* Carte de visite 3D qui tourne */}
      <div className="perspective-1000">
        <div className="relative w-48 h-28 sm:w-52 sm:h-32 md:w-56 md:h-34 lg:w-60 lg:h-36 xl:w-56 xl:h-34 2xl:w-60 2xl:h-36" style={{ perspective: '1000px' }}>
          <div 
            className="relative w-full h-full rotate-card-animation"
            style={{
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Face avant */}
            <div 
              className="absolute w-full h-full rounded-md sm:rounded-lg shadow-xl sm:shadow-2xl overflow-hidden"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              <Image
                src="/card-front.png"
                alt="Carte de visite - Recto"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Face arrière */}
            <div 
              className="absolute w-full h-full rounded-md sm:rounded-lg shadow-xl sm:shadow-2xl overflow-hidden"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <Image
                src="/card-back.png"
                alt="Carte de visite - Verso"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      </div>

      <CardFormDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}