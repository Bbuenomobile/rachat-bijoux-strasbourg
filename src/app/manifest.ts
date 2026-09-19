import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rachat Bijoux Strasbourg — Cabinet Gemmologique',
    short_name: 'RachatStrasbourg',
    description: "Expertise gemmologique et rachat immédiat de diamants certifiés, haute joaillerie et montres de collection à Strasbourg et en Alsace.",
    start_url: '/',
    display: 'standalone',
    background_color: '#08162b',
    theme_color: '#08162b',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
