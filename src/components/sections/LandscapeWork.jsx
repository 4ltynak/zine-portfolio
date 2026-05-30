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
    className="snap-start col-span-12 grid grid-cols-12 md:grid-cols-subgrid overflow-hidden select-none items-center
    h-screen grid grid-rows-12 gap-4">
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

            <div 
            id="custom-controls-gallery" 
            className="col-start-3 col-span-8 row-start-4 row-span-7 w-full h-full relative" 
            data-carousel="static"
            >
            {/* The Inner Box: Force it to be h-full so it fills your row-span-7 instead of being hardcoded to md:h-96 */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
                
                <div className="duration-700 ease-in-out w-full h-full" data-carousel-item="active" key={activeProject.url}>
                
                {/* The Video Element: Inherits the exact w-full h-full object-cover constraints */}
                <video controls className="w-full h-full rounded-sm shadow-lg object-cover bg-black">
                    <source src={activeProject.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                </div>

            </div>
            </div>
            <button className="text-lg text-color/70 font-news-cycle
            col-start-10 row-start-11 text-right cursor-pointer hover:underline" onClick={handleNext}>
                Next &gt; 
            </button>
            {/* <p className="text-lg text-color/70 font-news-cycle row-start-11 col-start-6 col-span-2 text-center ">01 / Landscape Work</p> */}
            <button className="text-lg text-color/70 font-news-cycle
            col-start-3 row-start-11 text-left cursor-pointer hover:underline" onClick={handlePrev}>&lt; Previous </button>
{/*     <div className="col-span-12 lg:col-span-3 lg:col-start-2 text-md text-color/70 font-news-cycle 
    flex gap-4">
        <div className="flex flex-col gap-4">
            <span className="text-sm text-color/50 block">
                <span className="font-semibold text-color">{activeProject.client}</span>
            </span>
            <h2 className="text-3xl xl:text-left h-10 flex items-center font-instrument-serif italic">
            {activeProject.title}
        </h2>
        </div>
        <div>
        
        <p className="text-md text-color/70 font-news-cycle text-justify overflow-hidden py-4">
            {activeProject.snippet}
        </p>
    </div>
    </div>
     */}


    
    
{/*     <div className="col-span-12 md:col-span-7 mt-4">
        <div id="custom-controls-gallery" className="relative w-full" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div className="duration-700 ease-in-out w-full h-full" data-carousel-item="active" key={activeProject.url}>
                    <video controls className="w-full h-full rounded-sm shadow-lg object-cover">
                        <source src={activeProject.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            
            <div className="w-full flex justify-center items-center pt-4 gap-8">
                <button type="button" onClick={handlePrev} className="flex justify-center items-center me-4 cursor-pointer group focus:outline-none">
                    <span className="text-body hover:text-heading underline text-xl">←</span>
                </button>
                <button type="button" onClick={handleNext} className="flex justify-center items-center cursor-pointer group focus:outline-none">
                    <span className="text-body hover:text-heading underline text-xl">→</span>
                </button>
            </div>
        </div>
    </div> */}

</section>
        
    )
}