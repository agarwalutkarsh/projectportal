import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { Search } from '../store/action/auth'
import { connect } from 'react-redux'
import './Login.css';
import image from './image/img.png';




const style = {
  // //height: 100,
  // //width: 100,
  // margin: 20,
  // // textAlign: 'center',
  // // display: 'inline-block',
  // display: 'block-inline',
  // height: 'auto',
  // width: 'auto',
  // padding: 20,
  // backgroundColor: '#BDBDBD'

};

class ProjectList extends Component {
  constructor() {
    super();

    this.state = {
      //  ProjectList: [],
      arr: []
    }
    this.onSearch = this.onSearch.bind(this)
  }

  //working code
  onSearch(e) {
    let _self = this;
    e.preventDefault()
    // let ref = DBfirebase.ref.child("/donors");
    let ref = firebase.database().ref().child('/ProjectName');
    // let ref = firebase.database().ref().child('/missingPeople');
    _self.arr = [];

    // ref.orderByChild(this.refs.selectedBlood.value).equalTo(true).once('value', function (snapshot) {
    //   ref.orderByChild('bloodgroup').equalTo("A+").once('value', function (snapshot) {
    console.log(this.refs.selectedTeacher.value)
    ref.orderByChild('teacher').equalTo(this.refs.selectedTeacher.value).once('value', function (snapshot) {



      snapshot.forEach(childSnapshot => {

        _self.arr.push(childSnapshot.val())
        console.log("arr", _self.arr)

      })
      _self.props.serachPeople(_self.arr)
      _self.setState({
        arr: _self.props.storeReducer.missingPeople

      })
    });
  }

  render() {
    return (
      <div >
        <img className="mImage" src={image} />
        <center className="body">

          <br /><br />


          <form onSubmit={this.onSearch} className="form">
            <br /><br /><br /><br />
            <h1 className="title">Project</h1>
            <select name="teacher" //----
              // value={this.props.signUpState.city}
              required
              //  onChange={this.props._inputHandler}
              ref="selectedTeacher"
            >
              <option > Faculty  </option>
              <option value="Teacher1">Teacher 1</option>
              <option value="Teacher2">Teacher2</option>
              <option value="Teacher3">Teacher3</option>
              <option value="Teacher4">Teacher4</option>
              <option value="Teacher5">Teacher5</option>
              <option value="Teacher6">Teacher6</option>

            </select><br /><br />

            <button onClick={this.onSearch} type="submit" className="lgnBtn"> Find </button>
            
          </form><br /><br />


        </ center>

        {console.log("this.state.arr", this.state.arr)}
        {
          this.state.arr.map((m, i) => {
            return (

              <Paper className="paper" style={style} zDepth={5} >
               <div className="view"> Student1: {m.student1} <br />
                Student2: {m.student2} <br />
                Student3: {m.student3} <br />
                Student4: {m.student4} <br />
                Teacher: {m.teacher}<br />
                Category: {m.category}<br />
                {/* Age: {m.age}<br /> */}
                Details: {m.projectDetails}<br /></div>

              </Paper>

            )
          })

        }

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("This =>")
  console.log(state)
  return {
    storeReducer: state.MissingPeopleReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    serachPeople: (data) => {
      console.log(data)
      dispatch(Search(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

