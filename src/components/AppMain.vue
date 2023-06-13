<template>
  <div class="wrapper">
    <MyWelcome/>
    <MySkills/>
    <MyJobHistories/>
  </div>
</template>

<script lang="ts">
import MyWelcome from "@/components/blocks/MyWelcome.vue";
import MySkills from "@/components/blocks/MySkills.vue";
import MyJobHistories from "@/components/blocks/MyJobHistories.vue";
import {defineComponent} from 'vue';

export default defineComponent({
  name: "AppMain",
  components: {
    MySkills,
    MyWelcome,
    MyJobHistories
  }
})
</script>

<style scoped>
</style>