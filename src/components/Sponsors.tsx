import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Sponsors() {
  const t = useTranslations("Partners");
  return (
    <section className="relative md:pt-28 py-20">
      <Fade cascade triggerOnce>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 lg:pb-10">
              <h2 className="text-3xl font-semibold ">
                {t("our_partners")}{" "}
                <span className="text-gradient-2">{t("success")}</span>
              </h2>
            </div>

            {/* Items */}
            <div className="max-w-4xl mx-auto grid md:gap-1 gap-5 grid-cols-2 md:grid-cols-5 [&>div>img]:grayscale">
              <div className="flex items-center justify-center py-2">
                <Image
                  src="/images/camara.png"
                  alt="Camara Logo"
                  width={170}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center py-2">
                <Image
                  src="/images/uniandinos.png"
                  alt="Uniandinos Logo"
                  width={120}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center py-2">
                <Image
                  src="/images/makers.png"
                  alt="Makers Logo"
                  width={85}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center py-2">
                <Image
                  src="/images/ongoing.png"
                  alt="Eafit Logo"
                  width={190}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center py-2">
                <Image
                  src="/images/fs.com_logo.png"
                  alt="FS Logo"
                  width={120}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
