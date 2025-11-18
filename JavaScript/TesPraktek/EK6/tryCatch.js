let angka1 = 10;
let angka2 = 0;

function bagiAngka(a, b){
    try{
        if(b === 0){
            throw new Error("Tidak bisa membagi dengan nol");
        }
        let hasil = a/b;
        console.log("Hasil pembagian:", hasil);
    }catch (error){
        console.error("Terjadi kesalahan:", error.message);
    }
    console.log("Program selesai.");
};

bagiAngka(angka1, angka2);

