import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { data } = this.props;
    const { clicked } = this.state;

    return (
      <div
        className={clicked ? "item-clicked" : "item"}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Item;
