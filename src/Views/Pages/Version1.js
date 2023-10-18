import React, { useState } from "react"
import NavBar from "../../Components/Header/NavBar"
import Footer from "../../Components/Footer/Footer"
import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit"
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
                                    <p>Complete this form to learn more about building your future with an online degree from Carlow University.</p>

                                    <form>
                                        <label>SELECT A PROGRAM</label>
                                        <select className=" mt-2 form-control select-input placeholder-active active">
                                            <option>select a Program</option>
                                            <option>a</option>
                                            <option>a</option>
                                            <option>a</option>
                                        </select>
                                        <MDBRow className="mt-2">
                                            <MDBCol>
                                                <label>
                                                    First Name
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
                                                    Last Name
                                                </label>
                                                <input type="text" className="form-control mt-2" placeholder="Last Name" onChange={(e) => {
                                                    setName1(e.target.value);
                                                }}
                                                    onBlur={handleBlur1} />
                                                {value1 && name1 === "" && <p className="m-0 mt-1">This field is required</p>}
                                            </MDBCol>
                                        </MDBRow>
                                    </form>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>


                </MDBContainer>



                <Footer />
            </>
        </React.Fragment >
    )
}
export default Version1