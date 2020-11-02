import './App.css';
import { connect } from 'react-redux';
import { increment, decrement } from './action'

function App({dispatch, counter, isLogged}){

  console.log(isLogged);
  return (
    <div className="App">
        <p>{counter}</p> 
        <button onClick={() => dispatch(increment())} >+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
         <p>data should not display</p>
    </div>
  );
}
const mapStatetoProps = state => {
  return {
    counter: state.counter,
    isLogged: state.isLogged
  }
}

export default connect(mapStatetoProps)(App);
