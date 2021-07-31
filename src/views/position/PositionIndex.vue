<template>
  <div class="mx-4">
    <h1>ข้อมูลตำแหน่ง</h1>

    <table class="table" v-if="position.length">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อตำแหน่ง</th>
          <th scope="col">ACtion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in position" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.title }}</td>
          <td>Edit | Delete</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useIndex } from "./composable/use-position";

export default defineComponent({
  name: "PositionIndex",
  setup() {
    const { position } = useIndex();

    return { position };
  },
});
</script>

<style scoped></style>
