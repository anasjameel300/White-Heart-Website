import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = 'public/assets';
const BACKUP_DIR = 'backups/original_assets';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImages() {
    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
    }

    const files = fs.readdirSync(ASSETS_DIR);

    for (const file of files) {
        const filePath = path.join(ASSETS_DIR, file);
        const backupPath = path.join(BACKUP_DIR, file);

        // Only process images (jpg, jpeg, png)
        if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

        console.log(`Processing: ${file}...`);

        try {
            // 1. Backup the original file
            if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(filePath, backupPath);
                console.log(`  Backed up to ${backupPath}`);
            }

            const image = sharp(backupPath);
            const metadata = await image.metadata();

            let pipeline = image;

            // 2. Resize if it's wider than MAX_WIDTH
            if (metadata.width && metadata.width > MAX_WIDTH) {
                pipeline = pipeline.resize(MAX_WIDTH);
                console.log(`  Resizing from ${metadata.width}px to ${MAX_WIDTH}px`);
            }

            // 3. Compress based on format
            if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
                pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true });
            } else if (metadata.format === 'png') {
                // Convert large PNGs to JPEG if they are likely photos, otherwise optimize PNG
                // For simplicity here, we'll just optimize PNG or convert to WebP if we wanted to change extensions
                // But the user's code expects specific extensions, so let's stick to originals or just quality
                pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 });
            }

            // 4. Write back to the original location
            await pipeline.toFile(filePath + '.tmp');
            fs.renameSync(filePath + '.tmp', filePath);

            const oldSize = fs.statSync(backupPath).size;
            const newSize = fs.statSync(filePath).size;
            const reduction = ((oldSize - newSize) / oldSize * 100).toFixed(2);

            console.log(`  Done: ${(oldSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
        } catch (err) {
            console.error(`  Error processing ${file}:`, err);
        }
    }
}

optimizeImages();
