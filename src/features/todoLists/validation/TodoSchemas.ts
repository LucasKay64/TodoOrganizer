import * as yup from "yup";

export const addTodoSchema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .max(255, "Title must not exceed 255 characters")
    .trim(),
  description: yup
    .string()
    .required("Description is required")
    .max(255, "Description must not exceed 255 characters")
    .trim(),
  dueDateTime: yup.date().required().typeError("Invalid date"),
});
export type addTodoFormDataType = yup.InferType<typeof addTodoSchema>;
