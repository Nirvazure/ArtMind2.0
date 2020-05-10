<template>
  <v-card
    class="pa-12 d-flex justify-end align-center"
    color="indigo darken-2"
    flat
    :img="img"
    height="100%"
  >
    <v-card class="d-felx" elevation="12" width="240" height="400">
      <v-card-title class="d-felx justify-center">
        <v-avatar size="150" class="mt-5">
          <v-img :src="painterImg"></v-img>
        </v-avatar>
      </v-card-title>
      <v-card-title>梵高</v-card-title>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    img: require("@/assets/crafts/c1.jpg"),
    painterImg: require("@/assets/painters/梵高.jpg"),
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ]
  })
};
</script>