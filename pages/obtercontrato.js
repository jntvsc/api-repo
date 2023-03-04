//autor: Jonatas Vasconcelos
//atribui os demais metadados a partir do número do contrato
//Data: 06/02/2023

async function obterContrato() {

    const hoje = new Date();
    const futureDate = new Date(hoje.setMonth(hoje.getMonth() + 12));

	const idcontrato = 1001;	 

    const contratos = await fetch('https://api-repo-one.vercel.app/api/contratos?id=' + idcontrato.toString());
    //console.log(contratos);
    const contratoJson = await contratos.json();
    // //console.log(contratoJson);
    // const dataContrato = contratoJson.dataContrato;
    // const valorContrato = contratoJson.valorContrato;
    // const numParcelas = contratoJson.numParcelas;
    // const nomeContratante = contratoJson.nomeContratante;
    // const cpfcontratante = contratoJson.cpfcontratante;
    // const nomeContratado = contratoJson.nomeContratado;
    // const cpfContratado = contratoJson.cpfContratado;
    // const objeto = contratoJson.objeto;
    // const tipo = contratoJson.tipo;
    // const dataTermino = futureDate.toLocaleDateString();

    //console.log(contratoJson);

    return {contratoJson};
    // ({
    //     dataContrato: dataContrato,
    //     valorContrato: valorContrato,
    //     numParcelas: numParcelas,
    //     nomeContratante: nomeContratante,
    //     cpfcontratante: cpfcontratante,
    //     nomeContratado: nomeContratado,
    //     cpfContratado: cpfContratado,
    //     objeto: objeto,
    //     tipo: tipo,
    //     dataTermino: dataTermino
    // });
}

export default obterContrato;