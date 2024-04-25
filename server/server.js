const express = require("express");
const path = require("path");
const cors = require("cors");
const {promises} = require("fs");

const app = express();

const PORT = 5000;

const jsonFile = path.resolve(__dirname,"db","games.json");

app.use(cors());

app.get("/:id",async (req,res) => {
  const id = req.params.id;
  if (!id || Number.isNaN(id)){
    return res.status(400).json({
      message:"bad request"
    });
  }
  const data = await promises.readFile(jsonFile,"utf-8");
  const db = JSON.parse(data);
  if (!db){
    return res.status(500).json({
      message:"server error"
    });
  }
  const game = db.find(g => g.id === Number(id));
  if (!game){
    return res.status(400).json({
      message:"incorrect game id"
    });
  }

  return res.status(200).json(game);
});

app.get("/",async (req,res) => {
  const data = await promises.readFile(jsonFile,"utf-8");
  const db = JSON.parse(data);
  if (!db){
    return res.status(500).json({
     message:"server error"
    });
  }
  return res.status(200).json(db);
});

app.listen(PORT,() => {
  console.log(`server runs on port:${PORT}`)
})