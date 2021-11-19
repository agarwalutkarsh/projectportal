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
import './Login.css';
import image from './image/img.png';

class RegisterProject extends Component {
    constructor() {
        super();
        this.state = {
            Student1: '',
            Student2: '',
            Student3: '',
            Student4: '',

            teacher: '',
            projectDetails: '',

            category: '',


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
        let projectReg = {
            student1: this.state.student1,
            student2: this.state.student2,
            student3: this.state.student3,
            student4: this.state.student4,

            teacher: this.state.teacher,
            projectDetails: this.state.projectDetails,

            category: this.state.category,

        }
        // console.log(missingPerson)
        // DBfirebase.refMissing.push({missingPerson});
        // DBfirebase.ref.child('missingPeople').push(missingPerson);
        DBfirebase.ref.child('ProjectName').push(projectReg);
        browserHistory.push('/home/viewprojectparent/viewproject')

    }
    render() {
        return (
            <div ><center>
                <RegisterProjectForm signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}

RegisterProject.contextTypes = {
    router: React.PropTypes.object.isRequired
}


class RegisterProjectForm extends React.Component {

    render() {

        return (
            <div>
                <div className="zImage">
                    <img src={image} />
                </div>
                <div className="body">

                    <form className="formR" onSubmit={this.props._submit} >
                        <h1>Register New Project</h1>
                        <TextField
                            hintText="Student Roll no."
                            name="student1"
                            value={this.props.signUpState.student1}
                            floatingLabelText="Student Roll no."
                            onChange={this.props._inputHandler}
                        /><br /><br />

                        <TextField
                            hintText="Student Roll no."
                            name="student2"
                            value={this.props.signUpState.student2}
                            floatingLabelText="Student Roll no."
                            onChange={this.props._inputHandler}
                        /><br /><br />

                        <TextField
                            hintText="Student Roll no."
                            name="student3"
                            value={this.props.signUpState.student3}
                            floatingLabelText="Student Roll no."
                            onChange={this.props._inputHandler}
                        /><br /><br />

                        <TextField
                            hintText="Student Roll no."
                            name="student4"
                            value={this.props.signUpState.student4}
                            floatingLabelText="Student Roll no."
                            onChange={this.props._inputHandler}
                        /><br /><br />



                        <select name="teacher"
                            value={this.props.signUpState.teacher}
                            // required
                            onChange={this.props._inputHandler}>
                            <option>Teacher</option>

                            <option value="Teacher1">Teacher1</option>
                            <option value="Teacher2">Teacher2</option>
                            <option value="Teacher3">Teacher3</option>
                            <option value="Teacher4">Teacher4</option>
                            <option value="Teacher5">Teacher5</option>
                            <option value="Teacher6">Teacher6</option>
                            {/* console.log(this.props.teacher); */}

                        </select><br /><br />


                        <select name="category"
                            value={this.props.signUpState.category}
                            required
                            onChange={this.props._inputHandler}>
                            <option>Category</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Android">Android</option>
                            <option value="WebDev">Web Development</option>


                        </select><br /><br />


                        <TextField
                            type="text"
                            hintText="Project Details"
                            name="projectDetails"
                            value={this.props.signUpState.projectDetails}
                            floatingLabelText="Project Details"
                            onChange={this.props._inputHandler}
                        /><br />
                        <br />


                        <button className="subBtn" type="submit" label="Submit" primary={false} secondary={true} >Submit</button> <br /><br />
                    </form>

                </div>
            </div>

        )
    }
}
// RegisterProjectForm.PropTypes = {
//     _inputHandler: React.PropTypes.func.isRequired,
//     _submit: React.PropTypes.func.isRequired

// }

export default RegisterProject;
