/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");

const app = express();
// eslint-disable-next-line consistent-return
app.get("/auth", (req, res) => {
  const { query } = req;
  const { code } = query;
  if (!code) {
    return res.send({ success: false, message: "Error" });
  }
  console.log('code', code);
});

app.listen(8080, () => {
  console.log("running on PORT:3000");
});
