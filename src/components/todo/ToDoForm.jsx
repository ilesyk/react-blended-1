import { Component } from 'react';

export class Form extends Component {
  state = {
    text: '',
  };

  onChange = e => {
    this.setState({
      text: e.target.value,
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.onChange}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
