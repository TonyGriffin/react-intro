import React from 'react';
import cx from 'classnames';
// import StylesCreditCardInput from './StylesCreditCardInput';

class CreditCardInput extends React.Component {
  constructor(){
    super();
    //state must be initialised for controlled component
    this.state = {text: "" }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
  this.setState({
     text: event.target.value
    });
  }

  render(){
    //Best practice to doyourvalifdation logic in the render method rather
    //than the state in the handling method above.
    const classes = cx('border', {
          'redBorder': this.state.text.length > 16 || isNaN(this.state.text),
          'greenBorder': this.state.text.length === 16 && !isNaN(this.state.text),
    });

    return (
      <div>
       <form>
          <input type="text" className={classes} onChange={this.handleChange} value={this.state.text}/>
       </form>
      </div>
    );
  }
}

export default CreditCardInput;
