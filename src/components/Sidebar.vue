<template>
  <div class="sidebar" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="menu-item" @click="navigateTo('/dropdown')">
      <img
          class="icon"
          src="https://img.icons8.com/?size=100&id=40902&format=png&color=000000"
          alt="Dropdown icon"
      />
      <span>Dropdown Page</span>
    </div>

    <div class="menu-item" @click="navigateTo('/editor')">
      <img
          class="icon"
          src="https://img.icons8.com/?size=100&id=8174&format=png&color=000000"
          alt="Table icon"
      />
      <span>Model Page</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false, // Track if the sidebar is hovered
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
  width: 200px; /* Default expanded width */
  background-color: #333; /* Dark background */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: width 0.3s ease;
  min-width: 200px; /* Ensure the sidebar does not shrink too much */
  border-radius: 8px 0 0 8px; /* Rounded corners for the sidebar */
}

.sidebar:hover {
  width: 200px; /* Expanded width remains the same */
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
}

span {
  display: inline-block;
  color: #fff; /* White text for the hovered item */
}

.sidebar:hover .icon {
  opacity: 1; /* Icons become visible on hover */
}
</style>
