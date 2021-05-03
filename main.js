var coloreSelezionato = 0;
var tentativi = 10;

p = new Array(-1, -1, -1, -1);

const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const white = document.getElementById('white');
const black = document.getElementById('black');

const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');

const label = document.getElementById('coloreSelezionato');
const vai = document.getElementById('vai');

function convertiInColore(colore) {
    switch (colore) {
        case 0: return "yellow";
        case 1: return "rgb(0, 161, 0)";
        case 2: return "rgb(24, 78, 255)";
        case 3: return "rgb(255, 37, 37)";
        case 4: return "white";
        case 5: return "black";

        default: return "khaki";
    }
}

function controlla(numeriComputer, numeriUtente) {

    console.log('soluzione: ' + numeriComputer);
    console.log('tentativo: ' + numeriUtente);

    let soluzione = numeriComputer;
    let pallini = new Array(0, 0);

    // pallini[0] --> bianchi
    // pallini[1] --> neri

    for (let i = 0; i < numeriUtente.length; i++) {
        if (numeriUtente[i] == soluzione[i]) {
            pallini[0]++;
            soluzione[i] = -2;
        }
    }

    for (let i = 0; i < soluzione.length; i++) {
        for (let j = 0; j < numeriUtente.length; j++) {
            if (i != j && soluzione[i] == numeriUtente[j]) {
                pallini[1]++;
            }
        }
    }

    return pallini;

}

yellow.addEventListener('click', function () {
    coloreSelezionato = 0;
    label.innerHTML = "colore selezionato: giallo";
});
green.addEventListener('click', function () {
    coloreSelezionato = 1;
    label.innerHTML = "colore selezionato: verde";
});
blue.addEventListener('click', function () {
    coloreSelezionato = 2;
    label.innerHTML = "colore selezionato: blu";
});
red.addEventListener('click', function () {
    coloreSelezionato = 3;
    label.innerHTML = "colore selezionato: rosso";
});
white.addEventListener('click', function () {
    coloreSelezionato = 4;
    label.innerHTML = "colore selezionato: bianco";
});
black.addEventListener('click', function () {
    coloreSelezionato = 5;
    label.innerHTML = "colore selezionato: nero";
});

s1.addEventListener('click', function () {
    p[0] = coloreSelezionato;
    s1.style.backgroundColor = convertiInColore(coloreSelezionato);
});
s2.addEventListener('click', function () {
    p[1] = coloreSelezionato;
    s2.style.backgroundColor = convertiInColore(coloreSelezionato);
});
s3.addEventListener('click', function () {
    p[2] = coloreSelezionato;
    s3.style.backgroundColor = convertiInColore(coloreSelezionato);
});
s4.addEventListener('click', function () {
    p[3] = coloreSelezionato;
    s4.style.backgroundColor = convertiInColore(coloreSelezionato);
});

vai.addEventListener('click', function () {

    const t1 = document.getElementById('t' + tentativi + '-1');
    const t2 = document.getElementById('t' + tentativi + '-2');
    const t3 = document.getElementById('t' + tentativi + '-3');
    const t4 = document.getElementById('t' + tentativi + '-4');

    const esitoPallini = new Array(document.getElementById('p' + tentativi + '-1'), document.getElementById('p' + tentativi + '-2'), document.getElementById('p' + tentativi + '-3'), document.getElementById('p' + tentativi + '-4'));

    t1.style.backgroundColor = convertiInColore(p[0]);
    t2.style.backgroundColor = convertiInColore(p[1]);
    t3.style.backgroundColor = convertiInColore(p[2]);
    t4.style.backgroundColor = convertiInColore(p[3]);

    const soluzione = new Array(4, 0, 3, 2);
    pallini = controlla(soluzione, p)

    for (let i = 0; i < pallini[0]; i++) {
        esitoPallini[i].style.backgroundColor = "white";
    }
    
    if (pallini[0] == 4) {
        label.innerHTML = "INDOVINATO!!";
    }
    
    for (let i = 0; i < pallini[1]; i++) {
        esitoPallini[3-i].style.backgroundColor = "black";
    }

    p[0] = p[1] = p[2] = p[3] = coloreSelezionato = -1;
    s1.style.backgroundColor = convertiInColore(coloreSelezionato);
    s2.style.backgroundColor = convertiInColore(coloreSelezionato);
    s3.style.backgroundColor = convertiInColore(coloreSelezionato);
    s4.style.backgroundColor = convertiInColore(coloreSelezionato);

    tentativi--;

    vai.innerHTML = tentativi + ' tentativi';

});
