import './App.css';
import img from './1654034371215.jpg'
import React, { Component } from 'react'

 class App extends Component {
   constructor(props){
     super(props);
     this.state={
      fullName:"said ahmed",
      bio:294,
      Profession:"student",
      isToggleShow:false,
     }
     this.handeleClick = this.handeleClick.bind(this);
   }
   handeleClick(){
     this.setState(state =>({isToggleShow: !state.isToggleShow}));
   }
  render() {
    return (
      <div className='App-header'>
        <h1>my name is {this.state.fullName}</h1>
        <h1>my profession is {this.state.Profession}.
        {this.state.isWorking}</h1>
        <button onClick={this.handeleClick}>show</button>
        <img src={img} alt='img'/>"
      </div>
    )
  }
}
export default App
