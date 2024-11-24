<template>
  <div>
    <Dropdown
        :options="years"
        label="Select Year"
        @select="handleYearSelect"
    />
    <Dropdown
        :options="makes"
        label="Select Make"
        :disabled="!selectedYear"
        @select="handleMakeSelect"
    />
    <Dropdown
        :options="models"
        label="Select Model"
        :disabled="!selectedMake"
    />
  </div>
</template>

<script>
import Dropdown from '../components/Dropdown.vue';
import { getYears, getMakesByYear, getModelsByYearAndMake } from '@/services/api.js';

export default {
  components: { Dropdown },
  data() {
    return {
      years: [],
      makes: [],
      models: [],
      selectedYear: null,
      selectedMake: null,
    };
  },
  async mounted() {
    try {
      this.years = await getYears();
    } catch (error) {
      console.error('Error fetching years:', error);
    }
  },
  methods: {
    async handleYearSelect(year) {
      this.selectedYear = year;
      this.selectedMake = null;
      this.models = [];
      try {
        this.makes = await getMakesByYear(year);
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    },
    async handleMakeSelect(make) {
      this.selectedMake = make;
      try {
        this.models = await getModelsByYearAndMake(this.selectedYear, make);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    },
  },
};
</script>
