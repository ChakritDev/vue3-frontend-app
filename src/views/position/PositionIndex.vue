<template>
  <div>Hello {{ fullname }} </div>
  <button @click="hello">Click Me</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PositionIndex",
  setup() {
    
    const fullname = ref("Jonh");

    const hello = () => {
      alert("hello"); 
      fullname.value = "Marry"; 
    };

    return { fullname ,hello};
  },
});
</script>

<style scoped></style>
