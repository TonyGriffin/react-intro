import React from 'react';
import cx from 'classnames';
import ImageDisplay from './ImageDisplay';

class ImageSearch extends React.Component {
  constructor(){
    super();
    //state must be initialised for controlled component
    this.state = {searchQuery: "" ,
                  searchResults:[]}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
  this.setState({
     searchQuery: event.target.value
    })
  }


  handleSubmit(event){
    event.preventDefault()
    
    let url = `https://api.unsplash.com/search/photos?page=1&query=${this.state.searchQuery}&client_id=b86a7bedd1b8ec0a69b8569aa17c9b1fa7c8377200e6c71c99d09e92da2c1a0d`


    fetch(url)
      .then(response => response.json())
      .then( content => {
      console.log(content)
        this.setState({
        searchResults: content.results
        });
      });
    }


  render(){
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} className="search__input" value={this.state.searchQuery}/>
       </form>

        {this.state.searchResults.map( imageItem => {
          return (
        <ImageDisplay key={imageItem.id} imageItem={imageItem.urls.regular} />
        );
      })}

      </div>
    );
  }
}

export default ImageSearch;
