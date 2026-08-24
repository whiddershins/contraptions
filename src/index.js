const IMAGE_COMPARE = "https://image-compare-workbench.marshy-runner.workers.dev";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/image-compare-workbench.md") {
      return env.ASSETS.fetch(request);
    }

    if (path === "/image-compare-workbench" || path.startsWith("/image-compare-workbench/")) {
      const rest = path.slice("/image-compare-workbench".length) || "/";
      return Response.redirect(IMAGE_COMPARE + rest + url.search, 302);
    }

    return env.ASSETS.fetch(request);
  },
};
