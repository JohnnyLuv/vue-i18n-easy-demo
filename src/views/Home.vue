<template>
  <div>
    <h1>{{ $t("page.name", { name: "home" }) }}</h1>
    <div>
      {{ $t("person.johnny") }}
      {{ $t("action.say") }}:
      {{ $t("msg.hello_world") }}
    </div>
  </div>
</template>
