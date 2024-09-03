import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos, toggleTodo, updateTodo, deleteTodo } from "../redux/actions/index";
import { MdDelete } from "react-icons/md";
import {  FaRegCheckCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export const Todos = () => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);

  const todos = useSelector((state) => state.todo);

  const [text, setText] = useState(todos.data);

  const onFormSubmit = (e) =>{
    e.preventDefault();

    setEditing(prevState =>!prevState);

    dispatch(updateTodo(todos._id,text));
    console.log(todos._id);
  }

  useEffect(() => {
    dispatch(getAllTodos);
  }, []);

  return (
    <div className="flex gap-20 pt-10 pb-10">
      <ul className="">
        {todos.map((todo) => (
          <div className="flex flex-col w-[70vw]  p-[1px] mb-5  bg-gradient-to-tl from-white via-black to-white rounded-lg ">
            <li
              key={todo._id}
              style={{
                textDecoration: todo.done ? "line-through" : "",
                color: todo.done ? "green" : "white",
              }}
              className="bg-gradient-to-tr from-black via-black to-neutral-700 cursor-pointer   shadow-sm shadow-slate-300 flex justify-between items-center p-4 rounded-lg"
            >
              {todo.done ? (
                <span>
                  <FaCheckCircle size={26} color="green" onClick={() => dispatch(toggleTodo(todo._id))}/>
                </span>
              ) : (
                <span>
                  <FaRegCheckCircle size={26} onClick={() => dispatch(toggleTodo(todo._id))}/>
                </span>
              )}
              <span style={{ display: editing ? "none" : "" }} onClick={() => dispatch(toggleTodo(todo._id))}>
                {todo.data}
              </span>

              <form  style={{ display: editing ? "inline" : "none" }}
                onSubmit={onFormSubmit}
              >
                <input
                  type="text"
                  value={text}
                  className="outline-none border-b bg-transparent"
                  onChange={(e)=>setText(e.target.value)}
                />
              </form>
              <div className="flex items-center gap-10">
                {/* <span onClick={() => setEditing((prevState) => !prevState)}>
                  <FaPencilAlt size={20} color="white" />
                </span> */}
                <span onClick={()=>dispatch(deleteTodo(todo._id))}>
                  <MdDelete size={26} color="white" />
                </span>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
