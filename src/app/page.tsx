 "use client"
import { useState, useEffect } from 'react'
import AboutUs from "@/components/AboutUs";
import Modules from "@/components/Program";
import Questions from "@/components/QA";
import Sponsors from "@/components/Sponsors";
import { Bars3Icon} from '@heroicons/react/20/solid'
import { Fade, Bounce, Zoom, Slide} from "react-awesome-reveal";
import MobileMenu from '@/components/MobileMenu';
import PitchPractice from '@/components/PitchPractice';
import Image from 'next/image';


export default function Home() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])


  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-50  ${!top ? 'bg-white backdrop-blur-lg shadow-lg duration-200' : ''}`}>
        <a className='top-0' href="/">
          
          <Image className='pl-8' src="/images/loguitio verde.png" alt="EI" width={85} height={190} />
        </a> 
        {/* 
        <Image className='pl-6' src="/images/logo verde-03.png" alt="EI" width={170} height={190} />
        <h1 className="lg:text-2xl lg:pl-12 font-bold pl-4 text-md ">ENTREPRENEURIAL</h1>
        */}
        <nav className='pl-14'>
          <ul className="lg:flex space-x-10 text-gray-800 font-bold hidden">
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#">Home</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#about">About Us</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#program">Program</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#pitch">Pitch Practice</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#">Team</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#questions">Q&A</a>
            </li>
            
          </ul>
        </nav>
        <div className="flex justify-between items-center">
          <button className="border border-EI_new_green text-EI_new_green p-2 rounded-xl mr-24 hover:bg-EI_yellow hover:text-white hover:border-EI_yellow duration-200">
            Let&apos;s do it
          </button>
          <MobileMenu />
        </div>
        
      </header>
      
      <main className="flex flex-col justify-center flex-1 px-8 mt-44">
        <section>
          <Fade cascade duration={900} triggerOnce>
            <h1 className="lg:text-7xl lg:mb-4 lg:pl-8 text-4xl font-extrabold text-gray-900">
              Learn To <span className="text-gradient-2">Invest</span> In <span className="text-gradient-2">Startups</span> Like The <span className="text-gradient-2">Best In Latam</span>
            </h1>
            <p className="lg:text-xl lg:pl-11 pt-4 text-sm text-gray-600 max-w-3xl">
              Learn to invest in startups like the best in Latam. Discover strategies, tips, and secrets from regional experts to make smart decisions and maximize your investments.
            </p>
          </Fade>
        </section>
        <AboutUs />
        <Modules />
        <PitchPractice />
        <Sponsors />
        <Questions /> 

        {/*    
          
           
        */}
           
      </main>

      <footer className="bg-white text-center p-4">
        <p className="text-gray-600">
          All rights reserved Entrepreneurial Investing | Designed and built with love - Copyright© 2024
        </p>
      </footer>
    </div>
  );
}