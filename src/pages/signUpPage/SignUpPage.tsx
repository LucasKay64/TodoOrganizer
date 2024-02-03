import RegisterForm from "../../features/authentication/components/RegisterForm";

const SignUpPage = () => {
  return (
    <div
      className="hero bg-hero-section"
      style={{
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <RegisterForm />
    </div>
  );
};

export default SignUpPage;
