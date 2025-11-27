export type Symbology = 'code128' | 'code39' | 'ean13' | 'ean8' | 'upca' | 'pdf417';

export interface BarcodeRow {
  id: string;
  symbology: Symbology;
  data: string;
  width: number;
  height: number;
  resolution: '480p' | '720p' | '1080p' | '4k' | 'custom';
  customMultiplier: number; // 1 to 8
}

export const defaultRow: Omit<BarcodeRow, 'id'> = {
  symbology: 'code128',
  data: '',
  width: 400,
  height: 150,
  resolution: '1080p',
  customMultiplier: 2
};