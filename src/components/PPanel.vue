<template>
  <div
    :style="{
      'background-color': color,
      'background-image': src,
      width: size,
      height: size,
    }"
    class="pannel"
  ></div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PanelData } from "@/models/PanelData";

@Component({})
export default class PPanel extends Vue {
  @Prop()
  id?: number;

  @Prop({ default: "20px" })
  size?: string;

  @Prop()
  data?: any;

  @Prop()
  color?: string;

  public src = "";
  public top = 0;
  public left = 0;

  mounted() {
    const element = this.$el.getBoundingClientRect();
    this.top = element.top;
    this.left = element.left;

    this.$emit("create", { id: this.id, top: this.top, left: this.left });
  }
}
</script>
<style>
.pannel {
  border: 1px solid black;
}
</style>