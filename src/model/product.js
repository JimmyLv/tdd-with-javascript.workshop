export function totalPrice(products = []) {
  return products.reduce((prev, item) => prev + item.price * item.count, 0)
}

export const generateProduct = id => ({
  id,
  count: 1,
  price: 100,
})

export function addProduct(products, productToAdd) {
  return [...products, productToAdd]
}

export function changeProduct(products, productToChange) {
  return products.map(
    product => (product.id === productToChange.id ? productToChange : product),
  )
}
