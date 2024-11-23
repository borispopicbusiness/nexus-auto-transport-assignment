<template>
  <div>
    <label>{{ label }}</label>
    <select :disabled="disabled" @change="onChange">
      <option value="" disabled selected>Select</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(event) {
      this.$emit('select', event.target.value);
    },
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
select {
  display: block;
  margin-bottom: 15px;
  padding: 5px;
  width: 200px;
}

select:disabled {
  background-color: #f0f0f0;
}
</style>
