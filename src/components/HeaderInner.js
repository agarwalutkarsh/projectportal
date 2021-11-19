import React from "react"
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, browserHistory } from "react-router"
import * as firebase from "firebase"
import CrimeParent from "./FeedbackParent"
import './Header.css';

var styles = {
    //   appBar: {
    //    backgroundColor: '#009688',
    //     // backgroundColor: '#3F51B5',
    //      minHeight:50,
    //      //height:300
    //   },

    buttonInAppBar: {
        margin: 12,
        backgroundColor: "transparent"
    },
}

export default class HeaderInner extends React.Component {

    logoutBtn() {
        firebase.auth().signOut();
        browserHistory.push("/login");
    }

    render() {
        return (
            <div>
                <AppBar className="headerIn"
                    style={styles.appBar}

                    title="Project Management App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                    {/* <Link to="/home/viewprojectparent/viewproject" >   <RaisedButton style={styles.buttonInAppBar} label="HOME" primary={false} /></Link> */}
                    <Link to="/home/feedbackparent/registerfeedback" >   <RaisedButton style={styles.buttonInAppBar} label="Feedback" primary={false} /></Link>
                    <Link to="/home/viewprojectparent" >   <RaisedButton style={styles.buttonInAppBar} label="Project" primary={false} /></Link>
                    {/* <Link to="/home/complaintsparent/complaintslist" >   <RaisedButton style={styles.buttonInAppBar} label="Grades" primary={false} /></Link> */}
                    <RaisedButton style={styles.buttonInAppBar} onClick={this.logoutBtn.bind(this)} label="Logout" primary={false} />
                </AppBar>
                {this.props.children}
            </div>
        )
    }
}

