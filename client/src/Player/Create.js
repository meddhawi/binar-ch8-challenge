import React, { Component } from 'react'

// Bootstrap 
import {
    Form,
    Container,
    Row,
    Card
} from 'react-bootstrap'

class Create extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            username : '',
            email : '',
            experience: '',
            show: false,
            disable: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("Username: " + event.target.value)
        this.setState({
          username: event.target.value,
        });
      }
      
    handleChange2(event) {
        console.log("email: " + event.target.value)
        this.setState({
          email: event.target.value,
        });
    }

    handleChange3(event) {
        console.log("XP: " + event.target.value)
        this.setState({
          experience: event.target.value,
        });
    }

    

    showPlayer(){
        if(this.state.show){
            return(
                <Container className="col-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://dummyimage.com/286x180/000/fff" />
                        <Card.Body>
                            <Card.Text>Username: {this.state.username}</Card.Text>
                            <Card.Text>Email: {this.state.email}</Card.Text>
                            <Card.Text>Experience: {this.state.experience}</Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
                
            )
        }
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
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" 
                                placeholder="Enter username"
                                value={this.state.value}
                                onChange={this.handleChange} 
                                disabled={this.state.disable}/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" 
                                placeholder="Enter email"
                                value={this.state.value}
                                onChange={this.handleChange2} 
                                disabled={this.state.disable}/>
                        </Form.Group>    
                        <Form.Group className="mb-3" >
                            <Form.Label>Experience</Form.Label> 
                            <Form.Select aria-label="Default select example" 
                            onChange={this.handleChange3}
                            disabled={this.state.disable}>
                                <option>Choose difficulty</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Professional">Professional</option>
                            </Form.Select>
                        </Form.Group>
                        <input type="submit" value="Submit" />      
                    </Form>
                </Container>
                
                {this.showPlayer()}
                
                </Row>
            </div>
        )
    }

}

export default Create