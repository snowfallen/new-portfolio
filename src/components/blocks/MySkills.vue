<template>
  <div id="skills">
    <div class="ball" ref="ball1Ref" :style="{ top: ball1Top + 'px', left: ball1Left + 'px' }">PHP</div>
    <div class="ball" ref="ball2Ref" :style="{ top: ball2Top + 'px', left: ball2Left + 'px' }">Laravel</div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
  name: "MySkills",
})
</script>

<style scoped lang="scss">
#skills {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid black;

  .ball {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
