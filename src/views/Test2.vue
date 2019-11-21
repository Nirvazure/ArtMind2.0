<template>
<div>
    <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group v-model="model" class="pa-4" center-active=true>
            <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active, toggle }">
                <v-card :color="active ? 'primary' : 'grey lighten-1'" class="ma-4" height="200" width="100" @click="toggle">
                    <v-row class="fill-height" align="center" justify="center">
                        <v-scale-transition>
                            <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                        </v-scale-transition>
                    </v-row>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
    <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group v-model="model" class="pa-4" center-active=true multiple>
            <v-slide-item v-for="(n,i) in images" :key="i"  v-slot:default="{ active, toggle }">
                <v-card :color="active ? 'primary' : 'grey lighten-1'" class="ma-4" height="100" width="100" @click="toggle">
                    <v-row class="fill-height" align="center" justify="center">
                        <v-scale-transition>
                            <v-img :src="n" width="200" v-if="active"></v-img>
                            <v-icon color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                        </v-scale-transition>
                    </v-row>

                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</div>
</template>

<script>
export default {
    data: () => ({
        images: [
            require("../assets/0.jpg"),
            require("../assets/1.jpg"),
            require("../assets/2.jpg"),
            require("../assets/3.jpg"),
            require("../assets/4.jpg"),
            require("../assets/5.jpg"),
        ]
    }),
}
</script>
