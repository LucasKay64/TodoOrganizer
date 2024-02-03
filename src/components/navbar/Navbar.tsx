import accountIcon from "../../assets/icons/account-icon.svg";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar shadow-md">
      <div className="flex-1">
        <button
          className="btn btn-ghost text-xl"
          onClick={() => {
            navigate("/");
          }}
        >
          Todo Organizer
        </button>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          <img src={accountIcon} alt="account icon" className="w-6 h-6" />
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
