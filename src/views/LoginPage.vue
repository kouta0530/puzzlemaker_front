<template>
  <p-form formLabel="ログイン" @sendForm="login"> </p-form>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import PForm from "@/components/PForm";
import { UserRegistrationData } from "@/models/UserRegistrationData";

@Component({
  components: {
    PForm,
  },
})
export default class LoginPage extends Vue {
  login() {
    console.log("get");
  }
}
</script>
<style scoped></style>
