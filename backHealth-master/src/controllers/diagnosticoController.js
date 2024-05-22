const diagnosticoService = require('../services/diagnosticoService');

const saveDiagnostico = async (req, res) => {
    const diagnosticoData = req.body;
    const result = await diagnosticoService.saveDiagnostico(diagnosticoData);
    if (result.success) {
        res.status(201).json(result.diagnostico);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const getDiagnosticoById = async (req, res) => {
    const { id } = req.params;
    const result = await diagnosticoService.getDiagnosticoById(id);
    if (result.success) {
        res.status(200).json(result.diagnostico);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const getDiagnosticosByUsuarioId = async (req, res) => {
    const { idUsuario } = req.params;
    const result = await diagnosticoService.getDiagnosticosByUsuarioId(idUsuario);
    if (result.success) {
        res.status(200).json(result.diagnosticos);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const getAllDiagnosticos = async (req, res) => {
    const result = await diagnosticoService.getAllDiagnosticos();
    if (result.success) {
        res.status(200).json(result.diagnosticos);
    } else {
        res.status(500).json({ message: result.message });
    }
};

const updateDiagnostico = async (req, res) => {
    const { id } = req.params;
    const diagnosticoData = req.body;
    const result = await diagnosticoService.updateDiagnostico(id, diagnosticoData);
    if (result.success) {
        res.status(200).json(result.diagnostico);
    } else {
        res.status(404).json({ message: result.message });
    }
};

const deleteDiagnostico = async (req, res) => {
    const { id } = req.params;
    const result = await diagnosticoService.deleteDiagnostico(id);
    if (result.success) {
        res.status(200).json({ message: result.message });
    } else {
        res.status(404).json({ message: result.message });
    }
};

module.exports = {
    saveDiagnostico,
    getDiagnosticoById,
    getDiagnosticosByUsuarioId,
    getAllDiagnosticos,
    updateDiagnostico,
    deleteDiagnostico
};
