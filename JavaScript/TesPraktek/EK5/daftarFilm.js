const fs = require('fs');
//lib

const teks = fs.readFileSync("film.json", "utf-8");
//baca file .json sebagai teks

const film = JSON.parse(teks);
//ubah json, object => array object

//menambah film baru (object) ke data.json
film.push({judul: "Dilan 1990", tahun: 2018, genre: "Romantis"});

fs.writeFileSync("film.json", JSON.stringify(film, null, 2));
//menyimpan/menulis ulang array ke film.json. stringify merubah array menjadi teks json
console.log("Data berhasil ditambahkan!");

console.log("Daftar Film: ");
film.forEach((item, index) => {
    console.log(`${index + 1}. ${item.judul} (${item.tahun}) - ${item.genre}`)
});