 "use client"
import { useState, useEffect } from 'react'
import AboutUs from "@/components/AboutUs";
import Modules from "@/components/Program";
import Questions from "@/components/QA";
import Sponsors from "@/components/Sponsors";
import { Bars3Icon} from '@heroicons/react/20/solid'
import { Fade, Bounce, Zoom, Slide} from "react-awesome-reveal";
import MobileMenu from '@/components/MobileMenu';

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
        <h1 className="lg:text-2xl lg:pl-12 font-bold pl-4 text-md ">ENTREPRENEURIAL</h1>
        <nav>
          <ul className="lg:flex space-x-4 sm:space-x-10 text-black font-bold hidden">
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_purple hover:text-gradient duration-200">
              <a href="#">Home</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_purple hover:text-gradient duration-200">
              <a href="#about">About Us</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_purple hover:text-gradient duration-200">
              <a href="#program">Program</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_purple hover:text-gradient duration-200">
              <a href="#">Team</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_purple hover:text-gradient duration-200">
              <a href="#questions">Q&A</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between items-center">
          <button className="border border-EI_purple text-EI_green p-2 rounded mr-12 hover:bg-EI_green hover:text-white hover:border-EI_green duration-200">
            Let&apos;s do it
          </button>
          <MobileMenu />
        </div>
        
      </header>
      
      <main className="flex flex-col justify-center flex-1 px-6 sm:px-6 lg:px-8 mt-32 sm:mt-44">
        <section>
          <Fade cascade duration={900} triggerOnce>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-4 pl-4 sm:pl-11">
              Learn To <span className="text-gradient">Invest</span> In <span className="text-gradient">Startups</span> Like The <span className="text-gradient">Best In Latam</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl pl-4 sm:pl-12 pt-4">
              Learn to invest in startups like the best in Latam. Discover strategies, tips, and secrets from regional experts to make smart decisions and maximize your investments.
            </p>
          </Fade>
        </section>
        <AboutUs />
        <Modules />
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