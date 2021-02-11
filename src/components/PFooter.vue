<template>
  <footer>
    <hr />
    <p>&copy;{{ footerLabel }}</p>
  </footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { component } from "vue/types/umd";

@Component
export default class PFooter extends Vue {
  @Prop()
  footerLabel?: string;
}
</script>
<style>
footer {
  background-color: black;
  color: white;
  padding-bottom: 5px;
  text-align: center;
}
</style>