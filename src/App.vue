<script setup lang="ts">
import { aButton } from "zactestui";
const click = (e: any) => {
  console.log(123, e);
};
</script>

<template>
  <a-button text="提交1111" @ClickMe="click"></a-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
