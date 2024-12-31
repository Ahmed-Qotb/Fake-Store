import Image from "next/image";
import nestJsLogo from "@/assets/nestjs-plain-wordmark.1024x343.png"
import nextJsLogo from "@/assets/nextjs-removebg-preview.png"
export default function Home() {
  return (
    <section className="flex justify-center items-center flex-col text-lg">
      {/* catching phrase */}
      <div className=" text-center bg-gradient-to-b from-black to-[#121212]  w-[100%]  py-8 p-5">
        <h1 className="text-5xl font-bold text-white mb-5">Fake Store</h1>
        <p className="text-lg sm:text-xl">
          A Fake Store using 
          <span className="extra-color-text font-bold"> fake store api </span>
          and
          <span className="extra-color-text font-bold"> Next.js </span>,
        </p>
      </div>

      <div className="container">
        <hr className="text-white m-8 sm:mb-0"/>
        {/* wepsite description */}
        <div className=" sm:flex justify-center items-center">
          {/* images logo nest and d\next js */}
          <div className="flex justify-center items-center sm:w-[20%]">
            <div className="">
            <Image 
            src={nextJsLogo}
            width={500}
            height={500}
            alt="nextjs logo"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}