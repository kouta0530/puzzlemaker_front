<template>
  <header>
    <router-link to="/" class="router-link"
      ><h1>{{ headerLabel }}</h1></router-link
    >
    <nav>
      <ol>
        <li>マイページ</li>
        <template v-if="auth">
          <li>ログアウト</li>
        </template>
        <template v-else>
          <router-link to="/login" class="router-link"
            ><li>ログイン</li></router-link
          >
        </template>
      </ol>
    </nav>
    <hr />
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { component } from "vue/types/umd";

@Component
export default class PHeader extends Vue {
  @Prop()
  headerLabel?: string;

  @Prop({ default: false })
  auth?: boolean;
}
</script>
<style>
li {
  display: inline;
  list-style: none;
  font-size: 16px;
  margin-right: 10px;
}
li:hover {
  color: orange;
}

.router-link {
  text-decoration: none;
  color: black;
}
</style>
