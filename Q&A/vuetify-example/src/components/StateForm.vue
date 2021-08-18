<template>
  <v-card class="overflow-hidden" color="purple lighten-1" dark>
    <v-toolbar flat color="purple">
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light"> User State </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-autocomplete
        :items="states"
        :filter="customFilter"
        color="white"
        item-text="name"
        label="State"
        v-model="values"
      ></v-autocomplete>

      <div v-show="values">User is from {{ values }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      values: null,
      states: [
        { name: "Florida", abbr: "FL", id: 1 },
        { name: "Georgia", abbr: "GA", id: 2 },
        { name: "Nebraska", abbr: "NE", id: 3 },
        { name: "California", abbr: "CA", id: 4 },
        { name: "New York", abbr: "NY", id: 5 },
      ],
    };
  },

  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
  },
};
</script>
