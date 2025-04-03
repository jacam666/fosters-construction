// ContactUs.tsx
// Description: This is the contact page for the Foster and Sons website. It includes a Google Maps embed, contact information, and social media links. The page is styled using Tailwind CSS and includes a navbar and footer component.
"use client";

import React from 'react';
import MyNavbar from "@/components/MyNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MDBIcon } from 'mdb-react-ui-kit';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-900">
            <div className="gallery-background">
                <MyNavbar />
            </div>
            <main className="container mx-auto py-10 px-4 lg:px-16">
                <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8">
                    Get in Touch
                </h1>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Google Maps Embed */}
                    <div className="rounded-xl overflow-hidden shadow-xl h-96">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.22219115099!2d-0.909866747581021!3d52.04062234473852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b1cba1e22e65%3A0x4575d0c3b5ffb3b5!2sMilton%20Keynes%2C%20UK!5e0!3m2!1sen!2sin!4v1614165949845!5m2!1sen!2sin"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                        <p className="text-lg mb-4">
                            <MDBIcon icon="map-marker-alt" className="mr-2 text-blue-500" />
                            Milton Keynes, Buckinghamshire
                        </p>
                        <p className="text-lg mb-4">
                            <MDBIcon icon="phone-alt" className="mr-2 text-blue-500" />
                            <a href="tel:07444365428" className="hover:underline">07444 365428</a>
                        </p>
                        <p className="text-lg mb-4">
                            <MDBIcon icon="envelope" className="mr-2 text-blue-500" />
                            <a href="mailto:info@fosterandsons.com" className="hover:underline">info@fosterandsons.com</a>
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
                            <div className="flex space-x-4 text-2xl">
                                <Link href="https://www.facebook.com/people/Foster-Sons/100068109994876/">
                                    <MDBIcon fab icon="facebook" className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors" />
                                </Link>
                                <Link href="#">
                                    <MDBIcon fab icon="twitter" className="text-blue-400 hover:text-blue-600 cursor-pointer transition-colors" />
                                </Link>
                                <Link href="#">
                                    <MDBIcon fab icon="instagram" className="text-pink-500 hover:text-pink-700 cursor-pointer transition-colors" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl text-center">
                    <h2 className="text-3xl font-bold mb-3">Ready to Start Your Project?</h2>
                    <p className="mb-6">We’re here to help you every step of the way. Reach out now!</p>
                    <Link href="/contact">
                        <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">
                            Contact Now
                        </button>
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;