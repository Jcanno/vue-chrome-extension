import Vue from "vue";
import App from "./App/App.vue";
import insert from "@/utils/insert";
import stroe from "@/mixins/store";

injectJS();

Vue.mixin(stroe);

insert(App);

function injectJS() {
  document.addEventListener("readystatechange", () => {
    const injectPath = "inject.js";
    const temp = document.createElement("script");

    temp.setAttribute("type", "text/javascript");
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(injectPath);
    document.body.appendChild(temp);
  });
}
