import React from 'react';
import { Fade } from "react-awesome-reveal";

export default function AboutUs() {
    return (
      <section id='about' className="bg-white pt-40 pb-20 px-6 flex justify-center items-center min-h-screen">
        <Fade triggerOnce>
            <div className=" text-center">
                <h1 className="py-10 text-6xl leading-9 font-extrabold">
                    Welcome to <span className='text-gradient'>Entrepreneurial Investing</span>
                </h1>
                <p className="mt-4 text-xl leading-7 text-gray-700">
                    Your gateway to mastering the art of investing in startups across Latin America. Our mission is to empower aspiring and seasoned investors with the knowledge, tools, and network needed to identify and invest in the most promising startups in the region.
                </p>
                <p className="mt-6 text-lg leading-7 text-gray-700">
                    At <span className="text-gradient font-bold">Entrepreneurial Investing</span>, we believe that investing in startups should be accessible and informed. Our team comprises experienced investors, industry experts, and passionate professionals dedicated to demystifying the startup investment landscape in Latam. We offer comprehensive resources, from in-depth courses and expert-led workshops to exclusive networking opportunities with top investors and entrepreneurs.
                </p>
            </div>
        </Fade>
      </section>
    );
};
