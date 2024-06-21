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
import Logo from './Logo';
export default function MyNavbar() {
    const [openNavSecond, setOpenNavSecond] = useState(false)
    
    return (
        <MDBNavbar className='flex text-white' expand='lg'>
            <MDBContainer fluid className=' navbar-items flex justify-end items-end text-2xl'>
                <MDBNavbarBrand>
                    <Logo />
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    {/* <MDBIcon icon='bars' fas className='bg-white' /> */}
                    <i className="fas fa-bars bg-white"></i>
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openNavSecond} className='flex justify-center mr-5'>
                    <MDBNavbarNav  right fullWidth={false} className='mb-2 mb-lg-0'>
                        <MDBNavbarLink className='text-white' active aria-current='page' href='/'>Home</MDBNavbarLink>
                        <MDBNavbarLink className='text-white' href='./'>About</MDBNavbarLink>
                        <MDBNavbarLink className='text-white' href='./'>Services</MDBNavbarLink>
                        <MDBNavbarLink className='text-white' href='./'>Gallery</MDBNavbarLink>
                        <MDBNavbarLink className='text-white' href='./'>Contact Us</MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

