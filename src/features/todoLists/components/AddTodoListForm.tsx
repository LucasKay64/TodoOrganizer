import { Form } from "../../../components/form/Form";
import FormTextField from "../../../components/formTextField/FormTextField";

import {
  addTodoListFormDataType,
  addTodoListSchema,
} from "../validation/TodoListSchemas";

import { useCreateTodoList } from "../api/createTodoList";

const AddTodoListForm = () => {
  const { createList, isPending } = useCreateTodoList();

  const handleAddTodoList = ({ title }: addTodoListFormDataType) => {
    createList(title);
  };

  return (
    <Form<addTodoListFormDataType, typeof addTodoListSchema>
      schema={addTodoListSchema}
      onSubmit={handleAddTodoList}
      className="flex flex-col gap-5"
    >
      {({ register, formState: { errors } }) => (
        <>
          <FormTextField
            label="List title"
            placeholder="Enter list title"
            registration={register("title")}
            error={errors.title}
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
                Adding todo list...
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

export default AddTodoListForm;
