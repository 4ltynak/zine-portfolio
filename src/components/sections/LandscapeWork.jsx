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
<section id="landscape-work" className="snap-start min-h-screen max-w-5xl mx-auto px-6 grid grid-cols-12 auto-rows-auto gap-4 py-20 items-center">
    <div className="col-span-12 grid grid-cols-subgrid">
        
        {/* Project Meta Information */}
        {/* Fixed height ensures titles (single vs multi-line) don't push content down */}
        <p className="text-md text-color/70 font-news-cycle col-span-12">
                        <span className="text-sm text-color/50 block">
                            <span className="font-semibold text-color">{activeProject.client}</span>
                        </span>
                    </p>
        <h2 className="col-span-12 text-3xl text-center xl:text-left h-10 flex items-center">
            {activeProject.title}
        </h2>
        
        {/* Enforced min-height or fixed height here keeps the text area identical. 
            Adjust h-24 (6rem) or h-20 based on your longest snippet. 
            Added line-clamp-3 as a safety net to prevent overflow. */}
        <p className="col-span-12 md:col-span-6 text-md text-color/70 font-news-cycle text-justify overflow-hidden py-4">
            {activeProject.snippet}
        </p>
        
        {/* Matching the height/min-height of the sibling snippet column (h-24) 
            keeps both columns in the CSS grid aligned perfectly */}
        
        {/* Carousel Container */}
        <div className="col-span-12 mt-4">
            <div id="custom-controls-gallery" className="relative w-full" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    
                    <div className="duration-700 ease-in-out w-full h-full" data-carousel-item="active" key={activeProject.url}>
                        <video controls className="w-full h-full rounded-sm shadow-lg object-cover">
                            <source src={activeProject.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
                
                {/* Navigation Buttons */}
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
        </div>

    </div>
</section>
        
    )
}