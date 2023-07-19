// const express = require("express");
// const SightingController = require("../controllers/SightingController");
// const sightingController = new SightingController();

class SightingRouter {
  constructor(sightingController, express) {
    this.controller = sightingController;
    this.express = express;
  }

  route = () => {
    let router = this.express.Router();
    router.get("/", this.controller.list);
    router.get("/:sightingIndex", this.controller.listByIndex);

    return router;
  };
}

module.exports = SightingRouter;
