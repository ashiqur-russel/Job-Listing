<script setup>
import { ref } from "vue";

const name = ref("Ashiqur Russel");
const status = ref("active");
const tasks = ref(["Task One", "Task Two", "Task three"]);
const newTask = ref("");

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
      <span>{{ task }} </span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>

  <button @click="toggleStatus">Change Status</button>
</template>
