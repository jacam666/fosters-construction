import MyNavbar from "@/components/MyNavbar";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <div className="background">
        <div>
          <MyNavbar />
        </div>
        <div className="flex justify-center">
          <h1 className="frontPage-header text-white text-5xl mt-9 py-9 w-3/4 md:text-7xl xl:text-6xl text-center ">Foster & Sons Construction</h1>
        </div>
        <div className="text-center my-9">
          <p className=" text-3xl lg:text-8xl text-white font-bold">
            BUILDING YOUR DREAMS
          </p>
          <p className="text-2xl text-gray-300 my-9  py-9 mx-auto xl:w-2/3">
            Reliable and efficient construction services for residential and commercial properties.
          </p>
          <div className=" text-center my-9">
            <Link href='/' target='blank' rel='noopener noreferrer'>
              <button
                className='flex justify-center items-center  my-8 mx-auto px-4 py-2 rounded-lg  bg-gray-600  text-white font-bold text-xl'
              >
                OUR PROJECTS <IoIosArrowRoundForward className="text-4xl font-bold text-white" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white h-full my-9 mx-3">
        <div>
          <h3 className="font-bold">WHY CHOOSE US?</h3>
          <div className=" h-2 sm:h-1 w-1/2 md:w-2/5 bg-black mt-4 mb-8"></div>
          <div>
            <div>
              <Image
                src="/images/homepageimage.jpg"
                alt="Why Choose Us"
                width={1000}
                height={500}
              />
              <h2>
                HIGH QUALITY MATERIALS
              </h2>
              <p>
                We use only the best materials to ensure durability and satisfaction.
              </p>
            </div>
            <div>
              <Image
                src="/images/homepageimage-2.jpg"
                alt="Why Choose Us"
                width={1000}
                height={500}
              />
              <h2>
                EXPERIENCED TEAM
              </h2>
              <p>
                Our team has years of experience in the construction industry.
              </p>
            </div>
            <div>
              <Image
                src="/images/homeimage-3.jpg"
                alt="Why Choose Us"
                width={1000}
                height={500}
              />
              <h2>
                TIMELY COMPLETION
              </h2>
              <p>
                We value your time and promise to complete projects within the agreed timeline.
              </p>
            </div>

          </div>

        </div>


      </div>
    </div>
  );
}
