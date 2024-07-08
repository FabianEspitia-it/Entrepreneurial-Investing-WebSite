import Image from "next/image";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";

export default function Sponsors() {
  return (
    <section className="relative py-32">
      <Fade cascade triggerOnce>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 lg:pb-16">
              {/* <h2 className="h2 mb-4">TTrusted by these partners, our community benefit from more than $50k in deals from the generous companies that support our community</h2> */}
              <p className="text-3xl font-semibold ">
                Our Partners in <span className="text-gradient-2">Success</span>
              </p>
            </div>

            {/* Items */}
            <div className="max-w-4xl mx-auto grid lg:gap-y-2 gap-x-9 grid-cols-4 [&>div>img]:grayscale">
              {/* Item OnTop */}
              <div className="flex items-center justify-center py-2 col-span-2 lg:col-auto">
                <Image
                  src="/images/camara.png"
                  alt="Camara Logo"
                  width={150}
                  height={170}
                />
              </div>

              {/* Item Mention */}
              <div className="flex items-center justify-center py-2 col-span-2 lg:col-auto">
                <Image
                  src="/images/andes.png"
                  alt="Andes Logo"
                  width={140}
                  height={80}
                />
              </div>

              {/* Item Faktory */}
              <div className="flex items-center justify-center py-2 col-span-2 lg:col-auto">
                <Image
                  src="/images/logo_eafit_completo.png"
                  alt="Eafit logo"
                  width={160}
                  height={80}
                />
              </div>

              {/* Item Truora */}
              <div className="flex items-center justify-center py-2 col-span-2 lg:col-auto">
                <Image
                  src="/images/fs_logo.png"
                  alt="FS logo"
                  width={100}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
