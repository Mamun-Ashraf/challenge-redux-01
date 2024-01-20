import { useDispatch, useSelector } from "react-redux"
import { RootState } from './redux/store';
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";

function App() {

  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className='flex gap-4 m-5'>
        <button className="btn btn-outline btn-success" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="btn btn-outline btn-success" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
        <div>{count}</div>
        <button className="btn btn-outline btn-error" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
