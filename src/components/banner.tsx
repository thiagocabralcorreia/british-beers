import Image from "next/image";
import bannerImage from "../../public/banner.jpg";

export function Banner() {
  return (
    <div className="relative w-full h-screen max-h-[60vh] mb-6">
      <Image
        src={bannerImage}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>{" "}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          More than just a beverage
        </h1>
      </div>
    </div>
  );
}
