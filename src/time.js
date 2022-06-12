import React, { Component } from 'react'

 class time extends Component {
 constructor(props){
     super(props)
     this.state ={
         count : 0
     }
 }
   
 render() {
      const {count} = this.state
    return (
      <div>
        <h1>count: {count}</h1>
      </div>
    )
  }
componentDidMount(){
    this.myInterval = setInterval(()=>{
    this.setState({
        count: this.state.count +1
    })
},1000)
}
}
export default time