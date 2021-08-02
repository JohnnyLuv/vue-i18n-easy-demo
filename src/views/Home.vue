<template>
  <div>
    <el-divider />
    <h3>{{ $t("page.name", { name: "home" }) }}</h3>
    <p>
      {{ $t("person.johnny") }}
      {{ $t("action.say") }}:
      {{ $t("msg.hello_world") }}
    </p>

    <el-divider />
    <el-calendar style="max-width: 800px" />
  </div>
</template>