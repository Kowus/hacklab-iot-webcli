<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-container>

      <el-main>
        <el-row type="flex" justify="center">
          <el-col :span="18">
            <HelloWorld/>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
