import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Team() {
  const t = useTranslations("Team");
  const profiles = [
    {
      name: "Laura Gaviria",
      description: t("laura_gaviria"),
      image: "/images/laura_gaviria.png",
    },
    {
      name: "Laura Gónzalez",
      description: t("laura_gonzalez"),
      image: "/images/laura_g2.png",
    },
    {
      name: "Andrés Bilbao",
      description: t("andres_bilbao"),
      image: "/images/andres.png",
    },
  ];
  return (
    <section
      id="team"
      className="container mx-auto px-4 md:pt-28 py-20 flex flex-col items-center"
    >
      <Fade triggerOnce>
        <h2 className="font-semibold text-3xl md:text-4xl text-center">
          {t("meet_our")} <span className="text-gradient-2">{t("team")}</span>
        </h2>
        <p className="text-center max-w-3xl text-gray-700 my-5">
          {t("description")}
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
