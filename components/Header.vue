<template>
    <b-container fluid class="border-bottom">
      <b-row class="justify-content-between py-3">
        <b-col>
          <Logo/>
        </b-col>
        <b-col class="text-right">
          <span>Logged in as Ecofusion</span>
          •
          <n-link to="/logout">Logout</n-link>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  name: "Header",
  components: {Logo}
}
</script>

<style scoped>

</style>
