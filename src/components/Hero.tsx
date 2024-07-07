import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-14rem)]">
      <Fade triggerOnce duration={900}>
        <h1 className="text-4xl md:text-7xl md:mb-4 md:pl-8 font-extrabold text-gray-900">
          Learn To <span className="text-gradient-2">Invest</span> In{" "}
          <span className="text-gradient-2">Startups</span> Like The{" "}
          <span className="text-gradient-2">Best In Latam</span>
        </h1>
        <p className="text-base md:text-xl md:pl-11 pt-4 text-gray-600 max-w-3xl">
          Learn to invest in startups like the best in Latam. Discover
          strategies, tips, and secrets from regional experts to make smart
          decisions and maximize your investments.
        </p>
      </Fade>
    </section>
  );
}
