const dataInicial = new Date("2021-11-11");

function atualizarContador() {
    const hoje = new Date();
    let anos = hoje.getFullYear() - dataInicial.getFullYear();
    let meses = hoje.getMonth() - dataInicial.getMonth();
    let dias = hoje.getDate() - dataInicial.getDate();
    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 0);
        dias += ultimoMes.getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }
    document.getElementById("contador").innerHTML =
        `${anos} anos, ${meses} meses e ${dias} dias`;
}

atualizarContador();