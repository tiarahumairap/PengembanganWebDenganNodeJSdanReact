const sisi = 8;
const panjang = 9;
const lebar = 3;
const jari = 6;
const alas = 6;
const tinggi = 4;
const sisis = 6;

function LuasPersegi(s){
    return s * s;
}

function LuasPersegiPanjang(p, l){
    return p * l;
}

function LuasLingkaran(r){
    const pi = 3.14;
    return pi * r * r;
}

function LuasSegitiga(a, t){
    return 1/2 * a * t;
}


function KelilingPersegi(s){
    return 4 * s;
}

function KelilingPersegiPanjang(p, l){
    return 2 * (p + l);
}

function KelilingLingkaran(r){
    const pi = 3.14;
    return 2 * pi * r;
}

function KelilingSegitiga(s){
    return 3 * s;
}

console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====\n");
console.log(">> Luas Bangun Datar <<");
console.log("Luas Persegi Dengan Sisi", sisi, "Adalah", LuasPersegi(sisi));
console.log("Luas Persegi Panjang Dengan Panjang", panjang, "Dan Lebar", lebar, "Adalah", LuasPersegiPanjang(panjang, lebar));
console.log("Luas Lingkaran Dengan Jari-jari", jari, "Adalah", Math.ceil(LuasLingkaran(jari)));
console.log("Luas Segitiga Dengan Alas", alas, "Dan Tinggi", tinggi, "Adalah", LuasSegitiga(alas, tinggi));

console.log("\n>> Keliling Bangun Datar <<");
console.log("Keliling Persegi Dengan Sisi", sisi, "Adalah", KelilingPersegi(sisi));
console.log("Keliling Persegi Panjang Dengan Panjang", panjang, "Dan Lebar", lebar, "Adalah", KelilingPersegiPanjang(panjang, lebar));
console.log("Keliling Lingkaran Dengan Jari-jari", jari, "Adalah", KelilingLingkaran(jari));
console.log("Keliling Segitiga Dengan Sisi", sisi, "Adalah", KelilingSegitiga(sisis));

