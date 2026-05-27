import React, { useState } from 'react';
import stills from '../../assets/photos.json';
export default function StillsWork() {
    console.log(stills);
    return (
        <section id="stills-work" className="snap-start min-h-screen max-w-5xl mx-auto px-6 grid grid-cols-12 auto-rows-auto gap-4 py-20 items-center">
    
    <div className="col-span-12 grid grid-cols-2 lg:grid-cols-12 gap-y-4">
        
        <h2 className="col-span-12 text-3xl text-center xl:text-left font-bold">
            Stills
        </h2>
        
        <div class="col-span-12 grid grid-cols-12 w-full gap-y-8 lg:gap-12">
            {stills.map((photo, index) => (
                <div key={index} className="overflow-hidden col-span-12 lg:col-span-6 rounded-lg shadow-lg">
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
        <div className="col-span-12 mt-4">
            <p class="text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<hr class="h-px my-8 bg-neutral-quaternary border-0"/>
<p class="text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
</div>
        
        <a href="#landing" className="col-span-12 text-md text-gray-400 font-news-cycle text-center mt-8">
            Back to Top
    </a>
    </div>
</section>
    )
}