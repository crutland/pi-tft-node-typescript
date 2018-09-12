import express from "express";
import bodyParser from "body-parser";
import Screen from "./lib/screen";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const screen = new Screen();

app.get("/", (req, res) => {
  res.json({ message: "hello world from the device!" });
});

app.post("/", (req, res) => {
  console.log("Posting message...");
  let message = req.body.message;
  if (message == null)
    message = "No Message Provided";
  screen.printCenteredText(message, "#FFFFFF", "#4286f4");
  res.sendStatus(200);
});

app.post("/color", (req, res) => {
  console.log("Incoming color request");
  console.log(req.body.color);
  screen.fillScreen(req.body.color, true);
  res.sendStatus(200);
});

console.log("init");
app.listen(80, () => {
  console.log("server lisening on 80");
  screen.printCenteredText("Waiting...", "#000000", "#FFFFFF");
});

