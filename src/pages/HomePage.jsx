// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of HomePage
	// import ImageUploaderForm and FeedList
	// include them inside of Homepage
	// export default the Homepage component!

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into FeedList

// Exercise 5: Let’s Get InFormation - BONUS
	// In order to get Homepage render the photo url you have uploaded to ImageUploader form,
	// you will need to create a function called handleAddPhoto that updates photos state by
	// accepting a url and creating a new object in photos state of the homepage component.
    // Then pass in that function as props to ImageUploaderForm
    // and when the user submits, call that function with the user submitted url.

import React from 'react';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx'
import FeedList from '../components/FeedList.jsx'
import DropDown from '../components/DropDown.jsx'
import data from '../../data.json';

class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cats: data.cats,
      dogs: data.dogs,
      birds: data.birds,
      animal: undefined
    }
  }

  handleAddPhoto = (url) => {
    const userPhoto = {
      url: url,
      likes: 0
    }
    this.setState((prevState) => {
      return {
        cats: prevState.cats.concat([userPhoto])
      }
    })
  };

  handleDropDown = (animalType) => {
    this.setState(
      { animal: animalType }
    );
  }

  render() {
    return (
      <div className="HomePage">
        <DropDown submitCallback={this.handleDropDown}/>
        <ImageUploaderForm submitCallback={this.handleAddPhoto}/>
        <FeedList animal={this.state.animal} cats={this.state.cats} dogs={this.state.dogs} birds={this.state.birds}/>
      </div>
    )
  }
}


export default HomePage;

/*
this.setState((prevState) => {
    return {

    };
  });
}

userPhoto={this.url}
*/
