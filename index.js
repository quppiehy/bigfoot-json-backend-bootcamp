const express = require("express");
// const { getSightings } = require("./utils.js");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const cors = require("cors");
app.use(cors());

const SightingController = require("./controllers/SightingController");
const sightingController = new SightingController();

const SightingRouter = require("./routers/SightingRouter");
const sightingRouter = new SightingRouter(sightingController, express);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sightings", sightingRouter.route());

// app.get("/sightings", async (req, res) => {
//   const sightings = await getSightings();
//   res.send(sightings);
// });

// app.get("/sightings/:sightingIndex", async (req, res) => {
//   const sightings = await getSightings();
//   // const sighting = sightings.filter(
//   //   (x) => x.index === parseInt(req.params.sightingIndex)

//   res.json(sightings[req.params.sightingIndex]);
// });

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
