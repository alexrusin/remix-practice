import { type LoaderFunctionArgs, json } from "@remix-run/node";
import posts from "./postsData";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { postId: id } = params;
  if (!id) {
    return json({ message: "Unable to get post id" }, 400);
  }
  const filteredPosts = posts.filter((item) => item.id === parseInt(id));
  if (filteredPosts.length === 0) {
    return json({ message: "Post not found" }, 404);
  }
  return json(filteredPosts[0]);
};
