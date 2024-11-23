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
import axios from 'axios';
import Dropdown from '../components/Dropdown.vue';

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
      const response = await axios.get(
          'https://new.api.nexusautotransport.com/api/vehicles/years'
      );
      this.years = response.data.data;
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
        const response = await axios.get(
            `https://new.api.nexusautotransport.com/api/vehicles/makes?year=${year}`
        );
        this.makes = response.data.data.map(argument => argument.name);
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    },
    async handleMakeSelect(make) {
      this.selectedMake = make;
      try {
        const response = await axios.get(
            `https://new.api.nexusautotransport.com/api/vehicles/models?year=${this.selectedYear}&make=${make}`
        );
        this.models = response.data.data.map(argument => argument.model);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    },
  },
};
</script>