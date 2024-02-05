import plusIcon from "../../../assets/icons/plus-icon.svg";
import TodoListsItem from "./TodoListsItem";

const TodoLists = () => {
  return (
    <ul className="menu w-80 text-base-content">
      <h1 className="menu-title flex justify-between">
        Lists
        <button className="btn btn-ghost btn-circle btn-xs">
          <img src={plusIcon} alt="Plus Icon" className="w-5 h-5 opacity-40" />
        </button>
      </h1>
      <TodoListsItem />
      <TodoListsItem />
      <TodoListsItem />
    </ul>
  );
};

export default TodoLists;
