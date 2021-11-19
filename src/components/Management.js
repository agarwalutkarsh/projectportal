import React from "react"
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, browserHistory} from "react-router"
import * as firebase from "firebase"
import Feedback from "./Feedback"
import { TableBody } from "material-ui";
import './Login.css';
import image from './image/img.png';

var styles = {
  appBar: {
    backgroundColor: '#C62828',
   // backgroundColor: '#3F51B5',
     minHeight:50,
     //height:300
  },
  
  buttonInAppBar : {
  margin: 12,
  backgroundColor: "transparent"
},
}

export default class FeedbackParent extends React.Component {

    logoutBtn(){
        firebase.auth().signOut();
        browserHistory.push("/loginM");
        }
    render() {
        return (
            <div>
                <AppBar
                style={styles.appBar}
               
                    title="Management View"
                   // iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                 {/* <Link to="/home/crimeparent/registercrime" >   <RaisedButton style={styles.buttonInAppBar} label="Register Feedback" primary={false} /></Link> */}
                  <Link to="/management/feedbackparent/feedback" >   <RaisedButton style={styles.buttonInAppBar} label="View Feedbacks" primary={false} /></Link>
                  <Link to="/management/viewproject" >   <RaisedButton style={styles.buttonInAppBar} label="View Project" primary={false} /></Link>
                  <RaisedButton style={styles.buttonInAppBar} onClick={this.logoutBtn.bind(this)} label="Logout" primary={false} />
                     
                </AppBar>
                
               
               
                {this.props.children}
                <div className="body">
                    <img className="mImage" src={image} />
                    <h1 className="title">Welcome to Management Mode Good.</h1>
                </div>
            </div>
        )
    }
}

