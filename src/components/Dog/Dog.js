import React from "react";
import "./Dog.css";
import img from "./../../assets/paws.jpg";

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img,
    };
  }

  componentDidMount() {
    this.getImage();
  }

  getImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          img: response.message,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="dog-header">WOOF!</h1>
        <img className="dog-img" alt="dog" src={this.state.img} />
      </div>
    );
  }
}

export default Dog;
