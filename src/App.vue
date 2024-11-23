<template>
  <div class="layout">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
.layout {
  display: flex;
  height: 100vh;
  background-color: #222;
}

.content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #505050;
  border-radius: 0 8px 8px 0;
  color: #fff;
}
</style>
