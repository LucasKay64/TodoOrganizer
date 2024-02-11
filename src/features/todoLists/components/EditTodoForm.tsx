import { Form } from "../../../components/form/Form";
import FormTextField from "../../../components/formTextField/FormTextField";
import FormTextAreaField from "../../../components/formTextAreaField/FormTextAreaField";
import FormDateTimeField from "../../../components/formDateTimeField/FormDateTimeField";

import { addTodoSchema, addTodoFormDataType } from "../validation/TodoSchemas";

import { useEditTodo } from "../api/editTodo";
import { useSelectTodoById } from "../api/getTodos";
import { useParams } from "react-router-dom";

interface EditTodoFormProps {
  todoId: number;
}

const EditTodoForm = ({ todoId }: EditTodoFormProps) => {
  const { listId } = useParams();
  const todo = useSelectTodoById(todoId, Number(listId));
  const { editTodo, isPending } = useEditTodo();

  const handleEditTodo = ({
    title,
    description,
    dueDateTime,
  }: addTodoFormDataType) => {
    editTodo({
      id: todoId,
      title,
      description,
      due_date_time: dueDateTime.toISOString(),
    });
  };

  return (
    <Form<addTodoFormDataType, typeof addTodoSchema>
      schema={addTodoSchema}
      onSubmit={handleEditTodo}
      className="flex flex-col gap-5"
      defaultValues={
        todo
          ? {
              title: todo.title,
              description: todo.description,
              dueDateTime: new Date(todo.due_date_time),
            }
          : undefined
      }
    >
      {({ register, formState: { errors }, control }) => (
        <>
          <FormTextField
            label="Todo title"
            placeholder="Enter todo title"
            registration={register("title")}
            error={errors.title}
            disabled={isPending}
          />

          <FormTextAreaField
            label="Description"
            placeholder="Enter description"
            registration={register("description")}
            error={errors.description}
            disabled={isPending}
          />

          <FormDateTimeField
            label="Due Date and Time"
            fieldName="dueDateTime"
            error={errors.dueDateTime}
            control={control}
            placeholderText="dd/MM/yyyy h:mm aa"
            disabled={isPending}
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <span className="loading loading-spinner"></span>
                Editing todo...
              </>
            ) : (
              "Edit"
            )}
          </button>
        </>
      )}
    </Form>
  );
};

export default EditTodoForm;
