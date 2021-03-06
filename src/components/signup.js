import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { DBfirebase } from '../database/DBfirebase'
import { signUp } from '../store/action/auth'
//import { SignupComponent } from '../container/signup'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import './Button.css';
import './Login.css';
import image from './image/img.png';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            email: '',
            password: '',
            city: ''
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
        let newUser = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            city: this.state.city
        }

        // console.log(this.state)
        DBfirebase.customAuth(newUser).then((user) => {
            multipath[`users/${user.uid}`] = newUser;
            DBfirebase.saveMultipath(multipath)
            newUser['uid'] = this.state.uid
            this.props.signUp(this.state)
            // console.log(user.uid)
            localStorage.setItem('currentUser', user.uid);
            this.context.router.push({
                pathname: "/home/s"
            })
        }).catch((error) => alert(error.message))
    }
    render() {
        return (
            <div ><center>
                <SignupComponent signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
              
            </center>
            </div>
        );
    }
}
Register.contextTypes = {
    router: React.PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (data) => {
            dispatch(signUp(data))
        }
    }
}




class SignupComponent extends React.Component {

    render() {

        return (
            // <div >

            //     <h1>Register</h1>
            // <form onSubmit={this.props._submit} >
            //     <TextField
            //         hintText="Full Name"
            //         name="fullname"
            //         value={this.props.signUpState.fullname}
            //      floatingLabelText="Full Name"
            //         onChange={this.props._inputHandler}
            //         /><br />

            // <TextField
            //     type="email"
            //     hintText="email"
            //     name="email"
            //     value={this.props.signUpState.email}
            //    floatingLabelText="Email"
            //     onChange={this.props._inputHandler}
            //             /><br />

            // <TextField
            //     type="password"
            //     hintText="Password"
            //     name="password"
            //     value={this.props.signUpState.password}
            //     floatingLabelText="Password"
            //     onChange={this.props._inputHandler}
            //             /><br /><br />

            //             <select name="city"
            //             value={this.props.signUpState.city}
            //             required
            //             onChange={this.props._inputHandler}>
            //             <option>City   </option>
            //             <option value="California">California</option>
            //             <option value="Florida">Florida</option>
            //             <option value="New Jersey">New Jersey</option>
            //             <option value="New York">New York</option>
            //             <option value="Ohio">Ohio</option>
            //             <option value="Texas">Texas</option>
            //             <option value="Washington">Washington</option>
            //             <option value="Los Angeles">Los Angeles</option>
            //             <option value="New Mexico">New Mexico</option>
            //             <option value="Oxford">Oxford</option>
            //         </select><br /><br />

            //         <RaisedButton type="submit" label="Sign up" primary={true} /> <br /><br />
            //     </form>

            // </div>
            <div>
                <div className="zImage">
                    <img src={image} />
                </div>
                <div className="body">
                    <div className="form" >
                        <center>
                            <h1 className="title">Register</h1>
                            <form onSubmit={this.props._submit} >
                                <TextField
                                    hintText="Full Name"
                                    name="fullname"
                                    value={this.props.signUpState.fullname}
                                    floatingLabelText="Full Name"
                                    onChange={this.props._inputHandler}
                                    required
                                /><br />

                                <TextField
                                    type="email"
                                    hintText="email"
                                    name="email"
                                    value={this.props.signUpState.email}
                                    floatingLabelText="Email"
                                    onChange={this.props._inputHandler}
                                    required
                                />
                                <TextField
                                    type="password"
                                    hintText="Password"
                                    name="password"
                                    value={this.props.signUpState.password}
                                    floatingLabelText="Password"
                                    onChange={this.props._inputHandler}
                                    required />
                                <br /><br />
                                {/* <RaisedButton type="submit" label="Sign in" primary={true} /><br /> */}
                                <button className="sgnBtn" type="submit" label="Sign up">Register</button>
                                <br /><br /><div className="alternate">Already have a Account?
                                    <Link to="/login"><br /><a label="Login" primary={false} >Login</a></Link>
                                </div>


                            </form>
                        </center>
                    </div>
                </div>
            </div>

        )
    }
}
SignupComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
