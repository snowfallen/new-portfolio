<template>
    <div class="skill" ref="skill">{{ skill }}</div>
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
          vx: this.getRandomIntInclusive(-3, 3),
          vy: this.getRandomIntInclusive(-3, 3)
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
      // setTimeout(this.updateBalls, 100);
    },
    checkCollision(skill: HTMLDivElement, dataMoving: { x: number; y: number; vx: number; vy: number }, skill2: HTMLDivElement, dataMoving2: { x: number; y: number; vx: number; vy: number }) {
      // const dx = dataMoving2.dataMoving.x - dataMoving.dataMoving.x;
      // const dy = dataMoving2.dataMoving.y - dataMoving.dataMoving.y;
      // const distance = Math.sqrt(dx * dx + dy * dy);
      //
      // if (distance < skill.offsetWidth / 2 + skill2.offsetWidth / 2) {
      //   const normalX = dx / distance;
      //   const normalY = dy / distance;
      //
      //   const midpointX = (dataMoving.dataMoving.x + dataMoving2.dataMoving.x) / 2;
      //   const midpointY = (dataMoving.dataMoving.y + dataMoving2.dataMoving.y) / 2;
      //
      //   const reflectX1 = dataMoving.dataMoving.vx - 2 * (dataMoving.dataMoving.vx * normalX + dataMoving.dataMoving.vy * normalY) * normalX;
      //   const reflectY1 = dataMoving.dataMoving.vy - 2 * (dataMoving.dataMoving.vx * normalX + dataMoving.dataMoving.vy * normalY) * normalY;
      //   const reflectX2 = dataMoving2.dataMoving.vx - 2 * (dataMoving2.dataMoving.vx * normalX + dataMoving2.dataMoving.vy * normalY) * normalX;
      //   const reflectY2 = dataMoving2.dataMoving.vy - 2 * (dataMoving2.dataMoving.vx * normalX + dataMoving2.dataMoving.vy * normalY) * normalY;
      //
      //   dataMoving.dataMoving.vx = reflectX1;
      //   dataMoving.dataMoving.vy = reflectY1;
      //   dataMoving2.dataMoving.vx = reflectX2;
      //   dataMoving2.dataMoving.vy = reflectY2;
      //
      //   dataMoving.dataMoving.x = midpointX - skill.offsetWidth / 2 * normalX;
      //   dataMoving.dataMoving.y = midpointY - skill.offsetHeight / 2 * normalY;
      //   dataMoving2.dataMoving.x = midpointX + skill2.offsetWidth / 2 * normalX;
      //   dataMoving2.dataMoving.y = midpointY + skill2.offsetHeight / 2 * normalY;
      // }
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
  top: 0;
  left: 0;
}
</style>