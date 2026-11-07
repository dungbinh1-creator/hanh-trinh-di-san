// Chuyển tiếp wifinance.com.vn/hanh-trinh-di-san* sang Pages project "hanh-trinh-di-san".
const ORIGIN = "https://hanh-trinh-di-san.pages.dev";
const PREFIX = "/hanh-trinh-di-san";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname !== PREFIX && !url.pathname.startsWith(PREFIX + "/")) {
      return fetch(request);
    }
    const rest = url.pathname.slice(PREFIX.length) || "/";
    const target = new URL(rest + url.search, ORIGIN);
    const res = await fetch(new Request(target, request), { redirect: "manual" });
    const headers = new Headers(res.headers);
    const loc = headers.get("location");
    if (loc) {
      const l = new URL(loc, ORIGIN);
      if (l.origin === ORIGIN) headers.set("location", PREFIX + (l.pathname === "/" ? "" : l.pathname) + l.search);
    }
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
  },
};
