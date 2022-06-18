<template>
  <div id="app">
    <ul>
      <li v-for="item in newArr" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newArr: ["程序员", "帅哥", "美女"],
    };
  },
  methods: {
    btn() {
      this.newArr.push(this.newArr[0]);
      this.newArr.shift();
    }
  }
};
</script>

<style></style>
