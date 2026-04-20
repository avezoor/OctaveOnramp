# Pertemuan 10 — Visualisasi 2D Lanjut, subplot, Histogram, dan Interaksi

## Modul ringkas
- Setelah memahami `plot`, langkah berikutnya adalah menyusun banyak grafik dalam satu tampilan dan memilih tipe plot yang sesuai.
- `subplot` dipakai untuk membandingkan beberapa grafik.
- Histogram membantu melihat sebaran data.

## Konsep inti
- `subplot (m, n, p)` membagi figure menjadi kisi `m x n` dan mengaktifkan panel ke-`p`.
- `hist` menampilkan jumlah data dalam sejumlah bin.
- `bar`, `stem`, dan `stairs` berguna untuk tipe data diskret atau hitungan.
- Interaksi visual sederhana dapat dilakukan dengan zoom, pan, atau pemilihan titik.

## Contoh penggunaan

```octave
clc
clear

x = linspace (0, 2*pi, 200);
data = randn (1, 200);

subplot (2, 2, 1)
plot (x, sin (x), "b", "linewidth", 1.5)
title ("sin(x)")
grid on

subplot (2, 2, 2)
plot (x, cos (x), "r", "linewidth", 1.5)
title ("cos(x)")
grid on

subplot (2, 2, 3)
bar (1:5, [3 5 2 6 4])
title ("Bar chart")

subplot (2, 2, 4)
hist (data, 15)
title ("Histogram data acak")
```

## Penjelasan singkat fungsi dan perintah
- `subplot`: membuat beberapa axes dalam satu figure.
- `hist`: histogram sederhana berdasarkan jumlah bin atau pusat bin.
- `bar`: diagram batang.
- `stem`: menampilkan data diskret berupa garis vertikal dengan penanda.
- `stairs`: menampilkan grafik bertangga.
- `axis tight`: menyesuaikan batas axes ke data.
- `hold on`: menumpuk beberapa objek pada axes yang sama.

## Latihan
1. Buat satu figure berisi empat subplot yang menampilkan `sin`, `cos`, `tan`, dan `exp`.
2. Buat histogram dari 100 data acak normal.
3. Bandingkan `bar`, `stem`, dan `plot` untuk data yang sama.
4. Tambahkan `axis tight` dan `grid on` pada beberapa subplot.
5. Susun layout subplot yang mudah dibaca untuk laporan praktikum.

## Tugas praktikum
1. Jelaskan kapan memakai `subplot`, `hist`, `bar`, dan `stem`.
2. Buat analisis singkat terhadap bentuk histogram dari data acak normal.
3. Rancang layout figure yang cocok untuk membandingkan empat jenis visualisasi.

## Tugas koding
1. Buat script `visualisasi_2d_lanjut.m` yang memuat minimal empat subplot berbeda.
2. Sertakan satu histogram dan satu bar chart di dalamnya.
3. Tambahkan pengaturan tampilan agar tiap subplot mudah dibaca.

## Referensi manual Octave
- Two-dimensional plots: https://docs.octave.org/latest/Two_002dDimensional-Plots.html
- Multiple plots on one page: https://docs.octave.org/latest/Multiple-Plots-on-One-Page.html
- Interacting with plots: https://docs.octave.org/latest/Interacting-with-Plots.html
