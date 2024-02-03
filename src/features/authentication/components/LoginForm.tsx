import { Link } from "react-router-dom";

import { Form } from "../../../components/form/Form";
import FormTextField from "../../../components/formTextField/FormTextField";
import BoxContainer from "../../../components/boxContainer/BoxContainer";

import { signInSchema, signInFormDataType } from "../validation/authSchemas";

const LoginForm = () => {
  return (
    <BoxContainer className="w-full max-w-lg">
      <div className="py-4">
        <h1 className="text-xl text-center font-bold">
          Sign in to your account
        </h1>
      </div>

      <Form<signInFormDataType, typeof signInSchema>
        schema={signInSchema}
        onSubmit={(data) => {
          console.log(data);
        }}
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
              />

              <FormTextField
                label="Password"
                type="password"
                placeholder="••••••••"
                registration={register("password")}
                error={errors.password}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign in
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
