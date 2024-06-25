'use client'

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';
import Link from 'next/link';
import { Fade, Bounce, Zoom } from 'react-awesome-reveal';

function Animation({ children }: { children: JSX.Element }) {
  return (
    <Transition
      enter="transition duration-200 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-150 ease-in"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      {children}
    </Transition>
  )
}

function QuestionItem({ title, answer }: { title: string, answer: string }) {
  return (
    <Disclosure>
      {({ open }: { open: boolean }) => (
        <>
          <Disclosure.Button className="font-semibold text-lg text-left flex gap-2 justify-between items-center w-full py-3 px-4 bg-white hover:bg-gray-100 transition-colors duration-300 rounded-lg shadow-md">
            <p className='block max-w-[90%]'>{title}</p>
             <ChevronDownIcon className={clsx("w-6 h-6 transition-transform", open ? "rotate-180" : "rotate-0")} />
          </Disclosure.Button>

          <Animation>
            <Disclosure.Panel className="text-gray-800 my-4 px-4">
              {answer}
            </Disclosure.Panel>
          </Animation>
        </>
      )}
    </Disclosure>
  )
}

export default function Questions() {
  return (
    <>
    <Fade triggerOnce duration={2000}>
      <section id="questions" className='relative md:py-20 px-4 sm:px-6 '>
        
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-900 pb-10 md:pb-7">Frequently asked questions <br /> You have the <span className='text-gradient'>questions</span>, we have the <span className='text-gradient'>answers.</span></h2>
          <div className="max-w-4xl mx-auto border border-gray-200 rounded-xl p-6 bg-white shadow-lg">

            <QuestionItem title='What is the Latam startup investment program about?' answer="The program offers comprehensive training on how to invest in startups in Latin America. It includes strategies, tips, and secrets from regional experts to make informed decisions and maximize investment returns." />
            <hr className="my-4 w-full border-gray-300" />

            <QuestionItem title='Who are the experts behind the program?' answer="The program is designed and led by experienced investors and professionals from the Latam entrepreneurial ecosystem, with years of successful investment experience and deep market knowledge." />
            <hr className="my-4 w-full border-gray-300" />

            <QuestionItem title='What will I learn in the program?' answer="You will learn how to identify promising startups, conduct effective due diligence, understand different business models, evaluate founding teams, and much more. You will also receive practical advice and real case studies." />
            <hr className="my-4 w-full border-gray-300" />

            <QuestionItem title='Are there any prerequisites to join the program?' answer="No specific prior knowledge is required, although a basic understanding of finance and business can be helpful. The program is designed to be accessible to both beginners and experienced investors." />
            <hr className="my-4 w-full border-gray-300" />

            <Disclosure>
              {({ open }: { open: boolean }) => (
                <>
                  <Disclosure.Button className="font-semibold text-lg text-left flex gap-2 justify-between items-center w-full py-3 px-4 bg-white hover:bg-gray-100 transition-colors duration-300 rounded-lg shadow-md">
                    <p className='block max-w-[90%]'>Data Sharing and Privacy Policy</p>
                     <ChevronDownIcon className={clsx("w-6 h-6 transition-transform", open ? "rotate-180" : "rotate-0")} />
                  </Disclosure.Button>

                  <Animation>
                    <Disclosure.Panel className="text-blue-600 my-4 px-4">
                      <Link href={"/data_sharing"}>Data Sharing and Privacy Policy Page</Link>
                    </Disclosure.Panel>
                  </Animation>
                </>
              )}
            </Disclosure>
            <hr className="my-4 w-full border-gray-300" /> 

            <QuestionItem title='How can I get in touch with you?' answer="Feel free to email us at info@entrepreneurial.com." />
          </div>
        </section>
      </Fade>

      <Fade triggerOnce>        
        <section className='relative pb-12 md:pb-20 px-4 sm:px-6'>
          <p className='text-xl text-black max-w-4xl mx-auto text-center'>Still have more questions? Contact us <a href='mailto:info@fundraisingschool.com' className='text-EI_purple hover:text-EI_green transition-colors'>info@entrepreneurial.com</a> </p>
        </section>
      </Fade>
    </>
  )
}
