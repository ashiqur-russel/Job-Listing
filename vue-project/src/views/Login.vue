<script setup>
import { ref, computed } from "vue";
import { useStore, mapState } from "vuex";

const store = useStore();

const name = computed(() => store.state.auth.name);
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 to-blue-500"
  >
    <div class="bg-white p-10 rounded-xl shadow-lg max-w-md w-full">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
        Welcome Back {{ name }}
      </h2>

      <form>
        <div class="mb-5">
          <label
            for="email"
            class="block text-sm font-semibold text-gray-700 mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        <div class="mb-6">
          <label
            for="password"
            class="block text-sm font-semibold text-gray-700 mb-2"
            >Password</label
          >
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>

        <div class="flex items-center justify-between mb-6">
          <a href="#" class="text-sm text-green-600 hover:text-green-700"
            >Forgot password?</a
          >
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        >
          Login
        </button>
      </form>

      <p class="text-center mt-6 text-gray-600">
        Don't have an account?
        <a href="#" class="text-green-600 font-semibold hover:text-green-700"
          >Sign up</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
