// src/lib/utils/barcodeGenerator.js (FIXED — ADDED WHITE BACKGROUND + PADDING)
export async function generateBarcodePng(row) {
  const { default: bwipjs } = await import('bwip-js/browser');

  const multipliers = {
    '480p': 1,
    '720p': 1.5,
    '1080p': 2,
    '4k': 4,
    'custom': Math.min(Math.max(row.customMultiplier, 1), 8)
  };
  const scale = multipliers[row.resolution] || 2;

  // Add 20px padding around the barcode
  const paddedWidth = row.width * scale + 40;
  const paddedHeight = row.height * scale + 40;

  const canvas = new OffscreenCanvas(paddedWidth, paddedHeight);
  const ctx = canvas.getContext('2d');

  // Fill white background
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, paddedWidth, paddedHeight);

  const options = {
    bcid: row.symbology,
    text: row.data.trim(),
    scale: 3,
    height: row.height / 10, // bwip-js height in mm
    includetext: true,
    textxalign: 'center',
    paddingwidth: 20 / scale, // Padding inside barcode area
    paddingheight: 20 / scale,
    backgroundcolor: 'ffffff' // Ensure white bg in options too
  };

  try {
    // Render barcode centered with padding
    bwipjs.toCanvas(canvas, options);
    return await canvas.convertToBlob({ type: 'image/png' });
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to generate ${row.symbology.toUpperCase()}: Invalid data or symbology error`);
  }
}