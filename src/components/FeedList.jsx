// Exercise 2: Set It Up
	// write a class component
	// make it a div with className FeedList
	// import FeedItem and include it inside the div
	// export default the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

import React from 'react';
import FeedItem from './FeedItem.jsx';

class FeedList extends React.Component {
  render() {
    const {
      cats,
      dogs,
      birds,
      animal
    } = this.props;
    let feedItem;
    if (animal === 'cats') {
      feedItem =
      cats.map(({id, title, url, likes, userLiked}) => (
        <FeedItem key={id} title={title} url={url} like={likes} user-linked={userLiked}/>
      ))
    } else if (animal === 'dogs') {
      feedItem =
      dogs.map(({id, title, url, likes, userLiked}) => (
        <FeedItem key={id} title={title} url={url} like={likes} user-linked={userLiked}/>
      ))
    } else if (animal === 'birds') {
      feedItem =
      birds.map(({id, title, url, likes, userLiked}) => (
        <FeedItem key={id} title={title} url={url} like={likes} user-linked={userLiked}/>
      ))
    }
    return (
      <div className="FeedList">
        {feedItem}
      </div>
    )
  }
}


export default FeedList;

/*
{console.log(animal)}

{console.log(this.props.photos.map(entry => entry))}
{console.log(this.props.photos.map(entry => entry.id))}
{console.log(this.props.photos)}
{console.log()}


const {images} = this.props;
{console.log(this.props.photos)}
{console.log(props)}

const {
  photos: {
    id,
    title,
    url,
    likes,
    userLiked
  }
} = this.props;


<FeedItem />

{
  this.props.photos.map(entry => {
    <FeedItem entry={entry}/>
  })
}
<FeedItem photos={this.props.photos.map(entry => entry)}/>

const [
  id
] = this.props;

########################################


import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class BreakfastPlace extends React.Component {
  render() {
    const items = [
      {
        name: "Hashbrown McMuffin",
        price: 2
      },
      {
        name: "Pie McFlurry",
        price: 4
      },
      {
        name: "McCrepe",
        price: 7
      }
    ];

    return (
      <div>
        <h2>McD's Secret Breakfast Menu</h2>
        <ul>
          {items.map(({price, name, id}) => (
            <li key={id}>${price} - {name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<BreakfastPlace />, rootElement);


*/
