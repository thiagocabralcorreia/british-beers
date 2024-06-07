import Link from "next/link";
import Image from "next/image";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";
import avatar from "../../public/avatar.jpg";
import logo from "../../public/bb-logo.png";

export function Header() {
  return (
    <div className="flex items-center justify-between py-6 px-8 bg-[#151A3C] text-white">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl">
          <Image
            src={logo}
            alt=""
            className="h-12 w-12 rounded-full"
            width={100}
            height={100}
            quality={100}
          />
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-8">
        <CartWidget />

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
