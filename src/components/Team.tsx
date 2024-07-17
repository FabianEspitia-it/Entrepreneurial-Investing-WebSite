import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const profiles = [
  {
    name: "Laura Gaviria",
    description:
      "Laura Gaviria is a co-founder of Team Faktory AI and a former executive at SoftBank. As an angel investor, she has a keen eye for emerging technologies and high-potential startups.",
    image: "/images/laura_gaviria.png",
  },
  {
    name: "Laura Gónzalez",
    description:
      "Laura González serves as the Chief Business Officer for Strategic Growth. With a wealth of experience in driving business expansion, structured finance, and as a VC investor, she excels at identifying and capitalizing on growth opportunities through strategic initiatives",
    image: "/images/laura_g2.png",
  },
  {
    name: "Andrés Bilbao",
    description:
      "Andrés Bilbao is a distinguished co-founder of Rappi and Makers. Renowned for his strategic vision and entrepreneurial spirit, he has also invested in some of the most successful startups in the region.",
    image: "/images/bilbao.png",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="container mx-auto px-4 md:pt-28 py-20 flex flex-col items-center"
    >
      <Fade triggerOnce>
        <h2 className="font-semibold text-3xl md:text-4xl">
          Meet Our <span className="text-gradient-2">Team</span>
        </h2>
        <p className="text-center max-w-3xl text-gray-700 my-5">
          Our team consists of the top investors in Latin America, bringing a
          wealth of experience and a proven track record in the startup
          investment world
        </p>
        <div className="flex flex-wrap justify-center">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="max-w-sm flex flex-col items-center overflow-hidden shadow-lg m-3 group rounded-xl"
            >
              <div className="relative pt-3">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  className="rounded-full filter grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
                  width={120}
                  height={120}
                />
              </div>
              <div className="px-6 py-4 text-center">
                <h2 className="font-bold text-xl mb-2">{profile.name}</h2>
                <p className="text-gray-700 group-hover:text-EI_new_green duration-300">
                  Host
                </p>
                <p className="text-gray-700 pt-3 text-sm">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
