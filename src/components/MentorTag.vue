<template>
  <div>
    <v-card color="teal" height="180" dark>
      <v-card-title class="font-weight-bold display-1">
        Tasks in Week
        <v-spacer></v-spacer>
        <v-btn light>
          <v-icon>mdi-plus</v-icon>发布作业
        </v-btn>
      </v-card-title>
      <v-card-subtitle>{{ new Date()}}</v-card-subtitle>

      <v-container>
        <v-row>
          <v-col v-for="(task,i) in tasks" :key="i">
            <v-card light>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{task.name}}临摹</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip label dark small color="teal">{{task.style}}</v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-progress-circular
                    :value="task.num/20*100"
                    width="5"
                    size="60"
                    color="teal"
                  >{{task.num}}/20</v-progress-circular>
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-card class="mt-10">
      <v-tabs>
        <v-tab>作业管理</v-tab>
        <v-tab>学生管理</v-tab>
        <v-tab>Item Three</v-tab>
      </v-tabs>
      <v-container>
        <v-calendar></v-calendar>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    tasks: [
      { name: "格尔尼卡", style: "立体派", num: 3 },
      { name: "宫娥", style: "古典主义", num: 17 },
      { name: "向日葵", style: "印象派", num: 10 }
    ]
  })
};
</script>

<style></style>
