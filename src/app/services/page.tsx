
// Services.tsx
// Description: Modern services page for Foster & Sons Construction showcasing our comprehensive construction services
"use client";

import React from 'react';
import MyNavbar from '@/components/MyNavbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const services = [
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: "Carpentry",
        description: "Expert carpentry services providing bespoke woodwork solutions for homes and offices with precision craftsmanship.",
        image: "/images/galleryImages/galleryimage5.jpg"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: "Building Extensions",
        description: "Custom extensions designed to enhance your living space and property value with modern architectural solutions.",
        image: "/images/galleryImages/galleryimage16.jpg"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
        ),
        title: "Roofing",
        description: "Reliable roofing installations and repairs ensuring maximum durability and weather protection for your property.",
        image: "/images/galleryImages/galleryimage17.jpg"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: "Gardens",
        description: "Creative landscaping services transforming outdoor spaces into beautiful gardens that enhance your property's appeal.",
        image: "/images/galleryImages/galleryimage18.jpg"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
        title: "Driveways",
        description: "Elegant driveways that improve your home's curb appeal and functionality with durable, premium materials.",
        image: "/images/galleryImages/galleryimage10.jpg"
    },
    {
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
        ),
        title: "Windows and Doors",
        description: "High-quality installations to enhance home aesthetics, security, and insulation with premium fixtures and fittings.",
        image: "/images/galleryImages/galleryimage1.jpg"
    }
];

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className='gallery-background'>
                <MyNavbar />
                {/* Enhanced Header Section */}
                <header className="text-center py-20 px-4 min-h-[60vh] flex flex-col justify-center items-center">
                    <h1 className="text-white text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
                        Our Services
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-100 text-xl lg:text-2xl max-w-3xl drop-shadow-md leading-relaxed">
                        Professional construction services delivered with expertise, quality craftsmanship, and unwavering commitment to excellence.
                    </p>
                </header>
            </div>
            
            <div className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative w-full h-60 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            {service.icon}
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced CTA Section */}
                    <section className="mt-20 bg-gradient-to-br from-sky-500 via-blue-600 to-purple-700 text-white rounded-3xl shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative p-12 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
                            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
                                From initial consultation to project completion, we&apos;re here to bring your vision to life with professional expertise and attention to detail.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/contactUs" className="group">
                                    <button className="bg-white text-blue-700 font-bold py-4 px-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                                        Get Free Quote
                                    </button>
                                </a>
                                <a href="tel:07444365428" className="group">
                                    <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-blue-700 transition-all duration-300 transform group-hover:scale-105">
                                        Call: 07444 365428
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default ServicesPage;
