import FormFieldWrapper from "../formFieldWrapper/FormFieldWrapper";
import { FormFieldWrapperPropsWithoutChildren } from "../formFieldWrapper/FormFieldWrapper";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Controller } from "react-hook-form";
import { Control, FieldValues, Path, PathValue } from "react-hook-form";

import { cn } from "../../utils/utils";

interface FormDateTimeFieldProps<TFormValues extends FieldValues>
  extends Omit<ReactDatePickerProps, "onChange">,
    FormFieldWrapperPropsWithoutChildren {
  fieldName: Path<TFormValues>;
  defaultValue?: PathValue<TFormValues, Path<TFormValues>>;
  control: Control<TFormValues>;
}

const FormDateTimeField = <TFormValues extends FieldValues>({
  className,
  label,
  error,
  control,
  fieldName,
  defaultValue,
  ...props
}: FormDateTimeFieldProps<TFormValues>) => {
  return (
    <FormFieldWrapper label={label} error={error}>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value } }) => (
          <DatePicker
            selected={value}
            onChange={onChange}
            onBlur={onBlur}
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
            className={cn(
              `input input-bordered w-full ${
                error?.message ? "input-error" : ""
              }`,
              className
            )}
            {...props}
          />
        )}
      />
    </FormFieldWrapper>
  );
};

export default FormDateTimeField;
