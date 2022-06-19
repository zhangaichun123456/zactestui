<template>
  <div class="wrap">
    <button class="red" @click="clickMe">{{ text }}</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "aButton",
};
</script>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from "vue";

const emits = defineEmits(["ClickMe"]);

interface Props {
  text?: string;
}
const props = withDefaults(defineProps<Props>(), {
  text: "提交",
});

const clickMe = (e: any) => {
  emits("ClickMe", "sdfsfsf");
};
</script>
<style scoped lang="scss">
.wrap {
  background: blue;
  .red {
    color: red;
  }
}
</style>
