<template>
  <v-container>
    <v-row>
      <v-col>
        <v-mentor-tag></v-mentor-tag>
      </v-col>
      <v-col cols="12" md="3">
        <v-mentor-msg-list></v-mentor-msg-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MentorTag from "@/components/MentorTag";
import MentorMsgList from "@/components/MentorMsgList";
export default {
  components: {
    "v-mentor-tag": MentorTag,
    "v-mentor-msg-list": MentorMsgList
  }
};
</script>

<style></style>
