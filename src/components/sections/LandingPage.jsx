export default function LandingPage () {
    return (
      <div id="landing" className="snap-start relative w-full h-screen overflow-hidden flex flex-col justify-between p-12 select-none">
      {/* Top spacer to balance the layout and keep the hero perfectly centered */}
      <div className="h-12 aria-hidden" />

      {/* Center Hero Section */}
      <div className="flex flex-col gap-3 items-center">
        <p className="font-news-cycle text-2xl italic tracking-wide text-color/50">Welcome to</p>
        <h1 className="text-5xl md:text-7xl font-instrument-serif italic text-center leading-none">
          <span>Archive // 2026</span>
        </h1>
        <p className="font-news-cycle text-lg tracking-wide text-color/70 max-w-xl text-center">
          by <span className="underline decoration-zinc-500/30">MW</span>
        </p>
      </div>

      {/* Footer Section - Purely layout-driven, no absolute positioning needed */}
      <div className="flex flex-col items-center">
        <p className="font-news-cycle text-xl italic tracking-wide text-color/50 animate-pulse">Scroll to View</p>
      </div>
    </div>
    )
}