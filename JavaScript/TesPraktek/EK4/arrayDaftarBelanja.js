daftarBelanja = [];
daftarBelanja.push("Beras", "Minyak", "Gula");
// console.log(daftarBelanja)

daftarBelanja.push("Telur", "Sayur", "Buah");
// console.log(daftarBelanja)

// console.log(daftarBelanja.indexOf("Minyak"));

daftarBelanja.splice(1, 1);
// console.log(daftarBelanja)

daftarBelanja.sort();

daftarBelanja.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});