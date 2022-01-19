<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <div class="d-flex align-right" @click.stop="drawer2 = !drawer2" style="cursor: pointer">
        <v-icon> mdi-cart </v-icon> {{ cartNumber }}
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed bottom temporary app>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="categorie in categories" :key="categorie.id">
            <v-list-item-title @click="setCategorie(categorie.name)">{{
              categorie.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer2" fixed bottom temporary app right width="50%">
      <v-list dense>
          <v-list-item v-for="categorie in cart" :key="categorie.id">
            <v-list-item-title>{{ categorie.name }} - ${{ categorie.price }}
            </v-list-item-title>
          </v-list-item>
          <v-divider class="mx-4"></v-divider>
          <v-list-item>
            <v-list-item>
              Total: ${{ finalPrice }}
            </v-list-item>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <Product />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "./components/product";
import types from "./store/types";

export default {
  name: "App",

  components: {
    Product,
  },
  data: () => ({
    drawer: false,
    drawer2: false,
    group: null,
    group2: null,
  }),
  beforeMount() {
    this.getCategories();
  },
  computed: {
    ...mapGetters(["categories", "cart", "cartNumber", "finalPrice"]),
  },
  methods: {
    ...mapActions({
      getCategories: types.actions.GET_CATEGORIES_API,
      setCategorie: types.actions.SELECT_CATEGORIE_MENU,
    }),
  },
  watch: {
    group() {
      this.drawer = false;
    },
    group2() {
      this.drawer2 = false;
    },
  },
};
</script>
