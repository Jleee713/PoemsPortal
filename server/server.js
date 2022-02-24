const express = require("express");
const cors = require("cors");
const path = require("path")
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

// every request to have special header field bob with value bobalooba
const authorized = function (req, res, next) {
  if (req.get("bob") === "Bobalooba") {
    next();
  } else {
    res.status(401).end();
  }
};

//read data from json file
const fs = require("fs");
let rawdata = fs.readFileSync("server/poems.json");
let data = JSON.parse(rawdata);

//get the poems data
app.get("/api/poems", authorized, (request, response) => {
  response.json(data.poems);
});

//get a single poem with specific id
app.get("/api/poems/:id", authorized, (request, response) => {
  const id = Number(request.params.id);
  const poem = data.poems.find((poem) => poem.id === id);
  if (poem) {
    response.json(poem);
  } else {
    response.status(404).end();
  }
});

//generate new id for new added poem
const generateId = () => {
  const maxId =
    data.poems.length > 0 ? Math.max(...data.poems.map((u) => u.id)) : 0;
  return maxId + 1;
};

//add new poem to data
app.post("/api/poems", authorized, (request, response) => {
  const { title, author, text } = request.body;
  const newPoem = { title, author, text, votes: 0, id: generateId() };
  data.poems.push(newPoem);
  response.json(newPoem);
});

//upvote on a single poem
app.post("/api/poems/:id", authorized, (request, response) => {
  const id = Number(request.params.id);
  const poem = data.poems.find((poem) => poem.id === id);
  poem.votes++;
  if (poem) {
    response.json(poem);
  } else {
    response.status(404).end();
  }
});

//reload page udpate
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname + '/../build/index.html'));
});

//port for server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
