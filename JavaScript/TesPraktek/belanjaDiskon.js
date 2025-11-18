const Headset = 225000;
const Mouse = 150000;
const Keyboard = 350000;
const Pembayaran = 800000;
let Diskon;


const TotalHarga = Headset + Mouse + Keyboard

if(TotalHarga <250000){
    Diskon = 0;
}else if(TotalHarga > 250000 && TotalHarga < 499999){
    Diskon = 5;
}else if(TotalHarga > 500000 && TotalHarga < 799999){
    Diskon = 10;
}else{
    Diskon = 15;
}

const TotalDiskon = TotalHarga * (Diskon/100);
const HargaDiskon = TotalHarga - TotalDiskon;
const Kembali = Pembayaran - HargaDiskon

console.log("=========== Rincian Belanja ===========");
console.log("Headset                = Rp.", Headset);
console.log("Mouse                  = Rp.", Mouse);
console.log("Keyboard               = Rp.", Keyboard);
console.log("\nTotal Belanja          = Rp.", TotalHarga);
console.log("Diskon                 =", Diskon, "%");
console.log("Total Setelah Diskon   = Rp.", HargaDiskon);
console.log("Pembayaran             = Rp.", Pembayaran);
console.log("Kembalian              = Rp.", Kembali);