 "use client"
import AboutUs from "@/components/AboutUs";
import Modules from "@/components/Program";
import Questions from "@/components/QA";
import Sponsors from "@/components/Sponsors";
import { Fade, Bounce, Zoom, Slide} from "react-awesome-reveal";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-50">
        <h1 className="text-2xl font-bold pl-4 sm:pl-14">ENTREPRENEURIAL</h1>
        <nav>
          <ul className="flex space-x-4 sm:space-x-10 text-black font-bold">
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
        <button className="border border-EI_purple text-EI_green py-2 px-2 sm:px-4 rounded mr-4 sm:mr-24 hover:bg-EI_green hover:text-white hover:border-EI_green duration-200">
          Let&apos;s do it
        </button>
      </header>
      

      <main className="flex flex-col justify-center flex-1 px-4 sm:px-6 lg:px-8 mt-32 sm:mt-44">
        <section>
          <Zoom cascade duration={900} triggerOnce>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-4 pl-4 sm:pl-11">
              Learn To <span className="text-gradient">Invest</span> In <span className="text-gradient">Startups</span> Like The <span className="text-gradient">Best In Latam</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl pl-4 sm:pl-12 pt-4">
              Learn to invest in startups like the best in Latam. Discover strategies, tips, and secrets from regional experts to make smart decisions and maximize your investments.
            </p>
          </Zoom>
        </section>
          <AboutUs />
          <Modules />
          <Sponsors />
          <Questions />   
      </main>

      <footer className="bg-white text-center p-4">
        <p className="text-gray-600">
          All rights reserved Entrepreneurial Investing | Designed and built with love - Copyright© 2024
        </p>
      </footer>
    </div>
  );
}