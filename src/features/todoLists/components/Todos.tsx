import { Tabs, Tab } from "../../../components/Tabs/Tabs";
import Todo from "./Todo";

import { useGetTodos } from "../api/getTodos";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ErrorMessage from "../../../components/errorMessage/ErrorMessage";

const Todos = () => {
  const { id } = useParams();
  const { allTodos, activeTodos, completedTodos, isPending, error } =
    useGetTodos(Number(id));

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
    <Tabs name="todoStatus">
      <Tab defaultSelected label="Active">
        {activeTodos?.map(
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
        )}
      </Tab>
      <Tab label="All">
        {allTodos?.map(
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
        )}
      </Tab>
      <Tab label="Completed">
        {completedTodos?.map(
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
        )}
      </Tab>
    </Tabs>
  );
};

export default Todos;
