# Pertemuan 11 — Visualisasi 3D dan Permukaan

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: `meshgrid` untuk membangun koordinat `X` dan `Y`.

## Capaian pembelajaran
- Memahami cara membangun grid 3D dengan `meshgrid`.
- Membuat `mesh`, `surf`, `contour3`, dan `plot3`.
- Mengaitkan data 2 variabel bebas dengan permukaan 3D.

## Pokok materi
- `meshgrid` untuk membangun koordinat `X` dan `Y`.
- `mesh` dan `surf` untuk permukaan.
- `contour`, `contour3`, `plot3` untuk variasi tampilan.
- Pengaruh sudut pandang dan pewarnaan.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

tx = linspace(-8, 8, 41);
ty = linspace(-8, 8, 41);
[xx, yy] = meshgrid(tx, ty);

r = sqrt(xx.^2 + yy.^2) + eps;
zz = sin(r) ./ r;

figure(1)
mesh(tx, ty, zz)
xlabel("x")
ylabel("y")
zlabel("z")
title("Mesh plot")
```

```octave
figure(2)
surf(xx, yy, zz)
xlabel("x")
ylabel("y")
zlabel("z")
title("Surface plot")
```

```octave
t = 0:0.1:10*pi;
r = linspace(0, 1, numel(t));
z = linspace(0, 1, numel(t));
figure(3)
plot3(r.*sin(t), r.*cos(t), z)
grid on
title("Plot3 helix")
```

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Buat grid dengan `meshgrid`.
2. Visualisasikan fungsi:
   - `z = x.^2 + y.^2`
   - `z = sin(x).*cos(y)`
3. Tampilkan hasil dengan `mesh` dan `surf`.
4. Tambahkan `contour` atau `contour3`.
5. Ubah judul dan label sumbu.

## Tugas mandiri
Buat satu laporan singkat: apa perbedaan `mesh`, `surf`, dan `plot3`?

## Catatan pengajar
Mahasiswa biasanya tertarik dengan 3D, tetapi tetap tekankan bahwa 3D dipakai jika benar-benar menambah makna, bukan sekadar membuat grafik terlihat keren.

## Referensi utama

- PDF modul: Menggambar Grafik, hal. 30–35, khusus grafik 3D.
- Manual GNU Octave (tautan bab terkait):
  - [Three-Dimensional Plots](https://docs.octave.org/latest/Three_002dDimensional-Plots.html)
  - [Graphics Objects](https://docs.octave.org/latest/Graphics-Objects.html)
