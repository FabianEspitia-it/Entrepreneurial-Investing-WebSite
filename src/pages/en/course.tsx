import "tailwindcss/tailwind.css";

export default function Course() {
  return (
    <section className="relative min-h-[calc(100vh-16rem)]">
      <h1 className="text-4xl md:text-7xl md:mt-44 md:pl-8 font-extrabold text-gray-900">
        Learn To <span className="text-gradient-2">Invest</span> In{" "}
        <span className="text-gradient-2">Startups</span> Like The{" "}
        <span className="text-gradient-2">Best In Latam</span>
      </h1>
      <p className="text-base md:text-xl md:pl-11 pt-4 text-gray-600 max-w-3xl">
        Learn how to invest in startups like the best investors in Latin America
      </p>
    </section>
  );
}
