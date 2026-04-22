export default function Nav() {
  return (
    <nav className="fixed top-4 sm:top-8 left-0 w-full px-4 sm:px-16 flex justify-between items-center z-[100] mix-blend-difference text-white">
      <div className="font-bold text-xl sm:text-2xl tracking-[-0.02em] flex items-center gap-1">
        /haas<span className="font-normal">ventures</span>
      </div>

      <div className="hidden md:flex bg-white/10 backdrop-blur-[10px] px-6 py-2 rounded-full gap-8 text-[0.85rem] font-medium">
        <a href="#overview" className="text-white no-underline transition-opacity duration-200 hover:opacity-60">Overview</a>
        <a href="#entrepreneurs" className="text-white no-underline transition-opacity duration-200 hover:opacity-60">Founders</a>
        <a href="#investors" className="text-white no-underline transition-opacity duration-200 hover:opacity-60">Investors</a>
      </div>

      <a
        href="https://forms.gle/RgHKooGkKMjSFQDu7"
        target="_blank"
        className="backdrop-blur-xl bg-white text-black pl-4 sm:pl-6 pr-2 py-2 rounded-full no-underline text-[0.75rem] sm:text-[0.85rem] font-semibold flex items-center gap-3 sm:gap-4"
      >
        <span className="hidden sm:inline">Apply Cohort '24</span>
        <span className="sm:hidden">Apply</span>
        <div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">→</div>
      </a>
    </nav>
  );
}
