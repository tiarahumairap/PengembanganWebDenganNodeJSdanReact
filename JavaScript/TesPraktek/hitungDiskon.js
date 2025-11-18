const NasiGoreng = 25000;
const MieGoreng = 22000;
const Capcay = 32000;
const Diskon = 10;
const Pembayaran = 100000

const TotalHarga = NasiGoreng + MieGoreng + Capcay;
const TotalDiskon = TotalHarga * (Diskon/100);
const HargaDiskon = TotalHarga - TotalDiskon;
const Kembali = Pembayaran - HargaDiskon


console.log("=========== Rincian Belanja ===========");
console.log("Harga Nasi Goreng      = Rp.", NasiGoreng);
console.log("Harga Mie Goreng       = Rp.", MieGoreng);
console.log("Harga Capcay           = Rp.", Capcay);
console.log("============ Hitung Diskon ============");
console.log("Harga Total            = Rp.", TotalHarga);
console.log("Diskon                 =", Diskon, "%");
console.log("Harga Setelah Diskon   = Rp.", HargaDiskon);
console.log("=======================================");
console.log("Pembayaran             = Rp.", Pembayaran);
console.log("Kembalian              = Rp.", Kembali);
console.log("=======================================");
