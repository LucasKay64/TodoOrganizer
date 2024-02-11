import toggleListIcon from "../../../assets/icons/toggle-list-icon.svg";

const SelectListMessage = () => {
  return (
    <>
      <div className="navbar">
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
        </div>
      </div>

      <div className="divider mt-0"></div>

      <div className="flex justify-center items-center h-full mx-4">
        <p className="text-2xl font-bold">
          Select a list on the left or create a new one to view todos.
        </p>
      </div>
    </>
  );
};

export default SelectListMessage;
