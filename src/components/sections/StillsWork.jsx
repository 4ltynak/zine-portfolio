import React, { useState } from 'react';
import stills from '../../assets/photos.json';
export default function StillsWork() {
    console.log(stills);
    return (
        <section id="stills-work" className="min-h-screen max-w-5xl mx-auto px-6 grid grid-cols-12 auto-rows-auto gap-4 py-20 items-center">
    
    {/* The parent div is a 12-column subgrid that only takes up the vertical space it needs */}
    <div className="col-span-12 grid grid-cols-2 gap-y-4">
        
        <h2 className="col-span-12 text-3xl text-center xl:text-left font-bold">
            Stills
        </h2>
        
{/*         <p className="col-span-12 md:col-span-6 text-md text-gray-600 font-news-cycle text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur eros vel augue vehicula tempus. Sed id pellentesque arcu.
        </p> */}
        
        <div class="flex items-center col-span-12 flex-col gap-y-8">
            {stills.map((photo, index) => (
                <div key={index} className="overflow-hidden col-span-2 rounded-lg shadow-lg">
                    <img src={photo.url} alt={photo.title} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
        {/* <div className="col-span-12 mt-4">
            <div id="custom-controls-gallery" className="relative w-full" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    
                    <div className="duration-700 ease-in-out w-full h-full" data-carousel-item="active" key={activeProject.url}>
                        <img src={activeProject.url} alt={activeProject.title} className="w-full h-full rounded-sm shadow-lg object-cover" />
                    </div>

                </div>
                
                <div className="w-full flex justify-center items-center pt-4 gap-8">
                    <button type="button" onClick={handlePrev} className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="text-body hover:text-heading group-focus:text-heading">
                            <p className="underline text-xl">←</p>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" onClick={handleNext} className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="text-body hover:text-heading group-focus:text-heading">
                            <p className="underline text-xl">→</p>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div> */}
    <p className="col-span-12 text-md text-gray-400 font-news-cycle text-center mt-8">
            Back to Top
    </p>
    </div>
</section>
    )
}