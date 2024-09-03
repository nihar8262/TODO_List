import React from "react";
import { TodoForms } from "./TodoForms";
import { Todos } from "./Todos";

export const Header = () => {
  return (
    <div className="w-[90vw] mx-auto rounded-lg border  text-white border-neutral-500 bg-black  ">
      <div className="flex flex-col items-center">
        <h1 className="pt-10 text-5xl  font-semibold ">TODO LIST</h1>

        <div className="pt-10">
            <TodoForms/>
        </div>

        <div>
          <Todos/>
        </div>
      </div>
    </div>
  );
};