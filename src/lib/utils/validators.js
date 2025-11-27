// src/lib/utils/validators.js (FIXED — ADDED CHECKSUM VALIDATION FOR EAN/UPC)
export function validate(symbology, value) {
  if (!value) return { valid: false, message: 'Data is required' };

  value = value.trim();

  switch (symbology) {
    case 'code128':
      return { valid: true }; // Flexible

    case 'code39':
      if (!/^[0-9A-Z\-\.\ \$\/\+\%\*]+$/.test(value)) {
        return { valid: false, message: 'Code39 only allows 0-9, A-Z and - . $ / + % *' };
      }
      return { valid: true };

    case 'ean13':
      if (!/^\d{12,13}$/.test(value)) {
        return { valid: false, message: 'EAN-13 must be 12 or 13 digits' };
      }
      if (value.length === 13 && !validateEanChecksum(value)) {
        return { valid: false, message: 'Invalid EAN-13. Check the amount of digits.' };
      }
      return { valid: true };

    case 'ean8':
      if (!/^\d{7,8}$/.test(value)) {
        return { valid: false, message: 'EAN-8 must be 7 or 8 digits' };
      }
      if (value.length === 8 && !validateEanChecksum(value)) {
        return { valid: false, message: 'Invalid EAN-8. Check the amount of digits.' };
      }
      return { valid: true };

    case 'upca':
      if (!/^\d{11,12}$/.test(value)) {
        return { valid: false, message: 'UPC-A must be 11 or 12 digits' };
      }
      if (value.length === 12 && !validateUpcChecksum(value)) {
        return { valid: false, message: 'Invalid UPC-A. Check the amount of digits.' };
      }
      return { valid: true };

    case 'pdf417':
      if (value.length > 2000) {
        return { valid: false, message: 'PDF417 max ~2000 characters' };
      }
      return { valid: true };

    default:
      return { valid: true };
  }
}

// Helper: EAN checksum (for EAN-13 and EAN-8)
function validateEanChecksum(code) {
  const digits = code.split('').map(Number);
  const checkDigit = digits.pop();
  let sum = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    sum += digits[i] * (i % 2 === 0 ? 3 : 1);
  }
  const calcCheck = (10 - (sum % 10)) % 10;
  return calcCheck === checkDigit;
}

// Helper: UPC-A checksum (similar to EAN)
function validateUpcChecksum(code) {
  const digits = code.split('').map(Number);
  const checkDigit = digits.pop();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i] * (i % 2 === 0 ? 3 : 1);
  }
  const calcCheck = (10 - (sum % 10)) % 10;
  return calcCheck === checkDigit;
}

export function getDisplayName(symbology) {
  const names = {
    code128: 'Code 128',
    code39: 'Code 39',
    ean13: 'EAN-13',
    ean8: 'EAN-8',
    upca: 'UPC-A',
    pdf417: 'PDF417'
  };
  return names[symbology] || symbology;
}