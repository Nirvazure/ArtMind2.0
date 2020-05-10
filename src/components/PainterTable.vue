<template>
  <v-container>
    <v-data-table :headers="headers" :items="items">
      <template v-slot:item.time="{item}">
        <span>{{item.time|getEra}}</span>
      </template>

      <template v-slot:item.style="{item}">
        <v-chip dark label small :color="item.style|getColorById"></v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import painters from "@/api/painters";
import axios from "axios";
export default {
  data: () => ({
    headers: [
      {
        text: "ID",
        value: "id"
      },
      {
        text: "Paint",
        value: "name"
      },
      {
        text: "Style",
        value: "style"
      },
      {
        text: "Time",
        value: "time"
      },
      {
        text: "Avatar",
        value: "avatar"
      }
    ],
    items: painters
  }),
  created() {
    axios.get("./painter.json").then(res => {
      this.items = res.data;
    });
  },
  methods: {},
  filters: {
    getStyleById(id) {
      var styleItem = {
        1: "文艺复兴",
        2: "巴洛克",
        3: "浪漫主义",
        4: "现实主义",
        5: "印象派",
        6: "后印象派",
        7: "野兽派",
        8: "象征主义",
        9: "抽象主义",
        10: "立体主义",
        11: "超现实主义",
        12: "达达主义",
        13: "波普艺术"
      };
      return styleItem[id];
    },
    getEra(id) {
      let Eras = {
        1: "文艺复兴",
        2: "19世纪",
        3: "现代艺术"
      };
      return Eras[id];
    },
    getColorById(id) {
      var colorItem = {
        1: "green",
        2: "orange",
        3: "purple",
        4: "blue",
        5: "red",
        6: "yellow",
        7: "pink",
        8: "grey",
        9: "indigo",
        10: "deep-blue",
        11: "teal",
        12: "cyan",
        13: "lime"
      };
      return colorItem[id];
    }
  }
};
</script>

<style>
</style>
