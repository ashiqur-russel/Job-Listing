<script setup>
import { ref } from "vue";

const name = ref("Ashiqur Russel");
const status = ref("active");
const tasks = ref(["Task One", "Task Two", "Task three"]);

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};
</script>

<template>
  <h1>Name: {{ name }}</h1>
  <p v-if="status === 'active'">Status: Employee is Active.</p>
  <p v-else-if="status == 'pending'">Status: Employee is Pending.</p>
  <p v-else>Status: Employee is Inactive.</p>

  <h3>Tasks:</h3>
  <ul v-for="task in tasks" :key="task">
    <li>{{ task }}</li>
  </ul>

  <button @click="toggleStatus">Change Status</button>
</template>
