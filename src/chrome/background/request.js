import axios from "@/utils/axios";

// 使用后台请求
const installRequest = () => {
  chrome.webRequest.onBeforeSendHeaders.addListener(
    async function(details) {
      console.log(details);
      const res = await axios.request({
        method: details.method,
        url: details.url
      });
      // 后续可以将响应实体转发出去，与其他模块进行通信
    },
    { urls: ["https://www.baidu.com/*"] },
    ["blocking", "requestHeaders"]
  );
};

export default installRequest;
