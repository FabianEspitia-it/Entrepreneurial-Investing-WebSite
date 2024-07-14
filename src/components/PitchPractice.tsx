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
      className="relative flex flex-col items-center md:px-44 md:pt-28 py-20"
    >
      <Fade triggerOnce>
        <h2 className="md:text-4xl text-3xl font-semibold mb-4 text-center">
          Our Weekly Pitch Practice Is Not Just a Routine; It Is a{" "}
          <span className="text-gradient-2">Ritual of Excellence</span>
        </h2>
        <p className="text-center md:text-base text-sm text-gray-700">
          Are you looking for capital or just want to improve your communication
          skills? This is the place for you!
          <br />
          Come practice your pitch and receive feedback from experienced
          investors in the region
        </p>
        <div className="md:flex md:flex-row md:gap-7 gap-9 pt-8 grid grid-cols-2 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-32 md:size-40 border-2">
            <Org />
            <p className="text-center md:text-base text-sm mt-4 text-gray-700">
              Present your pitch in 5 minutes
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-32 md:size-40 border-2">
            <Dialog />
            <p className="text-center md:text-base text-sm mt-4 text-gray-700">
              Receives feedback
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-32 md:size-40 border-2">
            <Hands />
            <p className="text-center md:text-base text-sm mt-4 text-gray-700">
              Connect with investors
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-32 md:size-40 border-2">
            <Growth />
            <p className="text-center md:text-base text-sm mt-4 text-gray-700">
              Improve your communication and pitch
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
