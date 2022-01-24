import React, { Component } from 'react'

// Bootstrap 
import {
    Form,
    Container,
    
} from 'react-bootstrap'


class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            search : '',
            category : '',
            show: false,
            disable: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        event.preventDefault();
        console.log(event.target.name + " :" + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render(){
        return(
            <div>
                <Container className='mt-2'>
                    <div className=''>
                        <Form >
                            <div className='d-flex'>
                                <div className='col-6 m-1'>
                                    <Form.Control type="text" 
                                        placeholder="Search something..."
                                        name="username"
                                        value={this.state.value}
                                        onChange = {this.handleInputChange} 
                                        disabled={this.state.disable}/>
                                </div>
                                <div className='col-2 m-1'>
                                    <select className="form-select">
										<option value="username">Username</option>
										<option value="username">Email</option>
										<option value="username">Experience</option>
									</select>
                                </div>
                                <div className='col-2 m-1'>
                                    <button type="submit" value="Submit" className='btn btn-success'>Submit</button>
                                </div>
                            </div>
                        </Form>
                            
                    </div>
                </Container>
            </div>
        )
    }
}

export default Search;