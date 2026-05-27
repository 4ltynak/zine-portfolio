import {myProjects} from '../../assets/projects.js';
import {useState} from 'react';

export default function ReelsWork() {
    const reelsProjects = myProjects.filter(project => project.media_type == "reel");
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const activeProject = reelsProjects[currentIndex] || {};
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === reelsProjects.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? reelsProjects.length - 1 : prevIndex - 1
        );
    };
        
    
        return (
        <section id="reels-work" className="min-h-screen max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-12 auto-rows-auto gap-4 py-20 items-center">
        
            {/* Text Section: Properly bounded inside 6 columns on desktop, stacks on mobile */}
                <div className="col-span-12 md:col-span-6 flex flex-col gap-y-4 justify-center min-w-0">
                    <h2 className="text-3xl text-center md:text-left h-10 flex items-center">
                        {activeProject.title}
                    </h2>
                    
                    {/* The paragraph will now wrap beautifully within its half of the screen */}
                    <p className="text-md text-color/70 font-news-cycle text-left h-24 overflow-hidden">
                        {activeProject.snippet}
                    </p>
                    
                    <p className="text-md text-color/10 font-news-cycle">
                        <span className="text-sm text-color/50 block">
                            project for: <span className="font-semibold text-color">{activeProject.client}</span>
                        </span>
                    </p>
                    <div className="col-span-12 mt-4">
            <div id="custom-controls-gallery" className="relative w-full" data-carousel="static">
                <div className="relative aspect-[9/16] overflow-hidden rounded-lg max-h-[50vh] mx-auto">
                    
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
            </div>
        </section>
    )
}