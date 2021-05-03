const soluzione = new Array(1, 2, 3, 4);

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
const vai   = document.getElementById('vai');

function converti(colore) {
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

function controlla(soluzione, tentativo) {

    console.log('soluzione: ' + soluzione);
    console.log('tentativo: ' + tentativo);

}

yellow.addEventListener('click', function() {
    coloreSelezionato = 0;
    label.innerHTML = "giallo";
});
green.addEventListener('click', function() {
    coloreSelezionato = 1;
    label.innerHTML = "verde";
});
blue.addEventListener('click', function() {
    coloreSelezionato = 2;
    label.innerHTML = "blu";
});
red.addEventListener('click', function() {
    coloreSelezionato = 3;
    label.innerHTML = "rosso";
});
white.addEventListener('click', function() {
    coloreSelezionato = 4;
    label.innerHTML = "bianco";
});
black.addEventListener('click', function() {
    coloreSelezionato = 5;
    label.innerHTML = "nero";
});

s1.addEventListener('click', function() {
    p[0] = coloreSelezionato;
    s1.style.backgroundColor = converti(coloreSelezionato);
});
s2.addEventListener('click', function() {
    p[1] = coloreSelezionato;
    s2.style.backgroundColor = converti(coloreSelezionato);
});
s3.addEventListener('click', function() {
    p[2] = coloreSelezionato;
    s3.style.backgroundColor = converti(coloreSelezionato);
});
s4.addEventListener('click', function() {
    p[3] = coloreSelezionato;
    s4.style.backgroundColor = converti(coloreSelezionato);
});

vai.addEventListener('click', function() {
    
    const t1 = document.getElementById('t' + tentativi + '-1');
    const t2 = document.getElementById('t' + tentativi + '-2');
    const t3 = document.getElementById('t' + tentativi + '-3');
    const t4 = document.getElementById('t' + tentativi + '-4');

    t1.style.backgroundColor = converti(p[0]);
    t2.style.backgroundColor = converti(p[1]);
    t3.style.backgroundColor = converti(p[2]);
    t4.style.backgroundColor = converti(p[3]);
    
    controlla(soluzione, p);

    p[0] = p[1] = p[2] = p[3] = coloreSelezionato = -1;
    s1.style.backgroundColor = converti(coloreSelezionato);
    s2.style.backgroundColor = converti(coloreSelezionato);
    s3.style.backgroundColor = converti(coloreSelezionato);
    s4.style.backgroundColor = converti(coloreSelezionato);  

    tentativi--;

    vai.innerHTML = tentativi + 'tentativi rimasti';

});