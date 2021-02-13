<template>
  <form @submit.prevent="" action="action" method="method" class="form-frame">
    <label :style="{ 'margin-top': '20px' }">{{ formLabel }}</label>
    <template v-if="error">
      <p>{{ error }}</p>
    </template>
    <div class="form-item">
      <label :style="{ 'margin-right': '10px' }">email</label>
      <input type="email" v-model="email" />
    </div>
    <div class="form-item">
      <label :style="{ 'margin-right': '10px' }">password</label>
      <input type="password" v-model="password" />
    </div>
    <div>
      <p-button :text="formLabel" class="submit" @push="sendForm" />
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

  @Prop({ default: [] })
  items?: Formset[];

  @Prop({ default: false })
  error?: boolean;

  @Emit("sendForm")
  sendForm() {
    return { email: this.email, password: this.password };
  }

  public email = "";
  public password = "";
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
