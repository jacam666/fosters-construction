"use client";

import React from 'react';
import MyNavbar from "@/components/MyNavbar";
import Footer from "@/components/Footer";
import { FaHammer, FaHome, FaTree, FaRoad } from 'react-icons/fa'; // Importing icons from react-icons
import { NextPage } from 'next';
import { FaDoorOpen } from 'react-icons/fa6';
import Image from 'next/image';

const services = [
    {
        icon: <FaHammer />,
        title: "Carpentry",
        description: "Expert carpentry services, providing high-quality woodwork for your home and office.",
        image: "/images/galleryImages/galleryimage5.jpg"
    },
    {
        icon: <FaHome />,
        title: "Building Extensions",
        description: "Extend your home with our professional building extension services, customized to your needs.",
        image: "/images/galleryImages/galleryimage16.jpg"

    },
    {
        icon: <FaHome />, // Add another icon here if needed
        title: "Roofing",
        description: "Our expert team offers secure roofing services to protect your home from all weather conditions.",
        image: "/images/galleryImages/galleryimage17.jpg"

    },
    {
        icon: <FaTree />,
        title: "Gardens",
        description: "Transform your outdoor space with our garden design and landscaping services.",
        image: "/images/galleryImages/galleryimage18.jpg"

    },
    {
        icon: <FaRoad />,
        title: "Driveways",
        description: "Transform the aesthetic appeal of your residence by enhancing your home's driveway",
        image: "/images/galleryImages/galleryimage10.jpg"
    },
    {
        icon: <FaDoorOpen />,
        title: "Windows and Doors",
        description: "High-quality windows and doors designed to improve the aesthetics and security of your home.",
        image: "/images/galleryImages/galleryimage1.jpg"
    }
];

const ServicesPage: NextPage = () => {
    return (
        <div>
            <div className='gallery-background'>
            <MyNavbar />
            </div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="frontPage-header text-center text-6xl text-gray-800 font-bold py-8">Our Services</h1>
                <div className="services-grid my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="service-card mb-4 shadow-md p-6 text-center rounded-md flex flex-col justify-between">
                            
                            <div className="service-icon text-5xl mb-4">{service.icon}</div>
                            <h2 className="font-bold text-2xl">{service.title}</h2>
                            <p className="text-gray-600 mt-4">{service.description}</p>
                            <Image 
                            src={service.image || "/images/defaultImage.jpg"}
                            alt={service.title}
                            className='service-image mx-auto rounded-lg mt-4'
                            width={200}
                            height={200}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;