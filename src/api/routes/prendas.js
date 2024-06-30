const {
  getPrenda,
  getPrendaByID,
  postPrenda,
  putPrenda,
  deletePrenda,
} = require("../controllers/prendas");


const prendasRouter = require("express").Router();

prendasRouter.get("/", getPrenda);
prendasRouter.get("/:id", getPrendaByID);
prendasRouter.post("/", postPrenda);
prendasRouter.put("/:id", putPrenda);
prendasRouter.delete("/:id", deletePrenda);

module.exports = prendasRouter;