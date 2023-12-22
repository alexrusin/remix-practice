import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ project_id: params.id });
}

export default function Project() {
  const { project_id } = useLoaderData<typeof loader>();
  return <p>Project {project_id}</p>;
}
