import signOutIcon from "../../../assets/icons/sign-out-icon.svg";

import TodoLists from "./TodoLists";

import { useLogoutUser } from "../../authentication/api/logoutUser";

const TodosSidebarContent = () => {
  const { logout, isPending } = useLogoutUser();

  const handleSignOut = () => {
    logout();
  };

  return (
    <>
      <TodoLists />
      <div className="text-center">
        <span className="divider my-0"></span>

        {isPending ? (
          <button className="btn btn-primary mb-2" disabled>
            <span className="loading loading-spinner loading-sm"></span>
            Signing out...
          </button>
        ) : (
          <button className="btn btn-primary mb-2" onClick={handleSignOut}>
            <img src={signOutIcon} alt="Sign out icon" className="w-6 h-6" />
            Sign out
          </button>
        )}
      </div>
    </>
  );
};

export default TodosSidebarContent;
