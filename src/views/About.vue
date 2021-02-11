<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p-button :text="label"></p-button>
    <input v-model="label" />
    <p-form :items="formset" action="./" method="POST"></p-form>
    <!--p-card cardLabel="test" /-->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PButton from "@/components/PButton.vue";
import PForm from "@/components/PForm.vue";
import PCard from "@/components/PCard.vue";

@Component({
  components: {
    PButton,
    PForm,
    PCard,
  },
})
export default class About extends Vue {
  public label?: string = "test";
  public formset?: { id: number; label: string; type: string }[] = [
    {
      id: 1,
      label: "name",
      type: "email",
    },
    {
      id: 2,
      label: "password",
      type: "text",
    },
  ];
}
</script>