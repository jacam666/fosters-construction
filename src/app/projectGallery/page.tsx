// "use client";

// import Footer from "@/components/Footer";
// import MyNavbar from "@/components/MyNavbar";
// import { Modal, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
// import Image from "next/image";
// import { useState } from "react";

// const getImageData = () => {
//     return [
//         { src: "/images/galleryImages/galleryimage1.jpg", alt: "Gallery Image 1" },
//         { src: "/images/galleryImages/galleryimage2.jpg", alt: "Gallery Image 2" },
//         { src: "/images/galleryImages/galleryimage3.jpg", alt: "Gallery Image 3" },
//         { src: "/images/galleryImages/galleryimage4.jpg", alt: "Gallery Image 4" },
//         { src: "/images/galleryImages/galleryimage5.jpg", alt: "Gallery Image 5" },
//         { src: "/images/galleryImages/galleryimage6.jpg", alt: "Gallery Image 6" },
//         { src: "/images/galleryImages/galleryimage7.jpg", alt: "Gallery Image 7" },
//         { src: "/images/galleryImages/galleryimage8.jpg", alt: "Gallery Image 8" },
//         { src: "/images/galleryImages/galleryimage9.jpg", alt: "Gallery Image 9" },
//         { src: "/images/galleryImages/galleryimage10.jpg", alt: "Gallery Image 10" },
//         { src: "/images/galleryImages/galleryimage11.jpg", alt: "Gallery Image 11" },
//         { src: "/images/galleryImages/galleryimage12.jpg", alt: "Gallery Image 12" },
//         { src: "/images/galleryImages/galleryimage13.jpg", alt: "Gallery Image 13" },
//         { src: "/images/galleryImages/galleryimage14.jpg", alt: "Gallery Image 14" },
//         { src: "/images/galleryImages/galleryimage15.jpg", alt: "Gallery Image 15" },
//         { src: "/images/galleryImages/galleryimage16.jpg", alt: "Gallery Image 16" },
//         { src: "/images/galleryImages/galleryimage17.jpg", alt: "Gallery Image 17" },
//         { src: "/images/galleryImages/galleryimage18.jpg", alt: "Gallery Image 18" },
//         { src: "/images/galleryImages/galleryimage19.jpg", alt: "Gallery Image 19" },
//         { src: "/images/galleryImages/galleryimage20.jpg", alt: "Gallery Image 20" }
//     ];
// };

// export default function Gallery() {
//     const images = getImageData();

//     const [modalIsOpen, setIsOpen] = useState(false);
//     const [selectedImage, setSelectedImage] = useState("");

//     function openModal(imageSrc: string) {
//         console.log("Image clicked:", imageSrc); // Debug log
//         setSelectedImage(imageSrc);
//         setIsOpen(true);
//     }

//     function closeModal() {
//         setIsOpen(false);
//         setSelectedImage("");
//     }

//     return (
//         <div className="bg-gray-200">
//             <div className="background">
//                 <MyNavbar />
//             </div>
//             <div className="gallery-background">
//                 <h1 className="frontPage-header text-gray-900 text-center text-5xl lg:text-9xl my-8 font-bold">
//                     Gallery
//                 </h1>
//             </div>
//             <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-3 sm:mx-5 my-8">
//                 {images.map((image, index) => (
//                     <div key={index} className="">
//                         <Image
//                             src={image.src}
//                             alt={image.alt}
//                             width={500}
//                             height={500}
//                             onClick={() => openModal(image.src)}
//                             className="rounded-xl cursor-pointer"
//                         />
//                     </div>
//                 ))}
//             </div>
//             <Modal
//                 closeButton
//                 blur
//                 aria-labelledby="modal-title"
//                 open={modalIsOpen}
//                 onClose={closeModal}
//             >
//                 <ModalHeader>
//                     <h2 id="modal-title">Selected Image</h2>
//                 </ModalHeader>
//                 <ModalBody>
//                     <img src={selectedImage} alt="Selected" className="max-w-full max-h-[80vh]" />
//                 </ModalBody>
//                 <ModalFooter>
//                     <button
//                         className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//                         onClick={closeModal}
//                     >
//                         Close
//                     </button>
//                 </ModalFooter>
//             </Modal>
//             <Footer />
//         </div>
//     );
// }

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
        width: '90%'
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
            <div className=" ">
                <h1 className="homepage-header text-6xl my-12 lg:text-7xl  text-gray-800 text-center">Gallery</h1>
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
                            <img src={selectedImage} alt="Selected" className="max-w-full max-h-[90vh]" />
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