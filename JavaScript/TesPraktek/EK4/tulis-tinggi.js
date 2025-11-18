// Data array
const list = [
  { nama: "Rose", tinggi: "178 cm" },
  { nama: "Magnolia", tinggi: "153 cm" },
  { nama: "Daisy", tinggi: "165 cm" },
  { nama: "Jasmine", tinggi: "161 cm" },
  { nama: "Violet", tinggi: "159 cm" },
];

list.sort((a, b) => a.nama.localeCompare(b.nama));

const daftar = document.querySelector(".daftar");

let isiFile = "";
list.forEach((item, index) => {
  isiFile += `<p>${item.nama}: ${item.tinggi}</p>`;
});

daftar.innerHTML += isiFile;
