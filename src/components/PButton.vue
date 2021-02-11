<template>
  <button
    class="test"
    @click="click"
    :style="{
      'background-color': bgColor,
      color: color,
      'min-width': '200px',
    }"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class PButton extends Vue {
  @Prop({ default: "button" })
  text?: string;

  @Prop({ default: "white" })
  color?: string;

  @Prop({ default: "green" })
  bgColor?: string;

  @Emit("click")
  click() {
    alert("click");
  }

  /*
  @Prop()
  size(value: string) {
    if (!value) value = "large";
    console.log(value);
    switch (value) {
      case "small":
        return "20px";
      case "midium":
        return "24px";
      case "large":
        return "100px";
    }
  }
  */
}
</script>

<style scoped>
.test {
  border-radius: 10px;
  border: solid 2px white;
  padding: 10px;
}
</style>