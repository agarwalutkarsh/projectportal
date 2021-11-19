import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { Search } from '../store/action/auth'
import { connect } from 'react-redux'
import './Login.css';
import image from './image/img.png';
import './Dropdown.css'

const style = {
  //height: 100,
  //width: 100,
  margin: 20,
  // textAlign: 'center',
  // display: 'inline-block',
  display: 'block-inline',
  height: 'auto',
  width: 'auto',
  padding: 20,
  backgroundColor: '#EF5350'

};

class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      // crimeList: [],
      arr: []
    }
    this.onSearch = this.onSearch.bind(this)
  }


  onSearch(e) {
    let _self = this;
    e.preventDefault()
    let ref = firebase.database().ref().child('/feedbackList');
    _self.arr = [];

    console.log(this.refs.selectedTeacher.value)
    ref.orderByChild('teacher').equalTo(this.refs.selectedTeacher.value).once('value', function (snapshot) {



      snapshot.forEach(childSnapshot => {

        _self.arr.push(childSnapshot.val())
        console.log("arr", _self.arr)

      })
      _self.props.serachCrimes(_self.arr)
      _self.setState({
        arr: _self.props.storeReducer.crimes

      })
    });
  }

  render() {
    return (

      <div>
         <img className="mImage"
           src={image} />
        
        <div  >


          <center className="body">
            <br /><br />


            <form className="form" onSubmit={this.onSearch}>
              <h1 className="title">Feedback List</h1>
              <select name="teacher"
                // value={this.props.signUpState.city}
                required
                //  onChange={this.props._inputHandler}
                ref="selectedTeacher"
                className="details"
              >
                <option> Faculty  </option>
                <option className="summary" value="Teacher1">Teacher 1</option>
                <option className="summary" value="Teacher2">Teacher2</option>
                <option className="summary" value="Teacher3">Teacher3</option>
                <option className="summary" value="Teacher4">Teacher4</option>
                <option className="summary" value="Teacher5">Teacher5</option>
                <option className="summary" value="Teacher6">Teacher6</option>
              </select><br /><br />

              <button className="lgnBtn" onClick={this.onSearch} type="submit" > Find </button>
            </form><br /><br />
          </ center>
          {console.log("this.state.arr", this.state.arr)}
          {this.state.arr.map((c, i) => {
            return (
              <div>

                <Paper className="paper" style={style} zDepth={5} >
                  <div className="view">
                    {'>'}Name: {c.informerName} <br />
                  {'>'}Teacher: {c.teacher}<br />
                  {'>'}Feedback: {c.feedback}<br />
                  {'>'}Roll Number: {c.roll}<br /> </div>
                  {/*<mui.RaisedButton type="submit" label="Request Blood" secondary={true} />*/}
                </Paper>
              </div>
            )
          })

          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.CrimeReducer)
  return {
    storeReducer: state.CrimeReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    serachCrimes: (data) => {
      console.log(data)
      dispatch(Search(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

