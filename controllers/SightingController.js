const { getSightings } = require("../utils.js");

class sightingController {
  constructor() {}

  async initialize() {
    this.sightingArray = await getSightings();
  }

  list = async (req, res) => {
    await this.initialize();
    console.log(this.sightingArray[0]);
    res.send(this.sightingArray);
  };

  listByIndex = (req, res) => {
    res.json(this.sightingArray[req.params.sightingIndex]);
  };
}

module.exports = sightingController;

// app.get("/sightings", async (req, res) => {
//   const sightings = await getSightings();
//   res.send(sightings);
// });

// app.get("/sightings/:sightingIndex", async (req, res) => {
//   const sightings = await getSightings();
// const sighting = sightings.filter(
//   (x) => x.index === parseInt(req.params.sightingIndex)

//   res.json(sightings[req.params.sightingIndex]);
// });
