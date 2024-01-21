import { type LoaderFunctionArgs, json } from "@remix-run/node";
import comments from "./commentsData";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { commentId: id } = params;
  if (!id) {
    return json({ message: "Unable to get comment id" }, 400);
  }
  const filteredComments = comments.filter((item) => item.id === parseInt(id));
  if (filteredComments.length === 0) {
    return json({ message: "Comment not found" }, 404);
  }
  return json(filteredComments[0]);
};
