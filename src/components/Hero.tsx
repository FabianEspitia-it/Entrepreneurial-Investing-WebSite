import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="relative flex items-center pt-44 pb-20">
      <Fade triggerOnce cascade duration={900}>
        <div className="text-start">
          <h1 className="text-4xl md:text-7xl md:mb-4 font-extrabold text-gray-900 md:pl-8 pl-2">
            {t("learn_to")}{" "}
            <span className="text-gradient-2">{t("invest")}</span> {t("in")}{" "}
            <span className="text-gradient-2">{t("startups")}</span>{" "}
            {t("like_the")} <span className="text-gradient-2">{t("best")}</span>
          </h1>
          <p className="text-base md:text-xl pt-4 text-gray-600 max-w-3xl md:pl-11 pl-3">
            {t("subtopic")}
          </p>
        </div>
      </Fade>
    </section>
  );
}

{
  /* export default function Hero() {
  return (
    <section className="relative flex items-center pt-24 md:pb-24 pb-20">
      <Fade triggerOnce cascade duration={900}>
        <div className="text-start  flex flex-col items-center">
          <Image
            src="/images/EI_final_logo.png"
            alt="logo"
            width={300}
            height={60}
            className=" pb-9"
          />
          <h1 className="text-4xl md:text-7xl md:mb-4 font-extrabold text-gray-900 md:pl-12 pl-2">
            Learn To <span className="text-gradient-2">Invest</span> In{" "}
            <span className="text-gradient-2">Startups</span> Like The{" "}
            <span className="text-gradient-2">Best In Latam</span>
          </h1>
          <p className="text-base md:text-xl pt-4 text-gray-600 max-w-3xl -ml-80">
            To empower both aspiring and seasoned investors with the knowledge,
            tools, and network needed to identify and invest in the most
            promising startups in Latin America.
          </p>
        </div>
      </Fade>
    </section>
  );
}*/
}
