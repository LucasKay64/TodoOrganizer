import accountIcon from "../../assets/icons/account-icon.svg";

const Navbar = () => {
  return (
    <div className="navbar shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Todo Organizer</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary">
          <img src={accountIcon} alt="account icon" className="w-6 h-6" />
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
