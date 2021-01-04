<style scoped lang="scss" src="./styleguide.view.scss"></style>

<template>
  <div class="root">
    <div class="wrapper">
      <div id="sidebar">
        <router-link :to="route.url" v-for="route in routes" v-bind:key="route">
          <div class="button-menu">
            {{ route.label }}
          </div>
        </router-link>
      </div>
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./styleguide.view.ts"></script>
