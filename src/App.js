import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counter'; // importing actions used by dispatch
import './App.css';

function App() {
  // gets the redux state, counter reducer within that state, and count variable within that reducer
  const count = useSelector(state => state.counter.count)

  // dispatch allows us to call any action from any reducer that we want
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
