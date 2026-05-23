export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex justify-between items-center h-16">
                    <a className="font-instrument-serif text-xl font-bold" href="#home">MW</a>
                </div>
                <div className="space-x-6">
                    <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Projects</a>
                    <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">About</a>
                    <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Contact</a>
                </div>
            </div>
        </nav>
    )
}