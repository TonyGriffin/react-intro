import React from 'react';
import Movie from './Movie.js'
import Me from './Me.js'
import Person from './Person'
import CreditCardInput from './CreditCardInput'
import ImageSearch from './ImageSearch'

let movies =[
  {
    id: '001',
    title: 'The Smurfs',
    year: 2015,
    poster: "https://media.giphy.com/media/mGBpRxlV28CAM/giphy.gif"
  },
  {
    id: '002',
    title: 'Terminator',
    year: 2005,
    poster: "https://media.giphy.com/media/3o6gb36N0a66kt1fNu/giphy.gif"
  },
  {
    id: '003',
    title: 'Star Trek',
    year: 2018,
    poster: "https://media.giphy.com/media/rDp8EFZPyhDCU/giphy.gif"
  }
];

class App extends React.Component{
  render(){
    return (
      <div>


<ImageSearch />


        <CreditCardInput/>
        <Person/>

        <h1 className="main-heading">Hello, world!</h1>
        <p>Welcome to our first React component</p>

          {/* Below we are mapping through creating a new movie component
          for each of the movies in the array  */}
            <ul>
              {movies.map(item =>
                <Movie key={item.id} title={item.title} year={item.year}  poster={item.poster}/>)}
          </ul>

         <Me
            name="Tony. G" />

        <Movie
              title="The Smurfs"
              poster="https://media.giphy.com/media/mGBpRxlV28CAM/giphy.gif"
              year="2015" />
        <Movie
              title="Terminator"
              poster="https://media.giphy.com/media/3o6gb36N0a66kt1fNu/giphy.gif"
              year="2005" />
        <Movie
              title="Star Trek"
              poster="https://media.giphy.com/media/rDp8EFZPyhDCU/giphy.gif"
              year="2018" />

      </div>
    );
  }
}

export default App;
