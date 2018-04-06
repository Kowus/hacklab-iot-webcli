<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Temperature</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="defMess">Operation button</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Card name</span>
            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created() {},
  data() {
    return {
      msg: "IOT Demo Web Client"
    };
  },
  methods: {
    defMess() {
      let message = new Paho.MQTT.Message("Hello BIATCH!!!");
      message.destinationName = "/cloudmqtt";
      this.$mqtt.send(message);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
