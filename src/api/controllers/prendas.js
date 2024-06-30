const Prenda = require("../models/prendas");

const getPrenda = async (req, res, next) => {
  try {
    const prendas = await Prenda.find();
    return res.status(200).json(prendas);
  } catch (error) {
    return res.status(400).json("Error GET_Prenda");
  }
};

const getPrendaByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prenda = await Prenda.findById(id);
    return res.status(200).json(prenda);
  } catch (error) {
    return res.status(400).json("Error GET_PrendaByID");
  }
};

const postPrenda = async (req, res, next) => {
  try {
    const newPrenda = new Prenda(req.body);
    const prendaSaved = await newPrenda.save();
    res.status(201).json(prendaSaved);
  } catch (error) {
    return res.status(400).json("Error POST_Prenda");
  }
};


const putPrenda = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPrenda = new Prenda(req.body);
    newPrenda._id = id;
    const prendaUpdated = await Prenda.findById(id, newPrenda, {
      new: true,
    });
    return res.status(200).json(prendaUpdated);
  } catch (error) {
    return res.status(400).json("Error PUT_Prenda");
  }
};


const deletePrenda = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prendaDeleted = await Prenda.findByIdAndDelete(id);
        return res.status(200).json(prendaDeleted);
    } catch (error) {
        return res.status(400).json("Error DELETE_Prenda");
    }
}


module.exports = {
    getPrenda,
    getPrendaByID,
    postPrenda,
    putPrenda,
    deletePrenda
}