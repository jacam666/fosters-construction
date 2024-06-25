import Footer from "@/components/Footer";
import MyNavbar from "@/components/MyNavbar";
import { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
    return (
        <div>
            <div className="gallery-background">
                <MyNavbar />
            </div>
            <div className="min-h-screen py-10 px-5">
                <div className=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h1 className="frontPage-header text-4xl font-bold mb-4 text-gray-800">About Foster &#38; Sons</h1>
                        <div className="rounded-lg shadow-md p-2 lg:p-8">
                            <p className="text-gray-600 mb-4">
                                Foster &#38; Sons is a family-owned construction company with years of experience in the industry. Our mission is to deliver high-quality construction services with a focus on customer satisfaction and sustainable practices.
                            </p>
                            <p className="text-gray-600 mb-4">
                                We specialize in residential and commercial construction, offering a wide range of services from new builds to renovations and everything in between. Our team of skilled professionals is dedicated to ensuring that every project is completed on time, within budget, and to the highest standards of quality.
                            </p>
                            <p className="text-gray-600 mb-4">
                                At Foster &#38; Sons, we believe in building lasting relationships with our clients based on trust, transparency, and excellence. We take pride in our work and are committed to creating spaces that our clients will love for years to come.
                            </p>
                        </div>
                        <h2 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Our Values</h2>
                        <div className="rounded-lg shadow-md  p-4">
                            <div className="flex flex-col  xl:flex-row ">
                                <ul className="list-disc list-inside text-gray-600 mb-4 ">
                                    <li>Integrity: We operate with honesty and adhere to the highest ethical standards.</li>
                                    <li>Quality: We are committed to delivering superior craftsmanship on every project.</li>
                                    <li>Customer Satisfaction: Our clients are at the heart of everything we do.</li>
                                    <li>Sustainability: We use environmentally friendly practices and materials whenever possible.</li>
                                    <li>Innovation: We embrace new technologies and methods to improve our services.</li>
                                </ul>
                                <div className="flex flex-row justify-evenly lg:flex-row gap-3 ">
                                    <Image
                                        src="/images/galleryImages/galleryimage1.jpg"
                                        alt="About Us"
                                        width={200}
                                        height={200}
                                        className="rounded-lg object-cover object-center cursor-pointer"
                                    />
                                    <Image
                                        src="/images/galleryImages/galleryimage10.jpg"
                                        alt="About Us"
                                        width={200}
                                        height={200}
                                        className="rounded-lg object-cover object-center cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Our Team</h2>
                        <div className="rounded-lg shadow-md  p-2 lg:p-6">
                            <p className="text-gray-600">
                                Our team consists of skilled professionals with construction expertise who are enthusiastic and committed to delivering outstanding service. The expertise of our skilled tradespeople is essential in guaranteeing the triumphant completion of our projects.
                            </p>
                        </div>
                        <h2 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Contact Us</h2>
                        <div className="rounded-lg shadow-md  p-2 lg:p-6">
                            <p className="text-gray-600">
                                If you have any questions or would like to learn more about our services, please don&#8242;t hesitate to contact us. We look forward to working with you on your next construction project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}
export default About;