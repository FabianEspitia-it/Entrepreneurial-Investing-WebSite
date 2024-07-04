import Growth from "./icons/GrowthSVG";
import Dialog from "./icons/DialogSVG";
import React from "react";
import Hands from "./icons/HandsSVG";
import Org from "./icons/OrgSVG";
import { Fade } from "react-awesome-reveal";

export default function PitchPractice() {
  return (
    <section
      id="pitch"
      className="relative flex flex-col items-center md:px-44 py-32"
    >
      <Fade triggerOnce duration={1500}>
        <h2 className="text-4xl font-bold mb-4 text-center">
          Our weekly Pitch Practice is not just a routine, it is a{" "}
          <span className="text-gradient-2">ritual of excellence</span>
        </h2>
        <p className="text-center mb-8 text-gray-700">
          Are you looking for capital or just want to improve your communication
          skills? This is the place for you!
          <br />
          Come practice your pitch and receive feedback from experienced
          investors in the region
        </p>
        <div className="md:flex md:flex-row md:gap-16 gap-8 pt-8 grid grid-cols-2 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-36 md:size-40 border-2">
            <Org />
            <p className="text-center mt-4 text-gray-700">
              Present your pitch in 5 minutes
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-36 md:size-40 border-2">
            <Dialog />
            <p className="text-center mt-4 text-gray-700">Receives feedback</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-36 md:size-40 border-2">
            <Hands />
            <p className="text-center mt-4 text-gray-700">
              Connect with investors
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-36 md:size-40 border-2">
            <Growth />
            <p className="text-center mt-4 text-gray-700">
              Improve your communication and pitch
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
