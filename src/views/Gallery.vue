<template>
  <v-container>
    <v-card
      class="pa-12 d-flex justify-end align-center"
      color="indigo darken-2"
      flat
      aspect-ratio="1"
      :img="img"
    >
      <v-card class="d-felx whiteA" elevation="12" width="240" height="400" shaped>
        <v-card-title class="d-felx justify-center">
          <v-avatar size="150" class="mt-5 whiteB">
            <v-img :src="painterImg"></v-img>
          </v-avatar>
        </v-card-title>
        <h2 class="text-center">梵高</h2>
        <v-card-text
          class="font-black"
        >文森特·威廉·梵高（Vincent Willem van Gogh，1853年3月30日—1890年7月29日），荷兰后印象派画家。代表作有《星月夜》、自画像系列、向日葵系列等。</v-card-text>
      </v-card>
    </v-card>
  </v-container>
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

<style scoped>
.whiteA {
  background-color: rgba(255, 255, 255, 0.7);
}
</style>