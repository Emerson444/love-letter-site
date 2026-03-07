const dataInicial = new Date("2025-07-27");

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



const linhas = [
"Meu amor, feliz dia das mulheres. Você é uma mulher incrível, forte, linda e que faz meus dias muito mais felizes só por estar na minha vida.",
"Sou muito grato por ter você comigo. Seu jeito, seu carinho e sua companhia significam muito pra mim.",
"Feliz Dia das Mulheres, meu amor. Te amo demais, Mira ❤️"
];

let linhaIndex = 0;
let letraIndex = 0;

function escrever() {

    if (linhaIndex < linhas.length) {

        if (letraIndex < linhas[linhaIndex].length) {

            document.getElementById("typewriter").innerHTML += linhas[linhaIndex].charAt(letraIndex);
            letraIndex++;
            setTimeout(escrever, 40);

        } else {

            document.getElementById("typewriter").innerHTML += "<br><br>";
            linhaIndex++;
            letraIndex = 0;

            setTimeout(escrever, 800);
        }

    }
}

escrever();