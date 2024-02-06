import { Form } from "../../../components/form/Form";
import FormTextField from "../../../components/formTextField/FormTextField";
import FormTextAreaField from "../../../components/formTextAreaField/FormTextAreaField";
import FormDateTimeField from "../../../components/formDateTimeField/FormDateTimeField";

import { addTodoSchema, addTodoFormDataType } from "../validation/TodoSchemas";

const AddTodoForm = () => {
  const handleAddTodo = ({
    title,
    description,
    dueDateTime,
  }: addTodoFormDataType) => {
    console.log(title, description, dueDateTime);
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
          />

          <FormTextAreaField
            label="Description"
            placeholder="Enter description"
            registration={register("description")}
            error={errors.description}
          />

          <FormDateTimeField
            label="Due Date and Time"
            fieldName="dueDateTime"
            error={errors.dueDateTime}
            control={control}
            placeholderText="dd/MM/yyyy h:mm aa"
          />

          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </>
      )}
    </Form>
  );
};

export default AddTodoForm;
