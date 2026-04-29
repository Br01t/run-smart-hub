import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = './public/images/products';
const files = [
  'adidas-adios-pro-evo.jpg',
  'adidas-pro-3-v2.jpg',
  'nike-alphafly-3.jpg',
  'nike-vaporfly-3.jpg'
];

const targetNames = {
  'adidas-adios-pro-evo.jpg': 'adidas-adios-pro-evo.webp',
  'adidas-pro-3-v2.jpg': 'adidas-adios-pro-3.webp',
  'nike-alphafly-3.jpg': 'nike-alphafly-3.webp',
  'nike-vaporfly-3.jpg': 'nike-vaporfly-3.webp'
};

async function convert() {
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, targetNames[file]);
    
    if (fs.existsSync(inputPath)) {
      console.log(`Converting ${file} to webp...`);
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      console.log(`Done: ${targetNames[file]}`);
      fs.unlinkSync(inputPath);
    } else {
      console.log(`File not found: ${inputPath}`);
    }
  }
}

convert().catch(err => {
  console.error(err);
  process.exit(1);
});
