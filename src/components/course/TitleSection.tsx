import { VideoCameraIcon } from "@heroicons/react/24/outline";

export default function TitleSection({ nameSection }: { nameSection: string }) {
  return (
    <header className="flex h-24 w-full flex-col justify-center bg-white pl-7">
      <div className="mt-4 flex items-center">
        <VideoCameraIcon className="mr-2 size-8" />
        <h2 className="text-2xl font-black text-darkFsGray ">{nameSection}</h2>
      </div>
      <p className="mb-4 block font-normal">All you need for fundraising</p>
    </header>
  );
}
