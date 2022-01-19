export default {
    products: (state) => state.products,
    categories: (state) => state.categories,
    cart: (state) => state.cart,
    cartNumber: (state) => state.cart.length,
    finalPrice: (state) => state.finalPrice
}