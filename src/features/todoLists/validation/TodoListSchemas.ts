import * as yup from "yup";

export const addTodoListSchema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .max(255, "Title must not exceed 255 characters")
    .trim(),
});
export type addTodoListFormDataType = yup.InferType<typeof addTodoListSchema>;
