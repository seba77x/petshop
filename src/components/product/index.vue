<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="product in products" :key="product.id">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="auto" :src="product.photo"></v-img>

          <v-card-title>{{ product.name }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                hover
                half-increments
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">${{ product.price }}</div>

            <div>
              {{ product.description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="addTocart(product.id)"
            >
              Agregar al carro
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import types from "../../store/types";

export default {
  name: "Product",

  data: () => ({
    loading: false,
    localProducts: []
  }),
  beforeMount() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products", "cart", "selectedCategorie"]),
  },
  methods: {
    ...mapActions({
      getProducts: types.actions.GET_PRODUCTS_API,
      addToCArt: types.actions.ADD_TO_CART,
    }),
    addTocart(id) {
      this.addToCArt(id);
      localStorage.setItem("cartItems", JSON.stringify(this.cart));
    },
  },
};
</script>