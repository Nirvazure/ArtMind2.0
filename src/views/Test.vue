<template>
<v-container>
    <v-row>
        <v-list v-if="drawer" two-line>
            <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header" inset>
                    {{ item.header }}
                </v-subheader>

                <v-divider v-else-if="item.divider" :key="index" inset></v-divider>

                <v-list-item v-else :key="item.title" ripple @click="">
                    <v-list-item-avatar>
                        <img :src="item.avatar">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-chip label small>hhh</v-chip>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>

        <v-col col="12">
            <v-card elevation="24" class="mx-auto">
                <v-system-bar lights-out></v-system-bar>
                <v-carousel :continuous="false" :cycle="cycle" :show-arrows="true" hide-delimiter-background delimiter-icon="mdi-minus" height="400">
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%" tile>
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="display-3">{{ slide }} Slide</div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                <v-list two-line>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>John Leider</v-list-item-title>
                            <v-list-item-subtitle>Author</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-switch v-model="cycle" label="Cycle Slides" inset></v-switch>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
                <v-card-actions>
                    <v-btn color="success" block @click.stop="drawer = !drawer">测试</v-btn>
                </v-card-actions>
                <Report v-if="!drawer"></Report>
            </v-card>
        </v-col>
        <v-list v-if="drawer" two-line>
            <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header" inset>
                    {{ item.header }}
                </v-subheader>

                <v-divider v-else-if="item.divider" :key="index" inset></v-divider>

                <v-list-item v-else :key="item.title" ripple @click="">
                    <v-list-item-avatar>
                        <img :src="item.avatar">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-chip label small>hhh</v-chip>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-row>

</v-container>
</template>

<script>
import Report from '../components/Report'
export default {
    components: {
        Report
    },
    data() {
        return {
            drawer: true,
            colors: [
                'green',
                'secondary',
                'yellow darken-4',
                'red lighten-2',
                'orange darken-1',
            ],
            cycle: false,
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
            items: [{
                    header: 'Today',
                },
                {
                    divider: true
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=660',
                    title: 'Meeting @ Noon',
                    subtitle: "<span class='text--primary'>Spike Lee</span> &mdash; I'll be in your neighborhood",
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=821',
                    title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
                    subtitle: "<span class='text--primary'>to Operations support</span> &mdash; Wish I could come.",
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=783',
                    title: 'Yes yes',
                    subtitle: "<span class='text--primary'>Bella</span> &mdash; Do you have Paris recommendations",
                },
                {
                    header: 'Yesterday',
                },
                {
                    divider: true
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=1006',
                    title: 'Dinner tonight?',
                    subtitle: "<span class='text--primary'>LaToya</span> &mdash; Do you want to hang out?",
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=146',
                    title: 'So long',
                    subtitle: "<span class='text--primary'>Nancy</span> &mdash; Do you see what time it is?",
                },
                {
                    header: 'Last Week',
                },
                {
                    divider: true
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=1008',
                    title: 'Breakfast?',
                    subtitle: "<span class='text--primary'>LaToya</span> &mdash; Do you want to hang out?",
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=839',
                    title: 'Winter Porridge <span class="grey--text text--lighten-1"></span>',
                    subtitle: "<span class='text--primary'>cc: Daniel</span> &mdash; Tell me more...",
                },
                {
                    avatar: 'https://picsum.photos/250/300?image=145',
                    title: 'Oui oui',
                    subtitle: "<span class='text--primary'>Nancy</span> &mdash; Do you see what time it is?",
                },
            ],
        }
    },
}
</script>

<style scoped>
#hh {
    float: left;
    height: "400px";
}
</style>
