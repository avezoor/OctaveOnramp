# Pertemuan 2 — Variabel, Skalar, Operator, dan Format Output

## Modul ringkas
- Variabel di Octave bersifat dinamis, jadi nama yang sama dapat menyimpan angka, string, atau matriks.
- Operator aritmetika dipakai untuk komputasi skalar maupun matriks.
- Format output penting agar hasil numerik mudah dibaca dan dilaporkan.

## Konsep inti
- Penugasan memakai operator `=`.
- Operator dasar: `+`, `-`, `*`, `/`, `\`, `^`.
- Untuk operasi elemen per elemen gunakan bentuk bertitik seperti `.*`, `./`, dan `.^`.
- Fungsi numerik dasar yang sering dipakai antara lain `abs`, `sqrt`, `exp`, `log`, `sin`, `cos`, `round`, `floor`, dan `ceil`.
- Output bisa ditampilkan otomatis, dengan `disp`, atau dengan format terkontrol melalui `printf`.

## Contoh penggunaan

```octave
clc
clear

format short

x = 5;
y = 2;

jumlah = x + y
bagi = x / y
pangkat = x ^ y

disp ("Nilai akar x:")
disp (sqrt (x))

printf ("sin(pi/6) = %.4f\n", sin (pi / 6))
printf ("exp(2) = %.4f\n", exp (2))
printf ("sisa 17 dibagi 5 = %d\n", rem (17, 5))
```

## Penjelasan singkat fungsi dan perintah
- `format short` dan `format long`: mengatur tampilan jumlah digit hasil.
- `disp`: menampilkan teks atau nilai tanpa format khusus.
- `printf`: menampilkan output dengan format seperti `%d`, `%f`, atau `%.3f`.
- `rem (a, b)`: sisa pembagian `a` oleh `b`.
- `sqrt (x)`: akar kuadrat.
- `exp (x)`: nilai `e^x`.
- `log (x)`: logaritma natural.
- `sin`, `cos`, `tan`: fungsi trigonometri dengan satuan radian.

## Latihan
1. Hitung `sqrt (49)`, `abs (-12)`, `exp (3)`, dan `log (10)`.
2. Ubah 30 derajat ke radian, lalu hitung `sin`, `cos`, dan `tan`.
3. Tampilkan hasil yang sama memakai output otomatis, `disp`, dan `printf`.
4. Buat program singkat untuk menghitung luas dan keliling lingkaran dari jari-jari `r`.
5. Bandingkan hasil `format short` dan `format long` untuk nilai `pi`.

## Tugas praktikum
1. Susun tabel berisi minimal 12 fungsi matematika dasar beserta contoh pemakaiannya.
2. Jelaskan perbedaan operator `*`, `/`, `^` dengan operator elemen per elemen `.*`, `./`, `.^` secara singkat.
3. Dokumentasikan hasil tampilan `format short` dan `format long` untuk tiga bilangan berbeda.

## Tugas koding
1. Buat script `hitung_nilai_aritmetika.m` yang menghitung beberapa ekspresi matematika dasar.
2. Tampilkan hasil dengan `disp` dan `printf` dalam format yang rapi.
3. Tambahkan perhitungan konversi derajat ke radian lalu hitung nilai `sin`, `cos`, dan `tan`.

## Referensi manual Octave
- Assignment expressions: https://docs.octave.org/latest/Assignment-Ops.html
- Arithmetic operators: https://docs.octave.org/latest/Arithmetic-Ops.html
- Simple examples: https://docs.octave.org/latest/Simple-Examples.html
