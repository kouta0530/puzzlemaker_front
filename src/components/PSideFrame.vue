<template>
  <div class="frame">
    <p class="frame-lable">{{ label }}</p>
    <div
      class="pannel-frame"
      :style="{ width: baseWidth + 10 + 'px', height: baseWidth + 10 + 'px' }"
    >
      <template v-for="n of size * size">
        <p-panel
          :key="n"
          :size="baseWidth / size + 'px'"
          color="gray"
        ></p-panel>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import PPanel from "@/components/PPanel.vue";
import Puzzle from "@/models/Puzzle";

@Component({
  components: {
    PPanel,
  },
})
export default class PSideFrame extends Vue {
  @Prop({ default: "" })
  label?: string;

  @Prop({ default: 1 })
  size?: number;

  @Prop({ default: 500 })
  baseWidth?: number;
}
</script>
<style>
.frame {
  border: 2px solid gray;
  margin: 20px;
}

.frame-label {
  text-align: center;
  font-size: 20px;
}

.pannel-frame {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
}
</style>