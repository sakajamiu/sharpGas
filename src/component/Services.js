import {MdAccessibility,MdDiscFull,MdOutlineNotificationsActive}from 'react-icons/md'
import { Container,Row,Col } from 'react-bootstrap'
const Services =()=>(
    <Container fluid id ='servicesRow'>
        
        <Row 
            style ={{
                paddingTop:'50px',
                paddingBottom:'50px'
            }}
        >
            
            <Col lg ={4}>
                <MdAccessibility 
                    style ={{ 
                        width:'110px', 
                        height:'120px'
                    }}
                />
                <p 
                    style={{
                        color:'#97BE44', 
                        fontSize:'22px', 
                        fontWeight:'800'
                    }}
                >
                    Get access easily
                </p>
                <p 
                    id ='servicesP1'
                >
                    Easy access to your gas details<br/> 
                    using mobile or desktop
                </p>
            </Col>
            <Col lg ={4}>
                <MdOutlineNotificationsActive 
                    style ={{ 
                        width:'110px', 
                        height:'120px'
                    }}
                />
                <p 
                    style={{
                        color:'#97BE44', 
                        fontSize:'22px', 
                        fontWeight:'800'
                    }}
                >
                    Receive gas level notification
                </p>
                <p 
                    id ='servicesP1'
                >
                    Receive gas level changes as <br/> 
                    desired by the customer
                </p>
            </Col>
            <Col lg={4}>
                <MdDiscFull 
                    style ={{ 
                        width:'110px', 
                        height:'120px'
                    }}
                />
                <p 
                    style={{
                        color:'#97BE44', 
                        fontSize:'22px', 
                        fontWeight:'800'
                    }}
                >
                    we use the best in class technology
                </p>
                <p 
                    id ='servicesP1'
                >
                    Use our state of the art gas tracker<br/> 
                    on any existing cylinder
                </p>
            </Col>

           
        </Row>
        
    </Container>

)
export default Services