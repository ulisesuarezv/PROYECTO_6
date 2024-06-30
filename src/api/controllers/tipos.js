const Tipo = require("../models/tipos");


const getTipos = async (req, res, next) => {
    try {
        const tipos = await Tipo.find().populate("prendas");
        return res.status(200).json(tipos);
    } catch (error) {
        return res.status(400).json("Error en GET_Tipos");
    }
} 


const getTipoByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tipo = await Tipo.findById(id).populate("prendas");
        return res.status(200).json(tipo);
    } catch (error) {
        return res.status(400).json("Error en GET_TipoByID");
    }
}



const postTipo = async (req, res, next) => {
    try {
        const newTipo = new Tipo(req.body);
        const tipoSaved = await newTipo.save();
        return res.status(201).json(tipoSaved);
    } catch (error) {
        return res.status(400).json("Error en POST_Tipo");
    }
}



const putTipo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const oldTipo = await Tipo.findById(id);
        const newTipo = new Tipo(req.body);
        newTipo._id = id;
        newTipo.prendas = [...oldTipo.prendas, ...req.body.prendas];
        const tipoUpdated = await Tipo.findByIdAndUpdate(id, newTipo, {
            new: true,
        });
        return res.status(200).json(tipoUpdated);
    } catch (error) {
        return res.status(400).json("Error en PUT_Tipo");
    }
}



const deleteTipo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tipoDeleted = await Tipo.findByIdAndDelete(id);
        return res.status(200).json(tipoDeleted);
    } catch (error) {
        return res.status(400).json("Error en DELETE_Tipo");
    }
}


module.exports = {
    getTipos,
    getTipoByID,
    postTipo,
    putTipo,
    deleteTipo
}