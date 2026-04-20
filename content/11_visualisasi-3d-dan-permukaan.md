# Pertemuan 11 — Visualisasi 3D dan Permukaan

## Modul ringkas
- Plot 3D digunakan untuk melihat bentuk permukaan, lintasan ruang, dan hubungan tiga variabel.
- Fungsi paling umum adalah `mesh`, `surf`, dan `plot3`.
- `meshgrid` sering dipakai untuk membangun koordinat permukaan.

## Konsep inti
- `mesh` membuat permukaan kawat.
- `surf` membuat permukaan berwarna atau berarsir.
- `plot3` menampilkan kurva 3D yang tidak harus berupa permukaan.
- `view`, `shading`, dan `colormap` membantu memperjelas tampilan.

## Contoh penggunaan

```octave
clc
clear

t = linspace (-8, 8, 41)';
[x, y] = meshgrid (t, t);
r = sqrt (x.^2 + y.^2) + eps;
z = sin (r) ./ r;

subplot (1, 2, 1)
mesh (x, y, z)
title ("Mesh")
xlabel ("x")
ylabel ("y")
zlabel ("z")

subplot (1, 2, 2)
surf (x, y, z)
shading interp
colormap (jet (64))
title ("Surface")
```

## Penjelasan singkat fungsi dan perintah
- `meshgrid`: membentuk grid koordinat dari dua vektor.
- `mesh`: permukaan kawat 3D.
- `surf`: permukaan 3D berwarna.
- `plot3`: kurva 3D.
- `view (az, el)`: mengatur sudut pandang.
- `shading interp`: menghaluskan tampilan warna permukaan.
- `colormap`: mengatur peta warna.
- `colorbar`: menampilkan skala warna.

## Latihan
1. Buat grafik `mesh` dari fungsi `z = x.^2 + y.^2`.
2. Ubah grafik yang sama menjadi `surf`.
3. Coba beberapa sudut pandang dengan `view`.
4. Tambahkan `colorbar` dan ganti `colormap`.
5. Buat lintasan heliks sederhana dengan `plot3`.

## Tugas praktikum
1. Jelaskan perbedaan visual antara `mesh`, `surf`, dan `plot3`.
2. Uji beberapa kombinasi `view` dan `colormap`, lalu catat pengaruhnya.
3. Buat ringkasan fungsi `meshgrid` dan mengapa ia penting pada plot permukaan.

## Tugas koding
1. Buat script `plot_3d_permukaan.m` yang menghasilkan satu `mesh` dan satu `surf`.
2. Tambahkan `colorbar`, `view`, dan label sumbu pada hasil visualisasi.
3. Buat contoh kedua berupa lintasan 3D memakai `plot3`.

## Referensi manual Octave
- Three-dimensional plots: https://docs.octave.org/latest/Three_002dDimensional-Plots.html
- Plot annotations: https://docs.octave.org/latest/Plot-Annotations.html
- High-level plotting: https://docs.octave.org/latest/High_002dLevel-Plotting.html
