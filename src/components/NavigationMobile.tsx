import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../assets/css/Navigation.css'
import Logo from '../assets/img/tao-mi.gif';
import menu01 from '../assets/img/menu01_c.jpg';
import menu02 from '../assets/img/menu02_c.jpg';
import menu03 from '../assets/img/menu03_c.jpg';
import menu04 from '../assets/img/menu04_c.jpg';
import menu05 from '../assets/img/menu05_c.jpg';
import toggleicon from '../assets/img/toggleicon.png'


export function NavigationMobile() {
    
  return (
    <div>
      {['xl'].map((expand) => (
        <Navbar collapseOnSelect={true} key={expand} expand={expand} className="navbackground">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={Logo} alt="logo"/>
            </Navbar.Brand>
            <div style={{display:"flex", alignItems:"center"}}>
              {/* <span>選單</span> */}
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} >
                <img src={toggleicon} alt="toggleicon"/>
              </Navbar.Toggle>
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {/* <img src={Logo} alt="logo"/> */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 mobile">
                  <Nav.Link className='navlink' href="/about">
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                      {/* <InfoIcon fontSize="small"/> 關於若瑟桃米 */}
                      <img src={menu01} alt="menu01" />
                    </div>
                  </Nav.Link>
                  <Nav.Link className='navlink' href="/room">
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                      {/* <BedIcon fontSize="small"/> 若瑟寢宮 */}
                      <img src={menu02} alt="menu02" />
                    </div>
                  </Nav.Link>
                  <Nav.Link className='navlink' href="/photo">
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                      {/* <YardIcon fontSize="small"/> 翠綠庭園 */}
                      <img src={menu03} alt="menu03" />
                    </div>
                  </Nav.Link>
                  <Nav.Link className='navlink' href="/travel">
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                      {/* <LandscapeIcon fontSize="small"/> 周邊景點 */}
                      <img src={menu04} alt="menu04" />
                    </div>
                  </Nav.Link>
                  <Nav.Link className='navlink' href="/location">
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                      {/* <DirectionsCarIcon fontSize="small"/> 交通導覽 */}
                      <img src={menu05} alt="menu05" />
                    </div>
                  </Nav.Link>
                  {/* <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <img src={govlegalhouseicon} alt="govlegalhouseicon" style={{width:"50px"}} />
                  </div> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
