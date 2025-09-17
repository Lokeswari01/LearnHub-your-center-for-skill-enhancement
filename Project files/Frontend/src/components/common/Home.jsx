import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import AllCourses from './AllCourses';

const Home = () => {
   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <Navbar.Brand><h2>LearnHub</h2></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                  >
                  </Nav>
                  <Nav>
                      <Nav.Link as={Link} to="/" className="nav-custom-link">Home</Nav.Link>
                         <Nav.Link as={Link} to="/login" className="nav-custom-link">Login</Nav.Link>
                         <Nav.Link as={Link} to="/register" className="nav-custom-link">Register</Nav.Link>
                  </Nav>

               </Navbar.Collapse>
            </Container>
         </Navbar>

         <div id='home-container' className='first-container'>
            <div className="content-home">
               <p>YOUR CENTER <br /> FOR SKILL ENHANCEMENT</p>
               <Link to={'/register'}><Button variant='warning' className='m-2' size='md'>Explore Courses</Button></Link>
            </div>
         </div>

         <Container className="second-container">
            <h2 className="text-center my-4">Trending Courses</h2>
            <AllCourses />
         </Container>
      </>
   )
}

export default Home


