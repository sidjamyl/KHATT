"use client"

export default function HoverButton() {
  return (
    <button className="relative text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-transparent border-none cursor-pointer group">
      <span className="block after:content-[''] after:w-0 after:h-0.5 after:bg-[#F06A2A] after:block after:transition-all after:duration-500 before:content-[''] before:w-0 before:h-0.5 before:bg-[#F06A2A] before:block before:ml-auto before:transition-all before:duration-500 group-hover:after:w-full group-hover:before:w-full">
        Get Your Card 
      </span>
    </button>
  );
}