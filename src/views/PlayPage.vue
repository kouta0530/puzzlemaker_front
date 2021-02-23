<template>
  <div class="game-frame">
    <p-side-frame :label="label" :baseWidth="500" :size="size"></p-side-frame>
    <p-piece-frame label="パネル" :items="pieces"></p-piece-frame>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PSideFrame from "@/components/PSideFrame.vue";
import PPieceFrame from "@/components/PPieceFrame.vue";
import puzzleAPI from "@/api/puzzleAPI";
import Piece from "@/models/Piece";
import Puzzle from "@/models/Puzzle";

@Component({
  components: {
    PSideFrame,
    PPieceFrame,
  },
})
export default class PlayPage extends Vue {
  public items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  public pieces: Piece[] = [];

  public size?: number = 0;
  public label?: string = "";

  async created() {
    const res = await puzzleAPI.getPieces(this.$route.params["id"]);

    const info = res.data.info;
    this.pieces = res.data.piece;

    if (info) {
      this.size = info.size | 0;
      this.label = info.name;
    }
  }
}
</script>
<style scoped>
.game-frame {
  display: flex;
}
</style>