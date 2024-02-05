import listIcon from "../../../assets/icons/list-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";

const TodoListsItem = () => {
  return (
    <li onClick={() => console.log("li")}>
      <a>
        <img src={listIcon} alt="List Icon" className="w-5 h-5" />
        Sidebar Item 1
        <button
          onClick={(e) => {
            console.log(123);
            e.stopPropagation();
          }}
        >
          <img src={deleteIcon} alt="Delete Icon" className="w-5 h-5" />
        </button>
      </a>
    </li>
  );
};

export default TodoListsItem;
