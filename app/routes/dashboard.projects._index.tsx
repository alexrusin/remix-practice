import { Link } from "@remix-run/react";

const projects = [
  {
    id: 1,
    name: "Website Development",
    deadline: "24/05/1995",
    type: "Front End",
    budget: "$120,000",
  },
  {
    id: 2,
    name: "API Development",
    deadline: "24/05/1995",
    type: "Back End",
    budget: "$100,000",
  },
  {
    id: 3,
    name: "Discovery",
    deadline: "24/05/1995",
    type: "LOE",
    budget: "$10,000",
  },
];

export default function ProjectsIndex() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Deadline
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Type
            </th>
            <th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Budget
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {project.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {project.deadline}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {project.type}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {project.budget}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <Link
                  to={String(project.name)}
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}