import EditIcon from "../../../assets/icons/edit-icon.svg";
import DeleteIcon from "../../../assets/icons/delete-icon.svg";

const Todo = () => {
  return (
    <>
      <div className="flex items-center">
        <input type="checkbox" className="checkbox" />

        <label className="ml-4">
          <span className="text-lg font-medium">Finish project proposal</span>
        </label>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-400">Due on 4/1/23</span>

        <div>
          <button className="btn btn-ghost btn-circle">
            <img src={EditIcon} alt="Edit Icon" className="w-5 h-5" />
          </button>

          <button className="btn btn-ghost btn-circle">
            <img src={DeleteIcon} alt="Delete icon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Ensure all sections are detailed and reviewed by the team for accuracy
        and completeness.
      </p>

      <div className="divider"></div>
    </>
  );
};

export default Todo;
