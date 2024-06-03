import Link from "next/link";
import Image from "next/image";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";
import avatar from "../../public/avatar.jpg";

export function Header() {
  return (
    <div className="flex items-center justify-between pt-8 px-8">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          British Beers
        </Link>

        <SearchForm />
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
