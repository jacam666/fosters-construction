import Footer from "@/components/Footer";
import MyNavbar from "@/components/MyNavbar";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <div className="background  opacity-95">
        <MyNavbar />
        <div className="flex justify-center">
          <h1 className=" text-white text-5xl mt-9 py-9 w-3/4  xl:text-7xl text-center ">Foster &#38; Sons Construction</h1>
        </div>
        <div className="text-center my-9">
          <h1 className="font-sans text-3xl lg:text-8xl text-white font-bold">
            BUILDING YOUR DREAMS
          </h1>
          <p className="font-sans text-2xl lg:text-3xl text-white my-9 mx-4 py-9 xl:w-2/3">
            Reliable and efficient construction services for residential and commercial properties.
          </p>
          <div className=" text-center my-9 ">
            <Link href='/projectGallery' target='blank' rel='noopener noreferrer'>
              <button
                className='flex justify-center items-center my-8 mx-auto px-4 py-2 rounded-lg  bg-gradient from-gray-700 to gray-900  text-gray-100 font-bold text-xl hover:bg-white hover:text-black'
              >
                OUR PROJECTS <IoIosArrowRoundForward className="text-4xl font-bold text-white hover:bg-white hover:text-black" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white h-full my-9 mx-3 ">
      <h3 className="font-bold sm:text-3xl ">Why Choose Us?</h3>
      <div className=" h-1 w-1/2 md:w-1/4 bg-black mt-4 mb-8"></div>
        <div className="sm:flex flex-row ">
          <div className="sm:flex sm:flex-col">
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="mx-2 text-center">
              <Image
                src="/images/homepageimage.jpg"
                alt="Why Choose Us"
                width={1000}
                height={500}
              />
              <h2 className="font-anton font-bold mt-2 sm:text-3xl">
                High Quality Materials
              </h2>
              <p className="mb-5 text-lg sm:text-xl text-gray-900">
                We use only the best materials to ensure durability and satisfaction.
              </p>
            </div>
            <div className="mx-2 text-center">
              <Image
                src="/images/homepageimage-2.jpg"
                alt="Why Choose Us"
                width={1000}
                height={500}
              />
              <h2 className="font-anton font-bold mt-2 sm:text-3xl">
                Experienced Team
              </h2>
              <p className="mb-5 text-lg sm:text-xl text-gray-900">
                Our team has years of experience in the construction industry.
              </p>
            </div>
            <div className="mx-2 text-center">
              <Image
                src="/images/homeimage-3.jpg"
                alt="Why Choose Us"
                width={1000}
                height={500}
              />
              <h2 className="font-anton font-bold mt-2 sm:text-3xl">
                Timely Completion
              </h2>
              <p className="mb-5 text-lg sm:text-xl text-gray-900">
                We value your time and promise to complete projects within the agreed timeline.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="bg-gray-700 text-gray-200 rounded">
          <p className="p-5 text-2xl md:text-4xl lg:px-9">Foster & Sons are dedicated to delivering top-notch construction services for both residential and commercial clients. With years of industry experience, we guarantee professional, efficient, and reliable service tailored to your specific needs.</p>
        </div> */}
        <div className="flex flex-col bg-sky-900 text-gray-200 p-4 rounded">
          <h1 className="text-4xl text-center font-bold text-white my-3">
            READY TO BUILD?
          </h1>
          <p className="text-xl text-center md:text-3xl py-4">
            Contact us today to start your construction project and turn your vision into reality.
          </p>
          <div className=" flex flex-row justify-center  w-full text-center my-6">
            <Link href='/contactUs' target='blank' rel='noopener noreferrer'>
              <button
                className='  sm:mx-6 mx-2 px-3 py-2 rounded-lg bg-sky-400  text-gray-900 font-bold text-xl hover:bg-sky-600 hover:text-white'
              >
                Contact Us
              </button>
            </Link>
            <Link href='/projectGallery' target='blank' rel='noopener noreferrer'>
              <button
                className='sm:mx-6 mx-2 px-3 py-2 rounded-lg bg-sky-400 text-gray-900 font-bold text-xl hover:bg-sky-600 hover:text-white '
              >
                Our Projects
                {/* Our Projects <IoIosArrowRoundForward className="text-4xl font-bold text-gray-700" /> */}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
