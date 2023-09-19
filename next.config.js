const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  scope: "/",
  sw: "service-worker.js",
});

module.exports = withPWA({
  // next.js config
});
