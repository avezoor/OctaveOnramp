# Pertemuan 10 — Visualisasi 2D Lanjut, `subplot`, Histogram, dan Interaksi

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: `subplot` untuk tata letak multi-grafik.

## Capaian pembelajaran
- Membuat beberapa grafik dalam satu figure.
- Mengenal grafik statistik dan diskrit seperti histogram, stem, dan scatter.
- Mengenal interaksi sederhana pada plot.

## Pokok materi
- `subplot` untuk tata letak multi-grafik.
- `hist`, `stem`, `scatter`, `bar`, `stairs`, `semilogx`, `semilogy`, `loglog`.
- `ginput` untuk memilih titik dari grafik aktif.
- Kapan memilih tiap jenis grafik.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

x = 0:0.1:10;
y = sin(x);

figure(1)

subplot(2,2,1)
plot(x, y)
grid on
title("plot")

subplot(2,2,2)
stem(x, y)
grid on
title("stem")

subplot(2,2,3)
stairs(x, y)
grid on
title("stairs")

subplot(2,2,4)
bar(x(1:10), y(1:10))
grid on
title("bar")
```

```octave
data = randn(1, 200);
figure(2)
hist(data, 20)
grid on
title("Histogram data acak")
```

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Buat satu figure berisi 4 subplot:
   - `sin(x)`
   - `cos(x)`
   - `sin(x)+cos(x)`
   - histogram data acak
2. Uji grafik `semilogx` atau `semilogy` untuk data eksponensial.
3. Buat plot titik sebaran dua vektor acak.
4. Coba `ginput(2)` pada sebuah grafik dan catat koordinatnya.

## Tugas mandiri
Buat dashboard kecil 2x2 untuk membandingkan tiga fungsi dan satu histogram.

## Catatan pengajar
Sesi ini cocok untuk memperlihatkan bahwa bentuk visual harus mengikuti jenis data. Jangan semua data dipaksa jadi grafik garis.

## Referensi utama

- PDF modul: Menggambar Grafik, hal. 28–35, khusus ragam grafik 2D.
- Manual GNU Octave (tautan bab terkait):
  - [Two-Dimensional Plots](https://docs.octave.org/latest/Two_002dDimensional-Plots.html)
  - [Interacting with Plots](https://docs.octave.org/latest/Interacting-with-Plots.html)
