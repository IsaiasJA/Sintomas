const sintomaPacRepository = require('../repositories/sintomaPacRepository');

const saveSintomasPac = async (idUsuario, idDiagnostico, idSintomas) => {
    try {
        await sintomaPacRepository.deleteSintomasPacByUsuario(idUsuario);
        await sintomaPacRepository.saveSintomaPac(idUsuario, idDiagnostico, idSintomas);
        return { success: true, message: 'SíntomasPac guardados correctamente' };
    } catch (error) {
        return { success: false, message: 'Error al guardar los SíntomasPac' };
    }
};

const getSintomasPacByUsuario = async (idUsuario) => {
    try {
        const sintomasPac = await sintomaPacRepository.getSintomasPacByUsuario(idUsuario);
        // Modificar el formato de los resultados para incluir la descripción de los síntomas
        const formattedSintomasPac = sintomasPac.map(sintomaPac => ({
            id: sintomaPac.id, // Puedes incluir más campos si es necesario
            descripcion: sintomaPac.Sintoma.descripcion // Acceder a la descripción del síntoma a través de la relación
        }));
        return { success: true, sintomasPac: formattedSintomasPac };
    } catch (error) {
        return { success: false, message: 'Error al obtener los SíntomasPac' };
    }
};

const deleteSintomasPacByUsuario = async (idUsuario) => {
    try {
        await sintomaPacRepository.deleteSintomasPacByUsuario(idUsuario);
        return { success: true, message: 'SíntomasPac eliminados correctamente' };
    } catch (error) {
        return { success: false, message: 'Error al eliminar los SíntomasPac' };
    }
};

module.exports = {
    saveSintomasPac,
    getSintomasPacByUsuario,
    deleteSintomasPacByUsuario
};
