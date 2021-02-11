<template>
  <div class="container">
    <div class="side-frame">
      <img :src="src" alt="" />
      <p>自分の好きな画像でパズルができるアプリです。</p>
      <div class="buttons">
        <p-button color="white" text="投稿する" />
        <p-button color="white" text="遊ぶ" />
      </div>
    </div>
    <div>
      <p-form
        formLabel="新規登録"
        :items="items"
        :style="{ 'marign-right': '20%' }"
      ></p-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import PForm from "@/components/PForm.vue";
import { Formset } from "@/models/Formset";
import PButton from "@/components/PButton.vue";

@Component({
  components: {
    PForm,
    PButton,
  },
})
export default class Index extends Vue {
  public items: Formset[] = [
    { id: 1, label: "email", type: "email" },
    { id: 2, label: "password", type: "password" },
  ];

  get src() {
    return require("../assets/logo.png");
  }
}
</script>
<style>
.container {
  display: flex;
}

.side-frame {
  text-align: center;
  width: 400px;
  margin: 0 auto;
}

.side-frame img {
  width: 300px;
  height: 250px;
}
</style>