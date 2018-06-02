export function calculate(products = []) {
  return products.reduce((prev, item) => prev + item.price * item.count, 0)
}
