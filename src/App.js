import './App.css';
import { FaWhatsapp, FaSearch, FaInstagram, FaUserCircle, FaShoppingCart, FaTwitter, FaYoutube } from 'react-icons/fa';
import {FiTruck} from 'react-icons/fi';
import {AiOutlineSafety, AiOutlineCreditCard} from 'react-icons/ai';
import {MdOutlineCopyright} from 'react-icons/md';
import {BiRightArrowCircle} from 'react-icons/bi';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
    return (
        <div id='store'>
           <nav className="navbar navbar-expand-md justify-content-md-center justify-content-start">
    <button className="navbar-toggler ml-1" type="button">
        <span className="navbar-toggler-icon"></span>
    </button>
    <h5 style={{fontFamily:"'Changa', sans-serif", marginLeft:"50px"}}>Search</h5>
    <input type="text" style={{background:"transparent", border:"10px", borderBottom:"1px solid black", width:"90px",marginBootom:"20px"}}/>
    <a className="nav-link" href="#_"><i><FaSearch style={{width:"20px", height:"20px", marginBottom:"10px"}}/></i></a> 
    <div className="navbar-collapse collapse justify-content-between align-items-center w-100">
        <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item my-auto" style={{fontFamily:"'Cinzel Decorative', cursive", marginRight:"50px"}}>
                <a className="nav-link navbar-brand mx-0 d-none d-md-inline" style={{fontSize:"30px"}}  href="">B E T U L <br /> Z E M H E R I</a>
            </li>
        </ul>
        <ul className="nav navbar-nav justify-content-md-center justify-content-start" style={{marginRight:"50px"}}>
            <li className="nav-item"><a className="nav-link" href=""><i><FaInstagram style={{width:"20px", height:"20px", color:"black"}}/></i></a> </li>
            <li className="nav-item"><a className="nav-link" href=""><i><FaWhatsapp style={{width:"20px", height:"20px", color:"black"}}/></i></a> </li>
            <li className="nav-item"><a className="nav-link" href=""><i><FaUserCircle style={{width:"20px", height:"20px", color:"black"}}/></i></a> </li>
            <li className="nav-item"><a className="nav-link" href=""><i><FaShoppingCart style={{width:"20px", height:"20px", color:"black"}}/></i></a> </li>
        </ul>
        </div>
        </nav> 


        <Navbar  style={{fontFamily:"sans-serif", fontSize:"20px"}}>
      <Container style={{marginLeft:"400px", marginTop:"25px", marginBottom:"25px"}}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="#home" style={{marginRight:"35px"}}>New Season</Nav.Link>
            <Nav.Link href="#link" style={{marginRight:"35px"}}>Bestseller</Nav.Link>
            <NavDropdown title="Clothing" id="basic-nav-dropdown" style={{marginRight:"35px"}}>
              <NavDropdown.Item href="#action/3.1">Shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sweatshirt
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sweater</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Dress
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jean</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Track Suit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Skirt</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" style={{marginRight:"30px"}}>Suit</Nav.Link>
            <NavDropdown title="Outerwear" id="basic-nav-dropdown" style={{marginRight:"35px"}}>
              <NavDropdown.Item href="#action/3.1">Coat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Jacket
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Trenchcoat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Waistcoat
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cardigan</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
        <Carousel style={{width:"1000px", height:"500px", margin:"auto"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/img.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/img1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/img2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
         </Carousel>
    </div>


    <div className='collection'>
        <h4 style={{fontSize:"40px", fontWeight:"bold"}}>BZ’23 COLLECTION</h4>
        <h6 style={{fontSize:"20px", fontWeight:"bold", color:"rgba(158, 56, 46, 0.44)"}}>discover now !</h6>
    </div>


    <section className='cards'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6" style={{marginBottom:"40px"}}>
              <div className="card">
                <div className="card-bodytext-end">
                  <div>
                    <img src="../images/card1.png" className="img-fluid"/>
                    <h5 className="explore">
                    <a href="#" className="text-body text-decoration-none">EXPLORE</a>
                    <BiRightArrowCircle className='circle'/> 
                  </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="card-bodytext-end">
                  <div>
                    <img src="../images/card2.png" alt="" className="img-fluid " />
                  </div>
                  <h5 className="explore">
                    <a href="#" className="text-body text-decoration-none">EXPLORE</a>
                    <BiRightArrowCircle className='circle'/> 
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="card-bodytext-end">
                  <div>
                    <img src="../images/card3.png" alt="" className="img-fluid" />
                  </div>
                  <h5 className="explore">
                    <a href="#" className="text-body text-decoration-none">EXPLORE</a>
                    <BiRightArrowCircle className='circle'/> 
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="card-bodytext-end">
                  <div>
                    <img src="../images/card4.png" alt="" className="img-fluid" />
                  </div>
                  <h5 className="explore">
                    <a href="#" className="text-body text-decoration-none">EXPLORE</a>
                    <BiRightArrowCircle className='circle'/> 
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="card-bodytext-end">
                  <div>
                    <img src="../images/card5.png" alt="" className="img-fluid" />
                  </div>
                  <h5 className="explore">
                    <a href="#" className="text-body text-decoration-none">EXPLORE</a>
                    <BiRightArrowCircle className='circle'/> 
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="card-bodytext-end">
                  <div>
                    <img src="../images/card6.png" alt="" className="img-fluid" />
                  </div>
                  <h5 className="explore">
                    <a href="#" className="text-body text-decoration-none">EXPLORE </a>
                    <BiRightArrowCircle className='circle'/> 
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="card-bodytext-end">
                  <div>
                    <img src="../images/card7.png" alt="" className="img-fluid"/>
                  </div>
                  <h5 className="explore">
                    <a href="#" className="text-body text-decoration-none">EXPLORE</a>
                    <BiRightArrowCircle className='circle'/> 
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <div className="card-bodytext-end">
                  <div>
                    <img src="../images/card8.png" alt="" className="img-fluid" />
                  </div>
                  <h5 className="explore">
                    <a href="#" className="text-body text-decoration-none">EXPLORE</a>
                    <BiRightArrowCircle className='circle'/> 
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <div className='iconss'>
        <div className='collection2'>
          <h4 style={{fontSize:"40px", fontWeight:"bold"}}>END-OF-SEASON DEALS !</h4>
        </div>
        <div className='icon2'>
          <FiTruck className='truck'/>
          <h6 className='icon21'>Free shipping <br /> over $100</h6>
          <AiOutlineSafety className='safe'/>
          <h6 className='icon22'>100% Safe <br /> Shopping</h6>
          <AiOutlineCreditCard className='credit'/>
          <h6 className='icon23'>To Credit Card <br /> 12 Installments Opportunity</h6>
        </div>
      </div>
     

     <div className='footer' style={{background:"#EBDDDD"}}>
      <div className='about'>
        <h5>About Us</h5>
        <p>
          Membership Agreement <br />
          Distance Sales Agreement <br /> 
          Frequently Asked Questions
        </p>
      </div>

      <div className='delivery'>
        <h5>Delivery & Returns</h5>
        <p>
          Delivery Terms <br /> 
          Privacy Policy <br /> 
          Return/Exchange Request Conditions
        </p>
      </div>

      <div className='center'>
        <h5>Center Office</h5>
        <p>Lorem ipsum street No: 9/3 SEATTLE</p>
      </div>

      <div className='shops'>
        <h5>Shops</h5>
        <p>
          Lorem Mall <br /> 
          Ipsum Mall 
        </p>
      </div>

      <div className='follow'>
        <h2>Follow Us</h2>
        <FaWhatsapp className='wp'/>
        <FaTwitter className='tw'/>
        <FaInstagram className='ins'/>
        <FaYoutube className='ytb'/>
      </div>

      <div className='subscribe'>
        <p>Subscribe to the newsletter and be the first to know about the campaigns.</p>
          <input className='input' type="text" placeholder='Your E-Mail Address' />
        <button className='button'>Subscribe</button>        
      </div>
     </div>


     <div className="footer2">
      <p><MdOutlineCopyright style={{fontSize:"10px"}} /> Designed by Betul Zemheri </p>
     </div>




</div>
  );
}
export default App;