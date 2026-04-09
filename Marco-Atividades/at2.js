function hipotenusa (ct1, ct2) {
    const hipqd = (ct1 * ct1) + (ct2 * ct2);
    const hip = Math.sqrt(hipqd);
    console.log("O valor da hipotenusa com esses catetos é de " + hip);
}

hipotenusa(6, 8);