"use client";

import Footer from '@/components/Footer';
import MyNavbar from '@/components/MyNavbar';
import { NextPage } from 'next';
import React from 'react';

const Gallery: NextPage = () => {
    // Simple image array - clean and focused
    const images = [
        '/images/galleryImages/galleryimage1.jpg',
        '/images/galleryImages/galleryimage2.jpg',
        '/images/galleryImages/galleryimage3.jpg',
        '/images/galleryImages/galleryimage4.jpg',
        '/images/galleryImages/galleryimage5.jpg',
        '/images/galleryImages/galleryimage6.jpg',
        '/images/galleryImages/galleryimage7.jpg',
        '/images/galleryImages/galleryimage8.jpg',
        '/images/galleryImages/galleryimage9.jpg',
        '/images/galleryImages/galleryimage10.jpg',
        '/images/galleryImages/galleryimage11.jpg',
        '/images/galleryImages/galleryimage12.jpg',
        '/images/galleryImages/galleryimage13.jpg',
        '/images/galleryImages/galleryimage14.jpg',
        '/images/galleryImages/galleryimage15.jpg',
        '/images/galleryImages/galleryimage16.jpg',
        '/images/galleryImages/galleryimage17.jpg',
        '/images/galleryImages/galleryimage18.jpg',
        '/images/galleryImages/galleryimage19.jpg',
        '/images/galleryImages/galleryimage20.jpg',
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="gallery-background">
                <MyNavbar />
            </div>
            
            <div className="py-16">
                <div className="container mx-auto px-6">
                    {/* Elegant Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-6">
                            Project Gallery
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Discover our finest work through this curated collection of completed projects
                        </p>
                    </div>

                    {/* Masonry-Style Gallery Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
                            >
                                {/* Main Image */}
                                <img
                                    src={image}
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-auto object-cover transition-all duration-700 group-hover:brightness-110"
                                    loading="lazy"
                                />
                                
                                {/* Elegant Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400">
                                    {/* Project Number */}
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center border border-white/30">
                                            <span className="text-white font-bold text-sm">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* View Indicator */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-1">
                                                    Project {index + 1}
                                                </h3>
                                                <p className="text-gray-200 text-sm">
                                                    Foster & Sons Construction
                                                </p>
                                            </div>
                                            <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;
