import { useEffect, useState } from 'react'
import {Form,Container, Card,Button,Spinner} from 'react-bootstrap'
import { useResources, useField } from '../hooks/hook'
import { useNavigate } from 'react-router-dom'

const Contact =(props) => {
    const [contact, contactService ] = useResources('https://sharpgasapi.somee.com/api/PreRegister')
    const [loadingVisible , setLoadingVisible] = useState(false)
    const firstName = useField('text')
    const lastName = useField ('text')
    const email = useField ('text')
    const phoneNumber = useField('text')
    const message = useField('text')
    const showWhenVisible = { display : loadingVisible? '': 'none' }
    const hideWhenVisible = { display : loadingVisible? 'none' : '' }
    const navigate = useNavigate()
    useEffect(()=>{
        props.onRegister(contact)
    })
    const handleSubmit =  async(event) =>{
        
        event.preventDefault()
        setLoadingVisible(true)
        await contactService.create( {
            firstName: firstName.value, 
            lastName: lastName.value,
            mobileNumber : phoneNumber.value,
            emailAddress: email.value,
            message: message.value

        })
        setLoadingVisible(false)
        navigate('/')
     
       
    }
 return(
        <div>

            <Container fluid id ='contact'>
            
                <p 
                    id ='contactP'

                >
                    Join our waiting list
                </p>
           
            
                <Card className ='contactForm' style={{borderRadius:'20px', padding:'40px 25px', backgroundColor:'#000000'}}>
                    <Card.Body>
                        <Form onSubmit = {handleSubmit}>
                            <Form.Group className ='mb-3'>
                                <Form.Control size ='lg' placeholder='First Name' id='placeholder' {...firstName}/>
                            </Form.Group>
                            <Form.Group className ='mb-3'>
                                <Form.Control size ='lg' {...lastName} placeholder='Last Name' id='placeholder'/>
                            </Form.Group>
                            <Form.Group className ='mb-3'>
                                <Form.Control size ='lg' {...phoneNumber} placeholder='Phone Number' id='placeholder'/>
                            </Form.Group>
                            <Form.Group className ='mb-3'>
                                <Form.Control size='lg' {...email} placeholder = 'Email'id='placeholder'  />
                            </Form.Group>
                            <Form.Group className ='mb-3'>
                                <Form.Control as='textarea' {...message}placeholder='Do you have a message for us?' style={{height:'300px'}}id='placeholder' />
                            </Form.Group>
                            <Button type ='submit'
                                style={hideWhenVisible}
                                id ='contactButton'
                            >
                                Join
                            </Button>
                            <Button style = {showWhenVisible} id ='contactButton'><Spinner animation="grow" role="status"></Spinner> {' '}Loading...</Button>
                        </Form>
                    </Card.Body>
                </Card>
            
            </Container>
        </div>
    )
}

export default Contact