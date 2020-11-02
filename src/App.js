import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './action'



function App(){
  const counter = useSelector(state => state.counter)
   const dispatch = useDispatch()
  return (
   
    <div className="App">
        <p>{counter}</p> 
        <button onClick={ () => dispatch(increment())}>+</button>
        <button onClick={ () => dispatch(decrement())}>-</button>
         <p>data should not display</p>
    </div>
  );
}
// const mapStatetoProps = state => {
//   return {
//     counter: state.counter
//   }
// }
    

export default App;
