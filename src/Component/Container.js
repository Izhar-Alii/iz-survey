import React, { Component } from 'react'
import Details from './Details';
import Question from './Question';
import { v4 as uuidv4 } from 'uuid';
import { database } from "firebase/compat/database";
import firebase from "firebase/compat/app";


const firebaseConfig = {
  apiKey: "AIzaSyDK6xNFv8Hepbd1A9jDSznC5YBT3qJZc18",
  authDomain: "iz-survey.firebaseapp.com",
  databaseURL: "https://iz-survey-default-rtdb.firebaseio.com",
  projectId: "iz-survey",
  storageBucket: "iz-survey.appspot.com",
  messagingSenderId: "851570610666",
  appId: "1:851570610666:web:09443aef470a4e8ee3a293",
  measurementId: "G-394CV2JEHP"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


class Container extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      isSubmited: false,
      question:
      {
        q1: null,
        q2: null,
        q3: null,
        other: null,
      }
    }
  }

  sumbitHandler=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    this.setState({name,email});
  }

  questionHandler=async(event)=>{
    event.preventDefault();
    const question={};
    question.q1=event.target.q1.value;
    question.q2=event.target.q2.value;
    question.q3=event.target.q3.value;
    question.other=event.target.other.value;
    const isSubmited=true;
    
    this.setState({question,isSubmited});

    const database = firebase.database();

    database.ref("survey/" + this.state.id).set({
      name: this.state.name,
      email: this.state.email,      
    });

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary">iz-Survey</h1>
          </div>
        </div>
        {
          this.state.isSubmited?(<div className='card'>
            <h1>thank you</h1>
          </div>):(this.state.name==null && this.state.email==null?(<Details click={this.sumbitHandler}></Details>):(<Question save={this.questionHandler}></Question>))
        }
      </div>
    )
  }
}

export default Container