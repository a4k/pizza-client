export function calculatePrice(currency: string, price: number): number {
  let c = 1;
  if (currency === 'euro') {
    c = 1.12;
  }
  return Math.round(price * c * 100) / 100;
}
