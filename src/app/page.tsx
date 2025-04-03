
import Footer from '@/components/Footer';
import MyNavbar from '@/components/MyNavbar';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function Home() {
  return (
    <div>
      <div className="background">
        <MyNavbar />
        <header className="text-center py-16 px-4">
          <h1 className="text-white text-5xl lg:text-7xl font-bold mb-6">
            Foster & Sons Construction
          </h1>
          <p className="text-gray-300 text-xl lg:text-2xl">
            Reliable and efficient construction services for residential and commercial properties.
          </p>
          <Link href="/projectGallery">
            <button className="inline-flex items-center bg-sky-700 text-white hover:bg-sky-600 transition duration-300 ease-in-out mt-8 px-6 py-3 rounded-lg font-bold">
              OUR PROJECTS
              <IoIosArrowRoundForward className="ml-2 text-3xl" />
            </button>
          </Link>
        </header>
      </div>

      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'High Quality Materials', img: '/images/homepageimage.jpg', desc: 'We use only the best materials to ensure durability and satisfaction.' },
            { title: 'Experienced Team', img: '/images/homepageimage-2.jpg', desc: 'Our team has years of experience in the construction industry.' },
            { title: 'Timely Completion', img: '/images/homeimage-3.jpg', desc: 'We value your time and promise to complete projects within the agreed timeline.' }
          ].map((item, idx) => (
            <div key={idx} className="shadow-lg rounded-lg overflow-hidden">
              <Image src={item.img} alt={item.title} width={500} height={300} className="object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-gradient-to-r from-sky-800 to-sky-600 py-16 px-4">
        <h3 className="text-4xl font-bold text-white mb-4">
          Ready to Build?
        </h3>
        <p className="text-xl text-gray-200 mb-8">
          Contact us today to start your construction project and turn your vision into reality.
        </p>
        <Link href="/contactUs">
          <button className="bg-white text-sky-800 hover:bg-gray-200 transition duration-300 ease-in-out px-6 py-3 rounded-lg font-bold">
            Contact Us
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
