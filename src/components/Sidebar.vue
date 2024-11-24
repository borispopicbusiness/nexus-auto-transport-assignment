<template>
  <div class="sidebar" :class="{ expanded: isHovered }" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="menu-item" @click="navigateTo('/dropdown')">
      <img
          class="icon"
          src="https://img.icons8.com/?size=100&id=SPPJjrSE810g&format=png&color=000000"
          alt="Dropdown icon"
      />
      <span class="menu-text">Dropdown Page</span>
    </div>

    <div class="menu-item" @click="navigateTo('/editor')">
      <img
          class="icon"
          src="https://img.icons8.com/?size=100&id=62186&format=png&color=000000"
          alt="Table icon"
      />
      <span class="menu-text">Model Page</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false, // Track hover state
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route); // Navigate to the clicked route
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 60px; /* Collapsed width */
  background-color: #333; /* Dark background */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: width 0.3s ease;
  min-width: 60px; /* Minimum width when collapsed */
  border-radius: 8px 0 0 8px; /* Rounded corners for the sidebar */
  overflow: hidden; /* Hide text when collapsed */
}

.sidebar.expanded {
  width: 200px; /* Expanded width */
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px; /* Rounded corners for menu items */
  transition: background-color 0.2s, padding 0.2s;
  color: #ccc; /* Light color for text */
}

.menu-item:hover {
  background-color: #444; /* Darker hover effect */
  padding-left: 15px; /* Slight padding increase on hover */
}

.icon {
  width: 30px;
  height: 30px;
  transition: opacity 0.2s ease;
}

.menu-text {
  white-space: nowrap; /* Prevent text wrapping */
  opacity: 0;
  transition: opacity 0.2s ease;
}

.sidebar.expanded .menu-text {
  opacity: 1; /* Show text when expanded */
}
</style>