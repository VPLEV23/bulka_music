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
    <input type="file" @change="handleChange" />
    <div class="error">{{ fileError }}</div>
    <button>Create</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";

const { filePath, url, uploadImage } = useStorage();

const title = ref("");
const desc = ref("");
const file = ref(null);
const fileError = ref(null);

const createPlaylist = async () => {
  if (file.value) {
    await uploadImage(file.value);
    console.log("Image Uploaded", url.value);
  }
};

const types = ["image/png", "image/jpeg"];
const handleChange = (e) => {
  let selected = e.target.files[0];
  console.log(selected);
  if (selected && types.includes(selected.type)) {
    file.value = selected;
    fileError.value = null;
  } else {
    file.value = null;
    fileError.value = "Please select an image file (png or jpg)";
  }
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
