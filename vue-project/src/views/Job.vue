<script setup>
import BackButton from "@/components/BackButton.vue";
import axios from "@/axios";
import { onMounted, reactive } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const route = useRoute();
const router = useRouter();
const jobId = route.params.id;

const state = reactive({
  job: {},
  isLoading: true,
});

const deleteJob = async () => {
  try {
    const confirm = window.confirm("Are you sure to delete the job ?");
    if (confirm) {
      await axios.delete(`/jobs/${jobId}`);
      router.push("/jobs");
    }
  } catch (error) {
    console.error("Error while deleting the job", error);
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/jobs/${jobId}`);
    state.job = response.data;
  } catch (error) {
    console.error("Error while loading data:", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton />
  <section v-if="!state.isLoading" class="bg-gray-900 text-gray-300 py-10">
    <div class="container m-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-lg text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">{{ state.job.type }}</div>
            <h1 class="text-3xl font-bold text-white mb-4">
              {{ state.job.title }}
            </h1>
            <div
              class="text-gray-500 mb-4 flex items-center justify-center md:justify-start"
            >
              <i
                class="fa-solid fa-location-dot text-lg text-orange-400 mr-2"
              ></i>
              <p class="text-orange-400">{{ state.job.location }}</p>
            </div>
          </div>

          <div class="bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
            <h3 class="text-blue-400 text-lg font-bold mb-6">
              Job Description
            </h3>
            <p class="mb-4">{{ state.job.description }}</p>

            <h3 class="text-blue-400 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ state.job.salary }}</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-6 text-white">Company Info</h3>
            <h2 class="text-2xl text-blue-400">{{ state.job.company.name }}</h2>
            <p class="my-2">{{ state.job.company.description }}</p>

            <hr class="my-4 border-gray-700" />

            <h3 class="text-xl text-white">Contact Email:</h3>
            <p class="my-2 bg-gray-700 p-2 rounded break-words">
              {{ state.job.company.contactEmail }}
            </p>

            <h3 class="text-xl text-white">Contact Phone:</h3>
            <p class="my-2 bg-gray-700 p-2 rounded">
              {{ state.job.company.contactPhone || "N/A" }}
            </p>
          </div>

          <!-- Manage -->
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
            <h3 class="text-xl font-bold mb-6 text-white">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.job._id}`"
              class="bg-blue-600 hover:bg-blue-500 text-white text-center font-bold py-2 px-4 rounded-full w-full block mt-4"
            >
              Edit Job
            </RouterLink>
            <button
              @click="deleteJob"
              class="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full mt-4"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <div v-else class="text-center text-gray-400 py-6">
    <PulseLoader />
  </div>
</template>
