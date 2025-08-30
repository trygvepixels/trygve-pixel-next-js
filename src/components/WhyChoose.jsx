"use client";

export default function WhyChoose() {
  const items = [
    {
      emoji: "🔒",
      title: "Predictable\nPricing",
      text:
        "One flat monthly fee for unlimited design requests.\nNo surprise costs or hidden fees.",
      tilt: "-rotate-3",
    },
    {
      emoji: "⚡",
      title: "Fast Turnaround",
      text:
        "Get your designs within 24–48 hours. Need revisions?\nWe’ll handle them right away.",
      tilt: "-rotate-6",
    },
    {
      emoji: "⭐",
      title: "Highest Quality",
      text:
        "Senior-level design quality at your fingertips, whenever you need it.",
      tilt: "-rotate-2",
    },
    {
      emoji: "🚀",
      title: "Scale Anytime",
      text:
        "Scale up or down as needed, and pause or cancel at anytime.",
      tilt: "rotate-3",
      gloss: true, // add a soft reflection overlay
    },
    {
      emoji: "🆔",
      title: "Unique & All\nYours",
      text:
        "Every design is made especially for you and is 100% yours.",
      tilt: "rotate-1",
    },
  ];

  return (
    <section className="relative  overflow-hidden bg-[#000000] py-16 text-white sm:py-20">
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#95DDFF]/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#80B7CF]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
           
        />
      </div>

      {/* Content container */}
      <div className="relative mx-auto pb-20 max-w-7xl px-6">
        <h2 className="text-[clamp(28px,3.2vw,44px)] font-extrabold special-font tracking-wide  ">
          <span className="bg-gradient-to-r special-font from-white via-sky-100 to-sky-300 bg-clip-text text-transparent text-3xl font-semibold leading-tight tracking-[-0.01em] sm:text-4xl">
            Why Choose Us?
          </span>
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-white/80">
          Get reliable, high-quality design without the overhead of hiring
          in-house or dealing with freelancers.
        </p>
 

         <p
         
         className="pointer-events-none z-[10] md:absolute hidden text-[10vw] left-1/6 -bottom-20  w-52 rotate-12 opacity-90 md:w-64"
         >
            🚀
         </p>
     
         <p
         
         className="pointer-events-none z-[10] absolute text-[10vw] right-1 -top-10  w-52 rotate-12 opacity-90 md:w-64"
         >
            💡
         </p>
     

        {/* Cards row */}
        <div className="relative z-10 mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((c, i) => (
            <article
              key={i}
              className={[
                "group relative rounded-2xl border border-white/20 bg-white/5 p-5",
                "backdrop-blur-xs shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
                "transition-transform duration-300",
                c.tilt,
                "hover:-translate-y-1 hover:rotate-0",
              ].join(" ")}
            >
              {/* inner stroke */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

             
              {/* optional gloss (for the 4th card) */}
            

              {/* icon block */}
              {/* <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-2xl ring-1 ring-white/20">
                <span aria-hidden>{c.emoji}</span>
              </div> */}

              {/* title */}
              <h3 className="whitespace-pre-wrap text-[20px] font-semibold leading-tight">
                {c.title}
              </h3>

              {/* body */}
              <p className="mt-3 text-sm leading-6 text-white/80">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}