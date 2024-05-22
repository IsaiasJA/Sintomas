const SintomasPac = require('../models/sintomasPac');
const Sintoma = require('../models/sintoma');

const saveSintomaPac = async (idUsuario, idDiagnostico, idSintomas) => {
    const sintomasPacList = idSintomas.map(idSintoma => ({
        idUsuario,
        idDiagnostico,
        idSintoma
    }));
    return SintomasPac.bulkCreate(sintomasPacList);
};

const getSintomasPacByUsuario = async (idUsuario) => {
    return SintomasPac.findAll({ 
        where: { idUsuario },
        include: [{ model: Sintoma, attributes: ['descripcion'] }] // Incluir la relación con el modelo Sintoma y especificar que solo queremos la descripción
    });
};

const deleteSintomasPacByUsuario = async (idUsuario) => {
    return SintomasPac.destroy({ where: { idUsuario } });
};

module.exports = {
    saveSintomaPac,
    getSintomasPacByUsuario,
    deleteSintomasPacByUsuario
};
