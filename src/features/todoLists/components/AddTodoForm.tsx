import { Form } from "../../../components/form/Form";
import FormTextField from "../../../components/formTextField/FormTextField";
import FormTextAreaField from "../../../components/formTextAreaField/FormTextAreaField";
import FormDateTimeField from "../../../components/formDateTimeField/FormDateTimeField";

import { addTodoSchema, addTodoFormDataType } from "../validation/TodoSchemas";

import { useCreateTodo } from "../api/createTodo";
import { useParams } from "react-router-dom";

const AddTodoForm = () => {
  const { id } = useParams();
  const { createTodo, isPending } = useCreateTodo();

  const handleAddTodo = ({
    title,
    description,
    dueDateTime,
  }: addTodoFormDataType) => {
    createTodo({
      title,
      description,
      dueDateTime: dueDateTime.toISOString(),
      todoListId: Number(id),
    });
  };

  return (
    <Form<addTodoFormDataType, typeof addTodoSchema>
      schema={addTodoSchema}
      onSubmit={handleAddTodo}
      className="flex flex-col gap-5"
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
                Adding todo...
              </>
            ) : (
              "Add"
            )}
          </button>
        </>
      )}
    </Form>
  );
};

export default AddTodoForm;
