import React, { useState } from "react"
import NavBar from "../../Components/Header/NavBar"
import Footer from "../../Components/Footer/Footer"
import { MDBCol, MDBContainer, MDBInput, MDBRow, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit"

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function Version1() {


    const [name, setName] = useState("");
    const [value, setvalue] = useState(false);
    const handleBlur = () => {
        setvalue(true);
    };
    const [name1, setName1] = useState("");
    const [value1, setvalue1] = useState(false);
    const handleBlur1 = () => {
        setvalue1(true);
    };

    const [name2, setName2] = useState("");
    const [value2, setvalue2] = useState(false);
    const handleBlur2 = () => {
        setvalue2(true);
    };



    const [name3, setName3] = useState("");
    const [value3, setvalue3] = useState(false);
    const handleBlur3 = () => {
        setvalue3(true);
    };


    const [name4, setName4] = useState("");
    const [value4, setvalue4] = useState(false);
    const handleBlur4 = () => {
        setvalue4(true);
    };





    const [checked, setChecked] = useState(false);



    return (
        <React.Fragment>
            <>
                <NavBar />


                <MDBContainer fluid>

                    <header className="tux-c-page-header">
                        <div className="tux-c-page-header__wrapper tux-l-wrap--md">

                            <h1 className="tux-c-page-header__heading">
                                Carlow University Online Admissions
                            </h1>
                        </div>
                    </header>

                    <MDBRow>
                        <MDBCol size={7} className="p-0">
                            <div className="home__bg">
                                <div className="head-and-txt">

                                    <div class="hero-b__heading">
                                        <h2>
                                            Start Your Online Application Today
                                        </h2>
                                    </div>

                                    <div class="hero-b__content">
                                        <p>We’re excited you’ve considered Carlow University as the next step on your educational journey, and we’re here to help. Whether you’re a first-year, transfer or military-affiliated student, the application process is streamlined so you’ll be on your way to earning a degree in no time. Explore the admissions hub to make sure you have all the required information you need to get started.</p>
                                    </div>


                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size={5} className="p-0">
                            <div className="home__register">
                                <div className="home-form">
                                    <h2>Learn More Today</h2>
                                    <p className="mb-3">Complete this form to learn more about building your future with an online degree from Carlow University.</p>

                                    <form>
                                        <label className="mt-1">SELECT A PROGRAM</label>
                                        <select className=" mt-2 form-control select-input placeholder-active active">
                                            <option>select a Program</option>
                                            <option>a</option>
                                            <option>a</option>
                                            <option>a</option>
                                        </select>
                                        <MDBRow className="mt-3">
                                            <MDBCol>
                                                <label>
                                                    FIRST NAME
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control mt-2"
                                                    placeholder="First Name"
                                                    onChange={(e) => {
                                                        setName(e.target.value);
                                                    }}
                                                    onBlur={handleBlur}
                                                />
                                                {value && name === "" && <p className="m-0 mt-1">This field is required</p>}


                                            </MDBCol>
                                            <MDBCol>
                                                <label>
                                                    LAST NAME
                                                </label>
                                                <input type="text" className="form-control mt-2" placeholder="Last Name" onChange={(e) => {
                                                    setName1(e.target.value);
                                                }}
                                                    onBlur={handleBlur1} />
                                                {value1 && name1 === "" && <p className="m-0 mt-1">This field is required</p>}
                                            </MDBCol>
                                        </MDBRow>

                                        <label className="mt-3">EMAIL</label>
                                        <input
                                            type="email"
                                            className="form-control mt-2"
                                            placeholder="email@example.com"
                                            onChange={(e) => {
                                                setName2(e.target.value);
                                            }}
                                            onBlur={handleBlur2} />
                                        {value2 && name2 === "" && <p className="m-0 mt-1">This field is required</p>}

                                        <MDBRow className="mt-3">
                                            <MDBCol>
                                                <label>
                                                    PHONE
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control mt-2"
                                                    placeholder="First Name"
                                                    onChange={(e) => {
                                                        setName3(e.target.value);
                                                    }}
                                                    onBlur={handleBlur3}
                                                />
                                                {value3 && name3 === "" && <p className="m-0 mt-1">This field is required</p>}


                                            </MDBCol>
                                            <MDBCol>
                                                <label>
                                                    ZIP CODE
                                                </label>
                                                <input type="text" className="form-control mt-2" placeholder="Last Name" onChange={(e) => {
                                                    setName4(e.target.value);
                                                }}
                                                    onBlur={handleBlur4} />
                                                {value4 && name4 === "" && <p className="m-0 mt-1">This field is required</p>}
                                            </MDBCol>
                                        </MDBRow>
                                    </form>

                                    <div className="mt-2">
                                        <MDBCheckbox className="mt-2"
                                            id='controlledCheckbox'
                                            label='I authorize Carlow University and its representatives to contact me via SMS. I am providing my consent by leaving the opt-in checked. Message and data rates may apply. Terms.'
                                            checked={checked}
                                            onChange={() => setChecked(!checked)}
                                        />
                                    </div>
                                    <div className="d-flex mt-4">
                                        <MDBBtn size="lg" className="mx-auto">Request Info</MDBBtn>
                                    </div>
                                    <p className="form-footer m-0 mt-4">
                                        Carlow University has engaged Wiley University Services to help support your education journey. Wiley will contact you shortly in response to your request for information. Learn more about Wiley. <a>Privacy Policy.</a>
                                    </p>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>

                    <div className="key-admission-section">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol size={7}>
                                    <div className="mx-2">
                                        <h2 className="fw-bold">Key Admissions Dates</h2>
                                        <p className="lh-base mt-4 pe-4">There are a few possible dates to keep in mind when you’re applying to Carlow. Make sure you familiarize yourself with the application deadlines and start dates so you’re prepared to apply. Keep in mind that application deadlines are specific to programs.</p>
                                        <MDBTable>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Commencement</td>
                                                    <td>May 6, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Summer Start Date</td>
                                                    <td>May 15, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td>Spring and Summer 2023 Registration Opens</td>
                                                    <td>October 31-November 4, 2022</td>
                                                </tr>
                                                <tr>
                                                    <td>Spring Start Date</td>
                                                    <td>January 9, 2023</td>
                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>
                                    </div>
                                </MDBCol>
                                <MDBCol size={5}>
                                    <h3 className="personal-admission">
                                        <em>
                                            “I had a personal admissions team member to answer any of my questions through texts, calls, and emails.<strong>I actually ended up enrolling a semester sooner than I expected because it was so quick and easy.</strong> I am so grateful for that jump start on my degree.”
                                        </em>
                                    </h3>

                                    <h3 className="personal-admission mt-3">– Online MSW Student</h3>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>



                    <MDBContainer>
                        <div class="enrollment-div">


                            <h2 class="wp-block-heading h3">Meet with an Enrollment Counselor</h2>



                            <p class="has-large-font-size">Are you looking to connect with an enrollment counselor directly to answer your questions about our online programs, admissions, applications, or financial aid? Our enrollment team is here to help.</p>



                            <p>Complete the form at the top of this page to get started, and if you have any immediate questions please <a href="mailto:getstarted@carlow.edu">email our enrollment team</a> or call us at 855-511-6450.</p>


                        </div>
                    </MDBContainer>



                </MDBContainer>



                <Footer />
            </>
        </React.Fragment >
    )
}
export default Version1