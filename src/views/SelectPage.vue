<template>
  <div class="puzzle-list">
    <template v-for="item in items">
      <p-card
        :key="item.key"
        :id="item.id"
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
import { getPuzzle } from "@/api/puzzleAPI";

@Component({
  components: {
    PCard,
  },
})
export default class SelectPage extends Vue {
  public items?: Puzzle[] = [];

  async created() {
    this.items = await getPuzzle();
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