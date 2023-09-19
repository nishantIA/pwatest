/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  // disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
  runtimeCaching,
  scope: "/",
  sw: "service-worker.js",
});

module.exports = withPWA({
  reactStrictMode: true,
});
