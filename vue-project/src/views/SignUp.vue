<script setup>
import { ref } from "vue";

const form = ref({
  userName: "",
  role: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

// Options for role selection
const roles = ["employer", "employee"];

const handleSubmit = () => {
  console.log("Form Submitted:", form.value);
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 to-blue-500"
  >
    <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
        Register
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label
            for="userName"
            class="block text-sm font-semibold text-gray-700 mb-1"
            >Username</label
          >
          <input
            type="text"
            id="userName"
            v-model="form.userName"
            class="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Username (3-10 characters)"
            required
            minlength="3"
            maxlength="10"
          />
        </div>

        <div>
          <label
            for="role"
            class="block text-sm font-semibold text-gray-700 mb-1"
            >Role</label
          >
          <select
            id="role"
            v-model="form.role"
            class="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option disabled value="">Select a role</option>
            <option v-for="role in roles" :key="role" :value="role">
              {{ role }}
            </option>
          </select>
        </div>

        <div>
          <label
            for="firstName"
            class="block text-sm font-semibold text-gray-700 mb-1"
            >First Name</label
          >
          <input
            type="text"
            id="firstName"
            v-model="form.firstName"
            class="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="First Name"
          />
        </div>

        <div>
          <label
            for="lastName"
            class="block text-sm font-semibold text-gray-700 mb-1"
            >Last Name</label
          >
          <input
            type="text"
            id="lastName"
            v-model="form.lastName"
            class="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Last Name"
          />
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-semibold text-gray-700 mb-1"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-semibold text-gray-700 mb-1"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="form.password"
            class="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
            required
          />
        </div>

        <div class="pt-4">
          <button
            type="submit"
            class="w-full px-4 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition duration-200 ease-in-out"
          >
            Register
          </button>
        </div>
      </form>

      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Already registered?
          <a href="#" class="text-green-600 hover:text-green-700 font-semibold"
            >Login</a
          >
        </p>
        <p class="text-sm text-gray-600 mt-2">
          <a href="#" class="text-green-600 hover:text-green-700 font-semibold"
            >Forgot password?</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
