let buah = [];

//menambahkan data buah dengan push
buah.push("Apel", "Mangga", "Jeruk", "Semangka", "Pisang","Anggur", "Nanas");
buah.sort();


// console.log(buah);

//menampilkan data buah dengan perulangan
buah.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});