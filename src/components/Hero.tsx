import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="relative flex items-center pt-44 pb-24">
      <Fade triggerOnce cascade duration={900}>
        <div className="text-start">
          <h1 className="text-4xl md:text-7xl md:mb-4 font-extrabold text-gray-900 md:pl-8 pl-2">
            Learn To <span className="text-gradient-2">Invest</span> In{" "}
            <span className="text-gradient-2">Startups</span> Like The{" "}
            <span className="text-gradient-2">Best In Latam</span>
          </h1>
          <p className="text-base md:text-xl pt-4 text-gray-600 max-w-3xl md:pl-11 pl-3">
            To empower both aspiring and seasoned investors with the knowledge,
            tools, and network needed to identify and invest in the most
            promising startups in Latin America.
          </p>
        </div>
      </Fade>
    </section>
  );
}
