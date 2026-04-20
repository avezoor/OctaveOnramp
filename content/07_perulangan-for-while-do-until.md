# Pertemuan 7 — Perulangan for, while, do-until, break, dan continue

## Modul ringkas
- Perulangan dipakai saat suatu proses harus diulang.
- `for` cocok jika jumlah iterasi sudah diketahui.
- `while` dan `do-until` cocok jika iterasi berhenti saat kondisi tertentu terpenuhi.

## Konsep inti
- `for` mengiterasi range, vektor, matriks, atau cell array.
- `while` terus berjalan selama kondisi bernilai benar.
- `do ... until` menjalankan blok minimal satu kali.
- `break` menghentikan loop lebih cepat.
- `continue` melewati sisa isi loop pada iterasi saat ini.

## Contoh penggunaan

```octave
clc
clear

total = 0;
for i = 1:5
  total += i;
endfor

disp (total)

i = 1;
while (i <= 5)
  printf ("i = %d\n", i)
  i++;
endwhile

n = 0;
do
  n++;
until (n >= 3)
```

## Penjelasan singkat fungsi dan perintah
- `for i = 1:10`: loop dengan pencacah.
- `while (kondisi)`: loop berbasis kondisi awal.
- `do ... until (kondisi)`: loop yang pasti jalan sekali.
- `break`: keluar dari loop saat ini.
- `continue`: lanjut ke iterasi berikutnya.
- `i++`: menambah nilai `i` satu.

## Latihan
1. Hitung jumlah bilangan 1 sampai 100 dengan `for`.
2. Buat tabel perkalian angka 7 menggunakan `for`.
3. Gunakan `while` untuk mencari bilangan terkecil yang kuadratnya lebih dari 500.
4. Gunakan `continue` untuk menjumlahkan hanya bilangan ganjil dari 1 sampai 20.
5. Buat menu input berulang yang berhenti jika pengguna mengetik angka 0.

## Tugas praktikum
1. Jelaskan perbedaan penggunaan `for`, `while`, dan `do-until`.
2. Buat tiga contoh kasus yang membutuhkan `break` atau `continue`.
3. Tulis algoritma singkat untuk menghitung deret bilangan menggunakan loop.

## Tugas koding
1. Buat script `deret_dan_perulangan.m` yang menghasilkan jumlah, rata-rata, dan daftar bilangan tertentu.
2. Gunakan `for` untuk satu bagian dan `while` untuk bagian lain.
3. Tambahkan contoh `break` dan `continue` yang benar-benar dipakai dalam program.

## Referensi manual Octave
- Statements: https://docs.octave.org/latest/Statements.html
- The for statement: https://docs.octave.org/latest/The-for-Statement.html
- The while statement: https://docs.octave.org/latest/The-while-Statement.html
- The do-until statement: https://docs.octave.org/latest/The-do_002duntil-Statement.html
