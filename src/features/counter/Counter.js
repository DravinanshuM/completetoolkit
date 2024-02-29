import React from 'react';
import { increment, decrement, incrementByAmount } from './counterSlice.js';
import { useSelector, useDispatch } from 'react-redux'; 

const Counter = () => {

  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch();

  return (
    <div className='container mt-5'>
        <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-6 col-12 text-center'>
                <h1 className='text-center'>Counter Apps:</h1>
                <button className='btn btn-primary' type='button' onClick={()=>dispatch(increment())}>+</button>
                <span className='mx-4'>count: {count}</span>
                <button className='btn btn-primary' type='button' onClick={()=>dispatch(decrement())}>-</button>
                <button className='btn btn-primary mx-5' type='button' onClick={()=>dispatch(incrementByAmount(10))}> increment by 10</button>
            </div>
        </div>
    </div>
  )
}

export default Counter