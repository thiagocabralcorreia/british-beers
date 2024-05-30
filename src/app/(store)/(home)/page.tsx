import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/london-pride.png"
          alt="London Pride beer bottle"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-4 max-w-[280px] rounded-md border-2 border-amber-600 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">London Pride</span>
          <span className="flex h-full items-center justify-center rounded-sn bg-red-800 px-4 font-semibold">
            £14.50
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/london-porter.png"
          alt="London Porter beer bottle"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-4 max-w-[280px] rounded-md border-2 border-amber-600 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">London Porter</span>
          <span className="flex h-full items-center justify-center rounded-sn bg-red-800 px-4 font-semibold">
            £16.00
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/honey-drew.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-4 max-w-[280px] rounded-md border-2 border-amber-600 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Honey Drew</span>
          <span className="flex h-full items-center justify-center rounded-sn bg-red-800 px-4 font-semibold">
            £16.00
          </span>
        </div>
      </Link>
    </div>
  );
}
