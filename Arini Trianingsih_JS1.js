//Arini Trianingsih_JS1
//if
var skor = 65;
var skor_min = 75;

if (skor < skor_min) {
    console.log('Nilai dibawah KKM');
}

//else
var number = -2;
if (number > 0) {
    console.log(number + ' merupakan Bilangan Positif')
} else {
    console.log(number + " merupakan Bilangan Negatif")
}

//nested if
var nilai = 86
var min_nilai= 70;
var max_nilai= 100;
if(nilai >= min_nilai){
    if(nilai <= max_nilai ){
        console.log('Lolos')
    }
}else{
    console.log('Tidak Lolos')
}

//switch case
let indikator = 'A';

switch (indikator) {
    case 'A': 
        console.log('Sangat Baik');
        break;
    case 'B':
        console.log('Baik');
        break;
    case 'C':
        console.log('Cukup Baik');
        break;
    case 'D':
        console.log('Kurang Baik');
        break;
    case 'E':
        console.log('Sangat Kurang Baik');
        break;
    default:
        console.log('Nilai Tidak Terdaftar!');
        break;
}

//for
var buku=10;
var bukuLayak=7;
var noBuku=1;

for(noBuku = bukuLayak+1; noBuku<=buku; noBuku++){
    console.log('Buku ' +noBuku+ ' dalam kondisi Rusak');
}

//while
let hobi = ["Berenang", "Bersepeda", "Menonton Film", "Badminton", "Jalan-Jalan"];
let y = 0;
while (y < hobi.length) {
    console.log("Aku Suka " + hobi[y])
    y++
}

//do while
let bilangan = 1;
do {
    if (bilangan % 2 !== 0) {
        console.log('Bilangan Ganjil: ' +bilangan);
    }
    bilangan++
} while (bilangan <= 10)

//function
function jmlLuasPersegi(a, b){
    var LuasA;
    var LuasB;
    var Total;

    LuasA = a * a;
    LuasB = b * b;

    Total = LuasA + LuasB;

    return Total;
}

console.log(jmlLuasPersegi(100, 50));