<template>
  <div class="card" :style="{ 'background-color': color }">
    <p class="card-label">{{ cardLabel }}</p>
    <img :src="url" alt="alt" />
    <p-button :text="label" :click="click"></p-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import PButton from "@/components/PButton.vue";

@Component({
  components: {
    PButton,
  },
})
export default class PCard extends Vue {
  @Prop({ default: "" })
  get url() {
    return require("../assets/logo.png");
  }
  @Prop()
  cardLabel?: string;

  @Prop()
  alt?: string;

  @Prop()
  label?: string;

  @Prop({ default: "bisque" })
  color?: string;

  @Emit("click")
  click(value: any) {
    return value;
  }
}
</script>
<style>
.card {
  width: 300px;
  height: 400px;
  margin: 10px;
  background-color: rgb(55, 134, 204);
  border: solid 2px rgb(36, 41, 46);
  text-align: center;
}

.card-label {
  font-size: 24px;
}

img {
  width: 80%;
  height: 50%;
  border-radius: 3px;
}
</style>