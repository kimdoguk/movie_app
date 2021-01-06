import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("1 : constructor");
  }
  state = {
    count : 0
  };
  add = () => {
    this.setState(current => ( { count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ( { count: current.count - 1 }));
  };
  
componentDidMount(){
  console.log("3 : component rendered");
}

componentDidUpdate(){
  console.log("Update : I just updated");
}

componentWillUnmount(){
  console.log("Good bye cruel world");
}

  render() {
    console.log("2(init), refresh : I'm rendering");
    return (
      <div>
        <h1>The number is :  {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
