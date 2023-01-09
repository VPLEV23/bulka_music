<template>
  <div class="add-song">
    <button v-if="!showForm" @click="showForm = true">Add Songs</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <h4>Add a New Song</h4>
      <input type="text" placeholder="Song title" required v-model="title" />
      <input type="text" placeholder="Artist" required v-model="artist" />
      <button>Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useDocument from "../composables/useDocument";
const props = defineProps({
  playlist: Object,
});

const title = ref("");
const artist = ref("");
const showForm = ref(false);
const { updateDoc } = useDocument("playlists", props.playlist.id);

const handleSubmit = async () => {
  const newSong = {
    title: title.value,
    artist: artist.value,
    id: Math.floor(Math.random() * 1000000),
  };
  const res = await updateDoc({
    songs: [...props.playlist.songs, newSong],
  });
  title.value = "";
  artist.value = "";
};
</script>

<style>
.add-song {
  text-align: center;
  margin-top: 40px;
}
form {
  max-width: 100%;
  text-align: left;
}
</style>
