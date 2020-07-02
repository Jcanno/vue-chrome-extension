let oldXHR = window.XMLHttpRequest;

function filterUrl(url) {
  return url.indexOf("baidu.com") !== -1;
}

function newXHR() {
  let realXHR = new oldXHR();

  realXHR.onload = function() {
    // 发送搜索列表页数据
    if (filterUrl(realXHR.responseURL)) {
      window.postMessage({ data: realXHR.responseText }, "*");
      console.log(`这是onload函数请求的文本:${realXHR.responseText}`);
    }
  };

  return realXHR;
}

window.XMLHttpRequest = newXHR;
