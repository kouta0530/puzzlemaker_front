<template>
  <img
    :src="src"
    class="piece"
    @mousedown="onMouseDown($event)"
    :style="{
      width: size,
      height: size,
      position: position,
      top: top + 'px',
      left: left + 'px',
    }"
  />
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class PPiece extends Vue {
  @Prop({ default: 0 })
  targetTop?: number | 0;

  @Prop({ default: 0 })
  targetLeft?: number | 0;

  @Prop()
  src?: string;

  @Prop({ default: "100px" })
  size?: string;

  public left = 0;
  public top = 0;
  public position = "static";

  mounted() {
    const element = this.$el.getBoundingClientRect();
    this.left = element.left | 0;
    this.top = element.top | 0;
  }

  onMouseDown(event: any) {
    const element = this.$el;
    this.position = "absolute";
    element.addEventListener("mousemove", this.onMouseMove);
    element.addEventListener("mouseup", this.onMouseUp);
  }
  onMouseMove(event: any) {
    const element = this.$el;

    const top = event.pageY;
    const left = event.pageX;

    if (element) {
      this.top = top - element.clientHeight / 2;
      this.left = left - element.clientWidth / 2;
    }
  }

  onMouseUp(event: any) {
    const element = this.$el;
    this.checkConditions();
    element.removeEventListener("mousemove", this.onMouseMove);
    element.removeEventListener("mouseup", this.onMouseUp);
  }

  checkConditions() {
    const element = this.$el.getBoundingClientRect();
    if (!this.targetTop || !this.targetLeft) return;

    const conditionsTop =
      this.targetTop - 10 < element.top && element.top < this.targetTop + 10;

    const conditionsLeft =
      this.targetLeft - 10 < element.left &&
      element.left < this.targetLeft + 10;

    if (conditionsTop && conditionsLeft) {
      console.log("match");
    }
  }
}
</script>
<style>
.piece {
  background-color: orange;
  margin: 10px;
}
</style>