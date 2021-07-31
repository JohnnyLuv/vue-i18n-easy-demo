<template>
  <div id="lang">
    <label for="en">
      <input id="en" type="radio" v-model="lang" value="en" />English
    </label>
    <label for="zh">
      <input id="zh" type="radio" v-model="lang" value="zh" />中文
    </label>
    <label for="ja">
      <input id="ja" type="radio" v-model="lang" value="ja" />日本語
    </label>
  </div>
</template>

<script>
import { loadLanguageAsync } from "../i18n";
export default {
  name: "ChangeLang",
  data() {
    return {
      lang: "en",
    };
  },
  mounted() {
    const localLang = window.localStorage.getItem("lang") || "en";
    this.lang = localLang;
  },
  watch: {
    lang(val) {
      loadLanguageAsync(val);
    },
  },
};
</script>

<style scoped>
#lang {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>