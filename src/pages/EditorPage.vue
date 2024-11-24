<template>
  <div>
    <table class="styled-table">

      <thead>
      <tr>
        <th>ID</th>
        <th>Model</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td>{{ row.id }}</td>
        <td>{{ row.model }}</td>
      </tr>
      </tbody>
    </table>

    <div class="pagination-controls">
      <button @click="fetchPreviousPage" :disabled="page === 1">Back</button>
      <label>Page: {{ page }}</label>
      <button @click="fetchNextPage">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getModelsByPage } from '../services/api.js';

export default {
  setup() {
    const rows = ref([]);
    const page = ref(1);

    const fetchRows = async () => {
      try {
        const rawData = await getModelsByPage(page.value);
        rows.value = rawData.data.map((element, index) => ({
          id: index + 1,
          model: element.model,
        }));
      } catch (error) {
        console.error('Failed to fetch models:', error);
      }
    };

    const fetchNextPage = () => {
      page.value += 1;
      fetchRows();
    };

    const fetchPreviousPage = () => {
      if (page.value > 1) {
        page.value -= 1;
        fetchRows();
      }
    };

    onMounted(fetchRows);

    return {
      rows,
      page,
      fetchNextPage,
      fetchPreviousPage,
    };
  },
};
</script>

<style scoped>
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
  color: black;
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border: 1px solid #dddddd;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:nth-of-type(odd) {
  background-color: #ffffff;
}

.styled-table tbody tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

/* Pagination Controls */
.pagination-controls {
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.pagination-controls button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #009879;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination-controls button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.pagination-controls button:hover:enabled {
  background-color: #007a63;
}

/* Responsive Design */
@media (max-width: 768px) {
  .styled-table {
    font-size: 14px;
  }

  .styled-table th,
  .styled-table td {
    padding: 10px 12px;
  }

  .pagination-controls button {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
