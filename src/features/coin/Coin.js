import React from 'react';
import { useSelector } from 'react-redux';

const Coin = () => {

  const coin = useSelector((state)=>state.counter.count);
  const textColor = useSelector((state)=>state.theme.color);
  return (
    <div>
        <span className='mx-4' style={{color: textColor, fontWeight: "bold"}}>coin: {coin}</span>
    </div>
  )
}

export default Coin