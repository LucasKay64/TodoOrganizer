import * as React from "react";

import { UseFormRegisterReturn, FieldError } from "react-hook-form";

import { cn } from "../../utils/utils";

interface FormTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "time"
    | "search"
    | "url";
  label?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError | undefined;
}

const FormTextField = ({
  className,
  type = "text",
  label,
  registration, // // this has to be extracted from the props beacause it spreads its own props
  error,
  ...props
}: FormTextFieldProps) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text text-base">{label}</span>
      </div>
      <input
        type={type}
        className={cn(
          `input input-bordered w-full ${error?.message ? "input-error" : ""}`,
          className
        )}
        {...registration}
        {...props}
      />
      {error?.message && (
        <div className="label">
          <span className="label-text-alt text-error">{error.message}</span>
        </div>
      )}
    </label>
  );
};

export default FormTextField;
