import { Tabs, Tab } from "../../../components/Tabs/Tabs";
import Todo from "./Todo";
import TodoListAppbar from "./TodoListAppbar";

import PlusIconWhite from "../../../assets/icons/plus-icon-white.svg";

const TodoListDetails = () => {
  return (
    <>
      <TodoListAppbar />
      <div className="divider mt-0"></div>

      <Tabs name="todoStatus">
        <Tab label="Active">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </Tab>
        <Tab label="All">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </Tab>
        <Tab label="Completed">
          <Todo />
          <Todo />
        </Tab>
      </Tabs>

      {/* FAB */}
      <button className="btn btn-primary btn-circle btn-lg fixed bottom-5 right-5">
        <img src={PlusIconWhite} alt="Plus Icon" className="h-12 w-12" />
      </button>
    </>
  );
};

export default TodoListDetails;
