function descontar (vl, dscntpct) {
    const vlfinal = vl - (vl * (dscntpct / 100));
    const vldscnt = vl * (dscntpct / 100)
    console.log("O valor original do produto é de R$ " + vl);
    console.log("O valor do desconto é de R$ " + vldscnt);
    console.log("O valor do produto após ser descontado é de R$ " + vlfinal);
}

descontar(300, 5);