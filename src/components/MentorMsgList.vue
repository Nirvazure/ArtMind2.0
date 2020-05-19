<template>
  <v-card>
    <v-card-title>
      Today
      <v-spacer></v-spacer>
      <v-progress-circular value="80" size="50" width="5" color="teal">70</v-progress-circular>
    </v-card-title>
    <v-card-subtitle>2020-05-07</v-card-subtitle>
    <v-timeline dense>
      <v-timeline-item v-for="(task, i) in tasks" :key="i">
        <template v-slot:icon>
          <v-avatar>
            <v-img :src="task.avatar"></v-img>
          </v-avatar>
        </template>
        <v-list-item class="mx-2">
          <v-list-item-content>
            <v-list-item-title>{{task.name}}</v-list-item-title>
            <v-list-item-subtitle>提交了作业</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
import tasks from "@/api/tasks";
export default {
  data: () => ({
    tasks: tasks
  })
};
</script>

<style></style>
