<template>
  <v-app>
    <v-navigation-drawer v-model="leftDrawer" app clipped mini-variant>
      <v-img @click="$router.push({ path: `/` })" class="mx-3 my-3" :src="avatar"></v-img>
      <v-list>
        <v-list-item-group v-model="item" color="teal">
          <v-list-item v-for="(item, i) in items" :key="i" @click="routerChange(item.text)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold" v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content dark>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    avatar: require("@/assets/avatar.jpg"),
    leftDrawer: true,
    item: 1,
    items: [
      {
        text: "analyse",
        icon: "mdi-gamepad-square"
      },
      {
        text: "",
        icon: "mdi-soccer"
      },
      {
        text: "test",
        icon: "mdi-palette"
      },
      {
        text: "painter",
        icon: "mdi-account"
      },
      {
        text: "mentor",
        icon: "mdi-account"
      },
      {
        text: "platform",
        icon: "mdi-account"
      }
    ]
  }),
  methods: {
    routerChange(routeName) {
      //为啥是个这个符号
      this.$router.push({
        path: `/${routeName}`
      });
    }
  }
};
</script>
