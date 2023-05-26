const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const days = new Date();
  const result = addDays(
    new Date(days.getFullYear(), days.getMonth(), days.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
