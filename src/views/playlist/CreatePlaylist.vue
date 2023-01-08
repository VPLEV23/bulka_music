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
    <button v-if="!isPending">Create</button>
    <button v-else disabled>Saving...</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
import useCollection from "@/composables/useCollection";
import getUser from "@/composables/getUser";
import { timestamp } from "@/firebase/config";

const { filePath, url, uploadImage } = useStorage();
const { error, addDoc } = useCollection("playlists");
const { user } = getUser();

const title = ref("");
const desc = ref("");
const file = ref(null);
const fileError = ref(null);
const isPending = ref(false);

const createPlaylist = async () => {
  if (file.value) {
    isPending.value = true;
    await uploadImage(file.value);
    await addDoc({
      title: title.value,
      description: desc.value,
      userId: user.value.uid,
      userName: user.value.displayName,
      coverUrl: url.value,
      filePath: filePath.value, // so we can delete it later
      songs: [],
      createdAt: timestamp(),
    });
    isPending.value = false;
    if (!error.value) {
      console.log("playlist added");
    }
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
