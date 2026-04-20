# Pertemuan 13 — Regresi, Interpolasi, dan Fitting Polinomial

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Data titik `x` dan `y`.

## Capaian pembelajaran
- Memahami fitting polinomial sebagai pendekatan data eksperimen.
- Menggunakan `polyfit` dan `polyval` untuk membentuk kurva pendekatan.
- Mengenal interpolasi 1D sederhana dengan `interp1`.

## Pokok materi
- Data titik `x` dan `y`.
- `polyfit(x, y, n)` untuk koefisien polinomial orde `n`.
- `polyval` untuk evaluasi kurva hasil fitting.
- Perbandingan fitting linier vs kuadrat.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

x = 0:0.1:1;
y = [-0.447 1.976 3.25 6.16 7.05 5.26 7.66 9.56 9.48 9.30 11.2];

p1 = polyfit(x, y, 1);
p2 = polyfit(x, y, 2);

x1 = linspace(0, 1, 100);
f1 = polyval(p1, x1);
f2 = polyval(p2, x1);

figure(1)
plot(x, y, "o", x1, f1, "-")
grid on
legend("data", "fit linier")
title("Fitting linier")

figure(2)
plot(x, y, "o", x1, f2, "-")
grid on
legend("data", "fit kuadrat")
title("Fitting kuadrat")
```

```octave
x2 = 0:1:10;
y2 = sin(x2);
interp1(x2, y2, pi, "linear")
```

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Siapkan 8–12 titik data buatan sendiri.
2. Lakukan fitting linier dan kuadrat.
3. Gambar data asli dan kurva hasil fitting.
4. Bandingkan secara visual mana yang lebih baik.
5. Uji `interp1` untuk menaksir nilai di titik yang tidak ada pada data awal.

## Tugas mandiri
Buat studi kasus kecil: data pertumbuhan, suhu, atau penjualan, lalu lakukan fitting paling sederhana.

## Catatan pengajar
Tekankan bahwa fitting bukan berarti 'mencari kurva paling rumit', tetapi mencari pendekatan yang cukup baik untuk tujuan analisis.

## Referensi utama

- PDF modul: Analisis Data, khusus pencocokan kurva dan contoh `polyfit`, hal. 37–40.
- Manual GNU Octave (tautan bab terkait):
  - [Polynomial Interpolation](https://docs.octave.org/latest/Polynomial-Interpolation.html)
  - [Evaluating Polynomials](https://docs.octave.org/latest/Evaluating-Polynomials.html)
  - [Interpolation](https://docs.octave.org/latest/Interpolation.html)
