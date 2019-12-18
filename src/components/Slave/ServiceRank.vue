<template>
<v-container>
    <v-card>
        <v-card-title>custom Rank
            <v-spacer></v-spacer>
        </v-card-title>
        <v-rating v-model="rating" length="5" readonly>
            <template v-slot:item="props">
                <v-icon large :color="props.isFilled ? 'purple darken-4' : ''" v-text="`mdi-numeric-${props.index}-box`"></v-icon>
            </template>
        </v-rating>
        <v-rating v-model="rating" length="5" readonly>
            <template v-slot:item="props">
                <v-icon large :color="props.isFilled ? 'red darken-4' : ''" v-text="`mdi-numeric-${props.index}-box`"></v-icon>
            </template>
        </v-rating>
        <v-rating v-model="rating" length="5" readonly>
            <template v-slot:item="props">
                <v-icon large :color="props.isFilled ? 'green darken-4' : ''" v-text="`mdi-numeric-${props.index}-box`"></v-icon>
            </template>
        </v-rating>
        <v-card-actions>
            <v-rating v-model="rating" length="5" empty-icon='mdi-heart-outline' full-icon='mdi-heart' half-icon='mdi-heart-half-full' half-increments hover dense='false' color='red lighten-3' background-color="'grey lighten-2'"></v-rating>
            <v-spacer></v-spacer>
            <v-progress-circular size='70' width='10' value='89'>优秀</v-progress-circular>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<script>
export default {
    data: () => ({
        rating: 3
    })
}
</script>

<style>

</style>
