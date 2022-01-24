import React, { Component } from 'react'


class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
              username : '',
              email : '',
              experience: ''
          }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange1(event) {
      this.setState({
        username: event.target.username,
      });
    }
    
    handleChange2(event) {
      this.setState({
        email: event.target.email,
      });
    }
    
    handleChange3(event) {
      this.setState({
        experience: event.target.experience,
      });
    }
  
    handleSubmit(event) {
      alert('submitted: ' + this.state.username + ' | ' + this.state.email +  ' |' + this.state.experience);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.username} onChange={this.handleChange1} />
          </label><br/><br/>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange2} />
          </label><br/><br/>
          <label>
            Experience:
            <input type="text" value={this.state.experience} onChange={this.handleChange3} />
          </label><br/><br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  export default NameForm