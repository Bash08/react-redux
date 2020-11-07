import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { increment, decrement, fetch_data } from './action'

function App({dispatch, counter, isLogged, data}){
  const comment = dispatch(fetch_data);
  console.log(comment);
  return (
    <div className="App">
        <p>{counter}</p> 
        <button onClick={() => dispatch(increment())} >+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(fetch_data())}>enter</button>
        {isLogged && <p>data should not display</p>}
         
    </div>
  );
}
const mapStatetoProps = state => {
  return {
    counter: state.counter,
    isLogged: state.isLogged,
    data: state.data
  }
}



export default connect(mapStatetoProps)(App);
