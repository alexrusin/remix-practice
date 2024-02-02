import { type ActionFunctionArgs, json } from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useNavigation,
  Form,
} from "@remix-run/react";
import { useEffect, useRef } from "react";

const tasksList: string[] = [];

export async function loader() {
  return json({ tasks: tasksList });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("task-name");
  if (typeof name !== "string" || !name) {
    return json({ name: "Task name is required" });
  }
  if (name.length < 2 || name.length > 12) {
    return json({ name: "Task name must be between 2 and 12 characters" });
  }
  tasksList.push(name);
  return null;
}

export default function Tasks() {
  const { tasks } = useLoaderData<typeof loader>();
  const errors = useActionData<typeof action>();

  const $form = useRef<HTMLFormElement>(null);
  const navigation = useNavigation();

  useEffect(
    function resetFormOnSuccess() {
      if (navigation.state === "idle" && errors === null) {
        $form.current?.reset();
      }
    },
    [navigation.state, errors]
  );

  return (
    <div className="flex justify-center mt-8">
      <Form
        method="post"
        ref={$form}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="task-name"
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>

        {errors?.name ? (
          <div className="text-red-600">{errors?.name}</div>
        ) : null}
        <ul className="mt-6">
          {tasks && tasks.map((task) => <li key={task}>{task}</li>)}
        </ul>
      </Form>
    </div>
  );
}
