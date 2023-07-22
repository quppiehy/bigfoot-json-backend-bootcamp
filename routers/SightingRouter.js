class SightingRouter {
  constructor(sightingController, express) {
    this.controller = sightingController;
    this.express = express;
  }

  route = () => {
    let router = this.express.Router();
    router.get("/", this.controller.list);
    router.get("/:sightingIndex", this.controller.listByIndex);
    router.get("/:filterVal/:filterInput", this.controller.listByFilter);

    return router;
  };
}

module.exports = SightingRouter;
