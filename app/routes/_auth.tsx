import { Outlet } from "@remix-run/react";

export default function Auth() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
      </div>
      <Outlet />
    </div>
  );
}
