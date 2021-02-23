<template>
  <div class="puzzle-info">
    <p>{{ label }}</p>
    <div class="piece-frame">
      <template v-for="item in items">
        <p-piece
          :key="item.id"
          :src="'data:image/jpg;base64,' + item.url"
          :size="'100px'"
        ></p-piece>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import PPiece from "@/components/PPiece.vue";
import Piece from "@/models/Piece";

@Component({
  components: {
    PPiece,
  },
})
export default class PPieceFrame extends Vue {
  @Prop({ default: [] })
  items?: Piece[];

  @Prop()
  label?: string;
}
</script>
<style>
.puzzle-info {
  border: 1px solid gray;
  margin: 20px;
  width: 800px;
}
.piece-frame {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  width: 500px;
}
</style>