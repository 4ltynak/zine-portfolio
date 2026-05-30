import {useEffect} from 'react'
export default function Navbar({ menuOpen, setMenuOpen }) {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
                <div className="flex items-center h-16 justify-between">
                    <a className="font-instrument-serif text-3xl" href="#home">MW</a>
                </div>
                <div className=" h-5 relative cursor-pointer z-40 lg:hidden" onClick={() => setMenuOpen(prev => !prev)}>
                    &#9776;
                </div>
            </div>
        </nav>
    )
}