<template>
<v-container class="grey lighten-5">
    <v-row no-gutters>
        <v-col cols="12" sm="4">
            <v-card>
                <v-card-title>
                    <v-icon left>mdi-share</v-icon>
                    <span class="title font-weight-bold">类别分析</span>
                </v-card-title>
                <v-card-text>
                    <v-layout>
                        <v-flex>
                            <v-progress-circular :size="70" :width="15" :value="70" color="teal">抽象</v-progress-circular>
                        </v-flex>
                        <v-flex>
                            <v-progress-circular :size="70" :width="15" :value="20" color="primary">意象</v-progress-circular>
                        </v-flex>
                        <v-flex>
                            <v-progress-circular :size="70" :width="15" :value="10" color="red">具象</v-progress-circular>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                <v-card-action></v-card-action>
            </v-card>
        </v-col>
        <v-col cols="12" sm="4">
            <v-card>
                <v-card-title>
                    <v-icon left="">mdi-anchor</v-icon>
                    <span class="title font-weight-bold">时代分析</span>
                </v-card-title>
                <v-card-text>
                    <v-chip label color="primary" text-color="white">抽象派</v-chip>
                    <v-chip label color="secondary" text-color="white">印象派</v-chip>
                    <v-chip label color="red" text-color="white">具象派</v-chip>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" sm="4">
            <v-card>
                <v-card-title>
                    <v-icon left>mdi-share</v-icon>
                    <span class="title font-weight-bold">画家推测</span>
                </v-card-title>
                <v-card-text>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                </v-card-text>
                <v-card-action></v-card-action>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
