"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/outline";

const VideoSection: React.FC = () => {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold text-fsGray">Introduction</h1>
      <h2 className="mb-2 text-3xl font-bold">Why are we doing this?</h2>
      <div className="mb-4">
        <p className="text-sm font-semibold">Lesson 6 of 32</p>
        <iframe
          width="700"
          height="450"
          src="https://www.youtube.com/embed/mYXd_fTEWOA?si=e6RKsSGQtj5AYucO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="flex flex-row justify-between">
          <button
            onClick={() => console.log("Previous...")}
            className="mt-2 flex h-9  w-40 items-center justify-center gap-2 rounded-md bg-fsPurple px-3 text-white"
          >
            <ChevronLeftIcon className="size-4" />
            <span className="text-xs font-semibold">Previous lesson</span>
          </button>
          <button
            onClick={() => console.log("Completed...")}
            className="mt-2 flex h-9  w-40 items-center justify-center gap-2 rounded-md border border-fsPurple bg-white px-3 text-fsPurple"
          >
            <CheckCircleIcon className="size-4" />
            <span className="text-xs font-semibold">I Completed This</span>
          </button>
          <button
            onClick={() => console.log("Skip...")}
            className="mt-2 flex h-9  w-40 items-center justify-center gap-2 rounded-md border border-fsPurple bg-white px-3 text-fsPurple"
          >
            <NoSymbolIcon className="size-4" />
            <span className="text-xs font-semibold">Skip - Not Relevant</span>
          </button>
          <button
            onClick={() => console.log("Next...")}
            className="mt-2 flex h-9  w-40 items-center justify-center gap-2 rounded-md bg-fsPurple px-3 text-white"
          >
            <span className="text-xs font-semibold">Next lesson</span>
            <ChevronRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
