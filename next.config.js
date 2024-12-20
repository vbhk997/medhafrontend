// const { withStoreConfig } = require("./store-config")
// const store = require("./store.config.json")

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = withStoreConfig({
//   features: store.features,
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "9000"
//       },
//       {
//         protocol: "https",
//         hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
//       },
//       {
//         protocol: "https",
//         hostname: "medusa-server-testing.s3.amazonaws.com",
//       },
//       {
//         protocol: "https",
//         hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
//       },
//     ],
//   },
// })

// console.log("next.config.js", JSON.stringify(module.exports, null, 2))

// module.exports = nextConfig

const { withStoreConfig } = require("./store-config");
const store = require("./store.config.json");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://19fa-2601-985-4103-2e20-8564-b3a8-8523-ea90.ngrok-free.app",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
});

console.log("next.config.js", JSON.stringify(nextConfig, null, 2));

module.exports = nextConfig;
