import React from 'react';

 class Person extends React.Component {

  constructor(){
    super();
    // State needs to be set from within the constructor
    this.state= {name: "Tony"};
    // Setting the handleChange function to value of object "this"
    this.handleChange = this.handleChange.bind(this);
  }
  // change handler code below
  handleChange(event){
     this.setState(
       {name: event.target.value}
      )}


   render() {
     return (

       <div>
         <p>{this.state.name}</p>
         <form>
           <input type="text" onChange={this.handleChange}  />
         </form>
       </div>
     )
   }
 }

 export default Person;
