import TodoLists from "../../features/todoLists/components/TodoLists";
import TodoListDetails from "../../features/todoLists/components/TodoListDetails";

const TodosPage = () => {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col md:px-5">
        <TodoListDetails />
      </div>

      <div className="drawer-side border-r-2">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-full bg-base-100">
          <TodoLists />
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
