import React from 'react';
import { Fade } from "react-awesome-reveal";

export default function AboutUs() {
    return (
      <section id='about' className="bg-white pt-40 pb-20 px-6 flex justify-center items-center min-h-screen">
        <Fade triggerOnce>
            <div className=" text-center px-10">
                <h1 className="lg:py-10 lg:text-6xl lg:leading-9 lg:font-extrabold ">
                    Welcome to <span className='text-gradient'>Entrepreneurial Investing</span>
                </h1>
                <p className="lg:mt-4 lg:text-xl lg:leading-7 text-gray-700 text-sm">
                    Your gateway to mastering the art of investing in startups across Latin America. Our mission is to empower aspiring and seasoned investors with the knowledge, tools, and network needed to identify and invest in the most promising startups in the region.
                </p>
                <p className="lg:mt-6 lg:text-lg lg:leading-7 text-gray-700">
                    At <span className="text-gradient font-bold">Entrepreneurial Investing</span>, we believe that investing in startups should be accessible and informed. Our team comprises experienced investors, industry experts, and passionate professionals dedicated to demystifying the startup investment landscape in Latam. We offer comprehensive resources, from in-depth courses and expert-led workshops to exclusive networking opportunities with top investors and entrepreneurs.
                </p>
            </div>
        </Fade>
      </section>
    );
};
