import { json } from "@remix-run/node";
import posts from "./postsData";

export const loader = async () => {
  return json({ posts });
};
