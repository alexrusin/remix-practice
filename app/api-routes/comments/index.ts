import { type LoaderFunctionArgs, json } from "@remix-run/node";

import comments from "./commentsData";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { postId } = params;
  if (!postId) {
    return json({ comments });
  }
  const filteredComments = comments.filter(
    (item) => item.post_id === parseInt(postId)
  );
  return json({ comments: filteredComments });
};
