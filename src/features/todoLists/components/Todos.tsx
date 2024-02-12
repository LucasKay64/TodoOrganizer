import searchIcon from "../../../assets/icons/search-icon.svg";

import { Tabs, Tab } from "../../../components/Tabs/Tabs";
import Todo from "./Todo";
import { Todo as TodoType } from "../types/Todo";

import { useGetTodos } from "../api/getTodos";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ErrorMessage from "../../../components/errorMessage/ErrorMessage";
import { useState } from "react";

const Todos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { listId } = useParams();
  const { allTodos, activeTodos, completedTodos, isPending, error } =
    useGetTodos(Number(listId));

  const filterTodosBySearchTerm = (todos?: TodoType[]) => {
    return todos?.filter((todo) => {
      return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isPending)
    return (
      <div className="h-full flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (error) {
    toast.error("Something went wrong. Try restarting the app.");
    return (
      <div className="h-full flex justify-center items-center">
        <ErrorMessage
          message={"Something went wrong. Try restarting the app."}
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center gap-4 my-2">
        <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
        <input
          className="input input-bordered md:block"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <Tabs name="todoStatus">
        <Tab defaultSelected label="Active">
          {activeTodos?.length === 0 ? (
            <p className="text-center">
              No active todos yet. Add a new todo to get started.
            </p>
          ) : (
            filterTodosBySearchTerm(activeTodos)?.map(
              ({ id, title, description, due_date_time, completed }) => (
                <Todo
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  dueDateTime={due_date_time}
                  completed={completed}
                />
              )
            )
          )}
        </Tab>
        <Tab label="All">
          {allTodos?.length === 0 ? (
            <p className="text-center">
              No todos found. Add a new todo to get started.
            </p>
          ) : (
            filterTodosBySearchTerm(allTodos)?.map(
              ({ id, title, description, due_date_time, completed }) => (
                <Todo
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  dueDateTime={due_date_time}
                  completed={completed}
                />
              )
            )
          )}
        </Tab>
        <Tab label="Completed">
          {completedTodos?.length === 0 ? (
            <p className="text-center">
              No completed todos yet. Check an active todo.
            </p>
          ) : (
            filterTodosBySearchTerm(completedTodos)?.map(
              ({ id, title, description, due_date_time, completed }) => (
                <Todo
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  dueDateTime={due_date_time}
                  completed={completed}
                />
              )
            )
          )}
        </Tab>
      </Tabs>
    </>
  );
};

export default Todos;
