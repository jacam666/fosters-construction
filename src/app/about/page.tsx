// About.tsx
import Footer from '@/components/Footer';
import MyNavbar from '@/components/MyNavbar';
import Slider from '@/components/RatingsSlider';
import Image from 'next/image';
import { NextPage } from 'next';

const About: NextPage = () => {
    return (
        <div className="  min-h-screen">
            <div className="gallery-background">
                <MyNavbar />
            </div>
            <div className="max-w-6xl mx-auto py-12 px-4">
                <div className="text-center ">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">About Foster &#38; Sons</h1>
                    <p className="text-gray-600 mt-4">
                        Family-owned construction excellence
                    </p>
                </div>

                <section className="bg-white shadow-xl rounded-xl p-8 ">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Who We Are</h2>
                    <p className="text-gray-600 mb-6">
                        Foster &#38; Sons delivers top-notch residential and commercial construction services, emphasizing sustainability, quality, and client satisfaction.
                    </p>
                    <div className="grid md:grid-cols-4 gap-6">
                        <Image
                            src="/images/galleryImages/galleryimage1.jpg"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover shadow-lg"
                        />
                        <Image
                            src="/images/galleryImages/galleryimage10.jpg"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover shadow-lg"
                        />
                        <Image
                            src="/images/galleryImages/galleryimage3.jpg"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover shadow-lg"
                        />
                        <Image
                            src="/images/galleryImages/galleryimage7.jpg"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover shadow-lg"
                        />
                    </div>
                </section>

                <section className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl rounded-xl p-8 my-6">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Values</h2>
                    <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
                        <li>Integrity: Operating honestly and ethically.</li>
                        <li>Quality: Superior craftsmanship in every project.</li>
                        <li>Customer Satisfaction: Prioritizing client needs.</li>
                        <li>Sustainability: Environmentally conscious practices.</li>
                        <li>Innovation: Utilizing cutting-edge methods.</li>
                    </ul>
                </section>
                <section className="bg-white shadow-xl rounded-xl p-8 my-6">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Meet the Team</h2>
                    <p className="text-gray-600">
                        Our professional team of skilled tradespeople ensures each project meets the highest standards, on-time and within budget.
                    </p>
                </section>
                <section className="bg-gradient-to-r from-green-50 to-emerald-50 shadow-xl rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Get In Touch</h2>
                    <p className="text-gray-600 mb-4">
                        Ready to start your project or have questions? Contact our friendly team today!
                    </p>
                    <a
                        data-mdb-ripple-init
                        className="px-6 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition "
                        href="/contactUs"
                        role="button"
                    >
                        Contact Us
                    </a>
                </section>
                <div className="mt-16">
                    <Slider />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
