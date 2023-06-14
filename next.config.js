/** @type {import('next').NextConfig} */
const nextConfig = {
  css: {
    styleResources: {
      // Add your tailwind.css file here
      include: ["./styles/tailwind.css"],
    },
  },
};

/**
 * module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

 */
module.exports = nextConfig;
