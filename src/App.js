import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false
  }

  setIsModalOpen = isModalOpen => this.setState({ isModalOpen });

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Transition
          in={isModalOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit>
          {state => (
            <Modal isModalOpen={state} closed={() => this.setIsModalOpen(false)} />
          )}
        </Transition>
        {isModalOpen && <Backdrop isModalOpen />}
        <button className="Button" onClick={() => this.setIsModalOpen(true)}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
