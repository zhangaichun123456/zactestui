<!--
 * @Author: 张爱春 zhangaichun@nti56.com
 * @Date: 2022-06-20 09:37:58
 * @LastEditors: 张爱春 zhangaichun@nti56.com
 * @LastEditTime: 2022-06-20 09:41:39
 * @FilePath: \testcom\packages\npm1\lib\Button\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
  text: "提交2",
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
