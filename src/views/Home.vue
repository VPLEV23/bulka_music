<template>
  <div class="home">
    <div class="error" v-if="error">Could not fetch the data</div>
    <div v-if="documents">
      <ListView :playlists="documents" />
    </div>
  </div>
</template>

<script setup>
import getCollection from "../composables/getCollection";
import ListView from "../components/ListView.vue";

const { error, documents } = getCollection("playlists");
</script>
