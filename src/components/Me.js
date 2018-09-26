import React from 'react';

class Me extends React.Component {

  render(){
    return (
      <div>
        <h1 className="about__me">Its {this.props.name}</h1>
        <p>Welcome to my first React component</p>
        
        <img src="https://media.giphy.com/media/3o6gDSdED1B5wjC2Gc/giphy.gif" />
      </div>
    );
  }
}

export default Me;
