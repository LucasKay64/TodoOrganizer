import { Link } from "react-router-dom";

import { Form } from "../../../components/form/Form";
import FormTextField from "../../../components/formTextField/FormTextField";
import BoxContainer from "../../../components/boxContainer/BoxContainer";

import { signInSchema, signInFormDataType } from "../validation/authSchemas";

import { useLoginUser } from "../api/loginUser";

const LoginForm = () => {
  const { login, isPending } = useLoginUser();

  const handleLogin = (credentials: signInFormDataType) => {
    login(credentials);
  };

  return (
    <BoxContainer className="w-full max-w-lg">
      <div className="py-4">
        <h1 className="text-xl text-center font-bold">
          Sign in to your account
        </h1>
      </div>

      <Form<signInFormDataType, typeof signInSchema>
        schema={signInSchema}
        onSubmit={handleLogin}
        className="flex flex-col gap-5"
      >
        {({ register, formState: { errors } }) => (
          <>
            <div>
              <FormTextField
                label="Email"
                placeholder="name@company.com"
                registration={register("email")}
                error={errors.email}
                disabled={isPending}
              />

              <FormTextField
                label="Password"
                type="password"
                placeholder="••••••••"
                registration={register("password")}
                error={errors.password}
                disabled={isPending}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Signin in...
                </>
              ) : (
                "Sign in"
              )}
            </button>

            <p className="text-sm font-light text-gray-500">
              Don't have an account yet?{" "}
              <Link className="font-medium hover:underline" to="/sign-up">
                Sign up
              </Link>
            </p>
          </>
        )}
      </Form>
    </BoxContainer>
  );
};

export default LoginForm;
