<template>
  <v-card>
    <v-card-title>
      Today
      <v-spacer></v-spacer>
      <v-progress-circular value="80" size="50" width="5" color="teal"
        >70</v-progress-circular
      >
    </v-card-title>
    <v-card-subtitle>2020-05-07</v-card-subtitle>

    <v-list light>
      <v-list-item class="ma-2 teal" dark v-for="(task, i) in tasks" :key="i">
        <v-list-item-avatar>
          <v-img :src="task.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>提交了作业</v-list-item-title>
          <v-list-item-subtitle>2020-05-06</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-wechat</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import tasks from "@/api/tasks";
export default {
  data: () => ({
    tasks: tasks,
  }),
};
</script>

<style></style>
