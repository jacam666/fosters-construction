// Project: Next.js and Tailwind CSS Gallery Page
// Description: This code creates a gallery page using Next.js and Tailwind CSS. It includes a responsive grid layout for images, a modal for viewing images in full size, and a footer component. The images are dynamically generated from a specified folder.
"use client";

import Footer from '@/components/Footer';
import MyNavbar from '@/components/MyNavbar';
import { NextPage } from 'next';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
        border: 'none',
        padding: 0,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
};

Modal.setAppElement('body');

const Gallery: NextPage = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage('');
    };

    const images = Array.from({ length: 20 }, (_, i) => `/images/galleryImages/galleryimage${i + 1}.jpg`);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="gallery-background">
                <MyNavbar />
            </div>
            <div className="py-12">
                <h1 className="text-5xl md:text-6xl text-center font-bold text-gray-800 mb-8">Gallery</h1>
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, idx) => (
                        <div key={idx} className="cursor-pointer">
                            <Image
                                src={src}
                                alt={`Gallery image ${idx + 1}`}
                                width={500}
                                height={400}
                                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                                onClick={() => openModal(src)}
                            />
                        </div>
                    ))}
                </div>

                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                    <div className="relative flex flex-col items-center">
                        <Image
                            src={selectedImage}
                            alt="Selected Image"
                            width={1000}
                            height={800}
                            className="rounded-xl max-h-[80vh] object-contain shadow-xl"
                        />
                        <button
                            onClick={closeModal}
                            className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;
