/** @type {import('next').NextConfig} */

// Next 16 builds with Turbopack, which does not support SWC wasm plugins, so the
// tempo-devtools `swcPlugins` entry is gone. tempo-devtools itself marks Next 15+
// as unsupported for that plugin. The TempoDevtools runtime in
// src/components/tempo-init.tsx is unaffected and still gated on NEXT_PUBLIC_TEMPO.
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

module.exports = nextConfig;
