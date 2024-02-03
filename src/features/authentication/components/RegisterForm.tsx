import { Link } from "react-router-dom";

import { Form } from "../../../components/form/Form";
import FormTextField from "../../../components/formTextField/FormTextField";
import BoxContainer from "../../../components/boxContainer/BoxContainer";

import { signUpFormDataType, signUpSchema } from "../validation/authSchemas";

const RegisterForm = () => {
  return (
    <BoxContainer className="w-full max-w-lg">
      <div className="py-4">
        <h1 className="text-xl text-center font-bold">Create an account</h1>
      </div>

      <Form<signUpFormDataType, typeof signUpSchema>
        schema={signUpSchema}
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

              <FormTextField
                label="Confirm password"
                type="password"
                placeholder="••••••••"
                registration={register("confirmPassword")}
                error={errors.confirmPassword}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Create an account
            </button>

            <p className="text-sm font-light text-gray-500">
              Already have an account?{" "}
              <Link className="font-medium hover:underline" to="/sign-in">
                Login here
              </Link>
            </p>
          </>
        )}
      </Form>
    </BoxContainer>
  );
};

export default RegisterForm;
