<script>
export default {
  data() {
    return {
      name: "Ashiqur Russel",
      profession: "Full Stack Developer",
      company: "bidi Bilding Digital GmbH",
      status: "inactive",
    };
  },
};
</script>

<template>
  <h1>Name: {{ name }}</h1>
  <p>Company: {{ company }}</p>
  <p>Role: {{ profession }}</p>
  <p v-if="status === 'active'">Status: Employee is Active.</p>
  <p v-else-if="status == 'pending'">Status: Employee is Pending.</p>
  <p v-else="status === 'inactive'">Status: Employee is Inactive.</p>
</template>
