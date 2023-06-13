<template>
  <div class="item">
    <h2 class="text-center">
      {{experience['title']}}
    </h2>
    <h3 class="p-3">
      {{experience['baseInfos']}}
    </h3>
    <h5 class="pb-2">{{experience['experienceSummary']}}</h5>
    <ul class="px-3">
      <li class="py-2" v-for="experienceDescription in experience['experienceDescription']" :key="experienceDescription">
        {{experienceDescription[0]}}
      </li>
    </ul>
    <h4>Skills:</h4>
    <p class="py-2 px-3">
      {{experience['skills']}}
    </p>
  </div>

</template>

<script lang="ts">
export default {
  name: "MyJobHistory",
  props: {
    experience: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>