import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {

  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

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
