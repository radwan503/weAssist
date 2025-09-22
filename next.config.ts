/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_MODE === 'production';

module.exports = {
  basePath: isProd ? '/weAssist' : '',
  assetPrefix: isProd ? '/weAssist/' : '',
};
