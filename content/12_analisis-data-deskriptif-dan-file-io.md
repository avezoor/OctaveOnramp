# Pertemuan 12 — Analisis Data Deskriptif dan File I/O

## Modul ringkas
- Analisis deskriptif merangkum inti data dengan ukuran pusat, sebaran, dan posisi.
- File I/O dibutuhkan agar data bisa dibaca dari file dan hasil bisa disimpan kembali.
- Octave menyediakan fungsi statistik dasar dan beberapa cara membaca data numerik maupun teks.

## Konsep inti
- Ukuran pusat utama: `mean`, `median`, `mode`.
- Ukuran sebaran utama: `std`, `var`, `range`, `iqr`.
- `quantile` dan `prctile` membantu melihat posisi data.
- `save` dan `load` dipakai untuk file data Octave.
- `dlmread`, `csvread`, `textscan`, dan `importdata` dipakai untuk file teks atau CSV.

## Contoh penggunaan

```octave
clc
clear

data = [72 75 81 90 88 76 79 92 85 77];

rata2 = mean (data)
tengah = median (data)
sd = std (data)
q = quantile (data, [0.25 0.5 0.75])

save ("nilai.mat", "data")
clear data
load ("nilai.mat")
```

## Contoh membaca data numerik sederhana

```octave
M = [1 2 3; 4 5 6; 7 8 9];
csvwrite ("contoh.csv", M)
N = csvread ("contoh.csv")
```

## Penjelasan singkat fungsi dan perintah
- `mean`: rata-rata.
- `median`: nilai tengah.
- `std`: simpangan baku.
- `var`: varians.
- `quantile`: kuantil data.
- `save` dan `load`: simpan dan muat variabel Octave.
- `dlmread`: membaca data numerik bertanda pemisah.
- `csvread` dan `csvwrite`: baca tulis CSV numerik sederhana.
- `textscan`: membaca teks terformat dari file atau string.
- `importdata`: impor data dari beberapa format umum.

## Latihan
1. Hitung `mean`, `median`, `std`, `min`, dan `max` untuk sebuah vektor nilai.
2. Hitung kuartil dengan `quantile`.
3. Simpan sebuah matriks ke file `.mat`, lalu muat kembali.
4. Buat file CSV kecil dan baca lagi isinya.
5. Susun ringkasan deskriptif singkat dari data yang kamu analisis.

## Tugas praktikum
1. Buat laporan ringkas statistik deskriptif dari satu set data minimal 10 observasi.
2. Bandingkan penyimpanan data menggunakan `.mat` dan `.csv`.
3. Jelaskan alur sederhana membaca data, menganalisis, lalu menyimpan hasilnya kembali.

## Tugas koding
1. Buat script `analisis_data_sederhana.m` yang membaca atau membentuk satu set data numerik.
2. Hitung statistik dasar dan tampilkan hasilnya secara rapi.
3. Simpan data atau hasil ringkasan ke file menggunakan salah satu metode I/O yang dipelajari.

## Referensi manual Octave
- Statistics: https://docs.octave.org/latest/Statistics.html
- Descriptive statistics: https://docs.octave.org/latest/Descriptive-Statistics.html
- Simple file I/O: https://docs.octave.org/latest/Simple-File-I_002fO.html
