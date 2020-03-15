<template>
  <div id="app">
    <el-container>
      <el-header>{{ $t('message.hello') }}</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      msg: "longkai",
    };
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
