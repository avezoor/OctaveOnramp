# Pertemuan 9 — Visualisasi 2D Dasar

## Modul ringkas
- Visualisasi 2D membantu membaca pola fungsi dan data dengan cepat.
- Fungsi inti yang paling sering dipakai adalah `plot`.
- Label sumbu, judul, grid, dan legenda harus selalu dibuat jelas.

## Konsep inti
- `plot (x, y)` membuat grafik garis 2D.
- Jika hanya menulis `plot (y)`, sumbu `x` otomatis menjadi `1:numel (y)`.
- Banyak pasangan data dapat digambar dalam satu pemanggilan `plot`.
- `xlabel`, `ylabel`, `title`, `legend`, dan `grid on` dipakai untuk memperjelas grafik.

## Contoh penggunaan

```octave
clc
clear

x = linspace (0, 2*pi, 200);
y1 = sin (x);
y2 = cos (x);

plot (x, y1, "b-", x, y2, "r--", "linewidth", 2)
xlabel ("x")
ylabel ("nilai fungsi")
title ("Grafik sin(x) dan cos(x)")
legend ("sin(x)", "cos(x)")
grid on
```

## Penjelasan singkat fungsi dan perintah
- `plot`: membuat grafik garis 2D.
- `xlabel`, `ylabel`: memberi nama sumbu.
- `title`: memberi judul grafik.
- `legend`: memberi keterangan kurva.
- `grid on`: menampilkan garis bantu.
- `hold on`: menahan axes agar kurva baru ditambahkan ke grafik yang sama.
- `xlim`, `ylim`: mengatur batas sumbu.
- `print`: menyimpan grafik ke file seperti PNG atau PDF.

## Latihan
1. Gambar `sin (x)` pada rentang `0` sampai `4*pi`.
2. Gambar `x.^2` dan `sqrt (x)` dalam satu grafik.
3. Tambahkan judul, label sumbu, legenda, dan grid.
4. Ubah gaya garis dan warna minimal untuk dua kurva.
5. Simpan grafik ke file gambar dengan `print`.

## Tugas praktikum
1. Buat ringkasan elemen penting grafik yang baik: judul, label sumbu, legenda, dan grid.
2. Bandingkan dua grafik yang informatif dan yang kurang informatif, lalu jelaskan perbedaannya.
3. Tulis langkah menyimpan grafik ke file gambar.

## Tugas koding
1. Buat script `plot_fungsi_dasar.m` yang menggambar minimal dua fungsi dalam satu figure.
2. Lengkapi grafik dengan anotasi dasar yang rapi.
3. Simpan hasil plot ke file PNG menggunakan `print`.

## Referensi manual Octave
- Two-dimensional plots: https://docs.octave.org/latest/Two_002dDimensional-Plots.html
- Plot annotations: https://docs.octave.org/latest/Plot-Annotations.html
- Printing and saving plots: https://docs.octave.org/latest/Printing-and-Saving-Plots.html
