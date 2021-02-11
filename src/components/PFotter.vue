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
  fotterLabel?: string;
}
</script>
<style>
footer {
  backgroud-color: black;
  color: white;
}
</style>