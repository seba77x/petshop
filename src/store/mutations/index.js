
import types from "../types"
export default {
    [types.mutations.SET_PRODUCTS]: (state, paylaod) => {
        const initialProducts = paylaod.map(product => ({...product, inCart: false}))
        state.products = initialProducts
    },
    [types.mutations.SET_CATEGORIES]: (state, paylaod) => {
        state.categories = paylaod;
    },
    [types.mutations.SET_PRODUCT_TO_CART]: (state, productId) => {
        const products = state.products;
        products
            .filter(product => product.id === productId && !product.inCart) 
            .map(product => product.inCart = true)
    },
    [types.mutations.SET_LIST_CART]: (state) => {
        const products = state.products;
        const localList = products.filter( product => product.inCart && product.inCart)
        state.cart = localList
    },
    [types.mutations.SET_CATEGORIE_MENU]: (state, categorie) => {
        state.selectedCategorie = categorie
    },
    [types.mutations.SET_FINAL_PRICE]: (state) => {
        const finalPrice = state.cart.reduce(( accum, product) => product.price + accum, 0)
        state.finalPrice = finalPrice
    }
}