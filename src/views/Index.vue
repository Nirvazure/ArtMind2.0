<template>
<v-app>
    <v-app-bar dark>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-content>
        <Jumbotron></Jumbotron>
    </v-content>

    <v-footer dark padless>
        <v-card class="flex" flat tile>
            <v-card-title class="teal">
                <strong class="subheading">Get connected with us on social networks!</strong>

                <v-spacer></v-spacer>

                <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark>
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</v-app>
</template>

<script>
import Jumbotron from '../components/Jumbotron'

export default {
    components: {
        Jumbotron,
    },
    data: () => ({
        icons: [
            'bluetooth',
            'email',
            'wifi',
            'timer',
        ],
    })
}
</script>
