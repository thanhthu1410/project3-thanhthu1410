import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


export default function Footer() {
    return (
        <div className='footer_container'>
            <div className='footer_container_center'>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://www.facebook.com/Vietnam.GongCha' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='https://www.instagram.com/gongchavietnam/' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>

                    <a href='https://github.com/thanhthu1410' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <img style={{width:"150px",height:"70px"}} src="../../images/logobanner.png" alt="" />
                            <p>
                            Ⓒ 2021 GONG CHA GLOBAL LTD ALL RIGHTS RESERVED
                            </p>
                        </MDBCol>


                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>ADDRESS</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                No.42 Tu Cuong Street - Tan Binh District - HCM
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                           
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                               Rikkei@example.com
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright: GongCha.ThanhThu
                
            </div>
        </MDBFooter>
        </div>
        </div>
        
        
    );
}