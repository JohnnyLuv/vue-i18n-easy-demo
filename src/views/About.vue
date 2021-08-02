<template>
  <div>
    <el-divider />
    <h3>{{ $t("page.name", { name: "about" }) }}</h3>
    <p>
      {{ $t("person.johnny") }}
      {{ $t("action.say") }}:
      {{ $t("msg.hello_world") }}
    </p>
  </div>
</template>
