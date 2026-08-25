const ICW = "https://image-compare-workbench.marshy-runner.workers.dev";

function icwPath(pathname) {
  if (pathname === "/image-compare-workbench" || pathname === "/image-compare-workbench/") {
    return "/";
  }
  if (pathname.startsWith("/image-compare-workbench/")) {
    return pathname.slice("/image-compare-workbench".length);
  }
  return pathname;
}

function shouldProxyIcw(pathname) {
  if (pathname === "/image-compare-workbench.md") return false;
  if (pathname === "/image-compare-workbench.json") return false;
  if (pathname === "/image-compare-workbench" || pathname.startsWith("/image-compare-workbench/")) return true;
  if (pathname.startsWith("/assets/")) return true;
  if (pathname === "/favicon.svg" || pathname === "/icons.svg") return true;
  return false;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (shouldProxyIcw(path)) {
      const target = new URL(icwPath(path) + url.search, ICW);
      const headers = new Headers(request.headers);
      headers.delete("host");
      return fetch(target, {
        method: request.method,
        headers,
        redirect: "manual",
      });
    }

    if (path === "/paint-with-javascript" || path === "/paint-with-javascript/") {
      return env.ASSETS.fetch(new URL("/paint-with-javascript.html", url));
    }

    return env.ASSETS.fetch(request);
  },
};
