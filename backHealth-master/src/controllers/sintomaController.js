const sintomaService = require('../services/sintomaService');

const getSintomaByClave = async (req, res) => {
    try {
        const { clave } = req.params;
        const sintoma = await sintomaService.getSintomaByClave(clave);
        if (sintoma) {
            res.status(200).json({ sintoma });
        } else {
            res.status(404).json({ message: 'Síntoma no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el síntoma' });
    }
};

const getAllSintomas = async (req, res) => {
    try {
        const sintomas = await sintomaService.getAllSintomas();
        res.status(200).json({ sintomas });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener todos los síntomas' });
    }
};

module.exports = {
    getSintomaByClave,
    getAllSintomas
};
