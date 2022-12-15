import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../assets/css/Navigation.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/tao-mi.gif';
import HomeIcon from '@mui/icons-material/Home';
import BedIcon from '@mui/icons-material/Bed';
import LandscapeIcon from '@mui/icons-material/Landscape';
import YardIcon from '@mui/icons-material/Yard';
import InfoIcon from '@mui/icons-material/Info';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';





export function NavigationMobile() {
    
  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar collapseOnSelect={true} key={expand} expand={expand} className="navbackground">
          <Container fluid>
            <Navbar.Brand to="/" as={NavLink} href="/">
              <img src={Logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={Logo} alt="logo"/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* <Nav.Link className='navlink' to="/" href="/" as={NavLink}>
                    <div style={{display:"flex", alignItems:"center"}}>
                      <HomeIcon fontSize="small"/> 首頁
                    </div>
                  </Nav.Link> */}
                  <Nav.Link className='navlink' to="/" href="/" as={NavLink}>
                    <div style={{display:"flex", alignItems:"center"}}>
                      <InfoIcon fontSize="small"/> 關於若瑟桃米
                    </div>
                  </Nav.Link>
                  <Nav.Link className='navlink' to="/room" href="/room" as={NavLink}>
                    <div style={{display:"flex", alignItems:"center"}}>
                      <BedIcon fontSize="small"/> 若瑟寢宮
                    </div>
                  </Nav.Link>
                  <Nav.Link className='navlink' to="/photo" href="/photo" as={NavLink}>
                    <div style={{display:"flex", alignItems:"center"}}>
                      <YardIcon fontSize="small"/> 翠綠庭園
                    </div>
                  </Nav.Link>
                  <Nav.Link className='navlink' to="/travel" href="/travel" as={NavLink}>
                    <div style={{display:"flex", alignItems:"center"}}>
                      <LandscapeIcon fontSize="small"/> 周邊景點
                    </div>
                  </Nav.Link>
                  <Nav.Link className='navlink' to="/location" href="/location" as={NavLink}>
                    <div style={{display:"flex", alignItems:"center"}}>
                      <DirectionsCarIcon fontSize="small"/> 交通導覽
                    </div>
                  </Nav.Link>

                  {/* <Nav.Link className='navlink' to="/" href="/" as={NavLink}>
                    <img src={menu06} alt="home"/>
                  </Nav.Link>
                  <Nav.Link className='navlink' to="/about" href="/about" as={NavLink}>
                    <img src={menu01} alt="about"/>
                  </Nav.Link>
                  <Nav.Link className='navlink' to="/room" href="/room" as={NavLink}>
                    <img src={menu02} alt="room"/>
                  </Nav.Link>
                  <Nav.Link className='navlink' to="/photo" href="/photo" as={NavLink}>
                    <img src={menu03} alt="photo"/>
                  </Nav.Link>
                  <Nav.Link className='navlink' to="/travel" href="/travel" as={NavLink}>
                    <img src={menu04} alt="travel"/>
                  </Nav.Link>
                  <Nav.Link className='navlink' to="/location" href="/location" as={NavLink}>
                    <img src={menu05} alt="location"/>
                  </Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
