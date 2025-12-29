const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  const backend = await axios.get("http://backend:5000/api");
  res.send(`<h2>Frontend working</h2><p>${backend.data.message}</p>`);
});

app.get("/health", (req, res) => res.send("ok"));

app.listen(3000, () => console.log("Frontend running on 3000"));
