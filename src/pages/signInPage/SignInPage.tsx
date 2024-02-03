import LoginForm from "../../features/authentication/components/LoginForm";

const SignInPage = () => {
  return (
    <div
      className="hero bg-hero-section"
      style={{
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default SignInPage;
