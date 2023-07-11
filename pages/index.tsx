import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="relative w-full h-screen bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
          autoPlay
          muted
          loop
        >
          <source src="/videos/beer.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeo.
        </video>
        <div className="flex flex-col relative z-10 w-full h-full text-center content-center justify-center m-auto">
          <h1 className="text-4xl font-semibold font-oswald leading-tight text-white uppercase">
            Discover the Authentic
            <br />
            Flavors of British Beers
          </h1>
          <p className="text-lg pt-3 text-white">
            Indulge in the art and pleasure of best brews
          </p>
        </div>
      </div>
    </Layout>
  );
}
