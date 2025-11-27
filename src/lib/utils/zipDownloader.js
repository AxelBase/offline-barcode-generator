export async function downloadAllAsZip(barcodeRows, blobs) {
  // Dynamic imports — load only client-side
  const { default: JSZip } = await import('jszip');
  const { saveAs } = await import('file-saver');

  const zip = new JSZip();

  barcodeRows.forEach((row, i) => {
    const num = String(i + 1).padStart(3, '0');
    zip.file(`barcode_${num}.png`, blobs[i]);
  });

  const now = new Date();
  const timestamp = now.toISOString().slice(0, 19).replace(/[:T-]/g, '').slice(0, 15);
  const filename = `AxelBase_barcodes_${timestamp}.zip`;

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, filename);
}