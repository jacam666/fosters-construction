
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
        <header className="text-center py-20 px-4 min-h-[80vh] flex flex-col justify-center">
          <h1 className="text-white text-5xl lg:text-7xl font-bold mb-6 frontPage-header drop-shadow-lg">
            Foster & Sons Construction
          </h1>
          <p className="text-gray-100 text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Reliable and efficient construction services for residential and commercial properties. 
            <span className="block mt-2 text-lg lg:text-xl text-gray-200">
              Building dreams with quality craftsmanship since 1995.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <Link href="/projectGallery" className="group">
              <button className="inline-flex items-center bg-sky-700 text-white hover:bg-sky-600 transition-all duration-300 ease-in-out px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105">
                VIEW OUR PROJECTS
                <IoIosArrowRoundForward className="ml-2 text-3xl transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/contactUs" className="group">
              <button className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-800 transition-all duration-300 ease-in-out px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl backdrop-blur-sm">
                GET FREE QUOTE
                <span className="ml-2 transition-transform group-hover:scale-110">💬</span>
              </button>
            </Link>
          </div>
        </header>
      </div>

      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'High Quality Materials', 
              img: '/images/homepageimage.jpg', 
              desc: 'We source only premium materials from trusted suppliers to ensure durability and lasting satisfaction.',
              icon: '🏆'
            },
            { 
              title: 'Experienced Team', 
              img: '/images/homepageimage-2.jpg', 
              desc: 'Our certified craftsmen bring decades of experience and expertise to every project.',
              icon: '👷'
            },
            { 
              title: 'Timely Completion', 
              img: '/images/homeimage-3.jpg', 
              desc: 'We respect your schedule and consistently deliver projects on time and within budget.',
              icon: '⏰'
            }
          ].map((item, idx) => (
            <div key={idx} className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <Image src={item.img} alt={item.title} width={500} height={300} className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4 bg-white rounded-full p-3 text-2xl">
                  {item.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-16 px-4 bg-sky-700 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '25+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Expert Craftsmen' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-sky-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Overview Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Construction Services</h2>
          <p className="text-xl text-gray-300 mb-12">From residential homes to commercial buildings, we deliver excellence</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏠', title: 'Residential', desc: 'Custom homes, renovations, additions' },
              { icon: '🏢', title: 'Commercial', desc: 'Office buildings, retail spaces, warehouses' },
              { icon: '🔨', title: 'Remodeling', desc: 'Kitchen, bathroom, and interior upgrades' },
              { icon: '🏗️', title: 'New Construction', desc: 'Ground-up builds with modern techniques' }
            ].map((service, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <Link href="/services">
            <button className="mt-8 bg-sky-700 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold transition duration-300">
              View All Services
            </button>
          </Link>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'John Smith', review: 'Outstanding quality and professionalism. They completed our kitchen renovation ahead of schedule!', rating: 5, project: 'Kitchen Renovation' },
            { name: 'Sarah Johnson', review: 'The team was incredible. Great communication throughout the entire commercial build process.', rating: 5, project: 'Commercial Building' },
            { name: 'Mike Davis', review: 'Best construction company in the area. High-quality materials and fair pricing.', rating: 5, project: 'Home Addition' }
          ].map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">{"review.review"}</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.project}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-gradient-to-r from-sky-800 to-sky-600 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream?
          </h3>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Contact us today for a free consultation and quote. Let&apos;s discuss how we can 
            bring your construction vision to life with our expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contactUs">
              <button className="bg-white text-sky-800 hover:bg-gray-100 transition duration-300 ease-in-out px-8 py-4 rounded-lg font-bold text-lg">
                Get Free Quote
              </button>
            </Link>
            <Link href="tel:+1234567890">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-800 transition duration-300 ease-in-out px-8 py-4 rounded-lg font-bold text-lg">
                Call Now: (123) 456-7890
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
