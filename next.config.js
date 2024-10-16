/**
 * @type {import('next').nextConfig}
 */

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;