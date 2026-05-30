import {useState} from 'react';
import {myProjects} from '../../assets/projects.js';

export default function LandscapeWork() {
const landscapeProjects = myProjects.filter(project => project.media_type == "video");

const [currentIndex, setCurrentIndex] = useState(0);
const activeProject = landscapeProjects[currentIndex] || {};

const handleNext = () => {
    setCurrentIndex((prevIndex) => 
        prevIndex === landscapeProjects.length - 1 ? 0 : prevIndex + 1
    );
};

const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? landscapeProjects.length - 1 : prevIndex - 1
    );
};
    

    return (
<section id="landscape-work" 
className="snap-start col-span-12 grid grid-cols-12 md:grid-cols-subgrid overflow-hidden select-none items-center h-screen grid-rows-12 gap-4">
    {/* Added 'hidden lg:flex' to hide on mobile and show on desktop */}
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
    <div className="col-span-12 grid gap-4 lg:col-span-3 lg:col-start-3 lg:row-start-3 text-md text-color/70 font-news-cycle">
        <p className="font-semibold text-color">{activeProject.client}</p>
        <h2 className="text-4xl xl:text-left h-10 flex items-center font-instrument-serif">
            {activeProject.title.toUpperCase()}
        </h2>
    </div>
    <div className="col-span-12 lg:col-span-4 lg:col-start-7 lg:row-start-3">
        <p className="text-lg text-color/70 font-news-cycle text-justify overflow-hidden lg:pt-8 lg:leading-snug">
            {activeProject.snippet}
        </p>
    </div>

    {/* GALLERY AREA */}
    <div 
    id="custom-controls-gallery" 
    className="col-start-3 col-span-8 row-start-4 row-span-7 w-full h-full relative" 
    data-carousel="static"
    >
        <div className="relative w-full h-full overflow-hidden rounded-lg">
            <div className="duration-700 ease-in-out w-full h-full" data-carousel-item="active" key={activeProject.url}>
                <video controls className="w-full h-full rounded-sm shadow-lg object-cover bg-black">
                    <source src={activeProject.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>

    {/* COMBINED CONTROLS AND BORDER CONTAINER */}
    {/* This spans across the exact same 8 columns as your gallery to keep alignment clean */}
    <div className="col-start-3 col-span-8 row-start-11 w-full flex flex-col pt-4 border-t border-color/20">
        <div className="flex justify-between items-center w-full">
            
            <button 
                className="text-lg text-color/70 font-news-cycle text-left cursor-pointer hover:underline" 
                onClick={handlePrev}
            >
                &lt; Previous 
            </button>

            {/* Optional center label remains safely placeable right here in the center stream */}
            {/* <p className="text-lg text-color/70 font-news-cycle text-center ">01 / Landscape Work</p> */}

            <button 
                className="text-lg text-color/70 font-news-cycle text-right cursor-pointer hover:underline" 
                onClick={handleNext}
            >
                Next &gt; 
            </button>
            
        </div>
    </div>
</section>
        
    )
}