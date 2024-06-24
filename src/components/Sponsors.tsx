import Image from 'next/image'
import { Fade, Bounce, Zoom } from 'react-awesome-reveal'


export default function Sponsors() {
  return (

    <section className="relative py-24">
      <Fade cascade duration={1000} triggerOnce>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <h2 className="h2 mb-4">TTrusted by these partners, our community benefit from more than $50k in deals from the generous companies that support our community</h2> */}
            <p className="text-4xl font-semibold ">Our Partners in <span className='text-gradient'>Success</span></p>
          </div>

          {/* Items */}
          <div className="max-w-4xl mx-auto grid gap-2 grid-cols-4 [&>div>img]:grayscale">

            {/* Item OnTop */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/makers.png" alt='Logo of OnTop' width={80} height={80} />
            </div>

            {/* Item Mention */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/makers.png" alt='Logo of Mention' width={80} height={80} />
            </div>

            {/* Item Faktory */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/makers.png" alt='Logo of Faktory' width={80} height={80} />
            </div>

            {/* Item Truora */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/makers.png" alt='Logo of Truora' width={80} height={80} />
            </div>


          </div>
        </div>
      </div>
      </Fade>
    </section>
  )
}