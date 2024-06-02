import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import { CartWidget } from "./cart-widget";
import avatar from "../../public/avatar.jpg";

export function Header() {
  return (
    <div className="flex items-center justify-between pt-8 px-8">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          British Beers
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-md bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500" />

          <input
            placeholder="Search"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src={avatar}
            className="h-8 w-8 rounded-full"
            width={30}
            height={30}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
