<template>
  <form
    @submit.prevent="sendForm"
    action="action"
    method="method"
    class="form-frame"
  >
    <label :style="{ 'margin-top': '20px' }">{{ formLabel }}</label>
    <template v-if="error">
      <p>{{ error }}</p>
    </template>
    <template v-for="item in items">
      <div :key="item.id" class="form-item">
        <label :style="{ 'margin-right': '10px' }">{{ item.label }}</label>
        <input :type="item.type" :name="item.label" />
      </div>
    </template>
    <div>
      <p-button :text="formLabel" class="submit" />
    </div>
  </form>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import PButton from "@/components/PButton.vue";
import { Formset } from "@/models/Formset";

@Component({
  components: {
    PButton,
  },
})
export default class PForm extends Vue {
  @Prop({ default: "ログイン" })
  formLabel!: string;

  @Prop({ default: "/" })
  action!: string;

  @Prop({ default: "POST" })
  method!: string;

  @Prop()
  items?: Formset[];

  @Prop({ default: false })
  error?: boolean;

  //@Emit("submit")
  sendForm(event: Event) {
    console.log(event);
    return event;
  }
}
</script>
<style>
.submit {
  color: red;
}
.form-frame {
  width: 500px;
  margin: 10px auto;
  border: solid 2px black;
  padding: 10px;
  text-align: center;
}

.form-item {
  width: 100%;
  margin: 30px auto;
}

.form-item input {
  width: 50%;
  border: none;
  border-bottom: solid 1px gray;
  padding: 8px;
  font-size: 1.2em;
}
</style>
