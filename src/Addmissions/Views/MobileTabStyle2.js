import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import image1 from "../Components/Assets/tab1-image.jpg"
import image2 from "../Components/Assets/tab2-image.jpg"
import image3 from "../Components/Assets/tab3-image.jpg"
import AR from "../Components/Assets/AR.svg"
import cloud from "../Components/Assets/Cloud.svg"
import Group from "../Components/Assets/Group.svg"
function MobileTabStyle2() {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    return (
        <React.Fragment>
            <>
                <div className="tabs-style-two">
                    <MDBAccordion borderless>
                        <MDBAccordionItem collapseId={1} headerTitle={<><img src={AR} className='me-2 tab-title-icons' /> Transfer Students</>}>
                            <div className='border-primary-color'></div>
                            <div className='mobileTab1-content'>
                                <div className='tabdiv-content'>
                                    <div className='tab-image'>
                                        <img src={image1} className='tabImage-1' />
                                    </div>


                                    <div className="tab-imageSideContent">
                                        <h3>Transfer Admissions Process</h3>
                                        <p>Are you considering transferring to a Carlow University online program? There are particular steps you need to take to ensure you get full credit for all the previous coursework you’ve completed. To apply to Carlow online as a transfer student, you need to submit the following documents:</p>
                                        <ul className='ps-3'>
                                            <li>A completed <a href="#" target="_blank">online application</a></li>
                                            <li>Official transcripts from all previous undergraduate institutions</li>
                                            <li>Test of English language proficiency (international students)</li>
                                        </ul>
                                    </div>
                                    <div className='tab1-data '>
                                        <p>How many credits you can transfer depends on your previous experience. Here’s a closer look at Carlow’s transfer credit policy:</p>
                                        <ul className='ps-3'>
                                            <li>Carlow accepts all associate degree credits earned with a “C,” up to a maximum of 90 credits.</li>
                                            <li>Community college graduates can enter Carlow as juniors and have at least 60 transfer credits in an approved curriculum.</li>
                                            <li>Community college graduates must have at least a 2.0 GPA and must meet all other admission and eligibility requirements.</li>
                                        </ul>

                                        <p>If you have any questions, contact our enrollment team at 855-511-6450 or <a href="#">request more information online.</a></p>
                                    </div>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle={<><img src={Group} className='me-2 tab-title-icons' /> Military Affiliated Students</>}>
                            <div className='border-primary-color'></div>
                            <div className='mobileTab1-content'>
                                <div className='tabdiv-content'>
                                    <div className='tab-image'>
                                        <img src={image2} className='tabImage-1' />
                                    </div>


                                    <div className="tab-imageSideContent">
                                        <h3>Transfer Admissions Process</h3>
                                        <p>Carlow is proud to offer generous benefits to service members and veterans. As an active participant in the Yellow Ribbon Program, we abide by the participant standards outlined in the DoD Voluntary Education Memorandum of Understanding.</p>
                                        <p>Here’s a closer look at the benefits available to active-duty service members and veterans:</p>
                                        <p><strong>Using Military Tuition Assistance Benefits</strong></p>
                                        <ul className='ps-3 inner-2'>
                                            <li>Request and receive approval for using TA funds</li>
                                            <li><a>Request your transcripts</a></li>
                                            <li>File your <a> Free Application for Federal Student Aid</a> (FAFSA)</li>
                                        </ul>
                                    </div>
                                    <div className='tab1-data '>
                                        <p><strong>How to Use Your VA Benefits</strong></p>
                                        <ul className='ps-3 inner-2'>
                                            <li>Complete <a> application for your VA benefits</a></li>
                                            <li>Complete the <a> Carlow New VA Student Information Sheet</a></li>
                                            <li><a>Request your transcripts</a></li>
                                            <li>File your <a>Free Application for Federal Student Aid (FAFSA)</a></li>
                                        </ul>
                                        <p>If you have any remaining questions about benefits and the application process, reach out to our enrollment team. Call 855-511-6450 or <a> request more information online.</a></p>
                                    </div>
                                </div>
                            </div>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle={<><img src={cloud} className='me-2 tab-title-icons' /> International Admissions Process</>}>
                            <div className='border-primary-color'></div>
                            <div className='mobileTab1-content'>
                                <div className='tabdiv-content'>
                                    <div className='tab-image'>
                                        <img src={image1} className='tabImage-1' />
                                    </div>


                                    <div className="tab-imageSideContent">
                                        <h3>International Admissions Process</h3>
                                        <p className='pb-3'>Carlow is a global community. We welcome students from all backgrounds who are looking to shape their future here. The application process for international students is similar to that of other students, but there are some important differences. Here’s a closer look at the requirements for international students:</p>
                                        <ul className='ps-3'>
                                            <li>Official transcripts and evaluations</li>
                                            <li>Test of English language proficiency. Results must be from one of the following exams: TOEFL, IELTS, SAT, ACT</li>
                                            <li>Copy of passport</li>
                                        </ul>
                                        <p>If you have any remaining questions, contact our enrollment team at 855-511-6450 or <a> request more information online.</a></p>

                                    </div>

                                </div>
                            </div>
                        </MDBAccordionItem>
                    </MDBAccordion>

                </div>
            </>
        </React.Fragment >
    )
}
export default MobileTabStyle2
