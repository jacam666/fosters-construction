"use client"

import Footer from '@/components/Footer';
import MyNavbar from '@/components/MyNavbar';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        border: 'none',
        width: '100%'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
};

export default function Gallery() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Modal.setAppElement(document.body);
        }
    }, []);

    function openModal(imageSrc: string) {
        setSelectedImage(imageSrc);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setSelectedImage('');
    }

    const images = [
        "/images/galleryImages/galleryimage1.jpg",
        "/images/galleryImages/galleryimage2.jpg",
        "/images/galleryImages/galleryimage3.jpg",
        "/images/galleryImages/galleryimage4.jpg",
        "/images/galleryImages/galleryimage5.jpg",
        "/images/galleryImages/galleryimage6.jpg",
        "/images/galleryImages/galleryimage7.jpg",
        "/images/galleryImages/galleryimage8.jpg",
        "/images/galleryImages/galleryimage9.jpg",
        "/images/galleryImages/galleryimage10.jpg",
        "/images/galleryImages/galleryimage11.jpg",
        "/images/galleryImages/galleryimage12.jpg",
        "/images/galleryImages/galleryimage13.jpg",
        "/images/galleryImages/galleryimage14.jpg",
        "/images/galleryImages/galleryimage15.jpg",
        "/images/galleryImages/galleryimage16.jpg",
        "/images/galleryImages/galleryimage17.jpg",
        "/images/galleryImages/galleryimage18.jpg",
        "/images/galleryImages/galleryimage19.jpg",
        "/images/galleryImages/galleryimage20.jpg"
    ];

    return (
        <div className="">
            <div className='gallery-background'>
            <MyNavbar />
            </div>
            <div className="bg-gray-200 pb-4">
                <h1 className="frontPage-header text-6xl p-9 lg:text-7xl  text-gray-800 text-center">Gallery</h1>
                <div className="container mx-auto sm:px-5 py-2 lg:px-32 lg:pt-12">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(0, 3).map((src, index) => (
                                <div key={index} className={`w-${index === 2 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(3, 6).map((src, index) => (
                                <div key={index} className={`w-${index === 0 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(6, 9).map((src, index) => (
                                <div key={index} className={`w-${index === 2 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(9, 12).map((src, index) => (
                                <div key={index} className={`w-${index === 0 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(12, 15).map((src, index) => (
                                <div key={index} className={`w-${index === 2 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(15, 18).map((src, index) => (
                                <div key={index} className={`w-${index === 0 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {typeof window !== 'undefined' && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Image Modal"
                    >
                        <div className="flex flex-col items-center">
                            <img 
                                src={selectedImage} 
                                alt="Selected" 
                                className="w-5/6 h-3/4 lg:w-1/3 rounded-lg" />
                            <button
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </Modal>
                )}
            </div>
            <Footer />
        </div>
    );
}