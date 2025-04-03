
"use client";

import React from 'react';
import MyNavbar from '@/components/MyNavbar';
import Footer from '@/components/Footer';
import { FaHammer, FaHome, FaTree, FaRoad } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa6';
import Image from 'next/image';

const services = [
    {
        icon: <FaHammer />,
        title: "Carpentry",
        description: "Expert carpentry services providing bespoke woodwork solutions for homes and offices.",
        image: "/images/galleryImages/galleryimage5.jpg"
    },
    {
        icon: <FaHome />,
        title: "Building Extensions",
        description: "Custom extensions designed to enhance your living space and property value.",
        image: "/images/galleryImages/galleryimage16.jpg"
    },
    {
        icon: <FaHome />,
        title: "Roofing",
        description: "Reliable roofing installations and repairs ensuring maximum durability.",
        image: "/images/galleryImages/galleryimage17.jpg"
    },
    {
        icon: <FaTree />,
        title: "Gardens",
        description: "Creative landscaping services transforming outdoor spaces into beautiful gardens.",
        image: "/images/galleryImages/galleryimage18.jpg"
    },
    {
        icon: <FaRoad />,
        title: "Driveways",
        description: "Elegant driveways that improve your home's curb appeal and functionality.",
        image: "/images/galleryImages/galleryimage10.jpg"
    },
    {
        icon: <FaDoorOpen />,
        title: "Windows and Doors",
        description: "High-quality installations to enhance home aesthetics, security, and insulation.",
        image: "/images/galleryImages/galleryimage1.jpg"
    }
];

const ServicesPage = () => {
    return (
        <div>
            <div className='gallery-background'>
                <MyNavbar />
            </div>
            <div className="container mx-auto px-4 lg:px-24 py-12">
                <h1 className="text-center text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    Our Services
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                            <div className="relative w-full h-48">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-4xl text-sky-900 mr-4">
                                        {service.icon}
                                    </span>
                                    <h2 className="text-2xl font-semibold text-gray-900">
                                        {service.title}
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-700">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
