"use client"

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBNavbarBrand,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit'


export default function MyNavbar() {
    const [openNavSecond, setOpenNavSecond] = useState(false)

    return (
        <MDBNavbar className='flex text-white' expand='lg'>
            <MDBContainer fluid className='text-xl'>
                <MDBNavbarBrand href='/'>
                <img
                    src="/images/foster-and-sons-logo-removebg.png"
                    alt="Foster & Sons Construction"
                    width={120}
                    height={100}
                    className="logo"
                />
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    <MDBIcon icon='bars' fas className='text-white text-4xl ml-auto' />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNavSecond} className='lg:flex lg:justify-end lg:mr-5 flex justify-start'>
                    <MDBNavbarNav right fullWidth={false} className=''>
                        <MDBNavbarLink className='text-white hover:underline' active aria-current='page' href='/'>Home</MDBNavbarLink>
                        <MDBNavbarLink className='text-white hover:underline' href='./about'>About</MDBNavbarLink>
                        <MDBNavbarLink className='text-white hover:underline' href='./'>Services</MDBNavbarLink>
                        <MDBNavbarLink className='text-white hover:underline' href='./projectGallery'>Gallery</MDBNavbarLink>
                        <MDBNavbarLink className='text-white hover:underline' href='./'>Contact Us</MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

