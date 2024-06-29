import Image from 'next/image'
import { Fade, Bounce, Zoom } from 'react-awesome-reveal'


export default function Sponsors() {
  return (

    <section className="relative pt-28 pb-12">
      <Fade cascade duration={2000} triggerOnce>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <h2 className="h2 mb-4">TTrusted by these partners, our community benefit from more than $50k in deals from the generous companies that support our community</h2> */}
            <p data-aos="zoom-y-out" className="text-3xl font-semibold ">Our Partners in <span className='text-gradient-2'>Success</span></p>
          </div>

          {/* Items */}
          <div className="max-w-4xl mx-auto grid gap-2 grid-cols-4 [&>div>img]:grayscale">

            {/* Item OnTop */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/camara.png" alt='Logo of OnTop' width={150} height={170} />
            </div>

            {/* Item Mention */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/universidad-de-los-Andes.png" alt='Logo of Mention' width={140} height={80} />
            </div>

            {/* Item Faktory */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/logo_eafit_completo.png" alt='Logo of Faktory' width={160} height={80} />
            </div>

            {/* Item Truora */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/fs_logo.png" alt='Logo of Truora' width={100} height={80} />
            </div>


          </div>
        </div>
      </div>
      </Fade>
    </section>
  )
}