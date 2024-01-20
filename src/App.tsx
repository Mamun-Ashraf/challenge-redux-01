import { useSelector } from "react-redux"
import {RootState} from './redux/store';

function App() {

  const {count} = useSelector((state : RootState) => state.counter)

  return (
    <div>
      <div className='flex gap-4 m-5'>
        <button className="btn btn-outline btn-success">Increment</button>
        <div>{count}</div>
        <button className="btn btn-outline btn-error">Decrement</button>
      </div>
    </div>
  )
}

export default App
