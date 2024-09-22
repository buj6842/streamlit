/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {},
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['app', 'bin', 'config', 'context', 'hooks', 'i18n', 'models', 'service', 'test', 'types', 'utils'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  reactStrictMode: true,

  // 자산 파일 경로 설정 (필요 시 사용)
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-cdn-or-prefix/' : '',
};

export default nextConfig;
