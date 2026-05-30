import React, { useState } from 'react';
import stills from '../../assets/photos.json';
export default function StillsWork() {
    // Assuming 'stills' is imported or defined globally like your other arrays
    const [currentIndex, setCurrentIndex] = useState(0);
    const activeStill = stills[currentIndex] || {};
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === stills.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? stills.length - 1 : prevIndex - 1
        );
    };

    return (
<section id="stills-work" 
className="snap-start col-span-12 grid grid-cols-12 md:grid-cols-subgrid overflow-hidden select-none items-center h-screen grid-rows-12 gap-4">
    <div className="hidden lg:flex col-span-8 col-start-3 row-start-2 justify-between self-start">
    <a href="#landscape-work" className="hover:underline">
        <h3 className="text-lg text-color/70 font-news-cycle">01 / Landscape</h3>
    </a>
    <a href="#reels-work" className="hover:underline">
        <h3 className="text-lg text-color/70 font-news-cycle">02 / Reels</h3>
    </a>
    <a href="#stills-work" className="hover:underline">
        <h3 className="text-lg text-color/70 font-news-cycle">03 / Stills</h3>
    </a>
</div>
    {/* TEXT CONTENT */}
    <div className="col-span-12 lg:col-span-4 lg:col-start-3 lg:row-start-3">
        <h2 className="text-4xl xl:text-left h-10 flex items-center font-instrument-serif">
           STILLS
        </h2>
    </div>

    {/* GALLERY AREA */}
    <div 
    id="custom-controls-gallery" 
    className="col-start-3 col-span-8 row-start-4 row-span-7 w-full h-full relative" 
    data-carousel="static"
    >
        <div className="relative w-full h-full overflow-hidden rounded-lg group cursor-pointer">
            
            <div className="duration-700 ease-in-out w-full h-full relative" data-carousel-item="active" key={activeStill.url}>
                
                {/* BACKGROUND LAYER: Blurred, static, and filling space */}
                {activeStill.url && (
                    <img 
                        src={activeStill.url} 
                        className="absolute inset-0 w-full h-full object-cover blur-md opacity-40 scale-110 pointer-events-none" 
                        alt=""
                    />
                )}
                
                {/* FOREGROUND LAYER: Sharp, full aspect preservation, zooms on hover */}
                {activeStill.url && (
                    <img 
                        src={activeStill.url} 
                        alt={`Still ${currentIndex + 1}`} 
                        className="absolute inset-0 w-full h-full object-contain z-10 transition-transform duration-500 ease-out group-hover:scale-105" 
                    />
                )}
                
            </div>

        </div>
    </div>

    {/* COMBINED CONTROLS AND BORDER CONTAINER */}
    {/* Mirrors the exact column-span as your gallery with the top accent line */}
    <div className="col-start-3 col-span-8 row-start-11 w-full flex flex-col pt-4 border-t border-color/20 z-10">
        <div className="flex justify-between items-center w-full">
            
            <button 
                className="text-lg text-color/70 font-news-cycle text-left cursor-pointer hover:underline" 
                onClick={handlePrev}
            >
                &lt; Previous 
            </button>

            {/* Optional center label placeholder */}
            {/* <p className="text-lg text-color/70 font-news-cycle text-center ">03 / Photography Stills</p> */}

            <button 
                className="text-lg text-color/70 font-news-cycle text-right cursor-pointer hover:underline" 
                onClick={handleNext}
            >
                Next &gt; 
            </button>
            
        </div>
    </div>
</section>
    );
}