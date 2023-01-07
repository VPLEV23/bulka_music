<template>
  <form @submit.prevent="createPlaylist">
    <h4>Create New Playlist</h4>
    <input type="text" required placeholder="Playlist Title" v-model="title" />
    <textarea
      required
      placeholder="Playlist Description...."
      v-model="desc"
    ></textarea>
    <!-- uploadplaylist image -->
    <label>Upload playlist cover image</label>
    <input type="file" />
    <div class="error"></div>
    <button>Create</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const title = ref("");
const desc = ref("");

const createPlaylist = () => {
  console.log(title.value, desc.value);
};
</script>

<style>
form {
  background: white;
}
input[type="file"] {
  border: 0;
  padding: 0;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
