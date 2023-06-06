<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
</script>
<script lang="ts">
import { defineComponent } from 'vue';
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/AppMain.vue";

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    AppMain
  }
})
</script>

<style lang="scss">
</style>
