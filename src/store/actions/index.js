import types from "../types"
import get from '../../utils'
export default {
    [types.actions.GET_PRODUCTS_API]: ({ commit }) => {
        get('product')
        .then( result => {
            commit(types.mutations.SET_PRODUCTS, result.data)
        })
        .catch(err => console.log(err))
    },
    [types.actions.GET_CATEGORIES_API]: ({ commit }) => {
        get('product-category')
        .then( result => {
            commit(types.mutations.SET_CATEGORIES, result.data)
        })
        .catch(err => console.log(err))
    },
    [types.actions.ADD_TO_CART]: ({ commit }, productId) => {
        commit(types.mutations.SET_PRODUCT_TO_CART, productId)
        commit(types.mutations.SET_LIST_CART)
        commit(types.mutations.SET_FINAL_PRICE)
    },
    [types.actions.SELECT_CATEGORIE_MENU]: ({ commit }, categorie) => {
        commit(types.mutations.SET_CATEGORIE_MENU, categorie)
    }
}