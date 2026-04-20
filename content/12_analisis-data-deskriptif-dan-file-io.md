# Pertemuan 12 — Analisis Data Deskriptif dan File I/O

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: `mean`, `median`, `max`, `min`, `std`, `sum`, `cumsum`, `diff`.

## Capaian pembelajaran
- Menghitung ukuran statistik dasar dari suatu data.
- Membuat data acak sebagai bahan latihan analisis.
- Menyimpan dan memanggil kembali data hasil pengolahan.

## Pokok materi
- `mean`, `median`, `max`, `min`, `std`, `sum`, `cumsum`, `diff`.
- Data acak dengan `rand` dan `randn`.
- Visualisasi statistik sederhana: histogram, scatter, line plot.
- `save` dan `load` untuk menyimpan hasil kerja.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

data = randn(50, 1);

rata2 = mean(data)
tengah = median(data)
maks = max(data)
mini = min(data)
sd = std(data)

figure(1)
hist(data, 10)
grid on
title("Histogram data acak normal")
```

```octave
figure(2)
plot(data, "o-")
grid on
title("Plot garis data")

save data_statistik.mat data rata2 tengah maks mini sd
load data_statistik.mat
whos
```

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Bangkitkan 50 data acak normal.
2. Hitung rata-rata, median, maksimum, minimum, dan standar deviasi.
3. Buat histogram dan plot garis.
4. Simpan semua hasil ke file `.mat`.
5. Muat lagi file itu dan tampilkan `whos`.

## Tugas mandiri
Gunakan `cumsum` dan `diff` pada satu data contoh lalu jelaskan maknanya.

## Catatan pengajar
Mahasiswa perlu melihat bahwa statistik dasar bisa langsung diterapkan pada data yang mereka hasilkan sendiri. Sesi ini juga menjadi jembatan ke proyek mini berbasis data.

## Referensi utama

- PDF modul: Analisis Data, hal. 36–40, ditambah praktik save/load dari modul kerja awal.
- Manual GNU Octave (tautan bab terkait):
  - [Statistics](https://docs.octave.org/latest/Statistics.html)
  - [Descriptive Statistics](https://docs.octave.org/latest/Descriptive-Statistics.html)
  - [Simple File I/O](https://docs.octave.org/latest/Simple-File-I_002fO.html)
  - [Random Number Generation](https://docs.octave.org/latest/Random-Number-Generation.html)
