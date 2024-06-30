const mongoose = require("mongoose");

const tipoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    prendas: [
      { type: mongoose.Types.ObjectId, ref: "prendas", required: false },
    ],
  },
  {
    timestamps: true,
    collection: "tipos",
  }
);

const Tipo = mongoose.model("tipos", tipoSchema, "tipos");

module.exports = Tipo;

