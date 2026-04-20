# Pertemuan 8 — Fungsi Buatan Pengguna, Banyak Output, dan Function Handle

## Modul ringkas
- Fungsi buatan pengguna dipakai untuk memecah program besar menjadi blok kecil yang dapat dipakai ulang.
- Satu fungsi bisa memiliki beberapa input dan beberapa output.
- Function handle menyimpan referensi ke fungsi sehingga bisa dipanggil tidak langsung atau dikirim ke fungsi lain.

## Konsep inti
- Deklarasi fungsi dimulai dengan kata kunci `function`.
- Variabel di dalam fungsi bersifat lokal.
- `nargin` membantu memeriksa jumlah argumen yang diberikan.
- Function handle ditulis sebagai `@nama_fungsi`.
- Anonymous function ditulis seperti `@(x) x.^2 + 1`.

## Contoh penggunaan

```octave
function [luas, keliling] = lingkaran (r)
  luas = pi * r^2;
  keliling = 2 * pi * r;
endfunction

[L, K] = lingkaran (7)

f = @sin;
hasil1 = f (pi / 2)

g = @(x) x.^2 + 2*x + 1;
hasil2 = g (3)
```

## Penjelasan singkat fungsi dan perintah
- `function y = nama (arg)`: bentuk dasar fungsi dengan satu output.
- `function [a, b] = nama (arg)`: fungsi dengan banyak output.
- `endfunction`: penutup deklarasi fungsi.
- `nargin`: jumlah argumen yang benar-benar dikirim saat fungsi dipanggil.
- `usage ("nama_fungsi (arg)")`: pesan bantuan penggunaan fungsi.
- `@sin`: function handle ke fungsi bawaan.
- `feval (f, x)`: memanggil fungsi melalui handle, walau `f(x)` biasanya lebih ringkas.

## Latihan
1. Buat fungsi `persegi (s)` yang mengembalikan luas dan keliling.
2. Buat fungsi `rata3 (a, b, c)` yang mengembalikan rata-rata tiga bilangan.
3. Tambahkan pengecekan `nargin` pada salah satu fungsi.
4. Buat anonymous function untuk menghitung `3*x^2 - 2*x + 5`.
5. Bandingkan pemanggilan lewat `f(x)` dan `feval (f, x)`.

## Tugas praktikum
1. Jelaskan struktur dasar deklarasi fungsi di Octave.
2. Bandingkan fungsi biasa, function handle, dan anonymous function dalam tabel singkat.
3. Buat catatan tentang manfaat `nargin` saat memvalidasi input fungsi.

## Tugas koding
1. Buat file fungsi `konversi_suhu.m` yang mengubah Celsius ke Fahrenheit dan Kelvin.
2. Buat file fungsi `stat_ringkas.m` yang mengembalikan minimal dua output dari sebuah vektor.
3. Buat satu anonymous function tambahan dan gunakan untuk menghitung nilai pada beberapa input.

## Referensi manual Octave
- Defining functions: https://docs.octave.org/latest/Defining-Functions.html
- Multiple return values: https://docs.octave.org/latest/Multiple-Return-Values.html
- Function handles and anonymous functions: https://docs.octave.org/latest/Function-Handles-and-Anonymous-Functions.html
