const express = require("express");
const axios = require("axios");

const app = express();

app.use("/depression", (req, res) => {
  const url = `https://www.nimh.nih.gov/api/disorder/getbyterm?term=${req.query.term}`;

  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
