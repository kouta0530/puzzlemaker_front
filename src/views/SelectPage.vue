<template>
  <div class="puzzle-list">
    <template v-for="item in items">
      <p-card
        :key="item.key"
        :cardLabel="item.cardLabel"
        :label="item.label"
      ></p-card>
    </template>
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import PCard from "@/components/PCard.vue";

@Component({
  components: {
    PCard,
  },
})
export default class SelectPage extends Vue {
  items = [
    {
      key: 1,
      cardLabel: "testCardLabel",
      label: "test",
    },
    {
      key: 2,
      cardLabel: "testCardLabel",
      label: "test",
    },
    {
      key: 3,
      cardLabel: "testCardLabel",
      label: "test",
    },
    {
      key: 4,
      cardLabel: "testCardLabel",
      label: "test",
    },
  ];
}
</script>
<style>
.puzzle-list {
  display: flex;
  flex-wrap: wrap;
}
</style>