import { json } from "@remix-run/node";

export const loader = async () => {
  throw json({ message: "Route not found" }, 404);
};
