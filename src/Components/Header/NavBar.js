import React, { useState } from 'react';
import "../css/Home.css";
import "../css/Responsive.css";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBInputGroup,
} from 'mdb-react-ui-kit';
import logo from "../Assets/CARLOW-UNIVERSITY-logo_white.png"

function NavBar() {
    const [showNavRight, setShowNavRight] = useState(false);
    return (
        <React.Fragment>
            <>

                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer>

                        <MDBNavbarBrand href='#'>
                            <img
                                src={logo}
                                height='40'
                                alt=''
                                loading='lazy'
                            />
                        </MDBNavbarBrand>

                        <div>
                            <MDBIcon fas icon="search" className='me-2' />
                            <MDBNavbarToggler
                                type='button'
                                data-target='#navbarRightAlignExample'
                                aria-controls='navbarRightAlignExample'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                                onClick={() => setShowNavRight(!showNavRight)}
                            >
                                <MDBIcon icon='bars' fas />
                            </MDBNavbarToggler>
                        </div>



                        <MDBCollapse navbar show={showNavRight}>
                            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>

                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link'>
                                            View Programs
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link>Action</MDBDropdownItem>
                                            <MDBDropdownItem link>Another action</MDBDropdownItem>
                                            <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>


                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='#'>
                                        Addmissions
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>
                                        Tuition & Aid
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>
                                        FAQs
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link'>
                                            About Us
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link>Action</MDBDropdownItem>
                                            <MDBDropdownItem link>Another action</MDBDropdownItem>
                                            <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBBtn> Request Info</MDBBtn>
                                </MDBNavbarItem>


                            </MDBNavbarNav>

                            <div className='w-60 nav-search'>

                                <a href='#' className='fw-bold me-4'>Apply Now</a>
                                <a href='#' className='me-4'>1-855-511-6450</a>

                                <form className='d-flex input-group w-auto'>
                                    <MDBInputGroup textAfter={<MDBIcon fas icon='search' />}>
                                        <input className='form-control' type='text' placeholder='Search' />
                                    </MDBInputGroup>
                                </form>
                            </div>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>



            </>
        </React.Fragment>
    )
}
export default NavBar