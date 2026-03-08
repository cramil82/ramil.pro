/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera archivos estáticos en out/ — sin Node.js en producción
  output: 'export',

  // Cada ruta genera su propio index.html (ej: /servicios/amazon/index.html)
  // Necesario para que el servidor estático de Hostinger encuentre las páginas
  trailingSlash: true,

  // next/image no puede optimizar en tiempo real sin servidor — desactivar
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
