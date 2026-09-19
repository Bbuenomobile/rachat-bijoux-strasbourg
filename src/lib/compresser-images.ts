/**
 * Compression des photos dans le navigateur avant envoi.
 *
 * Pourquoi : un vendeur photographie sa pierre avec un téléphone récent ou un
 * appareil photo — les fichiers font couramment 8 à 25 Mo. Refuser ces photos
 * (ou pire, effacer sa sélection) fait perdre le lead : c'est exactement ce qui
 * s'est produit le 12/08/2026 avec un saphir certifié LOTUS.
 *
 * Pour une pré-estimation visuelle, 2000 px de côté suffisent largement.
 * Une photo de 12 Mo tombe ainsi autour de 500-900 Ko, sans perte utile.
 *
 * Principe : on ne bloque JAMAIS. Si la compression est impossible (format non
 * décodable par le navigateur, HEIC hors Safari, canvas indisponible), on renvoie
 * le fichier d'origine et c'est le serveur qui tranchera.
 */

const COTE_MAX = 2000;
const QUALITE = 0.85;
/** en dessous de ce poids, inutile de recompresser */
const SEUIL_COMPRESSION = 1.2 * 1024 * 1024;

export type ResultatCompression = {
  fichiers: File[];
  octetsAvant: number;
  octetsApres: number;
  compresses: number;
};

function estImageCompressible(f: File): boolean {
  // le HEIC n'est décodable que par Safari ; ailleurs le canvas rendrait une image vide
  if (/heic|heif/i.test(f.type) || /\.(heic|heif)$/i.test(f.name)) return false;
  return /^image\/(jpeg|jpg|png|webp)$/i.test(f.type);
}

function chargerImage(f: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('image illisible'));
    };
    img.src = url;
  });
}

async function compresserUne(f: File): Promise<File> {
  if (!estImageCompressible(f) || f.size < SEUIL_COMPRESSION) return f;

  try {
    const img = await chargerImage(f);
    const ratio = Math.min(1, COTE_MAX / Math.max(img.width, img.height));
    // image déjà petite ET légère : on garde l'original
    if (ratio === 1 && f.size < 3 * 1024 * 1024) return f;

    const canvas = document.createElement('canvas');
    canvas.width = Math.round(img.width * ratio);
    canvas.height = Math.round(img.height * ratio);
    const ctx = canvas.getContext('2d');
    if (!ctx) return f;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/jpeg', QUALITE));
    if (!blob || blob.size >= f.size) return f; // la compression n'apporte rien

    const nom = f.name.replace(/\.[^.]+$/, '') + '.jpg';
    return new File([blob], nom, { type: 'image/jpeg', lastModified: f.lastModified });
  } catch {
    return f; // en cas d'échec, on envoie l'original
  }
}

export async function compresserImages(liste: File[]): Promise<ResultatCompression> {
  const octetsAvant = liste.reduce((n, f) => n + f.size, 0);
  const fichiers = await Promise.all(liste.map(compresserUne));
  const octetsApres = fichiers.reduce((n, f) => n + f.size, 0);
  let compresses = 0;
  for (let i = 0; i < liste.length; i++) if (fichiers[i] !== liste[i]) compresses++;
  return { fichiers, octetsAvant, octetsApres, compresses };
}

export const formaterMo = (octets: number): string => `${(octets / 1024 / 1024).toFixed(1)} Mo`;
