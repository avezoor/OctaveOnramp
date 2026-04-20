# Pertemuan 9 — Visualisasi 2D Dasar

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Membuat domain data: `x = -10:0.1:10`.

## Capaian pembelajaran
- Membuat grafik 2D dengan `plot`.
- Memberi judul, label sumbu, legend, dan grid.
- Memahami hubungan antara vektor `x` dan `y` pada grafik.

## Pokok materi
- Membuat domain data: `x = -10:0.1:10`.
- Plot fungsi sederhana dan banyak kurva dalam satu axes.
- Atribut grafik: `title`, `xlabel`, `ylabel`, `legend`, `grid on`.
- Format garis sederhana.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

x = -2*pi:0.01:2*pi;
y1 = sin(x);
y2 = cos(x);

plot(x, y1, "b", x, y2, "r--")
grid on
title("Grafik sin(x) dan cos(x)")
xlabel("x")
ylabel("nilai fungsi")
legend("sin(x)", "cos(x)")
```

## Variasi cepat

```octave
fplot(@(x) sin(x)./x, [-20 20])
grid on
title("f(x) = sin(x) / x")
```

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Plot `y = x^2`, `y = x^3`, dan `y = sqrt(x)` pada domain yang sesuai.
2. Tambahkan judul, label, legend, dan grid.
3. Ganti gaya garis dan warna.
4. Plot `sin(x)` dan `cos(x)` dalam satu gambar.

## Tugas mandiri
Buat grafik perbandingan `e^x` dan `ln(x)` dan jelaskan domain yang valid.

## Catatan pengajar
Jangan hanya mengajari cara memanggil `plot`. Ajarkan juga kebiasaan visualisasi yang benar: sumbu harus jelas, kurva diberi label, dan domain fungsi dipilih secara sadar.

## Referensi utama

- PDF modul: Menggambar Grafik, hal. 27–35, khusus perintah dasar 2D.
- Manual GNU Octave (tautan bab terkait):
  - [Two-Dimensional Plots](https://docs.octave.org/latest/Two_002dDimensional-Plots.html)
  - [Two-dimensional Function Plotting](https://docs.octave.org/latest/Two_002ddimensional-Function-Plotting.html)
  - [Plot Annotations](https://docs.octave.org/latest/Plot-Annotations.html)
