import React, { Component } from 'react';
import { Loggedin } from '../store/action/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { DBfirebase } from "../database/DBfirebase"
// import { List, ListItem } from 'material-ui/List';
import MissingPeopleParent from "./ViewProjectParent"
import './Login.css';
import image from './image/img.png';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.authReducer.user

        }
    }

    componentWillMount() {
        let key = localStorage.getItem('currentUser')
        DBfirebase.ref.child(`/users`).on("child_added", (snapshot) => {

        })
        DBfirebase.ref.child(`/users/${key}`).on("value", (snapshot) => {
            if (snapshot.val()) {
                this.setState({
                    name: snapshot.val().fullname
                })
                this.props.Loggedin(snapshot.val())
            }
        })
    }
    render() {
        return (
            <div className="body">
                <img className="mImage" src={image} />
                <span className=""><h1 className="line-1 anim-typewriter" ><span className="title">Welcome {this.state.name}</span></h1></span>
                <br /><br /><br /><br />
                <div>
                    <center>
                        {this.props.children}
                    </center>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Loggedin: (data) => {
            dispatch(Loggedin(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);