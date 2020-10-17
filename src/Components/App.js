import React from 'react';
import { connect } from "react-redux";
import Board from './Board/Board';

function DevTool ({ devToolActions }) {
  const styles = {
    width: '100%',
    height: 'auto',
    backgroundColor: 'green',
    textAlign: 'left',
    verticalAlign: 'bottom',
    padding: '10px'
  }
  return (
    <div style={styles}>
      <span>Choose a Dev Action: </span>
      <button onClick={devToolActions.simulateNewPostedMail}>Simulate New Posted Mail</button>
      <button onClick={devToolActions.simulatePendingPostedMail}>Simulate Pending Posted Mail</button>
      <button onClick={devToolActions.simulateDuePostedMail}>Simulate Due Posted Mail</button>
    </div>
  )
}

function App({ isDev, devToolActions }) {
  return (
    <div className="App">
      { isDev ? <DevTool devToolActions={devToolActions} /> : null }
      <Board />
    </div>
  );
}

export default connect(
  (state) => ({ isDev: state.app.isDev }),
  (dispatch) => ({
    devToolActions: {
      simulateNewPostedMail: () => dispatch({ type: "SIMULATE_NEW_POSTED_MAIL" }),
      simulatePendingPostedMail: () => dispatch({ type: "SIMULATE_PENDING_POSTED_MAIL" }),
      simulateDuePostedMail: () => dispatch({ type: "SIMULATE_DUE_POSTED_MAIL" })
    }
  })
)(App);

