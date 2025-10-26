export function randomPrice() {
  // Genera precio entre 5.00 y 22.00
  return Number((Math.random() * 17 + 5).toFixed(2));
}