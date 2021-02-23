<template>
  <div class="puzzle-list">
    <template v-for="(item, key) in items">
      <p-card
        :key="key"
        :id="key"
        :cardLabel="item.name"
        :src="item.url"
        @play="moveToPlayPage"
        label="遊ぶ"
      ></p-card>
    </template>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PCard from "@/components/PCard.vue";
import Puzzle from "@/models/Puzzle";
import puzzleAPI from "@/api/puzzleAPI";

@Component({
  components: {
    PCard,
  },
})
export default class SelectPage extends Vue {
  public items?: Puzzle[] = [];

  async created() {
    this.items = await puzzleAPI.getPuzzle();
    console.log(this.items);
  }

  moveToPlayPage(value: string) {
    this.$router.push({ name: `play`, params: { id: value } });
  }
}
</script>
<style>
.puzzle-list {
  display: flex;
  flex-wrap: wrap;
}
</style>