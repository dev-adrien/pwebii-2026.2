const d = new Date();

let dataFormatada = {
    dia: d.getDate(),
    mes: d.getMonth() + 1,
    ano: d.getFullYear(),
    hora: d.getHours(),
    minutos: d.getMinutes(),
    segundos: d.getSeconds()
};


const dataPtBr  = () => {
    return `${dataFormatada.dia}/${dataFormatada.mes}/${dataFormatada.ano}`;
}

console.log(dataPtBr());