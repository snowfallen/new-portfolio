<template>
  <div id="skills">
    <h1>My Skills</h1>
    <div class="container">
      <MySkill
          v-for="skill in skills"
          :key="skill"
          :skill="skill"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MySkill from "@/components/blocks/MySkill.vue";

type Skills = {
  skills: string[]
}
export default defineComponent({
  name: "MySkills",
  components: {MySkill},
  data(): Skills {
    return {
      // skills: ['PHP', 'JS', 'Laravel', 'Vue', 'SQL', 'NoSQL', 'Git', 'Jira', 'Docker', 'Symfony', 'React', 'TS', 'ApacheSolr', 'AWS', 'HTML', 'CSS', 'SCSS'],
      skills: ['PHP', 'JS'],
    }
  },
})
</script>

<style scoped lang="scss">
#skills {
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  h1 {
    text-align: center;
  }
  .container {
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
