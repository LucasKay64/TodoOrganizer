import * as React from "react";

import FormFieldWrapper from "../formFieldWrapper/FormFieldWrapper";
import { FormFieldWrapperPropsWithoutChildren } from "../formFieldWrapper/FormFieldWrapper";

import { UseFormRegisterReturn } from "react-hook-form";

import { cn } from "../../utils/utils";

interface FormTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    FormFieldWrapperPropsWithoutChildren {
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "time"
    | "search"
    | "url";
  registration: UseFormRegisterReturn;
}

const FormTextField = ({
  className,
  type = "text",
  label,
  registration, // this has to be extracted from the props beacause it spreads its own props
  error,
  ...props
}: FormTextFieldProps) => {
  return (
    <FormFieldWrapper label={label} error={error}>
      <input
        type={type}
        className={cn(
          `input input-bordered w-full ${error?.message ? "input-error" : ""}`,
          className
        )}
        {...registration}
        {...props}
      />
    </FormFieldWrapper>
  );
};

export default FormTextField;
