import Vue from "vue";

function insert(component, insertSelector = "body") {
  insertDomFactory(component, insertSelector);
}

function insertDomFactory(component, insertSelector) {
  const vm = generateVueInstance(component);

  generateInsertDom(insertSelector, vm);
}

function generateInsertDom(insertSelector, vm) {
  const dom = document.querySelectorAll(insertSelector);
  dom.forEach(item => {
    const insert = document.createElement("div");
    insert.id = "insert-item";
    item.appendChild(insert);
    vm.$mount("#insert-item");
  });
}

function generateVueInstance(component) {
  const insertCon = Vue.extend(component);

  return new insertCon();
}

export default insert;
