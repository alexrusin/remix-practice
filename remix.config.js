import { flatRoutes } from "remix-flat-routes";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  routes(defineRoutes) {
    return {
      ...flatRoutes("routes", defineRoutes),
      ...defineRoutes((route) => {
        route("/api", "api-routes/index.ts", () => {
          route("posts", "api-routes/posts/index.ts", () => {
            route(":postId", "api-routes/posts/post.ts", () => {
              route("comments", "api-routes/comments/index.ts", {
                id: "comments-by-post",
              });
            });
          });
          route("comments", "api-routes/comments/index.ts", () => {
            route(":commentId", "api-routes/comments/comment.ts");
          });
        });
      }),
    };
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
