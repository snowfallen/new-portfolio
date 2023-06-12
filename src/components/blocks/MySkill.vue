<template>
  <div class="skills">
    <div class="skill" ref="skill">{{ skill }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
type SkillDataMoving = {
    dataMoving: {
      x: number,
      y: number,
      vx: number,
      vy: number
    }
}
export default defineComponent({
  name: "MySkill",
  props: {
    skill: {
      type: String,
      required: true
    }
  },
  data(): SkillDataMoving {
    return {
        dataMoving: {
          x: this.getRandomIntInclusive(0, 50),
          y: this.getRandomIntInclusive(0, 50),
          vx: this.getRandomIntInclusive(-1.5, 1.5),
          vy: this.getRandomIntInclusive(-1.5, 1.5)
        }
      }
  },
  methods: {
    updateBalls() {
      const skill: HTMLDivElement = this.$refs.skill as HTMLDivElement
      const container: HTMLDivElement = skill.parentElement as HTMLDivElement

      const containerWidth: number = container ? container.offsetWidth : 0
      const containerHeight: number = container ? container.offsetHeight : 0

      this.dataMoving.x += this.dataMoving.vx;
      this.dataMoving.y += this.dataMoving.vy;

      if (this.dataMoving.x < 0 || this.dataMoving.x + skill.offsetWidth > containerWidth) {
        this.dataMoving.vx *= -1;
      }
      if (this.dataMoving.y < 0 || this.dataMoving.y + skill.offsetHeight > containerHeight) {
        this.dataMoving.vy *= -1;
      }
      skill.style.left = this.dataMoving.x + 'px';
      skill.style.top = this.dataMoving.y + 'px';
      setTimeout(this.updateBalls, 100);
    },
    getRandomIntInclusive(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  mounted() {
    this.updateBalls()
  },
})
</script>

<style scoped>
.skill {
  z-index: 1;
  position: absolute;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #5833dd;
  color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  transition: 0.1s;
  top: 0;
  left: 0;
}
</style>