import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTextColor } from './themeSlice';

const Theme = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 col-md-10 col-12'>
                <input 
                  type='text' 
                  className='form-control shadow-none' 
                  placeholder='enter color' 
                  value={color} 
                  onChange={handleColorChange} 
                />
                <button 
                  className='btn btn-primary mt-3' 
                  type='button' 
                  onClick={() => dispatch(changeTextColor(color))}
                >
                  Add Color
                </button> 
            </div>
        </div>
    </div>
  )
}

export default Theme;
