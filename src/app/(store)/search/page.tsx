import Image from "next/image";
import Link from "next/link";

export default async function Search() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <p className="text-sm">
        Results for: <span className="font-semibold">pride</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/london-pride`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src="/london-pride.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={480}
            height={480}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-md border-2 border-amber-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">London Pride</span>
            <span className="flex h-full items-center justify-center rounded-sm bg-red-800 px-4 font-semibold">
              {Number(14).toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        <Link
          href={`/product/london-pride`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src="/london-pride.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={480}
            height={480}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-md border-2 border-amber-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">London Pride</span>
            <span className="flex h-full items-center justify-center rounded-sm bg-red-800 px-4 font-semibold">
              {Number(14).toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        <Link
          href={`/product/london-pride`}
          className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image
            src="/london-pride.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={480}
            height={480}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-md border-2 border-amber-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">London Pride</span>
            <span className="flex h-full items-center justify-center rounded-sm bg-red-800 px-4 font-semibold">
              {Number(14).toLocaleString("en-GB", {
                style: "currency",
                currency: "GBP",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
