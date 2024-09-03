import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/actions';

export const TodoForms = () => {
  
  const [text,setText] = useState('');
  const dispatch = useDispatch();
    const onFormSubmit = (e)=>{
      e.preventDefault();
      dispatch(addNewTodo(text));

      setText('');
    }
    const onInputChange = (e) =>{
        setText(e.target.value);
        console.log(e.target.value);
    }
  return (
    <form className='' onSubmit={onFormSubmit}>
        <input
         placeholder='Enter new TODO.....'
         className='text-xl text-white w-[80vw] bg-black border-b outline-none'
         onChange={onInputChange}
         value={text}
        />
    </form>
  )
}
