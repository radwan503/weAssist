/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_MODE === 'development';

module.exports = {
  basePath: isProd ? '/weAssist' : '',
  assetPrefix: isProd ? '/weAssist/' : '',
};
