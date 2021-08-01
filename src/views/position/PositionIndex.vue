<template>
  <div class="mx-4">
    <h1>ข้อมูลตำแหน่ง</h1>

    <router-link class="btn btn-primary" :to="{ name: 'PositionCreate' }"
      >เพิ่มข้อมูล</router-link
    >

    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="errorMessage" class="alert alert-danger">
      {{ errorMessage }}
    </div>

    <table class="table" v-if="position.length">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อตำแหน่ง</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in position" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.title }}</td>
          <td>
            <router-link
              :to="{ name: 'PositionUpdate', params: { id: item.id } }"
            >
            แก้ไข
            </router-link>
            <a href="#" @click.prevent="onRemove(item.id)">ลบ</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useIndex, useRemove } from "./composable/use-position";

export default defineComponent({
  name: "PositionIndex",
  setup() {
    const { position, errorMessage, isLoading } = useIndex();
    const { onRemove } = useRemove();

    return { position, errorMessage, isLoading, onRemove };
  },
});
</script>

<style scoped></style>
