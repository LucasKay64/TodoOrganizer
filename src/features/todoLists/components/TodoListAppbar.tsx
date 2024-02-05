import toggleListIcon from "../../../assets/icons/toggle-list-icon.svg";
import searchIcon from "../../../assets/icons/search-icon.svg";

const TodoListAppbar = () => {
  return (
    <div className="navbar bg-base-100 justify-between">
      <div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost btn-circle md:hidden"
        >
          <img
            src={toggleListIcon}
            alt="Toggle List Icon"
            className="w-5 h-5"
          />
        </label>
        <p className="text-xl">Name of list</p>
      </div>
      <div>
        <button className="btn btn-ghost btn-circle md:hidden">
          <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
        </button>
        <input
          className="input input-bordered hidden md:block"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default TodoListAppbar;
