import React from "react";

class Lifecycle extends React.Component {
  constructor(props) {
    //method 1
    super(props);

    this.state = {
      favcolorr: "cobra"
    }
  }
  static getDerivedStateFromProps(props) {
    //method  2
    return { favcolorr: props.favcol };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favcolorr: "vine"
      })
    }, 2000)
  }

  render() {
    console.log(this.state.favcolorr); //method 3
    return (
      <div>
        <h1>perfume ka naam hai ye {this.state.favcolorr}</h1>
      </div>
    );
  }
}

export default Lifecycle;
