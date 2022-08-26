import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import heroscope1 from "../../assets/img/heroscope/heroscope1.png";
import taurus from "../../assets/img/heroscope/taurus.png";
import gemini from "../../assets/img/heroscope/gemini.png";
import cancer from "../../assets/img/heroscope/cancer.png";
import leo from "../../assets/img/heroscope/leo.png";
import virgo from "../../assets/img/heroscope/virgo.png";
import libra from "../../assets/img/heroscope/libra.png";
import scarpio from "../../assets/img/heroscope/scarpio.png";
import sagittariusbig from "../../assets/img/heroscope/sagittariusbig.png";
import capricor from "../../assets/img/heroscope/capricor.png";
import aquarius from "../../assets/img/heroscope/aquarius.png";
import pisces from "../../assets/img/heroscope/pisces.png";

class HomeCategory extends React.Component {
 
  

  render() {


  return (
    <div className="col-lg-12 col-md-12 mb-30">
      <div className="category-home">
      <section >
      <Container>

         {/* <div className="heading">
              <h2>Horoscope Forecasts</h2>
              <img src={textbottom} alt=""/>
         </div> */}
             <Row>
                 <Col lg="2">
                    <div className="bx-1">
                        <Link to="/heroscopesall">
                            <img src={heroscope1} alt=""></img>
                            <h5>Aries</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                  <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={taurus} alt=""></img>
                            <h5>Taurus</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={gemini} alt=""></img>
                            <h5>Gemini</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={cancer} alt=""></img>
                            <h5>Cancer</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={leo} alt=""></img>
                            <h5>Leo</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={virgo} alt=""></img>
                            <h5>virgo</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={libra} alt=""></img>
                            <h5>libra</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={scarpio} alt=""></img>
                            <h5>Scorpio</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={sagittariusbig} alt=""></img>
                            <h5>Sagittarius</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={capricor} alt=""></img>
                            <h5>Capricorn</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                 
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={aquarius} alt=""></img>
                            <h5>Aquarius</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
                 <Col lg="2">
                    <div className="bx-1">
                        <Link>
                            <img src={pisces} alt=""></img>
                            <h5>Pisces</h5>
                            <p>Mar 21 - Apr 19</p>
                        </Link>
                    </div>
                 </Col>
             </Row>
      </Container>
    </section>
    </div>
    </div>
  );
  }
}


export default HomeCategory;
