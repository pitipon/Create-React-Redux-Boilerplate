import React, { Component } from 'react';
import logo from '../../../images/logo.svg';
import './HomePage.scss';
import { connect } from 'react-redux';
// Action
import { simpleAction } from '../../../actions/simpleAction';


const Button = (props) => (
  <button onClick={() => props.simpleAction()}>Test redux action</button>
)


class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <button onClick={() => this.props.simpleAction()}>Test redux action</button> */}
          <Button simpleAction={this.props.simpleAction}/>
        </header>
      </div>
    );
  }
}

// allows the React component to subscribe to redux state updates.
const mapStateToProps = (state) => ({
  ...state
})

// Map Dispatch Function to Component Props 
const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
