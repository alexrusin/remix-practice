import { Link, useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const filePath = params["*"];
  return json({
    filePath,
  });
}

export default function Dashboard404() {
  const { filePath } = useLoaderData<typeof loader>();
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Oops</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page unavailable
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, this page{" "}
            <span className="text-blue-400">/dashboard/{filePath}</span> is
            unavailable
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/dashboard"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Dashboard home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
