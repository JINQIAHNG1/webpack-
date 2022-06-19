
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
const sum = arr.reduce((previous, current) => previous + current);
console.log(sum);

const string = "http://www.baidu.com/?name=zhangsan&age=18&sex=nan#";
const newStr = string.split("?", 2)[1];
const str = newStr/* .replace(/=/g,':') */.slice(0, newStr.length - 1).split("&")
const obj = {} 
str.reduce((pre, cur) => {
  let a = cur.split('=')
  console.log(a[0]);
  obj[a[0]] = a[1]
},0)
console.log(obj);