import Footer from "@/components/Footer";
import MyNavbar from "@/components/MyNavbar";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <div className="background">
          <MyNavbar />
        <div className="flex justify-center">
          <h1 className="frontPage-header text-white text-5xl mt-9 py-9 w-3/4 md:text-7xl xl:text-6xl text-center ">Foster &#38; Sons Construction</h1>
        </div>
        <div className="text-center my-9">
          <p className=" text-3xl lg:text-8xl text-white font-bold">
            BUILDING YOUR DREAMS
          </p>
          <p className="text-2xl text-gray-300 my-9  py-9 mx-auto xl:w-2/3">
            Reliable and efficient construction services for residential and commercial properties.
          </p>
          <div className=" text-center my-9 ">
            <Link href='/projectGallery' target='blank' rel='noopener noreferrer'>
              <button
                className='flex justify-center items-center my-8 mx-auto px-4 py-2 rounded-lg  bg-gradient from-gray-700 to gray-900  text-gray-100 font-bold text-xl hover:bg-white hover:text-black'
              >
                OUR PROJECTS <IoIosArrowRoundForward className="text-4xl font-bold text-gray-100 hover:bg-white hover:text-black" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white h-full my-9 mx-3 ">
        <div className="sm:flex flex-row ">
          <div className="sm:flex sm:flex-col">
            <h3 className="font-bold sm:text-lg sm:mr-9">WHY CHOOSE US?</h3>
            <div className=" h-2 sm:h-1 w-1/2 md:w-4/5 bg-black mt-4 mb-8"></div>
          </div>
          <div className="sm:flex sm:flex-row">
            <div className="mx-2">
              <Image
                src="/images/homepageimage.jpg"
                alt="Why Choose Us"
                width={1000}
                height={500}
              />
              <h2 className="font-anton font-bold mt-2 sm:text-xl">
                HIGH QUALITY MATERIALS
              </h2>
              <p className="mb-5 text-lg sm:text-sm">
                We use only the best materials to ensure durability and satisfaction.
              </p>
            </div>
            <div className="mx-2">
              <Image
                src="/images/homepageimage-2.jpg"
                alt="Why Choose Us"
                width={1000}
                height={500}
              />
              <h2 className="font-anton font-bold mt-2 sm:text-xl">
                EXPERIENCED TEAM
              </h2>
              <p className="mb-5 text-lg sm:text-sm">
                Our team has years of experience in the construction industry.
              </p>
            </div>
            <div className="mx-2">
              <Image
                src="/images/homeimage-3.jpg"
                alt="Why Choose Us"
                width={1000}
                height={500}
              />
              <h2 className="font-anton font-bold mt-2 sm:text-xl">
                TIMELY COMPLETION
              </h2>
              <p className="mb-5 text-lg sm:text-sm">
                We value your time and promise to complete projects within the agreed timeline.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="bg-gray-700 text-gray-200 rounded">
          <p className="p-5 text-2xl md:text-4xl lg:px-9">Foster & Sons are dedicated to delivering top-notch construction services for both residential and commercial clients. With years of industry experience, we guarantee professional, efficient, and reliable service tailored to your specific needs.</p>
        </div> */}
        <div className="bg-gray-700 text-gray-200 p-4 rounded">
          <h1 className="text-4xl text-center text-white my-3">
            READY TO BUILD?
          </h1>
          <p className="text-xl text-center py-4">
            Contact us today to start your construction project and turn your vision into reality.
          </p>
          <div className=" text-center my-9 md:flex md:flex-row md:justify-center">
            <Link href='/' target='blank' rel='noopener noreferrer'>
              <button
                className='flex justify-center items-center my-1 mx-auto px-4 py-2 rounded-lg w-5/6 md:w-11/12  bg-gray-300  text-gray-700 font-bold text-xl'
              >
                GET IN TOUCH
              </button>
            </Link>
            <Link href='/projectGallery' target='blank' rel='noopener noreferrer'>
              <button
                className='flex justify-center items-center my-1 mx-auto px-4 py-2 rounded-lg w-5/6 md:w-11/12  bg-gray-300  text-gray-700 font-bold text-xl'
              >
                OUR PROJECTS <IoIosArrowRoundForward className="text-4xl font-bold text-gray-700" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
