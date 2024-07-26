/** @format */
const dataSaya = "barang recommended";
let setHarga = 100;

let deskripsi = document.getElementById("Deskripsi");
console.log(deskripsi);

console.log(`Produk saya berupa ${dataSaya} dengan harga dibawah 100 ribu`);

function namaProduk() {
  let keterangan;

  if (setHarga > 100) {
    keterangan = "Barang Gratis";

  } else if (setHarga >= 10 && setHarga <= 90) {
    keterangan = "Anda mendapat diskon jika belanja pas 100 ribu";

  } else {
    keterangan = "Silahkan Masukkan Keranjang";
  }
  return (deskripsi.innerHTML = keterangan);
}

console.log(setHarga);
namaProduk();
