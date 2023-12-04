export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const arr8 = new Int8Array(buffer);
  arr8[position] = value;
  return buffer;
}
