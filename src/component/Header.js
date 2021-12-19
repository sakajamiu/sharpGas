import {Container, Col,Row,Button} from 'react-bootstrap'
import header1 from '../images/header1.jpg'
import header2 from '../images/header2.jpg'


const Headers = () =>(
    <Container 
        fluid 
        
        style ={{
            paddingTop:'40px', 
            paddingBottom:'50px'
         
        }}
    >
        <Row id ='header'>
            <Col 
                lg ={8}

                id = 'headerParagraph'
            >
                <p id ='headerP'>
                    Tracking gas <br/>
                     just got easier
                </p>
                <p id ='headerP2'>
                    Thinking of tracking your gas in real time? SharpGas
                    gives you the platform to track and analyze your gas usage so you
                    don't have to worry about your gas getting finished while making
                    use of it.
                </p>
                <Button
                    id ='headerButton'
                >Reserve your spot</Button>
            </Col>
            <Col lg ={4}>
                <div id ='headerImageDiv'>
                    <div id ='headerImage1'>
                        <img 
                            src={header1}
                            alt ='sharpgas'
                        />
                    </div> 
                    <div id='headerImage2'>
                        <img  
                            src ={header2}
                            alt ='sharpgas'
                        />
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
)

export default Headers