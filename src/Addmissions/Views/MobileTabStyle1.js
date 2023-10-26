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
function MobileTabStyle1() {
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
                <div className="tabs-style-one">
                    <MDBAccordion alwaysOpen initialActive={1}>
                        <MDBAccordionItem collapseId={1} headerTitle={<><img src={AR} className='me-2 tab-title-icons' /> Transfer Students</>}>
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
                        <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                            plugin adds the appropriate classes that we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </MDBAccordionItem>
                    </MDBAccordion>

                </div>
            </>
        </React.Fragment >
    )
}
export default MobileTabStyle1
