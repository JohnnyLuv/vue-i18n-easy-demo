<template>
  <div class="about">
    <h1>{{ $t("page.name", { name: "about" }) }}</h1>
    <div>
      {{ $t("person.johnny") }}
      {{ $t("action.say") }}:
      {{ $t("msg.hello_world") }}
    </div>
  </div>
</template>
