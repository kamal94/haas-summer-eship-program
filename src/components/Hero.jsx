const pills = [
  { label: 'Mentorship', color: 'bg-[#69d98e] text-[#004d1c]', pos: 'top-[-5%] left-[-2%]', delay: '0s' },
  { label: 'Capital Access', color: 'bg-[#7ce5e5] text-[#004d4d]', pos: 'top-[-12%] left-[32%]', delay: '1s' },
  { label: 'Network', color: 'bg-[#fce454] text-[#4d4000]', pos: 'top-[-8%] right-[20%]', delay: '2s' },
  { label: 'Cloud Credits', color: 'bg-[#f99c44] text-[#4d2300]', pos: 'bottom-[-5%] left-[18%]', delay: '0.5s' },
  { label: 'Demo Day', color: 'bg-[#f96eb0] text-[#4d0023]', pos: 'bottom-[-8%] right-[-2%]', delay: '1.5s' },
];

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center relative px-4 sm:px-16">
      <div className="relative w-full flex justify-center items-center mt-[-5vh]">
        <div className="relative inline-block">
          <h1 className="text-[16vw] font-black leading-[0.8] tracking-[-0.05em] uppercase whitespace-nowrap text-[#111111]">
            BERKELEY
          </h1>

          {pills.map((pill) => (
            <div
              key={pill.label}
              className={`absolute px-[0.7rem] sm:px-[1.4rem] py-[0.3rem] sm:py-[0.6rem] rounded-full text-[2.2vw] sm:text-[1.1vw] font-semibold tracking-[-0.01em] whitespace-nowrap z-10 ${pill.color} ${pill.pos}`}
              style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: pill.delay,
              }}
            >
              {pill.label}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-16 left-4 right-4 sm:left-auto sm:right-16 sm:max-w-[400px] text-[1.2rem] sm:text-[1.8rem] leading-[1.2] font-medium tracking-[-0.03em]">
        Connecting early-stage founders with the capital, mentorship, and networks they need to build and scale.
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
}
