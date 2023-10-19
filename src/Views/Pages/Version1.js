import React, { useState } from "react"
import NavBar from "../../Components/Header/NavBar"
import Footer from "../../Components/Footer/Footer"
import { MDBCol, MDBContainer, MDBInput, MDBRow, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit"
import TabStyle1 from "../Component/TabStyle1"
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
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


                <MDBContainer fluid className="p-0">

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
                                        <h2 className="fw-bold AdmissionsDates-head">Key Admissions Dates</h2>
                                        <p className="lh-base mt-4 pe-4">There are a few possible dates to keep in mind when you’re applying to Carlow. Make sure you familiarize yourself with the application deadlines and start dates so you’re prepared to apply. Keep in mind that application deadlines are specific to programs.</p>
                                        <div className="AdmissionsDates-Table">
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
                                    </div>
                                </MDBCol>
                                <MDBCol size={5}>
                                    <h3 className="personal-admission">
                                        <em>
                                            “I had a personal admissions team member to answer any of my questions through texts, calls, and emails.<strong>I actually ended up enrolling a semester sooner than I expected because it was so quick and easy.</strong> I am so grateful for that jump start on my degree.”
                                        </em>
                                    </h3>

                                    <h3 className="personal-admission-txt mt-3">– Online MSW Student</h3>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    <MDBContainer>
                        <div class="enrollment-div">
                            <h2 class="EnrollmentCounselor">Meet with an Enrollment Counselor</h2>
                            <p class="has-large-font-size">Are you looking to connect with an enrollment counselor directly to answer your questions about our online programs, admissions, applications, or financial aid? Our enrollment team is here to help.</p>
                            <p className="has-font-size">Complete the form at the top of this page to get started, and if you have any immediate questions please <a href="#">email our enrollment team</a> or call us at 855-511-6450.</p>
                        </div>
                    </MDBContainer>
                    <div className="application-process">
                        <MDBContainer>
                            <div class="enrollment-div">
                                <h2 class="EnrollmentCounselor">Explore the Carlow Application Process</h2>
                                <p class="has-large-font-size">
                                    Applying to Carlow University online is simple–get one step closer to developing the knowledge and leadership skills you need to succeed inside and outside of the classroom. The application process can differ slightly depending on what path you’re taking — whether you’re transferring universities, attending college for the first time or are coming from a military background. Regardless of your pathway, take a closer look at the admission requirements so you can get a full picture of what you need to do to apply, and start working toward your degree.
                                </p>
                            </div>
                            <TabStyle1 className="pb-5" />
                        </MDBContainer>
                    </div>
                </MDBContainer>
                <div className="key-admission-section">
                    <MDBContainer>
                        <div class=" ">
                            <h2 class="EnrollmentCounselor">How to Apply</h2>

                            <MDBRow>
                                <MDBCol size={6}>
                                    <MDBAccordion alwaysOpen  >
                                        <MDBAccordionItem collapseId={1} headerTitle='1. Fill out the online application.'>
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </MDBAccordionItem>
                                    </MDBAccordion>
                                </MDBCol>
                                <MDBCol size={6}>
                                    <MDBAccordion alwaysOpen  >
                                        <MDBAccordionItem collapseId={1} headerTitle='2. Check any program specific-requirements.'>
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </MDBAccordionItem>
                                    </MDBAccordion>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mt-4">
                                <MDBCol>
                                    <MDBAccordion alwaysOpen initialActive={1}>
                                        <MDBAccordionItem collapseId={1} headerTitle='3. Request official transcripts.'>
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </MDBAccordionItem>
                                    </MDBAccordion>
                                </MDBCol>
                                <MDBCol>
                                    <MDBAccordion alwaysOpen initialActive={1}>
                                        <MDBAccordionItem collapseId={1} headerTitle="4. Monitor your email. We ll be in touch!">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </MDBAccordionItem>
                                    </MDBAccordion>
                                </MDBCol>
                            </MDBRow>

                        </div>
                    </MDBContainer>
                </div>



                <Footer />
            </>
        </React.Fragment >
    )
}
export default Version1