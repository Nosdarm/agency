import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const imagesDir = './public/images';
const targetWidth = 800; // Ширина для карточек кейсов
const quality = 85; // Качество JPEG

async function optimizeImages() {
  try {
    const files = await readdir(imagesDir);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    console.log(`Found ${imageFiles.length} images to optimize...\n`);

    for (const file of imageFiles) {
      const inputPath = join(imagesDir, file);
      const outputPath = join(imagesDir, file);

      try {
        const metadata = await sharp(inputPath).metadata();
        console.log(`Processing ${file}:`);
        console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.format}`);

        await sharp(inputPath)
          .resize(targetWidth, null, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ quality, mozjpeg: true })
          .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '-optimized.jpg'));

        // Get optimized file stats
        const optimizedMetadata = await sharp(outputPath.replace(/\.(jpg|jpeg|png)$/i, '-optimized.jpg')).metadata();
        console.log(`  Optimized: ${optimizedMetadata.width}x${optimizedMetadata.height}`);
        console.log(`  ✓ Saved as ${file.replace(/\.(jpg|jpeg|png)$/i, '-optimized.jpg')}\n`);

      } catch (err) {
        console.error(`  ✗ Error processing ${file}:`, err.message);
      }
    }

    console.log('✓ All images optimized!');
  } catch (err) {
    console.error('Error:', err);
  }
}

optimizeImages();
