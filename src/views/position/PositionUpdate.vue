<template>
  <div class="mt-4 mx-4 col-md-6">
    <h1>แก้ไขข้อมูล {{ position.title }}</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">ชื่อตำแหน่ง</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="position.title"
        />
        {{ position.title }}
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUpdate } from "./composable/use-position";

export default defineComponent({
  name: "PositionUpdate",
  setup() {
    const { position, onSubmit } = useUpdate();
    return { position, onSubmit };
  },
});
</script>

<style scoped></style>
