const {
  getTipos,
  getTipoByID,
  postTipo,
  putTipo,
  deleteTipo,
} = require("../controllers/tipos");

const tiposRouter = require("express").Router();

tiposRouter.get("/", getTipos);
tiposRouter.get("/:id", getTipoByID);
tiposRouter.post("/", postTipo);
tiposRouter.put("/:id", putTipo);
tiposRouter.delete("/:id", deleteTipo);

module.exports = tiposRouter;
