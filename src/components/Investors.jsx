function ArrowCircle() {
  return (
    <div className="bg-[#111111] text-white w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
      →
    </div>
  );
}

export default function Investors() {
  return (
    <section id="investors" className="py-16 sm:py-32 px-4 sm:px-16 relative bg-[#111111] text-[#fdfdfd] mt-8 sm:mt-16">
      <h2 className="text-[2.5rem] sm:text-[4rem] font-extrabold tracking-[-0.04em] mb-10 sm:mb-16 uppercase border-b-2 border-[#333] pb-4 text-[#fdfdfd]">
        For Investors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24">
        <div>
          <p className="text-[1.8rem] sm:text-[2.5rem] leading-[1.1] font-semibold tracking-[-0.03em] mb-6 sm:mb-8">
            Early, curated access to the next generation of{' '}
            <span className="text-[#7ce5e5]">UC Berkeley founders</span>{' '}
            — before they hit the open market.
          </p>
          <p className="text-[1rem] sm:text-[1.2rem] leading-[1.6] text-[#a0a0a0] mb-8 sm:mb-12">
            Backed by one of the world's top business and engineering institutions. Our cohort is meticulously selected from Haas MBA, engineering, and exceptional undergraduate talent. These are founders possessing profound technical depth, ruthless business rigor, and the backing of the Berkeley network.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12">
          <div className="border-l-2 border-[#333] pl-6 sm:pl-8">
            <h3 className="text-[1.1rem] sm:text-[1.2rem] font-semibold mb-2 text-white">Ongoing Deal Flow</h3>
            <p className="text-[0.95rem] sm:text-[1rem] text-[#888] leading-[1.5] mb-5 sm:mb-6">
              Founder spotlights, company updates, and early looks at teams building across AI, climate, health, and consumer sectors.
            </p>
            <button className="group inline-flex items-center bg-white text-[#111111] pl-6 sm:pl-8 pr-2 py-[0.8rem] rounded-full text-[0.9rem] sm:text-[1rem] font-semibold gap-4 sm:gap-6 transition-all duration-200 hover:scale-[1.02] hover:bg-[#fce454] cursor-pointer border-none">
              Subscribe to Deal Flow
              <ArrowCircle />
            </button>
          </div>

          <div className="border-l-2 border-[#333] pl-6 sm:pl-8">
            <h3 className="text-[1.1rem] sm:text-[1.2rem] font-semibold mb-2 text-white">The Closing Event</h3>
            <p className="text-[0.95rem] sm:text-[1rem] text-[#888] leading-[1.5] mb-5 sm:mb-6">
              Join our closing Demo Day. Cohort founders pitch live to a room of VCs and operators. Past events have surfaced companies that raised from top-tier firms.
            </p>
            <button className="group inline-flex items-center bg-[#f96eb0] text-[#111111] pl-6 sm:pl-8 pr-2 py-[0.8rem] rounded-full text-[0.9rem] sm:text-[1rem] font-semibold gap-4 sm:gap-6 transition-all duration-200 hover:scale-[1.02] hover:bg-white cursor-pointer border-none">
              Request Demo Day Access
              <ArrowCircle />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
