# Pertemuan 4 — Operasi Vektor, Matriks, dan Sistem Linier

## Modul ringkas
- Operasi matriks adalah kekuatan utama Octave.
- Penting membedakan operasi matriks dan operasi elemen per elemen.
- Penyelesaian sistem linier lebih aman memakai operator pembagian kiri `\` daripada menghitung invers secara langsung.

## Konsep inti
- `A * B` berarti perkalian matriks.
- `A .* B` berarti perkalian elemen per elemen.
- `A'` adalah transpose konjugat, sedangkan `A.'` adalah transpose biasa.
- `A \ b` menyelesaikan sistem linier `A x = b`.
- Jika sistem tidak persegi atau singular, Octave menghitung solusi dengan norma minimum sesuai dokumentasi operator.

## Contoh penggunaan

```octave
clc
clear

A = [2 1; 1 3];
B = [1 2; 3 4];
b = [5; 6];

hasil_matriks = A * B
hasil_elemen = A .* B
transpose_A = A.'

x = A \ b

cek = A * x
```

## Penjelasan singkat fungsi dan perintah
- `*`: perkalian matriks.
- `.*`: perkalian elemen per elemen.
- `/` dan `\`: pembagian matriks kanan dan kiri.
- `./` dan `.\`: pembagian elemen per elemen.
- `^`: pangkat matriks jika bentuknya valid.
- `.^`: pangkat elemen per elemen.
- `det (A)`: determinan matriks.
- `rank (A)`: rank matriks.
- `norm (x)`: ukuran panjang vektor atau norma matriks.

## Latihan
1. Buat dua matriks `2 x 2` lalu hitung `A + B`, `A - B`, `A * B`, dan `A .* B`.
2. Tunjukkan perbedaan `A^2` dan `A.^2`.
3. Selesaikan sistem linier `2x + y = 7` dan `x + 3y = 8` dengan bentuk matriks.
4. Periksa hasil solusi dengan mengalikan kembali `A * x`.
5. Coba `inv (A) * b`, lalu bandingkan dengan `A \ b`.

## Tugas praktikum
1. Jelaskan perbedaan operasi matriks dan operasi elemen per elemen dengan contoh.
2. Kerjakan dua soal sistem linier lain menggunakan bentuk matriks.
3. Tulis kesimpulan mengapa `A \ b` lebih disarankan daripada menghitung invers secara langsung.

## Tugas koding
1. Buat script `operasi_matriks_lanjut.m` yang menerima dua matriks contoh dan menjalankan operasi dasar.
2. Tambahkan penyelesaian satu sistem linier `A x = b`.
3. Cetak hasil akhir dan lakukan pemeriksaan kembali dengan `A * x`.

## Referensi manual Octave
- Arithmetic operators: https://docs.octave.org/latest/Arithmetic-Ops.html
- Simple examples: https://docs.octave.org/latest/Simple-Examples.html
- Matrix manipulation: https://docs.octave.org/latest/Matrix-Manipulation.html
