<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-card width="60%">
        <picture-input
          ref="pictureInput"
          accept="image/jpeg, image/png"
          size="10"
          hideChangeButton="true"
          :custom-strings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'Drag a 😺 GIF or GTFO',
          }"
          @change="onChange"
        ></picture-input>
        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          bottom
          color="deep-purple accent-4"
        ></v-progress-linear>
        <v-toolbar dense>
          <v-overflow-btn
            :items="dropdown_font"
            label="Select Model"
            hide-details
            class="pa-0"
          ></v-overflow-btn>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-divider vertical></v-divider>
            <v-overflow-btn
              :items="dropdown_edit"
              editable
              label="Select size"
              hide-details
              class="pa-0"
              overflow
            ></v-overflow-btn>
            <v-divider vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="toggle_multiple"
              color="primary"
              dense
              group
              multiple
            >
              <v-btn :value="3" text>
                <v-icon>mdi-format-underline</v-icon>
              </v-btn>
              <v-btn :value="4" text>
                <v-icon>mdi-format-color-fill</v-icon>
              </v-btn>
            </v-btn-toggle>
            <v-spacer></v-spacer>
            <v-btn color="teal" dark @click="startTest">{{ btnText }}</v-btn>
          </template>
        </v-toolbar>
        <v-divider></v-divider>

        <v-row v-if="response" height="200">
          <v-col cols="12" sm="4">
            <EraAnalyse></EraAnalyse>
          </v-col>
          <v-col cols="12" sm="4">
            <StyleAnalyse></StyleAnalyse>
          </v-col>
          <v-col cols="12" sm="4">
            <PainterAnalyse></PainterAnalyse>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import StyleAnalyse from "@/components/Report/StyleAnalyse.vue";
import EraAnalyse from "@/components/Report/EraAnalyse";
import PainterAnalyse from "@/components/Report/PainterAnalyse";
import PictureInput from "vue-picture-input";

export default {
  components: {
    PictureInput,
    StyleAnalyse,
    EraAnalyse,
    PainterAnalyse,
  },
  data: () => ({
    dropdown_font: [{ text: "西方油画" }, { text: "山水画" }],
    dropdown_edit: [
      { text: "100%" },
      { text: "75%" },
      { text: "50%" },
      { text: "25%" },
      { text: "0%" },
    ],
    toggle_exclusive: 2,
    toggle_multiple: [1, 2, 3],

    img: require("@/assets/avatar.jpg"),
    loading: false,
    btnText: "开启分析",
    response: false,
  }),
  methods: {
    onChange(image) {
      console.log("New picture selected!");
      if (image) {
        console.log("Picture loaded.");
        this.image = image;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },
    startTest() {
      this.btnText = "正在分析";
      this.loading = true;
      this.response = false;
    },
  },
  watch: {
    loading(val) {
      if (!val) return;
      setTimeout(() => {
        (this.loading = false),
          (this.btnText = "开启探索"),
          (this.response = true);
      }, 3000);
    },
  },
};
</script>
