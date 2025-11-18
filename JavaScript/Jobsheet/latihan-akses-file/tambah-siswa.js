const fs = require("fs");

const filePath = "siswa.json";
let daftar = []

//cek apakah file ada
if(fs.existsSync(filePath)){
    const content = fs.readFileSync(filePath, "utf8");
    daftar = JSON.parse(content);
}

//data baru
let siswabaru1 = {
    nama: "Sunflower",
    kelas: "Web",
    nilai: [93, 97, 83],
}

let siswabaru2 = {
    nama: "Magnolia",
    kelas: "Web",
    nilai: [98, 77, 68],
}

daftar.push(siswabaru1);
daftar.push(siswabaru2);

fs.writeFileSync(filePath, JSON.stringify(daftar, null, 2));
console.log("Data siswa berhasil ditambahkan ke siswa.json");