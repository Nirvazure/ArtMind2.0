<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="9">
        <v-data-table :headers="headers" :items="items" @click:row="doSth">
          <template v-slot:item.time="{item}">
            <span>{{item.time|getEra}}</span>
          </template>
          <template v-slot:item.style="{item}">
            <v-chip dark label small :color="item.style|getColorById">{{item.style|getStyleById}}</v-chip>
          </template>
        </v-data-table>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <v-card>
          <v-card-title>
            <p>{{tar_painter.id}}</p>
            <v-img :src="tar_painter.img"></v-img>
          </v-card-title>
          <p class="text-center title font-weight-black">{{tar_painter.name}}</p>
          <v-card-actions>
            <v-btn color="primary" block>关注</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import painters from "@/api/painters";
import axios from "axios";
export default {
  data: () => ({
    tar_painter: {
      id: "",
      name: "",
      style: "",
      era: "",
      img: ""
    },
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
        value: "img"
      }
    ],
    items: painters
    // img: require("@/assets/painters/010103.jpg")
  }),
  created() {
    axios.get("./painter.json").then(res => {
      this.items = res.data;
    });
  },
  methods: {
    doSth(event) {
      console.log(event);
      this.tar_painter.name = event.name;
      this.tar_painter.id = event.id;
      this.tar_painter.img = event.img;
      console.log(this.getImgById(this.tar_painter.id));
    },
    getImgById(id) {
      let tar_path = "@/assets/painters/" + id + ".jpg";
      // let myImg = require(tar_path)
      return tar_path;
    }
  },
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
