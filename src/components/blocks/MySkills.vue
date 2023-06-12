<template>
  <div id="skills">
    <h1>My Skills</h1>
    <div class="container" ref="container">
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
      skills: ['PHP', 'JS', 'Laravel', 'Vue', 'SQL', 'NoSQL', 'Git', 'Jira', 'Docker', 'Symfony', 'React', 'TS', 'Solr', 'AWS', 'HTML', 'CSS', 'SCSS', 'TDD'],
      // skills: ['PHP', 'JS'],
    }
  },
})
</script>

<style scoped lang="scss">
#skills {
  width: 100vw;
  height: 100%;
  h1 {
    text-align: center;
  }
  .container {
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .skills {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    width: 120px;
    height: 120px;
  }
}
</style>
