import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import astro3 from "../../assets/img/team/astro3.jpg";
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import pagetitle  from "../../assets/img/pagetitle.jpg";


class AllAstrologerList extends React.Component {
 
  

  render() {

   
  return (

    <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0" >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      backgroundImage: `url(${pagetitle})`,
                      width: "100%",
                      padding:"70px 0px",
                      backgroundSize:"cover"
                    }}
                  >
                    <Container>
                            <Row>
                                <Col md="12">
                                    <div className="leftcont text-left">
                                        <h2>Talk To Astrologer</h2>
                                        <p></p>
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
            </section>
        <section id="team" class="pb-5">
        <Container>
            {/* <div className="heading mb-30">
                <h2>Best Astrologers </h2>
                <img src={textbottom} alt=""/>
            </div>         */}
            <Row>
            <Col md="3">
                <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img src={astro3} alt=""/></p>
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                            </ul>
                                        <Link className="btn btn-primary btn-sm st-d">
                                             Online
                                        </Link>
                                        <Link className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                         <ul>
                                            <li>Rating :<span>(1458)</span>
                                              <p className="mb-3">
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              </p>
                                            </li>
                                            <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                         </ul>
                                         <Link  to="/astrologerdetail" className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
            <Col md="3">
                <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img src={astro3} alt=""/></p>
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                            </ul>
                                        <Link className="btn btn-primary btn-sm st-d">
                                             Online
                                        </Link>
                                        <Link className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                         <ul>
                                            <li>Rating :<span>(1458)</span>
                                              <p className="mb-3">
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              </p>
                                            </li>
                                            <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                         </ul>
                                         <Link  to="/astrologerdetail" className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
            <Col md="3">
                <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img src={astro3} alt=""/></p>
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                            </ul>
                                        <Link className="btn btn-primary btn-sm st-d">
                                             Online
                                        </Link>
                                        <Link className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                         <ul>
                                            <li>Rating :<span>(1458)</span>
                                              <p className="mb-3">
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              </p>
                                            </li>
                                            <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                         </ul>
                                         <Link  to="/astrologerdetail" className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
            <Col md="3">
                <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img src={astro3} alt=""/></p>
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                            </ul>
                                        <Link className="btn btn-primary btn-sm st-d">
                                             Online
                                        </Link>
                                        <Link className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                         <ul>
                                            <li>Rating :<span>(1458)</span>
                                              <p className="mb-3">
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              </p>
                                            </li>
                                            <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                         </ul>
                                         <Link  to="/astrologerdetail" className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
            <Col md="3">
                <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img src={astro3} alt=""/></p>
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                            </ul>
                                        <Link className="btn btn-primary btn-sm st-d">
                                             Online
                                        </Link>
                                        <Link className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                         <ul>
                                            <li>Rating :<span>(1458)</span>
                                              <p className="mb-3">
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              </p>
                                            </li>
                                            <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                         </ul>
                                         <Link  to="/astrologerdetail" className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
            <Col md="3">
                <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img src={astro3} alt=""/></p>
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                            </ul>
                                        <Link className="btn btn-primary btn-sm st-d">
                                             Online
                                        </Link>
                                        <Link className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                         <ul>
                                            <li>Rating :<span>(1458)</span>
                                              <p className="mb-3">
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              </p>
                                            </li>
                                            <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                         </ul>
                                         <Link  to="/astrologerdetail" className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
            <Col md="3">
                <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img src={astro3} alt=""/></p>
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                            </ul>
                                        <Link className="btn btn-primary btn-sm st-d">
                                             Online
                                        </Link>
                                        <Link className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                         <ul>
                                            <li>Rating :<span>(1458)</span>
                                              <p className="mb-3">
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              </p>
                                            </li>
                                            <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                         </ul>
                                         <Link  to="/astrologerdetail" className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
            <Col md="3">
                <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img src={astro3} alt=""/></p>
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                            </ul>
                                        <Link className="btn btn-primary btn-sm st-d">
                                             Online
                                        </Link>
                                        <Link className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                         <ul>
                                            <li>Rating :<span>(1458)</span>
                                              <p className="mb-3">
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              </p>
                                            </li>
                                            <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                         </ul>
                                         <Link  to="/astrologerdetail" className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Col>
            </Row>
        </Container>  
        </section>
    </LayoutOne>
  );
  }
}


export default AllAstrologerList;
