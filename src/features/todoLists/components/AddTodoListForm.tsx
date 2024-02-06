import { Form } from "../../../components/form/Form";
import FormTextField from "../../../components/formTextField/FormTextField";

import {
  addTodoListFormDataType,
  addTodoListSchema,
} from "../validation/TodoListSchemas";

const AddTodoListForm = () => {
  const handleAddTodoList = ({ title }: addTodoListFormDataType) => {
    console.log(title);
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
          />

          <button type="submit" className="btn btn-primary">
            Add List
          </button>
        </>
      )}
    </Form>
  );
};

export default AddTodoListForm;
