/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const superagent = require("superagent");
require("dotenv").config();

const app = express();
// eslint-disable-next-line consistent-return
app.get("/auth", async (req, res) => {
  const { query } = req;
  const { code } = query;
  if (!code) {
    return new Error('No "code" parameter provided');
  }

  await superagent
    .post("https://github.com/login/oauth/access_token")
    .send({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    })
    .set("Accept", "application/json")
    .then((result) => result.body.access_token)
    .then((token) => {
      res.cookie("github_token", token, {
        domain: "localhost",
        expires: new Date(Date.now() + 1000 * 60 * 60),
      });
    })
    .catch((err) => {
      throw err;
    });

  res.redirect("http://localhost:3000/");
});

app.listen(8080, () => {
  console.log("running on PORT:8080");
});
