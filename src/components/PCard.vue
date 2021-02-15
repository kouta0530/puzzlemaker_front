<template>
  <div class="card" :style="{ 'background-color': color }">
    <p class="card-label">{{ cardLabel }}</p>
    <img :src="src" alt="alt" />
    <p-button :text="label" @push="play"></p-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";
import PButton from "@/components/PButton.vue";

@Component({
  components: {
    PButton,
  },
})
export default class PCard extends Vue {
  @Prop()
  id?: string;

  @Prop({ default: "" })
  src?: string;

  @Prop()
  cardLabel?: string;

  @Prop()
  alt?: string;

  @Prop()
  label?: string;

  @Prop({ default: "bisque" })
  color?: string;

  @Emit("play")
  play() {
    return this.id;
  }
}
</script>
<style>
.card {
  width: 300px;
  height: 300px;
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
  height: 150px;
  border-radius: 3px;
  margin-bottom: 10px;
}
</style>