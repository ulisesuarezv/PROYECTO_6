const mongoose = require("mongoose");

const prendaSchema = new mongoose.Schema(
    {
    name: { type: String, required: true },
    img: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    drop: { type: String }
}, 
{
    timestamps: true,
    collection: "prendas"
})

const Prenda = mongoose.model("prendas", prendaSchema, "prendas");
module.exports = Prenda;