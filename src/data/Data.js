let alumns = []

function addAlumns(nombre, grado, matricula) {
    alumns.push({name: nombre, grade: grado, plaque: matricula})

    return true;
}

const getAlumns = () => {
    return alumns;
}

export default {addAlumns, getAlumns}

