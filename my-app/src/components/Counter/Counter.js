import React from 'react';
import './Counter.css';
import Controls from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  // constructor() {
  //   super();

  //   this.state = {
  //     value: 5,
  //   };
  // } or

  state = {
    value: this.props.initialValue,
  };

  // handleIncrement = event => {
  //   console.log('Клик увеличить');
  //   console.log(this);

  //   const target = event.target;

  //   setTimeout(() => {
  //     console.log(target);
  //   }, 1000);
  // };
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    // this.setState(prevState => {
    //   return {
    //     value: prevState.value + 1,
    //   };
    // });
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    // console.log('Клик уменьшить');
    // console.log(this);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
