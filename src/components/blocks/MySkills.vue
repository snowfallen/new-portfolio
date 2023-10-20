<template>
  <div id="skills">
    <h1>My Skills</h1>
    <MySkill/>
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
      skills: ['PHP', 'JS', 'Laravel', 'Vue', 'SQL', 'NoSQL', 'Git', 'Jira', 'Docker', 'Symfony', 'React', 'TS', 'Solr', 'AWS', 'HTML', 'CSS', 'SCSS', 'TDD', 'PHPUnit', 'Behat', 'Integration Testing'],
    }
  },
})
</script>

<style scoped lang="scss">
#skills {
  width: 100vw;
  height: 100%;
  padding-top: 70px;

  h1 {
    text-align: center;
  }
}
</style>
