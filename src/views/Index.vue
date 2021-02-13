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
        @sendForm="sendForm"
      ></p-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Formset } from "@/models/Formset";
import PForm from "@/components/PForm.vue";
import PButton from "@/components/PButton.vue";
import { registUser } from "@/api/userAPI";
import UserRegistrationData from "@/models/UserRegistrationData";

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

  public user: UserRegistrationData = {
    email: "test@mail.com",
    password: "a",
  };

  get src() {
    return require("../assets/logo.png");
  }

  async signup() {
    const res = await registUser(this.user);
  }

  sendForm(data: { email: string; password: string }) {
    this.signup();
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
