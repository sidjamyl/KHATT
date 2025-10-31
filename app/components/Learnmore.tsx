"use client"

export default function Learnmore() {
  return (
    <button className="relative inline-block cursor-pointer outline-none border-0 align-middle no-underline bg-transparent p-0 text-inherit font-inherit w-48 h-auto group">
      <span className="relative block m-0 w-12 h-12 bg-[#141516] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full" aria-hidden="true">
        <span className="absolute top-0 bottom-0 left-2.5 w-[1.125rem] h-0.5 my-auto transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] bg-transparent group-hover:bg-white group-hover:translate-x-4 before:absolute before:content-[''] before:top-[-0.29rem] before:right-[0.0625rem] before:w-2.5 before:h-2.5 before:border-t-2 before:border-r-2 before:border-white before:rotate-45" />
      </span>
      <span className="absolute top-0 left-0 right-0 bottom-0 py-3 ml-[1.85rem] text-[#141516] font-bold leading-[1.6] text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
        Learn More
      </span>
    </button>
  );
}

