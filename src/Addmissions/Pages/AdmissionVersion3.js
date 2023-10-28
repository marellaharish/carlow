import React, { useState } from 'react'
import "../Components/css/Home.css"
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { MDBCol, MDBContainer, MDBInput, MDBRow, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit"
import TabStyle3 from '../Views/TabStyle3';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import OnlineApp from '../Components/Assets/onlineApplication.png';
import Menu from '../Components/Assets/menu.png';
import User from '../Components/Assets/user.png';
import Mail from '../Components/Assets/Mail.png';
import Certificate from '../Components/Assets/certificate.png';
import Master from '../Components/Assets/Masters.png';
import Bachelor from '../Components/Assets/Bachelor.png';
import Doctorate from '../Components/Assets/Docorate.png';


function AdmissionVersion3() {


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

    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };

    return (
        <>
            <React.Fragment>
                <>
                    <div className='versions'>
                        <Header />


                        <MDBContainer fluid className="p-0">

                            <header className="-page-header">
                                <div className="-page-header__wrapper page-l-wrap--md">

                                    <h1 className="-page-header__heading">
                                        Carlow University Online Admissions
                                    </h1>
                                </div>
                            </header>

                            <MDBRow className="main-content">
                                <MDBCol size="12" md="7" sm="12">
                                    <div className="home__bg">
                                        <div className="head-and-txt">

                                            <div className="hero-b__heading">
                                                <h2>
                                                    Start Your Online Application Today
                                                </h2>
                                            </div>

                                            <div className="hero-b__content">
                                                <p>We’re excited you’ve considered Carlow University as the next step on your educational journey, and we’re here to help. Whether you’re a first-year, transfer or military-affiliated student, the application process is streamlined so you’ll be on your way to earning a degree in no time. Explore the admissions hub to make sure you have all the required information you need to get started.</p>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="hero-b__content2">
                                        <p>We’re excited you’ve considered Carlow University as the next step on your educational journey, and we’re here to help. Whether you’re a first-year, transfer or military-affiliated student, the application process is streamlined so you’ll be on your way to earning a degree in no time. Explore the admissions hub to make sure you have all the required information you need to get started.</p>
                                    </div>
                                </MDBCol>
                                <MDBCol size="12" md="5" sm="12" className="p-0">
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
                                                    <MDBCol size="12" md="6" sm="12" >
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
                                                    <MDBCol size="12" md="6" sm="12" className="margin1rm">
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
                                                    <MDBCol size="12" md="6" sm="12">
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
                                                    <MDBCol size="12" md="6" sm="12" className="margin1rm">
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
                                        <MDBCol size="12" md="7" sm="12" className="p-0">
                                            <div className="mx-2">
                                                <h2 className="fw-bold AdmissionsDates-head">Key Admissions Dates</h2>
                                                <p className="lh-base mt-4">There are a few possible dates to keep in mind when you’re applying to Carlow. Make sure you familiarize yourself with the application deadlines and start dates so you’re prepared to apply. Keep in mind that application deadlines are specific to programs.</p>
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
                                        <MDBCol size="12" md="5" sm="12" className="p-0">
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
                                <div className="enrollment-div">
                                    <h2 className="EnrollmentCounselor">Meet with an Enrollment Counselor</h2>
                                    <p className="has-large-font-size">Are you looking to connect with an enrollment counselor directly to answer your questions about our online programs, admissions, applications, or financial aid? Our enrollment team is here to help.</p>
                                    <p className="has-font-size">Complete the form at the top of this page to get started, and if you have any immediate questions please <a href="#">email our enrollment team</a> or call us at 855-511-6450.</p>
                                </div>
                            </MDBContainer>
                            <div>
                                <MDBContainer className='mb-5'>
                                    <div className="enrollment-div">
                                        <h2 className="EnrollmentCounselor">Explore the Carlow Application Process</h2>
                                        <p className="has-large-font-size">
                                            Applying to Carlow University online is simple–get one step closer to developing the knowledge and leadership skills you need to succeed inside and outside of the classroom. The application process can differ slightly depending on what path you’re taking — whether you’re transferring universities, attending college for the first time or are coming from a military background. Regardless of your pathway, take a closer look at the admission requirements so you can get a full picture of what you need to do to apply, and start working toward your degree.
                                        </p>
                                    </div>
                                    <TabStyle3 className="pb-5" />
                                </MDBContainer>

                            </div>
                        </MDBContainer>
                        <div className="application-process pt-5">
                            <MDBContainer>
                                <div className="four-sectionAccordion">
                                    <h2 className="EnrollmentCounselor white">How to Apply</h2>

                                    <MDBRow>
                                        <MDBCol size={6} >
                                            <MDBAccordion alwaysOpen  >
                                                <div className="accordion-header logo-image"> <img src={OnlineApp} className='w-50' /></div>
                                                <MDBAccordionItem collapseId={1} headerTitle='1. Fill out the online application.'>
                                                    <a href="#">Create an account in the Carlow online system</a> and complete the form.
                                                </MDBAccordionItem>
                                            </MDBAccordion>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <MDBAccordion alwaysOpen  >
                                                <div className="accordion-header logo-image"><img src={Menu} className='w-50' /></div>
                                                <MDBAccordionItem collapseId={1} headerTitle='2. Check any program specific-requirements.'>
                                                    Your program might require additional materials. Make sure you review the program page and call 855-511-6450 if you have any questions.
                                                </MDBAccordionItem>
                                            </MDBAccordion>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="mt-4">
                                        <MDBCol>
                                            <MDBAccordion alwaysOpen>
                                                <div className="accordion-header logo-image"> <img src={User} className='w-50' /></div>
                                                <MDBAccordionItem collapseId={1} headerTitle='3. Request official transcripts.'>
                                                    All online applications require proof of transcripts. so you will need to request your official transcripts from the institutions you have attended.
                                                </MDBAccordionItem>
                                            </MDBAccordion>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBAccordion alwaysOpen>
                                                <div className="accordion-header logo-image"><img src={Mail} className='w-50' /></div>
                                                <MDBAccordionItem collapseId={1} headerTitle="4. Monitor your email. We ll be in touch!">
                                                    Check for updates and news about your application.
                                                </MDBAccordionItem>
                                            </MDBAccordion>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                                <div className="d-flex mt-5">
                                    <MDBBtn className="m-auto" size="lg">START YOUR APPLICATION</MDBBtn>
                                </div>
                            </MDBContainer>
                        </div>


                        <MDBContainer>
                            <div className="enrollment-div">
                                <h2 className="EnrollmentCounselor">Find My Program Admissions Requirements</h2>
                                <p className="has-large-font-size">There may be different admissions requirements depending on which program you choose. Explore the program-specific page to get a clearer picture of what you need to apply to Carlow successfully.</p>
                            </div>
                        </MDBContainer>

                        <div className="key-admission-section">
                            <MDBContainer>
                                <div className="Addmission-Program">
                                    <MDBTabs fill className='mb-3'>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                                                <div className="logo-image"><img src={Certificate} className='w-50' /></div>
                                                <h6 className="mt-1">Certificate</h6>
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                                                <div className="logo-image"><img src={Master} className='w-50' /></div>
                                                <h6 className="mt-1">Master’s</h6>
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                                                <div className="logo-image"><img src={Bachelor} className='w-50' /></div>
                                                <h6 className="mt-1">Bachelor’s</h6>
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                        <MDBTabsItem>
                                            <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'}>
                                                <div className="logo-image"><img src={Doctorate} className='w-50' /></div>
                                                <h6 className="mt-1">Doctorate</h6>
                                            </MDBTabsLink>
                                        </MDBTabsItem>
                                    </MDBTabs>
                                </div>
                            </MDBContainer>

                        </div>
                        <MDBContainer>
                            <MDBTabsContent>
                                <MDBTabsPane show={fillActive === 'tab1'}>
                                    {/* Tab 1 content */}
                                    <div className="tab1__panels">
                                        <section>
                                            <p className="highlight">2 programs available</p>
                                            <ul>
                                                <li><a href="#">Family Nurse Practitioner (FNP) Certificate</a></li>
                                                <li><a href="#">Women’s Health Nurse Practitioner (WHNP) Certificate</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={fillActive === 'tab2'}>
                                    {/* Tab 2 content */}
                                    <div className="tab1__panels">
                                        <section>
                                            <p className="highlight">9 PROGRAMS AVAILABLE</p>
                                            <ul>
                                                <li><a href="#">Executive MBA</a></li>
                                                <li><a href="#">MBA</a></li>
                                                <li><a href="#">Fraud & Forensics, MS</a></li>
                                                <li><a href="#">MSN – MBA</a></li>
                                                <li><a href="#">Education and Leadership, MSN</a></li>
                                                <li><a href="#">MSW</a></li>
                                                <li><a href="#">MSW – MBA</a></li>
                                                <li><a href="#">Family Nurse Practitioner, MSN</a></li>
                                                <li><a href="#">Women’s Health Nurse Practitioner, MSN</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={fillActive === 'tab3'}>
                                    {/* Tab 3 content */}
                                    <div className="tab1__panels">
                                        <section>
                                            <p className="highlight">8 PROGRAMS AVAILABLE</p>
                                            <ul>
                                                <li><a href="#">Criminology, BA</a></li>
                                                <li><a href="#">Psychology, BA</a></li>
                                                <li><a href="#">Accounting, BS</a></li>
                                                <li><a href="#">Business Management, BS</a></li>
                                                <li><a href="#">Healthcare Data Analytics, BS</a></li>
                                                <li><a href="#">Healthcare Management, BS</a></li>
                                                <li><a href="#">Respiratory Therapy, BS</a></li>
                                                <li><a href="#">RN – BSN</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={fillActive === 'tab4'}>
                                    {/* Tab 3 content */}
                                    <div className="tab1__panels">
                                        <section>
                                            <p className="highlight">1 programs available</p>
                                            <ul>
                                                <li><a href="#">Nursing Practice, DNP</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </MDBContainer>


                        <MDBContainer >
                            <div className="d-flex justify-content-center ">
                                <div className="enrollment-div2 text-center">
                                    <h2 className="EnrollmentCounselor2">Frequently Asked Questions</h2>
                                    <p className="has-large-font-size mt-4">Explore our frequently asked questions for in-depth answers. If you don’t find what you’re looking for, <a href="#"> reach out to us. </a></p>
                                </div>
                            </div>

                            <div className="Questions_Accordion mt-0">
                                <MDBAccordion alwaysOpen>
                                    <MDBAccordionItem collapseId={1} headerTitle='Do you accept transfer credits?'>
                                        Yes. Carlow has a generous transfer credit policy. Guidelines differ based on your program of choice. Request more information today.
                                        <div className="d-flex align-items-center feedback-buttons">
                                            <p className="m-0 me-4">Was this question helpful?</p>
                                            <MDBBtn>Yes</MDBBtn>
                                            <MDBBtn className="ms-2">No</MDBBtn>
                                        </div>
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            </div>

                            <div className="Questions_Accordion">
                                <MDBAccordion alwaysOpen>
                                    <MDBAccordionItem collapseId={1} headerTitle='Do you provide credits for work experience?'>
                                        All of our programs have transfer credit policies and some offer advanced standing options. Explore your <a href="#"> program of interest</a> or <a href="#"> reach out</a> for specific information.
                                        <div className="d-flex align-items-center feedback-buttons">
                                            <p className="m-0 me-4">Was this question helpful?</p>
                                            <MDBBtn>Yes</MDBBtn>
                                            <MDBBtn className="ms-2">No</MDBBtn>
                                        </div>
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            </div>

                            <div className="Questions_Accordion">
                                <MDBAccordion alwaysOpen>
                                    <MDBAccordionItem collapseId={1} headerTitle='How do I apply?'>
                                        All programs require an <a href="#"> online application.</a> From there, the process depends on your program of interest.
                                        <div className="d-flex align-items-center feedback-buttons">
                                            <p className="m-0 me-4">Was this question helpful?</p>
                                            <MDBBtn>Yes</MDBBtn>
                                            <MDBBtn className="ms-2">No</MDBBtn>
                                        </div>
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            </div>

                            <div className="Questions_Accordion">
                                <MDBAccordion alwaysOpen>
                                    <MDBAccordionItem collapseId={1} headerTitle='If I am not accepted, what are my options?'>
                                        The <a href="#"> Mercy principles </a>we employ on campus extend to our admissions process. If you have special circumstances, reach out to us to find out what your options are at 855-511-6450.
                                        <div className="d-flex align-items-center feedback-buttons">
                                            <p className="m-0 me-4">Was this question helpful?</p>
                                            <MDBBtn>Yes</MDBBtn>
                                            <MDBBtn className="ms-2">No</MDBBtn>
                                        </div>
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            </div>

                            <div className="Questions_Accordion">
                                <MDBAccordion alwaysOpen>
                                    <MDBAccordionItem collapseId={1} headerTitle='What is the admissions process like?'>
                                        The admissions process varies based on your program of choice, and we strive to help you through the entire process with one-on-one attention. Find out more about <a> applying to Carlow.</a>
                                        <div className="d-flex align-items-center feedback-buttons">
                                            <p className="m-0 me-4">Was this question helpful?</p>
                                            <MDBBtn>Yes</MDBBtn>
                                            <MDBBtn className="ms-2">No</MDBBtn>
                                        </div>
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            </div>

                            <div className="Questions_Accordion">
                                <MDBAccordion alwaysOpen>
                                    <MDBAccordionItem collapseId={1} headerTitle='What is the first step in the application process?'>
                                        Each program requires an <a href="#"> online application.</a> Find out more about <a> applying to Carlow.</a>
                                        <div className="d-flex align-items-center feedback-buttons">
                                            <p className="m-0 me-4">Was this question helpful?</p>
                                            <MDBBtn>Yes</MDBBtn>
                                            <MDBBtn className="ms-2">No</MDBBtn>
                                        </div>
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            </div>

                            <div className="Questions_Accordion">
                                <MDBAccordion alwaysOpen>
                                    <MDBAccordionItem collapseId={1} headerTitle='What resources does the school provide for students with disabilities?'>
                                        If you are considering attending Carlow University and have unique needs, we are ready to help. Some examples of accommodations we offer include enlarged print, audio textbooks, extended testing time and more. Please <a href="#"> contact us </a>with your specific needs.
                                        <div className="d-flex align-items-center feedback-buttons">
                                            <p className="m-0 me-4">Was this question helpful?</p>
                                            <MDBBtn>Yes</MDBBtn>
                                            <MDBBtn className="ms-2">No</MDBBtn>
                                        </div>
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            </div>

                            <div className="Questions_Accordion">
                                <MDBAccordion alwaysOpen>
                                    <MDBAccordionItem collapseId={1} headerTitle='Who can I speak with about specific admissions questions?'>
                                        Fill out our <a href="#" >online form</a>, and a representative will contact you as soon as possible to answer your questions. You can also call us at 855-511-6450.
                                        <div className="d-flex align-items-center feedback-buttons">
                                            <p className="m-0 me-4">Was this question helpful?</p>
                                            <MDBBtn>Yes</MDBBtn>
                                            <MDBBtn className="ms-2">No</MDBBtn>
                                        </div>
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            </div>

                            <div className="Questions_Accordion">
                                <MDBAccordion alwaysOpen>
                                    <MDBAccordionItem collapseId={1} headerTitle='Do I have to be affiliated with the same religious faith as the university?'>
                                        Absolutely not. We value diversity and welcome students of all religious backgrounds.
                                        <div className="d-flex align-items-center feedback-buttons">
                                            <p className="m-0 me-4">Was this question helpful?</p>
                                            <MDBBtn>Yes</MDBBtn>
                                            <MDBBtn className="ms-2">No</MDBBtn>
                                        </div>
                                    </MDBAccordionItem>
                                </MDBAccordion>
                            </div>
                        </MDBContainer>
                        <Footer />
                    </div>

                    <div className='version-Mobile'>
                        <p className='p-3 text-center fw-bold'>"This page isn't supported in mobile view. Please try the mobile version."
                            <br />
                            <a href="/">Go Back</a>
                        </p>
                    </div>
                </>
            </React.Fragment >
        </>
    )
}

export default AdmissionVersion3