import React, { Component } from 'react'

// Bootstrap 
import {
    Form,
    Container,
    Row,
    Card
} from 'react-bootstrap'


class Edit extends Component{
    constructor(props){
        super(props);

        this.state = {
            username : '',
            email : '',
            experience: '',
            show: false,
            disable: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    showPlayer(){
        if(this.state.show){
            return(
                <Container className="col-4">
                    <Card.Title>Updated!</Card.Title>
                    <Card style={{ width: '18rem' }} className='rounded'>
                        <Card.Img variant="top" src="https://dummyimage.com/286x180/000/fff" />
                        <Card.Body className='card bg-dark'>
                            <Card.Text>Username: {this.state.username}</Card.Text>
                            <Card.Text>Email: {this.state.email}</Card.Text>
                            <Card.Text>Experience: {this.state.experience}</Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
                
            )
        }
    }
    
    handleInputChange(event){
        event.preventDefault();
        console.log(event.target.name + " :" + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            show: true,
            disable: true
        })
    }

    render(){
        return(
            <div>
                <Row>
                <Container className='col-4'>
                    <Form onSubmit={this.handleSubmit} className='form-outline form-white'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" 
                                placeholder="Enter username"
                                name="username"
                                value={this.state.value}
                                onChange = {this.handleInputChange} 
                                disabled={this.state.disable}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" 
                                placeholder="Enter email"
                                name="email"
                                value={this.state.value}
                                onChange = {this.handleInputChange} 
                                disabled={this.state.disable}/>
                        </Form.Group>    
                        <Form.Group className="mb-3" >
                            <Form.Label>Experience</Form.Label> 
                            <Form.Select aria-label="Default select example" 
                            className='form-control'
                            name="experience"
                            onChange={this.handleInputChange}
                            disabled={this.state.disable}>
                                <option>Choose difficulty</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Professional">Professional</option>
                            </Form.Select>
                        </Form.Group>
                        <input type="submit" value="Submit" className='btn btn-success'/>      
                    </Form>
                </Container>
                
                {this.showPlayer()}
                
                </Row>
            </div>
        )
        
    }
}

export default Edit;