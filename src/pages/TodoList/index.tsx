import { InformationCircleIcon } from "@/assets/svg";
import { useState } from "react";

const TodoListPage = () => {
  const [todo, setTodo] = useState<string>("");

  const handleAddTodo = () => {
    // Logic to add the todo
    console.log(todo);
    setTodo(""); // Reset input after adding
  };
  return (
    <div className="flex flex-col h-screen justify-between bg-[url('/src/assets/images/background.jpg')]">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-white w-1/3 h-5/6 p-4 items-center flex flex-col rounded-md shadow-lg">
          <div className="flex">
            <span className="text-center text-3xl text-red-800 py-7">
              To Do List App
            </span>
            <InformationCircleIcon width={24} className="text-red-800 ml-3" />
          </div>
          <form className="flex w-11/12 rounded">
            <input
              type="search"
              className="px-4 py-2 w-full rounded-md mx-2 border-2 border-yellow-600 focus:outline-none focus:border-yellow-700"
              placeholder="Search..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-yellow-600 text-white px-4 rounded"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </form>
          <div className="flex gap-3 my-3">
            <p>All</p>
            <p>Incomplete</p>
            <p>Completed</p>
            <p>Important</p>
          </div>
          <p>{todo}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;
