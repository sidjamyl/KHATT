"use client"

export default function Learnmore() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button 
      onClick={scrollToAbout}
      className="relative inline-block cursor-pointer outline-none border-0 align-middle no-underline bg-transparent p-0 text-inherit font-inherit w-36 sm:w-40 md:w-44 lg:w-48 h-auto group"
    >
      <span className="relative block m-0 w-10 h-10 sm:w-11 sm:h-11 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#141516] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full" aria-hidden="true">
        <span className="absolute top-0 bottom-0 left-2 sm:left-2.5 md:left-2.5 lg:left-2.5 w-[1rem] sm:w-[1.0625rem] md:w-[1.0625rem] lg:w-[1.125rem] h-0.5 my-auto transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] bg-transparent group-hover:bg-white before:absolute before:content-[''] before:top-[-0.29rem] before:right-[0.0625rem] before:w-2 sm:before:w-2.5 md:before:w-2.5 lg:before:w-2.5 before:h-2 sm:before:h-2.5 md:before:h-2.5 lg:before:h-2.5 before:border-t-2 before:border-r-2 before:border-white before:rotate-45" />
      </span>
      <span className="absolute top-0 left-0 right-0 bottom-0 py-2.5 sm:py-3 md:py-3 lg:py-3 ml-[2.75rem] sm:ml-[3rem] md:ml-[3.25rem] lg:ml-[1.85rem] text-[#141516] text-xs sm:text-sm md:text-sm lg:text-base font-bold leading-[1.6] text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
        Learn More
      </span>
    </button>
  );
}

