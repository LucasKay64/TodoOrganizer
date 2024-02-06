import * as React from "react";

import FormFieldWrapper from "../formFieldWrapper/FormFieldWrapper";
import { FormFieldWrapperPropsWithoutChildren } from "../formFieldWrapper/FormFieldWrapper";

import { UseFormRegisterReturn } from "react-hook-form";

import { cn } from "../../utils/utils";

interface FormTextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    FormFieldWrapperPropsWithoutChildren {
  registration: UseFormRegisterReturn;
}

const FormTextAreaField = ({
  className,
  label,
  registration, // this has to be extracted from the props beacause it spreads its own props
  error,
  ...props
}: FormTextAreaFieldProps) => {
  return (
    <FormFieldWrapper label={label} error={error}>
      <textarea
        className={cn(
          `textarea textarea-bordered w-full ${
            error?.message ? "textarea-error" : ""
          }`,
          className
        )}
        {...registration}
        {...props}
      />
    </FormFieldWrapper>
  );
};

export default FormTextAreaField;
