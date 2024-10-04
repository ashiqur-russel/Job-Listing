<script>
export default {
  data() {
    return {
      name: "Ashiqur Russel",
      profession: "Full Stack Developer",
      company: "bidi Bilding Digital GmbH",
      status: "inactive",
      tasks: ["Task One", "Task Two", "Task three"],
      link: "https://www.google.com",
    };
  },

  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>Name: {{ name }}</h1>
  <p>Company: {{ company }}</p>
  <p>Role: {{ profession }}</p>
  <p v-if="status === 'active'">Status: Employee is Active.</p>
  <p v-else-if="status == 'pending'">Status: Employee is Pending.</p>
  <p v-else>Status: Employee is Inactive.</p>
  <a :href="link">{{ link }}</a>

  <h3>Tasks:</h3>
  <ul v-for="task in tasks" :key="task">
    <li>{{ task }}</li>
  </ul>

  <button @click="toggleStatus">Change Status</button>
</template>
