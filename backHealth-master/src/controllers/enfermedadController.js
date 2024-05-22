const enfermedadService = require('../services/enfermedadService');

const saveEnfermedad = async (req, res) => {
    const enfermedadData = req.body;
    const result = await enfermedadService.saveEnfermedad(enfermedadData);
    if (result.success) {
        res.status(201).json(result.enfermedad);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const getEnfermedadById = async (req, res) => {
    const { id } = req.params;
    const result = await enfermedadService.getEnfermedadById(id);
    if (result.success) {
        res.status(200).json(result.enfermedad);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const getAllEnfermedades = async (req, res) => {
    const result = await enfermedadService.getAllEnfermedades();
    if (result.success) {
        res.status(200).json(result.enfermedades);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const updateEnfermedad = async (req, res) => {
    const { id } = req.params;
    const enfermedadData = req.body;
    const result = await enfermedadService.updateEnfermedad(id, enfermedadData);
    if (result.success) {
        res.status(200).json(result.enfermedad);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const deleteEnfermedad = async (req, res) => {
    const { id } = req.params;
    const result = await enfermedadService.deleteEnfermedad(id);
    if (result.success) {
        res.status(200).json({ message: result.message });
    } else {
        res.status(404).json({ message: result.message });
    }
};

module.exports = {
    saveEnfermedad,
    getEnfermedadById,
    getAllEnfermedades,
    updateEnfermedad,
    deleteEnfermedad
};
