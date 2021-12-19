import { useState } from 'react';
import { Alert} from 'react-bootstrap'
import Header from "./component/Header";
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact"
import Footer from "./component/Footer";

import {Button,Container,Nav, Navbar} from 'react-bootstrap'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null) 
  const [message, setMessage] = useState(null)

  const register = (userinfo) => {

    setUser(userinfo)
    if(user){
      setMessage(`dear ${user.firstName} ${user.lastName} thank you for registering. we will get in touch with you soon `)
      setTimeout(() => {
        setMessage(null)
      }, 10000)
    }
   
  }
  const Home =() =>(
    <div>
    <Header/>
    <Services/>
    <About/>
    <Contact onRegister = {register}/>
    </div>
   )
  
  return (
    <div className ='container' >
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" >
            <Container id = 'navbar'>
              <Navbar.Brand href="#" as='span'  ><Link to = '/' id = 'navBrand'>Sharp Gas</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" >
                  <Nav.Link href="#" as= 'span' ><Link to ='/services' id = 'navLink'>Services</Link></Nav.Link>
                  <Nav.Link href="#" as ='span'><Link to ='/about' id = 'navLink'>About Us</Link></Nav.Link>
                  <Nav.Link href="#" as ='span'><Link to = 'contact' id = 'navLink'>Contact Us</Link></Nav.Link>

                </Nav>
                <Nav>
                  
                  <Button id ='navButton'>
                      Download App
                  </Button>
                  

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          {
            message&&
            <Alert variant = 'success'>
              {message}
            </Alert>
          }
        </div>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = 'services' element = {<Services/>}/>
          <Route path = 'about' element = {<About/>}/>
          <Route path = 'contact' element = {<Contact onRegister = {register}/>}/>

        </Routes>
      </Router>
      <div>
        <Footer/>
      </div>

    </div>

  )
}

export default App;
