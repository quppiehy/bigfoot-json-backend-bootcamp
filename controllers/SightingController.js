const { getSightings } = require("../utils.js");

class sightingController {
  constructor() {}

  async initialize() {
    this.sightingArray = await getSightings();
  }

  list = async (req, res) => {
    await this.initialize();
    res.send(this.sightingArray);
  };

  listByIndex = (req, res) => {
    res.json(this.sightingArray[req.params.sightingIndex]);
  };

  listByFilter = (req, res) => {
    const filterVal = req.params.filterVal;
    const filterInput = req.params.filterInput;
    console.log(filterVal);
    console.log(filterInput);
    if (filterVal && filterInput) {
      const filteredSightings = this.sightingArray.filter(
        (sighting) => sighting[filterVal] === filterInput
      );
      res.json(filteredSightings);
    } else {
      res.json(this.sightingArray);
    }
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
