<template>
  <form @submit.prevent="handleSubmit">
    <h3>Register Form</h3>
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Register</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";
import { useRouter } from "vue-router";

const { error, signup, isPending } = useSignup();

const email = ref("");
const password = ref("");
const displayName = ref("");
const router = useRouter();

const handleSubmit = async () => {
  const res = await signup(email.value, password.value, displayName.value);
  if (!error.value) {
    router.push({ name: "UserPlaylists" });
  }
};
</script>
