# Pertemuan 4 — Operasi Vektor, Matriks, dan Sistem Linier

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Penjumlahan dan pengurangan matriks.

## Capaian pembelajaran
- Membedakan operasi elemen-per-elemen dan operasi aljabar matriks.
- Menggunakan operator `.*`, `./`, `.^` dengan tepat.
- Menyelesaikan sistem linier sederhana dengan `A \ b`.

## Pokok materi
- Penjumlahan dan pengurangan matriks.
- Perkalian matriks `A*B` vs perkalian elemen `A.*B`.
- Pembagian kiri `A \ b` untuk sistem persamaan linier.
- Kapan `inv(A)` tidak perlu dipakai.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

A = [1 2; 3 4];
B = [5 6; 7 8];

A + B
A - B
A * B
A .* B

x = [1 2 3];
y = [4 5 6];
x .* y
x .^ 2

M = [2 1; 1 3];
b = [5; 7];
solusi = M \ b
```

## Inti konsep
- Gunakan `*` untuk aljabar matriks.
- Gunakan `.*` untuk operasi setiap elemen.
- Untuk sistem linier, lebih baik `A \ b` daripada `inv(A) * b`.

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Buat dua matriks 2x2 lalu hitung `A+B`, `A-B`, `A*B`, dan `A.*B`.
2. Buat vektor `x = 1:5`, lalu hitung `x.^2` dan `1 ./ x`.
3. Selesaikan sistem:
   - `2x + y = 5`
   - `x + 3y = 7`
4. Bandingkan hasil `A \ b` dan `inv(A)*b`.
5. Jelaskan kapan hasil `A*B` bisa dihitung dan kapan gagal.

## Tugas mandiri
Buat soal sistem linier 3 variabel, lalu selesaikan dengan Octave.

## Catatan pengajar
Kesalahan paling umum mahasiswa pemula adalah memakai `*` ketika yang dibutuhkan `.*`. Karena itu, beri banyak contoh yang memperlihatkan perbedaan makna matematis kedua operator tersebut.

## Referensi utama

- PDF modul: Operasi Array, Vektor, dan Matriks, khusus operasi matriks, hal. 16–19.
- Manual GNU Octave (tautan bab terkait):
  - [Creating a Matrix](https://docs.octave.org/latest/Creating-a-Matrix.html)
  - [Basic Matrix Functions](https://docs.octave.org/latest/Basic-Matrix-Functions.html)
  - [Matrix Arithmetic](https://docs.octave.org/latest/Matrix-Arithmetic.html)
