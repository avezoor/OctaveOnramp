# Pertemuan 3 — Vektor, Range, dan Matriks Dasar

## Modul ringkas
- Struktur data inti di Octave adalah vektor dan matriks.
- Range dengan operator titik dua `:` sangat penting untuk membuat deret angka secara cepat.
- Indeks, `end`, dan operator `:` dipakai untuk mengambil bagian data.

## Konsep inti
- Vektor baris ditulis seperti `[1 2 3]`, vektor kolom seperti `[1; 2; 3]`.
- Range `awal:akhir` atau `awal:langkah:akhir` menghasilkan deret berjarak tetap.
- Matriks dibuat dengan memisahkan kolom memakai spasi atau koma, dan baris memakai titik koma.
- Indeks di Octave dimulai dari 1.
- `A(:)` mengubah isi matriks menjadi vektor kolom.

## Contoh penggunaan

```octave
clc
clear

v1 = 1:5
v2 = 0:0.5:2
v3 = linspace (0, 1, 6)

A = [1 2 3; 4 5 6; 7 8 9]
B = zeros (2, 3)
C = ones (3, 2)

baris_pertama = A(1, :)
kolom_kedua = A(:, 2)
elemen_akhir = A(end, end)
semua_elemen = A(:)
```

## Penjelasan singkat fungsi dan perintah
- `:`: pembentuk range dan juga pemilih seluruh baris atau kolom saat indexing.
- `linspace (a, b, n)`: membuat `n` titik dari `a` sampai `b`.
- `zeros (m, n)`: matriks nol berukuran `m x n`.
- `ones (m, n)`: matriks satu berukuran `m x n`.
- `end`: merujuk ke indeks terakhir pada dimensi yang sedang diakses.
- `A(i, j)`: mengambil elemen baris ke-`i`, kolom ke-`j`.

## Latihan
1. Buat vektor `1:2:15` dan `10:-2:0`.
2. Buat matriks `3 x 3` berisi bilangan 1 sampai 9.
3. Ambil baris ke-2, kolom ke-3, dan submatriks dua baris pertama.
4. Ubah matriks menjadi vektor kolom dengan `(:)`.
5. Bandingkan `0:0.1:1` dengan `linspace (0, 1, 11)`.

## Tugas praktikum
1. Buat ringkasan tentang perbedaan vektor baris, vektor kolom, range, dan matriks.
2. Tunjukkan tiga contoh indexing berbeda menggunakan `:`, `end`, dan indeks eksplisit.
3. Jelaskan kapan lebih tepat memakai `linspace` daripada range biasa.

## Tugas koding
1. Buat script `latihan_vektor_matriks.m` yang membentuk tiga vektor dan dua matriks berbeda.
2. Ambil beberapa elemen penting dari matriks lalu simpan ke variabel baru.
3. Ubah salah satu matriks menjadi vektor kolom dan tampilkan hasilnya.

## Referensi manual Octave
- Ranges: https://docs.octave.org/latest/Ranges.html
- Index expressions: https://docs.octave.org/latest/Index-Expressions.html
- Simple examples: https://docs.octave.org/latest/Simple-Examples.html
