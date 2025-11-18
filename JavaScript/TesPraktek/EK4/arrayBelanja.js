let daftar = [
    {nama: "New Balance NB530", harga: 390000},
    {nama: "Nike Vornero 5", harga: 350000},
    {nama: "Adidas Samba", harga: 180000},
    {nama: "Onitsuka Tiger Mexico", harga: 420000}]
console.log(daftar);

console.log("===== Rincian Belanja Sepatu =====");
daftar.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nama} - Rp. ${item.harga}`);
});

let TotalHarga = 0;

daftar.forEach((item) => {
    TotalHarga += item.harga;

    if(TotalHarga < 250000){
        Diskon = 0;
    }else if(TotalHarga > 250000 && TotalHarga < 499999){
        Diskon = 5;
    }else if(TotalHarga > 500000 && TotalHarga < 799999){
        Diskon = 10;
    }else{
        Diskon = 15;
    }
});


let HargaDiskon = TotalHarga - (TotalHarga * (Diskon/100))
let pembayaran = 1200000;
let kembali = pembayaran - HargaDiskon;

console.log(`
Total Belanja           = Rp.${TotalHarga}
Diskon                  = ${Diskon}%
Total Setelah Diskon    = Rp.${HargaDiskon}
Pembayaran              = Rp.${pembayaran}
Kembalian               = Rp.${kembali}`);
