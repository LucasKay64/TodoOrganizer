import { FieldError } from "react-hook-form";

interface FormFieldWrapperProps {
  label?: string;
  error?: FieldError | undefined;
  children: React.ReactNode;
}

export type FormFieldWrapperPropsWithoutChildren = Omit<
  FormFieldWrapperProps,
  "children"
>;

const FormFieldWrapper = ({
  label,
  error,
  children,
}: FormFieldWrapperProps) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text text-base">{label}</span>
      </div>

      {children}

      {error?.message && (
        <div className="label">
          <span className="label-text-alt text-error">{error.message}</span>
        </div>
      )}
    </label>
  );
};

export default FormFieldWrapper;
