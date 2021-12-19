import {FaInstagram, FaTwitter,FaFacebookF,FaRegCopyright,FaMapMarkerAlt,FaPhoneSquareAlt} from 'react-icons/fa'
import {Col,Row,Container} from 'react-bootstrap'

const Footer = () =>(
    <Container fluid  id ='footer'>
        <Row>
            <Col lg ={4}>
                <div style ={{textAlign:'center', marginTop:'30px'}} id = 'footerSocialDiv'>
                    <p id = 'footerSocial'><span id = 'span'>Social </span> </p>
                    <a href ='https://www.instagram.com/sharp_gas/' target='_blank' id ='iconLink'><FaInstagram  id ='footerInstagram'className= 'footerSocialMediaIcon'/></a>
                    <FaTwitter id ='footerTwitter' className= 'footerSocialMediaIcon'/>
                    <a href ='https://web.facebook.com/profile.php?id=100074653950379' target='_blank' id ='iconLink'><FaFacebookF className= 'footerSocialMediaIcon' id ='footerFacebook'/></a>
                </div>
            </Col>
            <Col lg ={4}id ='footerAddressDiv'>
                <p id = 'footerContact'><span id ='span'>Contact</span></p>
                <div > <FaMapMarkerAlt style ={{ color:'#97BE44'}} id = 'footerAddressLogo'/>20a, Anibaba Street <br id ='footerBr'/> Ogolonto, Lagos</div>
                <div style={{marginTop:'15px'}}><FaPhoneSquareAlt style ={{color:'#97BE44' }} id = 'footerAddressLogo'/>+234-812-576-0172</div>
            </Col>
            <Col lg ={4}> 
                <div style ={{ fontSize:'20px'}} id ='footerCopyrightDiv'>
                    Designed by SharpGas {''}<br id ='footerBr'/> 
                    copyright <FaRegCopyright/> <br id ='footerBr'/>
                    2021
                </div>
            </Col>
        </Row>
    </Container>
)

export default Footer