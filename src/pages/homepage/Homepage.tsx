import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero bg-hero-section"
      style={{
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Todo Organizer</h1>
          <p className="py-6">
            A bulletproof way to organize your tasks and keep track of your
            progress. Simple and easy to use. Get started now!
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
