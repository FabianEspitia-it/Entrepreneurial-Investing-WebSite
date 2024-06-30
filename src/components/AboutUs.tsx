import { Fade } from "react-awesome-reveal";
import Image from "next/image";

export default function AboutUs() {
  const cardData = [
    {
      title: "Empowering Investors",
      text: "Your gateway to mastering the art of investing in startups across Latin America. Our mission is to empower aspiring and seasoned investors with the knowledge, tools, and network needed to identify and invest in the most promising startups in the region.",
      name: "Laura Gaviria",
      role: "Founding Team Faktory AI",
      image: "/images/laura_g.png",
    },
    {
      title: "Our Belief",
      text: "At Entrepreneurial Investing, we believe that investing in startups should be accessible and informed. Our team comprises experienced investors, industry experts, and passionate professionals dedicated to demystifying the startup investment landscape in Latam.",
      name: "Laura Apellido",
      role: "CBO Strategic Growth at Cloud9",
      image: "/images/laura_g2.png",
    },
  ];

  return (
    <section id="about" className="max-w-5xl w-full">
      <Fade triggerOnce duration={2000}>
        <h2 className="text-4xl font-bold text-center">
          About{" "}
          <span className="text-gradient-2">Entrepreneurial Investing</span>
        </h2>
        <ul className="flex flex-col gap-4 pt-12 lg:flex-row">
          {cardData.map((card, index) => (
            <li key={index} className="w-full">
              <article className="border-1 border-EI_new_green bg-white rounded-3xl p-8 h-full flex flex-col gap-10 justify-between leading-normal shadow-md shadow-EI_new_green">
                <div className="flex flex-col gap-4">
                  <h2 className="text-gray-900 font-bold text-xl">
                    {card.title}
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    {card.text}
                  </p>
                </div>
                <div className="flex items-center mt-1">
                  <Image
                    className="rounded-full mr-4 border-2"
                    src={card.image}
                    alt="Logo of Faktory"
                    width={90}
                    height={80}
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">{card.name}</p>
                    <p className="text-gray-600">{card.role}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Fade>
    </section>
  );
}
