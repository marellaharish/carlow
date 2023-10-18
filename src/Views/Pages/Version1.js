import React from "react"
import NavBar from "../../Components/Header/NavBar"
import Footer from "../../Components/Footer/Footer"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
function Version1() {
    return (
        <React.Fragment>
            <>
                <NavBar />


                <MDBContainer fluid>

                    <header className="tux-c-page-header" data-component="Page Header">
                        <div className="tux-c-page-header__wrapper tux-l-wrap--md">

                            <h1 className="tux-c-page-header__heading">
                                Carlow University Online Admissions
                            </h1>
                        </div>
                    </header>

                    <MDBRow>
                        <MDBCol size={7} className="p-0">
                            <div className="home__bg">

                            </div>
                        </MDBCol>
                        <MDBCol size={5} className="p-0">
                            <div className="home__register">

                            </div>
                        </MDBCol>
                    </MDBRow>


                </MDBContainer>














                <Footer />
            </>
        </React.Fragment>
    )
}
export default Version1