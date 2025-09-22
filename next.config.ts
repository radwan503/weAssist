/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'development';

module.exports = {
  basePath: isProd ? '/weAssist' : '',
  assetPrefix: isProd ? '/weAssist/' : '',
};
