import React, { Component } from 'react'
import { signIn } from '../store/action/auth'
import { connect } from 'react-redux'
import { DBfirebase } from '../database/DBfirebase'
import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Button.css';
import './Login.css';
import image from './image/img.png';
import AppBar from 'material-ui/AppBar';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.signin = this.signin.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    signin(e) {
        e.preventDefault()
        DBfirebase.customLogin(this.state)
            .then((user) => {
                this.props.signInUser(user)
                localStorage.setItem('currentUser', user.uid);
                this.context.router.push({
                    pathname: '/home/s',
                    // state: this.props.user
                })
            })
            .catch((error) => alert(error.message))
        console.log(this.props)
    }
    render() {
        return (
            <div >
                <SigninComponent _inputHandler={this.inputHandler} _submit={this.signin} />
            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: (data) => {
            dispatch(signIn(data))
        }
    }
}



class SigninComponent extends React.Component {


    render() {
        return (
            <div>
                <div className="mImage">
                <img src={image} />
                </div>
                <div className="body">
                
                  
                <div className="form" >
                    <center>
                        <h1 className="title">Login</h1>
                        <form onSubmit={this.props._submit}>

                            <TextField
                                type="email"
                                hintText="Email"
                                // placeholder="Email"
                                // placeholderTextColor="white"
                                name="email"
                                floatingLabelText="Email"
                                onChange={this.props._inputHandler}
                                required
                            /><br />

                            <TextField
                                type="password"
                                hintText="password"
                                // placeholder="Password"
                                // placeholderTextColor="white"
                                name="password"
                                floatingLabelText="Password"
                                onChange={this.props._inputHandler}
                                required
                            /><br /><br />
                            {/* <RaisedButton type="submit" label="Sign in" primary={true} /><br /> */}
                            <br />
                            <button className="lgnBtn" type="submit" label="Sign in">Login</button>
                            <br /><br />
                            <br /><br /><div className="alternate">New Here?
                            <Link to="/signup">
                            {/* <button className="sgnBtn" label="Signup" primary={false} >SignUp</button> */}
                            <a >Sign Up</a>
                            </Link>
                            </div>
                            

                        </form>
                    </center>
                </div>
            </div>
            </div>
            


            // <div className="form">
            //     <div className="title">Login</div>
            //     <div className="subtitle">Let's create your account!</div>
            //     <div className="input-container ic1">
            //         <input id="firstname" className="input" type="text" placeholder=" " />
            //         <div className="cut"></div>
            //         <label for="firstname" className="placeholder">First name</label>
            //     </div>
            //     <div className="input-container ic2">
            //         <input id="lastname" className="input" type="text" placeholder=" " />
            //         <div className="cut"></div>
            //         <label for="lastname" className="placeholder">Last name</label>
            //     </div>
            //     <div className="input-container ic2">
            //         <input id="email" className="input" type="text" placeholder=" " />
            //         <div className="cut cut-short"></div>
            //         <label for="email" className="placeholder">Email</label>
            //     </div>
            //     <button type="text" className="submit">submit</button>
            // </div>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
