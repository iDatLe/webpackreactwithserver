import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SignUpAction } from './actions/Actions';
import { SignUpSubmit } from './actions/Actions';

class App extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.props.inputData
    this.props.submit(data);
  }

  onChange = (event) => {
    this.props.input(event.target.name, event.target.value)
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <form onSubmit={this.handleSubmit}>
        	First Name: <input 
                        type="text" 
                        name="first" 
                        placeholder="Enter a first name"
                        value={this.props.inputData.first}
                        onChange={this.onChange}
                        />
        	Last Name: <input 
                        type="text" 
                        name="last" 
                        placeholder="Enter a last name"
                        value={this.props.inputData.last}
                        onChange={this.onChange}
                        />
        	<input type="submit" value="submit" />
        </form> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputData: state.SignUp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    input: (name, value) => {
      dispatch(SignUpAction(name, value))
    },
    submit: (data) => {
      dispatch(SignUpSubmit(data))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
