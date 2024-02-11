import TodosSidebarContent from "../../features/todoLists/components/TodosSidebarContent";

import { Outlet } from "react-router-dom";

const TodosPage = () => {
  return (
    <div className="drawer md:drawer-open h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col md:px-5 bg-hero-section bg-cover">
        <Outlet />
      </div>

      <div className="drawer-side border-r-2">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-full bg-base-100 flex flex-col">
          <TodosSidebarContent />
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
