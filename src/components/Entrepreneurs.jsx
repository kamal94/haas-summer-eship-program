const benefits = [
  {
    number: '01 // REACH',
    title: 'Audience & Reach',
    tag: 'Distribution',
    desc: 'Featured in a weekly newsletter distributed directly to investors, alumni, and elite operators across the global Haas network.',
  },
  {
    number: '02 // BUILD',
    title: 'Infrastructure',
    tag: 'Tech Stack',
    desc: 'Scale immediately with dedicated cloud credits through AWS, Azure, and other premier compute partners to help you ship faster.',
  },
  {
    number: '03 // NETWORK',
    title: 'Community',
    tag: 'Hacker House',
    desc: 'Immersive Hacker House events that bring together cohort founders for shared learning, intense collaboration, and tactical support.',
  },
  {
    number: '04 // CAPITAL',
    title: 'Funding Access',
    tag: 'Pitch',
    desc: 'A high-stakes closing Demo Day where founders pitch live to a rigorously curated room of top-tier VCs, angels, and syndicate leads.',
  },
];

function BenefitCard({ number, title, tag, desc }) {
  return (
    <div className="group relative pt-6 sm:pt-8 border-t border-[#e0e0e0]">
      <span className="block text-[0.85rem] font-bold text-[#555555] mb-3 sm:mb-4 transition-all duration-300 group-hover:text-[#f99c44] group-hover:-translate-y-[5px]">
        {number}
      </span>
      <div className="text-[1.5rem] sm:text-[2rem] font-bold tracking-[-0.03em] mb-3 sm:mb-4 flex flex-wrap items-center gap-3 sm:gap-4">
        {title}
        <span className="text-[0.7rem] uppercase px-[0.6rem] py-[0.2rem] rounded-full bg-[#f0f0f0] tracking-[0.05em] font-semibold">
          {tag}
        </span>
      </div>
      <p className="text-[1rem] sm:text-[1.1rem] leading-[1.5] text-[#555555] font-normal max-w-[90%]">
        {desc}
      </p>
    </div>
  );
}

export default function Entrepreneurs() {
  return (
    <section id="entrepreneurs" className="py-16 sm:py-32 px-4 sm:px-16 relative">
      <h2 className="text-[2.5rem] sm:text-[4rem] font-extrabold tracking-[-0.04em] mb-10 sm:mb-16 uppercase border-b-2 border-[#111111] pb-4">
        For Entrepreneurs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
        {benefits.map((b) => (
          <BenefitCard key={b.number} {...b} />
        ))}
      </div>
    </section>
  );
}
