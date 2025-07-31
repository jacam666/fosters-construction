// ContactUs.tsx
// Description: Modern contact page for Foster & Sons Construction with elegant design and interactive elements
"use client";

import React from 'react';
import MyNavbar from "@/components/MyNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="gallery-background">
                <MyNavbar />
                <header className="text-center py-20 px-4 min-h-[60vh] flex flex-col justify-center items-center">
                    <h1 className="text-white text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
                        Get In Touch
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-100 text-xl lg:text-2xl max-w-2xl drop-shadow-md leading-relaxed">
                        Ready to bring your construction vision to life? Let&apos;s discuss your project and make it happen together.
                    </p>
                </header>
            </div>

            <div className="py-16">
                <div className="container mx-auto px-6">
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Google Maps Embed */}
                        <div className="rounded-3xl overflow-hidden shadow-xl h-96">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.22219115099!2d-0.909866747581021!3d52.04062234473852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b1cba1e22e65%3A0x4575d0c3b5ffb3b5!2sMilton%20Keynes%2C%20UK!5e0!3m2!1sen!2sin!4v1614165949845!5m2!1sen!2sin"
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Information</h2>
                            
                            {/* Contact Items */}
                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-center group">
                                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
                                        <a href="tel:07444365428" className="text-sky-600 hover:text-sky-700 text-lg font-medium transition-colors duration-200">
                                            07444 365428
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center group">
                                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
                                        <a href="mailto:info@fosterandsons.com" className="text-sky-600 hover:text-sky-700 text-lg font-medium transition-colors duration-200">
                                            info@fosterandsons.com
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center group">
                                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 text-lg">Location</h3>
                                        <p className="text-gray-600 text-lg">Milton Keynes, Buckinghamshire</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Follow Us</h3>
                                <div className="flex justify-center space-x-6">
                                    <Link href="https://www.facebook.com/people/Foster-Sons/100068109994876/" target="_blank" className="group">
                                        <div className="bg-blue-600 p-3 rounded-2xl hover:bg-blue-700 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                            </svg>
                                        </div>
                                    </Link>
                                    <Link href="#" target="_blank" className="group">
                                        <div className="bg-sky-500 p-3 rounded-2xl hover:bg-sky-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                            </svg>
                                        </div>
                                    </Link>
                                    <Link href="#" target="_blank" className="group">
                                        <div className="bg-pink-500 p-3 rounded-2xl hover:bg-pink-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="mt-16 bg-gradient-to-br from-sky-500 via-blue-600 to-purple-700 text-white rounded-3xl shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative p-12 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Dream?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
                                Contact us today for a free consultation and quote. Let&apos;s bring your construction vision to life with expert craftsmanship and dedication.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="mailto:info@fosterandsons.com" className="group">
                                    <button className="bg-white text-blue-700 font-bold py-4 px-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                                        Get Free Quote
                                    </button>
                                </Link>
                                <Link href="tel:07444365428" className="group">
                                    <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-blue-700 transition-all duration-300 transform group-hover:scale-105">
                                        Call Now: 07444 365428
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default ContactPage;
