import React from 'react';


class DropDown extends React.Component {

  handleChange = e => {
    const animal = e.target.value
    this.props.submitCallback(animal)
  }
  render() {
    return (
      <select className="DropDown" onChange={this.handleChange}>
        <option value="">Choose a category</option>
        <option value="cats">Cats</option>
        <option value="dogs">Dogs</option>
        <option value="birds">Birds</option>
      </select>
    )}
}

export default DropDown;
