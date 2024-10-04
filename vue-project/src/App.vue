<script setup>
import { ref, onMounted } from "vue";

const name = ref("Ashiqur Russel");
const status = ref("active");
const tasks = ref([]);
const newTask = ref("");

const marginRight = ref(10);

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log("Can't fetch data:", error);
  }
});

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (id) => {
  tasks.value.splice(id, 1);
};
</script>

<template>
  <h1>Name: {{ name }}</h1>
  <p v-if="status === 'active'">Status: Employee is Active.</p>
  <p v-else-if="status == 'pending'">Status: Employee is Pending.</p>
  <p v-else>Status: Employee is Inactive.</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) of tasks" :key="task">
      <button @click="deleteTask(index)">X</button>
      <span :style="{ 'margin-left': marginRight + 'px' }">{{ task }} </span>
    </li>
  </ul>

  <button @click="toggleStatus">Change Status</button>
</template>
