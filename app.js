const express = require("express");
const app = express();
const port = 45678;

/**
 * 提供一个健康检测的路由
 */
app.get("/health", (req, res) => {
  console.log(":::INVOKE:::");
  res.send({
    msg: "health checked",
    errcode: "0",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
