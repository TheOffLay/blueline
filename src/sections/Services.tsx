export default function Services() {
  const services = [
    {
      title: "Operational Excellence",
      description:
        "Proven track record of efficient vessel operations and cost optimization",
      icon: (
        <img
          src="/assets/icons/lighthouse.svg"
          alt="Ship Icon"
          className="w-8.5 h-8.5 text-slate-300 mb-5"
        />
      ),
    },
    {
      title: "Global Reach",
      description: "Presence in major maritime hubs across six continents",
      icon: (
        <img
          src="/assets/icons/globe.svg"
          alt="Ship Icon"
          className="w-8.5 h-8.5 text-slate-300 mb-5"
        />
      ),
    },
    {
      title: "Experienced Team",
      description:
        "Highly qualified maritime professionals with decades of combined experience",
      icon: (
        <img
          src="/assets/icons/user-group.svg"
          alt="Ship Icon"
          className="w-8.5 h-8.5 text-slate-300 mb-5"
        />
      ),
    },
    {
      title: "Compliance & Safety",
      description:
        "Full adherence to international maritime regulations and safety protocols",
      icon: (
        <img
          src="/assets/icons/structure-02.svg"
          alt="Ship Icon"
          className="w-8.5 h-8.5 text-slate-300 mb-5"
        />
      ),
    },
    {
      title: "Regulatory Assurance",
      description:
        "Comprehensive documentation and maritime compliance management",
      icon: (
        <img
          src="/assets/icons/boat.svg"
          alt="Ship Icon"
          className="w-8.5 h-8.5 text-slate-300 mb-5"
        />
      ),
    },
    {
      title: "Reliable Management",
      description:
        "Consistent performance across all vessel types and trade routes",
      icon: (
        <img
          src="/assets/icons/safe-delivery-02.svg"
          alt="Ship Icon"
          className="w-8.5 h-8.5 text-slate-300 mb-5"
        />
      ),
    },
  ];

  return (
    <section className="w-full font-display flex flex-col">
      {/* Header Section */}
      <div className="w-full bg-[#FFFFFF] pt-15 pb-3 md:pb-6 md:pt-30 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
            BlueLine Ship Solutions
          </h2>

          <p className="text-sm md:text-base text-[#475569] max-w-124 mx-auto leading-relaxed">
            End-to-end solutions for vessel management, crew operations, and
            maritime logistics.
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="relative w-full overflow-hidden bg-slate-900">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dxhw8m6wo/video/upload/v1779582242/video_esrfcp.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#051017]/85 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-300 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* TOP ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => {
              return (
                <div
                  key={index}
                  className={`
                    flex flex-col items-center lg:items-start text-center lg:text-left /* <--- ADDED MOBILE CENTERING HERE ---> */
                    px-8 py-10 lg:px-10
                    relative
                    ${index !== 2 ? "lg:border-r lg:border-[#1E303F]" : ""}
                  `}
                >
                  {service.icon}

                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#B5BBC3] leading-relaxed max-w-83">
                    {service.description}
                  </p>

                  {index !== 2 && (
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-[#1E303F] lg:hidden" />
                  )}
                </div>
              );
            })}
          </div>

          {/* HORIZONTAL LINE WITH SPACING */}
          <div className="py-8">
            <div className="mx-8 lg:mx-0 h-px bg-[#1E303F]" />
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {services.slice(3, 6).map((service, index) => {
              return (
                <div
                  key={index}
                  className={`
                    flex flex-col items-center lg:items-start text-center lg:text-left /* <--- ADDED MOBILE CENTERING HERE ---> */
                    px-8 py-10 lg:px-10
                    relative
                    ${index !== 2 ? "lg:border-r lg:border-[#1E303F]" : ""}
                  `}
                >
                  {service.icon}

                  <h3 className="text-[17px] md:text-[18px] font-semibold text-white tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[13px] text-slate-400 leading-relaxed max-w-[320px]">
                    {service.description}
                  </p>

                  {index !== 2 && (
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-[#1E303F] lg:hidden" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
