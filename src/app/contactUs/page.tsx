"use client";

import React from 'react';
import MyNavbar from "@/components/MyNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MDBIcon } from 'mdb-react-ui-kit';
import { NextPage } from 'next';
//import Slider from '@/components/RatingsSlider';

const ContactPage: NextPage = () => {
    return (
        <div>
            <div className='gallery-background'>
                <MyNavbar />
            </div>
            <div className="contact-container text-gray-900">
                <h1 className="frontPage-header text-6xl p-9 lg:text-7xl  text-gray-800 text-center">Contact Us</h1>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.22219115099!2d-0.909866747581021!3d52.04062234473852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b1cba1e22e65%3A0x4575d0c3b5ffb3b5!2sMilton%20Keynes%2C%20UK!5e0!3m2!1sen!2sin!4v1614165949845!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="contact-section rounded-lg shadow-md">
                    <h2 className="contact-header mb-4 p-2">Get in Touch</h2>
                    <div className="contact-details">
                        <p className="mb-2">
                            <MDBIcon icon="home" className="me-2" /> Milton Keynes, Buckinghamshire
                        </p>
                        <p className="mb-2">
                            <MDBIcon icon="phone" className="me-2" /> 07444 365428
                        </p>
                        <p className="mb-2">
                            <MDBIcon icon="envelope" className="me-2" /> info@foster&#38;Sons.com
                        </p>
                    </div>
                </div>
                <div className=''>
                    
                </div>

                <div className="contact-section rounded-lg shadow-md mt-8">
                    <h2 className="contact-header mb-4 p-2">Connect with Us</h2>
                    <div className="social-icons">
                        <Link href="https://www.facebook.com/people/Foster-Sons/100068109994876/">
                            <MDBIcon fab icon="facebook-f" className="text-[#4267B2]" />
                        </Link>
                        {/* Similarly, add other social links here */}
                        <Link href="">
                            <MDBIcon fab icon="twitter" className="text-[#1DA1F2]" />
                        </Link>
                        <Link href="">
                            <MDBIcon fab icon="instagram" className="text-[#E1306C]" />
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;