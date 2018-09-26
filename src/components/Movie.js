import React from 'react';

class Movie extends React.Component{

   constructor(){
   super();
   //due to contect dereferencing we need to use bind below:
   this.handleClick = this.handleClick.bind(this);
   }

  //below is the event handling method:
  //we should declare the eventHandling function before
  //setting the event `listener`
  handleClick(event){
    event.preventDefault();
    alert(this.props.title);
  }

  render(){
    return (
      <div>
        <h1 className="movie-title">The name of the movie is: {this.props.title}</h1>
        <p>This is a kick ass movie!</p>
        <img src={this.props.poster} />
        <p> Year ({this.props.year}) </p>
        {/* the binding is needed here, as below we are calling
        this.handleClick outside an object */}
        {/* Below is an eventListener on a button element */}
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default Movie;
