import React from 'react';

class ImageDisplay extends React.Component {

  render(){
    return (
      <div>
       <img src={this.props.imageItem} />
      </div>
    );
  }
}

export default ImageDisplay;
