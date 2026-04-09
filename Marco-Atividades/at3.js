function bomDia (nome, hora) {
    if (hora > 5 && hora < 12) {
        console.log("Bom dia, " + nome);
    } else if (hora > -1 && hora < 6 || hora > 17 && hora < 24) {
        console.log("Boa noite, " + nome);
    } else if (hora > 11 && hora < 18){
        console.log("Boa tarde, " + nome);
    } else {
        console.log("Hora inválida.");
    }
}

bomDia("Marco", 12);