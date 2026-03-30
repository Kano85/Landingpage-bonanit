import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuración para exportar el sitio como estático
  // Esto genera archivos HTML, CSS y JS que pueden ser servidos desde cualquier servidor web
  output: 'export',

  // Añade una barra inclinada al final de las URLs para consistencia en despliegues estáticos
  trailingSlash: true,

  // Configuración de imágenes para despliegue estático
  // Desactiva la optimización de Next.js para que las imágenes se sirvan como archivos estáticos
  images: {
    unoptimized: true,
  },

  // Opcional: Si el sitio se despliega en un subdirectorio, especifica la ruta base
  // basePath: '/mi-sitio',

  // Opcional: Si usas assetPrefix para CDN
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.example.com' : '',
};

export default nextConfig;
