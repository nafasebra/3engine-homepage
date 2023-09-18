/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@/components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['@/assets'] = path.join(__dirname, 'src/assets');
    return config;
  },
}

module.exports = nextConfig
