"use client"
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Link from 'next/link';

export default function Footer() {
    return (
        <MDBFooter className='background text-center h-auto'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 '>
                <div className='me-5 d-none d-lg-block'>
                    <span className='text-white'>Get connected with us on social networks:</span>
                </div>

                <div className=''>
                    <Link href='' className=' me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" className='text-[#4267B2]' />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" className="text-[#1DA1F2]" />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" className="text-[#DB4437]" />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" className="text-[#E1306C]" />
                    </Link>
                </div>
            </section>
            <section className='text-white'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="5" lg="4" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase text-center fw-bold mb-4'>Contact</h6>
                            {/* <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                enquiries@mycapeverde.org
                            </p> */}
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> 07444 365428
                            </p>
                            <p>
                            <MDBIcon icon="home" className="me-3" /> Milton Keynes
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.01)' }}>
                © 2024 Copyright:
                <Link className='text-reset fw-bold' href='#'>
                    CamDesigns.com
                </Link>
            </div>
        </MDBFooter>
    );
}