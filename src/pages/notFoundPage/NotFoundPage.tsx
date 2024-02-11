import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="hero h-screen bg-hero-section px-3">
      <div className="text-center">
        <p className="text-xl font-bold">
          404, The page you are looking for does not exist.
        </p>
        <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
          Back to homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
