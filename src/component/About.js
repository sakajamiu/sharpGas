import { Container,Row,Col,Button } from "react-bootstrap";
import service1 from '../images/service1.jpg'
import service2 from '../images/service2.jpg'

const About = () =>(
    <Container fluid 

        id = 'about'
    >
        <Row>
            <Col lg ={4}>
                <div id ='aboutImageDiv'>
                    <div id ='aboutImage1'>
                        <img 
                            src ={service1} 
                            alt='about1'
                        />
                    </div>
                    <div id ='aboutImage2'>
                        <img
                            src = {service2}
                            alt ='about 2'

                        />
                    </div>
                </div>
            </Col>
            <Col lg ={8}
 
                id ='aboutParagraph'
            >
                <p 
                    id = 'p1'

                >
                    A new way to integrate <br/>our tracker with <br/> maintenance
                </p>
                <p 
                    id ='p2'
                >
                    we offer installation and maintenance of the tracker module based on subscriptions.
                    This means we are always ready to solve any issues with our tracking devices

                </p>
                <Button
                    id ='aboutButton'
                >
                    Our plans (coming soon)
                </Button>
            </Col>
        </Row>
    </Container>

)

export default About