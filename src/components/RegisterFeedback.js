import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { DBfirebase } from '../database/DBfirebase'
import { signUp } from '../store/action/auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import image from './image/img.png';
import './Dropdown.css'

class RegisterFeedback extends Component {
    constructor() {
        super();
        this.state = {
            informerName: '',
            roll: '',
            teacher: '',
            feedback: ''

        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let multipath = {};
        let feedback = {
            informerName: this.state.informerName,
            roll: this.state.roll,
            teacher: this.state.teacher,
            feedback: this.state.feedback,
        }
        console.log(feedback)
        DBfirebase.refFeedback.push(feedback);
        browserHistory.push('/home/viewprojectparent/viewproject')

    }
    render() {
        return (
            <div ><center>
                <FeedbackForm signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}

RegisterFeedback.contextTypes = {
    router: React.PropTypes.object.isRequired
}


class FeedbackForm extends React.Component {

    render() {

        return (
            <div>
                <div className="zImage">
                <img src={image} />
                </div>
                <div className="body">
                
                
                <form className="form" onSubmit={this.props._submit} >
                <h1>Give a Feedback</h1>
                    <TextField
                        hintText="Full Name"
                        name="informerName"
                        value={this.props.signUpState.informerName}
                        floatingLabelText="Full Name"
                        onChange={this.props._inputHandler}
                    /><br />

                    <TextField
                        type="text"
                        hintText="Roll no."
                        name="roll"
                        value={this.props.signUpState.roll}
                        floatingLabelText="Roll"
                        onChange={this.props._inputHandler}
                    /><br /><br />

                    <select name="teacher"
                        value={this.props.signUpState.teacher}
                        required
                        onChange={this.props._inputHandler}
                        className="details">
                        <option className="summary"> Faculty  </option>
                        <option className="summary" value="Teacher1">Teacher 1</option>
                        <option className="summary" value="Teacher2">Teacher2</option>
                        <option className="summary" value="Teacher3">Teacher3</option>
                        <option className="summary" value="Teacher4">Teacher4</option>
                        <option className="summary" value="Teacher5">Teacher5</option>
                        <option className="summary" value="Teacher6">Teacher6</option>
                    </select><br /><br />
                    <TextField
                        type="text"
                        hintText="Feedback"
                        name="feedback"
                        value={this.props.signUpState.feedback}
                        floatingLabelText="Feedback"
                        onChange={this.props._inputHandler}
                    /><br />
                    <br />

                    <button className="subBtn" type="submit" label="Register a Feedback" primary={false} secondary={true} >Submit</button> <br /><br />
                </form>

            </div>
            </div>
            
        )
    }
}
// CrimeForm.PropTypes = {
//     _inputHandler: React.PropTypes.func.isRequired,
//     _submit: React.PropTypes.func.isRequired

// }

export default RegisterFeedback;
