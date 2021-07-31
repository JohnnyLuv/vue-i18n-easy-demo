<template>
  <div id="app">
    <ChangeLang msg="msg" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      | <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import ChangeLang from "@/components/ChangeLang";

export default {
  name: "App",
  components: {
    ChangeLang,
  },
};
</script>
