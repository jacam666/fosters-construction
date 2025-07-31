"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTools, FaAward } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className='background text-white relative'>
            {/* Dark overlay for better text readability - temporary removal for testing */}
            {/* <div className='absolute inset-0 bg-black bg-opacity-50'></div> */}
            
            {/* Main Footer Content */}
            <div className='relative z-10 container mx-auto px-4 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    
                    {/* Company Info */}
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-2 mb-4'>
                            <Image 
                                src="/images/foster-and-sons-logo-removebg.png" 
                                alt="Foster & Sons Logo" 
                                width={50} 
                                height={50}
                                className="rounded"
                            />
                            <h3 className='text-xl font-bold'>Foster & Sons</h3>
                        </div>
                        <p className='text-gray-200 leading-relaxed'>
                            Building dreams with quality craftsmanship since 1995. Your trusted partner for residential and commercial construction projects.
                        </p>
                        <div className='flex space-x-4'>
                            <Link href='https://www.facebook.com/people/Foster-Sons/100068109994876/' className='text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50'>
                                <FaFacebookF size={18} />
                            </Link>
                            <Link href='#' className='text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50'>
                                <FaTwitter size={18} />
                            </Link>
                            <Link href='#' className='text-gray-300 hover:text-pink-400 transition-colors duration-300 p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50'>
                                <FaInstagram size={18} />
                            </Link>
                            <Link href='#' className='text-gray-300 hover:text-blue-500 transition-colors duration-300 p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50'>
                                <FaLinkedinIn size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className='text-lg font-semibold mb-4 flex items-center'>
                            <FaTools className='mr-2 text-sky-400' />
                            Our Services
                        </h4>
                        <ul className='space-y-2 text-gray-200'>
                            <li><Link href='/services' className='hover:text-sky-300 transition-colors duration-300'>Residential Construction</Link></li>
                            <li><Link href='/services' className='hover:text-sky-300 transition-colors duration-300'>Commercial Building</Link></li>
                            <li><Link href='/services' className='hover:text-sky-300 transition-colors duration-300'>Home Renovations</Link></li>
                            <li><Link href='/services' className='hover:text-sky-300 transition-colors duration-300'>Kitchen Remodeling</Link></li>
                            <li><Link href='/services' className='hover:text-sky-300 transition-colors duration-300'>Bathroom Upgrades</Link></li>
                            <li><Link href='/services' className='hover:text-sky-300 transition-colors duration-300'>New Construction</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
                        <ul className='space-y-2 text-gray-200'>
                            <li><Link href='/' className='hover:text-sky-300 transition-colors duration-300'>Home</Link></li>
                            <li><Link href='/about' className='hover:text-sky-300 transition-colors duration-300'>About Us</Link></li>
                            <li><Link href='/projectGallery' className='hover:text-sky-300 transition-colors duration-300'>Project Gallery</Link></li>
                            <li><Link href='/services' className='hover:text-sky-300 transition-colors duration-300'>Services</Link></li>
                            <li><Link href='/contactUs' className='hover:text-sky-300 transition-colors duration-300'>Contact Us</Link></li>
                            <li><Link href='#' className='hover:text-sky-300 transition-colors duration-300'>Get Quote</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
                        <div className='space-y-3 text-gray-200'>
                            <div className='flex items-start space-x-3'>
                                <FaMapMarkerAlt className='text-sky-400 mt-1 flex-shrink-0' />
                                <span>Milton Keynes, UK</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <FaPhone className='text-sky-400 flex-shrink-0' />
                                <a href='tel:07444365428' className='hover:text-sky-300 transition-colors duration-300'>
                                    07444 365428
                                </a>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <FaEnvelope className='text-sky-400 flex-shrink-0' />
                                <a href='mailto:info@fostersons.co.uk' className='hover:text-sky-300 transition-colors duration-300'>
                                    info@fostersons.co.uk
                                </a>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <FaClock className='text-sky-400 mt-1 flex-shrink-0' />
                                <div>
                                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                    <p>Sat: 9:00 AM - 4:00 PM</p>
                                    <p>Sun: Emergency Only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications/Awards */}
                <div className='mt-12 pt-8 border-t border-gray-400 border-opacity-30'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 md:mb-0'>
                            <div className='flex items-center space-x-2 text-gray-200 bg-black bg-opacity-30 px-3 py-2 rounded-full'>
                                <FaAward className='text-yellow-400' />
                                <span className='text-sm font-medium'>Licensed & Insured</span>
                            </div>
                            <div className='flex items-center space-x-2 text-gray-200 bg-black bg-opacity-30 px-3 py-2 rounded-full'>
                                <FaAward className='text-yellow-400' />
                                <span className='text-sm font-medium'>25+ Years Experience</span>
                            </div>
                            <div className='flex items-center space-x-2 text-gray-200 bg-black bg-opacity-30 px-3 py-2 rounded-full'>
                                <FaAward className='text-yellow-400' />
                                <span className='text-sm font-medium'>Quality Guarantee</span>
                            </div>
                        </div>
                        <div className='text-center'>
                            <Link href='/contactUs' className='bg-sky-700 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-block shadow-lg hover:shadow-xl'>
                                Get Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className='relative z-10 bg-black bg-opacity-80 py-4 border-t border-gray-600 border-opacity-30'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm'>
                        <div className='mb-2 md:mb-0'>
                            © 2024 Foster & Sons Construction. All rights reserved.
                        </div>
                        <div className='flex space-x-4'>
                            <Link href='#' className='hover:text-white transition-colors duration-300'>Privacy Policy</Link>
                            <Link href='#' className='hover:text-white transition-colors duration-300'>Terms of Service</Link>
                            <span>Designed by <Link href='#' className='text-sky-400 hover:text-sky-300'>CamDesigns</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}