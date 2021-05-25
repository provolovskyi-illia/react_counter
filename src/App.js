import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  add100 = () => {
    this.setState(({ count }) => ({
      count: count + 100,
    }));
  };

  increase = () => {
    this.setState(({ count }) => {
      this.addOne();

      if (count % 5 === 0 && count !== 0) {
        this.add100();
      }
    });
  };

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.count}`}
        </h1>

        <button type="button" onClick={this.addOne}>
          addOne
        </button>

        <button type="button" onClick={this.add100}>
          add100
        </button>

        <button type="button" onClick={this.increase}>
          increase
        </button>
      </>
    );
  }
}

export default App;
