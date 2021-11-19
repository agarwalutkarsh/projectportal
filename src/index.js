import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import loginM from './components/loginM';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Logout from "./components/logout"
import HeaderOuter from "./components/HeaderOuter"
import HeaderInner from "./components/HeaderInner"
import Thankyou from "./components/Thankyou"
import Feedback from "./components/Feedback"
// import MissingPeople from "./components/ViewProject"
import ViewProject from './components/ViewProject';
// import ComplaintsList from "./components/FeedbackTer"
// import ComplaintsParent from "./components/FeedbackParentTer"
// import RegisterComplaint from "./components/RegisterGrades"
import RegisterFeedback from "./components/RegisterFeedback"
import FeedbackParent from "./components/FeedbackParent"
import RegisterProject from "./components/RegisterProject"
import ViewProjectParent from "./components/ViewProjectParent"
import Management from "./components/Management";

injectTapEventPlugin();

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';


ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>

                <Route path="/" component={SignUp} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/loginM" component={loginM}></Route>
                <Route exact path="/home/management" component={Management} />
                {/* <Route path="signup" component={SignUp}></Route> */}
                {/* <Route path="crimes" component={Crimes} /> */}
                {/* <Route path="missingpeople" component={MissingPeople} /> */}
                {/* <IndexRoute component={MissingPeople}> </IndexRoute> */}
                <Route exact path="/management/feedbackparent/feedback" component={Feedback} />
                <Route exact path="/management/viewproject" component={ViewProject} />

                <Route path="/home" component={HeaderInner}>
                 <Route path="s" component={Home}> </Route>
                    <IndexRoute component={ViewProjectParent}> </IndexRoute>

                    <Route path="feedbackparent" component={FeedbackParent} >
                        <IndexRoute component={Feedback}> </IndexRoute>
                        <Route path="feedback" component={Feedback} />
                        <Route path="registerfeedback" component={RegisterFeedback} />
                    </Route>

                    <Route path="viewprojectparent" component={ViewProjectParent} >
                        <IndexRoute component={ViewProject}> </IndexRoute>
                        <Route path="viewproject" component={ViewProject} />
                        <Route path="registerproject" component={RegisterProject} />
                    </Route>

                    {/* <Route path="complaintsparent" component={ComplaintsParent} >
                        <IndexRoute component={ComplaintsList}> </IndexRoute>
                        <Route path="complaintslist" component={ComplaintsList} />
                        <Route path="registercomplaint" component={RegisterComplaint} />
                    </Route> */}

                    <Route path="viewproject" component={ViewProject} />
                    <Route path="logout" component={Login}></Route>
                    {/* <Route path="complaints" component={ComplaintsParent}></Route> */}

                </Route>

            </Router>
        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);
