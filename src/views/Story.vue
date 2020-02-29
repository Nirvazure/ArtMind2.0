<template>
  <v-container>
    <v-list>
      <v-list-item v-for="(p, i) in painters" :key="i"
        ><v-list-item-title>{{ p.title }}</v-list-item-title></v-list-item
      >
    </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    painters: [
      { name: "", title: "逃犯" },
      { name: "", title: "光影大师" },
      { name: "", title: "奇才" },
      { name: "", title: "彩虹" },
      { name: "", title: "睡莲" },
      { name: "", title: "幸福画家" },
      { name: "", title: "疯子" },
      { name: "", title: "舞女控" },
      { name: "", title: "苹果男" }
    ]
  })
};
</script>

<style></style>
