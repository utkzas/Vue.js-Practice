import vuex from 'vue';
import vue from 'vue';

vue.use(vuex) 

export default new vuex.Store({
    state: { // = data
        products: []
    },

    getters: {  // = computed
        productsCount( ){
              //.... length of product array
        }
    },
    
    actions: {  // = methods
        fetchProducts () {
            // make the call
            // run setProducts mutation
        }
    },

    mutations : { // = used for setting and updating state
        setProducts(state, products) { //products here is payload products
            // update products
            state.products=products
        }
    }
})