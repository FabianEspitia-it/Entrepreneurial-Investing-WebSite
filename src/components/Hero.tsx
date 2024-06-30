"use client";

import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section id="hero" className="max-w-5xl">
      <Fade cascade duration={900} triggerOnce>
        <h1 className="lg:text-7xl lg:mb-4 text-4xl font-extrabold text-gray-900">
          Learn To <span className="text-gradient-2">Invest</span> In{" "}
          <span className="text-gradient-2">Startups</span> Like The{" "}
          <span className="text-gradient-2">Best In Latam</span>
        </h1>
        <p className="lg:text-xl pt-4 text-sm text-gray-600 max-w-3xl">
          Learn to invest in startups like the best in Latam. Discover
          strategies, tips, and secrets from regional experts to make smart
          decisions and maximize your investments.
        </p>
      </Fade>
    </section>
  );
}
