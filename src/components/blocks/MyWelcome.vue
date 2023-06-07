<template>
<div class="container" id="welcome">
  <div class="container-welcome d-flex flex-column justify-content-center">
    <div class="img-container">
      <img src="../../../public/photo.jpg" alt="img">
    </div>
    <h1>Welcome</h1>
    <h2>{{welcomeMessage.join("")}}</h2>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
interface WelcomeMessage {
  welcomeMessage: string[]
}
export default defineComponent({
  name: "MyWelcome",
  data(): WelcomeMessage {
    return {
      welcomeMessage: []
    };
  },
  methods: {
    createWelcomeMessage(): void {
      let message = "My name Oleksander, I'm a Full-Stack Developer";
      let chars = message.split('');
      let index = 0;
      let intervalId = setInterval(() => {
        if (index < chars.length) {
          this.welcomeMessage.push(chars[index]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 35);
    }
  },
  mounted() {
    this.createWelcomeMessage()
  }
})
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  .container-welcome {
    width: calc(100%);
    height: calc(100% - 70px);
    h1, h2 {
      margin: 10px;
      text-align: center;
    }
    .img-container {
      margin: 0 auto;
      width: 40%;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>