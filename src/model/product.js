export function totalPrice(products = []) {
  return products.reduce((prev, item) => prev + item.price * item.count, 0)
}

export const generateProduct = code => ({
  code,
  count: 1,
  price: 100,
})

export function addProduct(products, productToAdd) {
  const index = products.findIndex((p) => p.code === productToAdd.code)
  if (index >= 0) {
    products[index].count += 1
    return products
  }
  return [...products, productToAdd]
}

export function changeProduct(products, productToChange) {
  const index = products.findIndex((p) => p.code === productToChange.code)
  products[index] = productToChange
  return products
}