export default function CTA() {
  return (
    <section
      className="font-display relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-slate-900"
      style={{
        backgroundImage: "url('/assets/cta.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-[1.2] tracking-tight mb-8 md:mb-10 xl:mb-16">
          Trusted Maritime Operations <br className="hidden sm:block" />
          Worldwide
        </h2>

        <button className="bg-white text-[#0F172A] text-xs md:text-[15px] cursor-pointer px-6 py-3 rounded-md md:rounded-[10px] font-medium">
          Contact Team
        </button>
      </div>
    </section>
  );
}
