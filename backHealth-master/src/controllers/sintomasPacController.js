const sintomasPacService = require('../services/sintomasPacService');

const saveSintomasPac = async (req, res) => {
    try {
        const { idUsuario, idDiagnostico, idSintomas } = req.body;
        const result = await sintomasPacService.saveSintomasPac(idUsuario, idDiagnostico, idSintomas);
        if (result.success) {
            res.status(201).json({ message: result.message });
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const getSintomasPacByUsuario = async (req, res) => {
    try {
        const { idUsuario } = req.params;
        const result = await sintomasPacService.getSintomasPacByUsuario(idUsuario);
        if (result.success) {
            const sintomasPacWithDescripcion = result.sintomasPac.map(sintomaPac => ({
                id: sintomaPac.id,
                descripcion: sintomaPac.descripcion // Incluimos la descripción del síntoma
            }));
            res.status(200).json({ sintomasPac: sintomasPacWithDescripcion });
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

const deleteSintomasPacByUsuario = async (req, res) => {
    try {
        const { idUsuario } = req.params;
        const result = await sintomasPacService.deleteSintomasPacByUsuario(idUsuario);
        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    saveSintomasPac,
    getSintomasPacByUsuario,
    deleteSintomasPacByUsuario
};
