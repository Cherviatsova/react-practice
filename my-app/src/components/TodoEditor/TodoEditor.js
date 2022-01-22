import React, { Component } from 'react';
// import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({
      message: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea value={this.state.message} onChange={this.handleChange} />
        <button type="submit" className="TodoEditor__button">
          Save
        </button>
      </form>
    );
  }
}
export default TodoEditor;
