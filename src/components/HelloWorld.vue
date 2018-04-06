<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4><small>Last updated: </small>{{momentize(timestamp)}}</h4>
    <el-row :gutter="20" style="text-align: left">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Temperature</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="defMess">Operation button</el-button>
          </div>
          <div class="text item" style="height: 100px; text-align: right">
            <h1 style="font-size:3em">{{sensor.temperature}} °<span style="font-size:.8em">C</span></h1>

          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Humidity</span>
            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
          </div>
          <div class="text item" style="height: 100px; text-align: right">
            <h1 style="font-size:3em">{{sensor.humidity}}%</h1>

          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
function round_number(value, places) {
  if (places) {
    var pow = Math.pow(10, places);
    return Math.round(value * pow) / pow;
  } else {
    return Math.round(value * 100) / 100;
  }
}

import moment from "moment";

export default {
  name: "HelloWorld",
  created() {},
  computed: {
    sensor() {
      return this.$store.state.sensor;
    },
    timestamp() {
      return this.$store.state.timestamp;
    }
  },
  data() {
    return {
      msg: "IOT Demo Web Client"
    };
  },
  methods: {
    defMess() {
      let message = new Paho.MQTT.Message(
        `{ "temperature": ${round_number(
          Math.random() * 50
        )}, "humidity": ${round_number(Math.random() * 100)} }`
      );
      message.destinationName = "/sensor";
      this.$mqtt.send(message);
    },
    momentize(date) {
      return moment().format("MMM/DD/YYYY [at] HH:mm");
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
