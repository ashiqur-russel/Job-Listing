<script setup>
import { computed, defineProps, ref } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  job: Object,
});

const showFullDescription = ref(false);
const desc = computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + "...";
  }
  return description;
});

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};
</script>

<template>
  <div
    class="bg-gray-800 text-gray-300 rounded-lg shadow-lg relative hover:shadow-xl transition-shadow duration-300"
  >
    <div class="p-6">
      <div class="mb-4">
        <div class="text-gray-400 text-sm mb-1">{{ job.type }}</div>
        <h3 class="text-2xl font-bold text-white">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div>{{ desc }}</div>
        <button
          @click="toggleFullDescription"
          class="text-blue-400 hover:text-blue-300 focus:outline-none"
        >
          {{ showFullDescription ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="text-blue-400 mb-2 text-lg font-semibold">{{ job.salary }}</h3>

      <div class="border-t border-gray-700 mb-5"></div>

      <div
        class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
      >
        <div class="text-orange-400 flex items-center">
          <i class="pi pi-map-marker text-orange-500 text-lg mr-2"></i>
          {{ job.location }}
        </div>

        <RouterLink
          :to="'/jobs/' + job._id"
          class="h-[40px] bg-green-900 text-center hover:bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-medium"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
