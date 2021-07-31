<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">เมนูหลัก</div>

          <router-link class="nav-link" :to="{ name: 'Home' }">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            หน้าหลัก
          </router-link>

          <router-link class="nav-link" :to="{ name: 'About' }">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            เกี่ยวกับเรา
          </router-link>

          <router-link class="nav-link" :to="{ name: 'PositionIndex' }">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            ข้อมูลตำแหน่ง
          </router-link>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideNav",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>