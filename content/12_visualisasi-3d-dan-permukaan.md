# Visualisasi 3D dan Permukaan

## 1. Deskripsi Singkat

Pada pertemuan ini, mahasiswa mempelajari dasar visualisasi tiga dimensi di GNU Octave. Materi mencakup pembuatan kurva 3D menggunakan `plot3`, pembentukan grid permukaan dengan `meshgrid`, serta visualisasi permukaan menggunakan `mesh`, `surf`, `surfc`, `meshc`, dan `surfl`.

Selain membuat grafik, mahasiswa juga belajar mengatur tampilan visualisasi 3D melalui `view`, `xlabel`, `ylabel`, `zlabel`, `title`, `grid`, `colormap`, `colorbar`, `shading`, dan `hidden`. Dengan materi ini, mahasiswa dapat mulai membaca bentuk permukaan fungsi dua variabel, memahami hubungan antara data `x`, `y`, dan `z`, serta menampilkan hasil komputasi numerik dalam bentuk grafik 3D yang informatif.

---

## 2. Dasar Teori

### 2.1 Visualisasi 3D di Octave

Octave menyediakan fungsi plotting tingkat tinggi untuk membuat grafik dua dimensi maupun tiga dimensi. Pada visualisasi 3D, data biasanya dinyatakan sebagai:

- **kurva 3D**, yaitu lintasan titik dalam ruang dengan koordinat `(x, y, z)`,
- **permukaan 3D**, yaitu himpunan titik pada bidang `x-y` yang memiliki ketinggian `z`.

Visualisasi 3D berguna untuk:

- melihat bentuk fungsi dua variabel,
- membandingkan ketinggian atau nilai suatu permukaan,
- mempelajari struktur data yang memiliki tiga komponen,
- menampilkan hasil simulasi atau komputasi numerik.

### 2.2 Kurva 3D dengan `plot3`

Fungsi `plot3` digunakan untuk menggambar kurva pada ruang tiga dimensi. Bentuk umum penggunaannya adalah:

```octave
plot3 (x, y, z)
```

Ketiga argumen tersebut harus memiliki panjang yang sesuai. Setiap elemen ke-`i` dari `x`, `y`, dan `z` dianggap sebagai satu titik dalam ruang.

Contoh penggunaan:

```octave
plot3 (x, y, z, "LineWidth", 2)
```

Perintah ini sering digunakan untuk menampilkan lintasan, spiral, gerak partikel, atau kurva parametrik.

### 2.3 Grid Permukaan dengan `meshgrid`

Untuk menggambar permukaan, biasanya diperlukan titik-titik koordinat `x` dan `y` dalam bentuk grid. Fungsi `meshgrid` digunakan untuk membentuk pasangan koordinat tersebut.

```octave
[X, Y] = meshgrid (x, y)
```

Jika `x` dan `y` berupa vektor, maka `X` dan `Y` akan menjadi matriks yang mewakili semua kombinasi pasangan titik pada bidang `x-y`. Nilai `Z` kemudian dihitung dari fungsi tertentu, misalnya:

```octave
Z = X.^2 + Y.^2;
```

Setelah itu, `X`, `Y`, dan `Z` dapat dipakai untuk membuat visualisasi permukaan.

### 2.4 Plot Permukaan dengan `mesh` dan `surf`

### 2.5 `mesh`

`mesh` menampilkan permukaan dalam bentuk rangka kawat (wireframe). Struktur permukaan terlihat jelas karena garis-garis grid masih tampak.

```octave
mesh (X, Y, Z)
```

Visualisasi ini cocok untuk memahami bentuk geometri permukaan.

### 2.6 `surf`

`surf` menampilkan permukaan dengan bidang-bidang berwarna. Warna permukaan mengikuti skala nilai data dan colormap aktif.

```octave
surf (X, Y, Z)
```

Visualisasi ini lebih baik untuk menekankan tinggi-rendah permukaan melalui gradasi warna.

### 2.7 Variasi Permukaan: `meshc`, `surfc`, dan `surfl`

- `meshc` menampilkan **mesh** beserta **contour** di bawahnya.
- `surfc` menampilkan **surface** beserta **contour** di bawahnya.
- `surfl` menampilkan permukaan dengan efek pencahayaan sehingga bentuk permukaan lebih mudah dibaca.

Ketiga fungsi ini membantu memperkaya interpretasi visual terhadap data permukaan.

### 2.8 Sudut Pandang dengan `view`

Fungsi `view` digunakan untuk mengatur sudut pandang terhadap grafik 3D.

```octave
view (azimuth, elevation)
```

Contoh:

```octave
view (45, 30)
```

Artinya, grafik dilihat dari azimuth 45 derajat dan elevation 30 derajat. `view (2)` mengubah pandangan menjadi tampilan 2D, sedangkan `view (3)` mengembalikan tampilan 3D standar.

### 2.9 Warna dan Penyajian Permukaan

Agar grafik lebih mudah dibaca, Octave menyediakan beberapa pengaturan tampilan.

### 2.10 `colormap`

Mengatur peta warna yang digunakan permukaan.

```octave
colormap ("jet")
colormap ("parula")
colormap ("gray")
```

### 2.11 `colorbar`

Menambahkan skala warna sehingga nilai data dapat diinterpretasikan dari warna pada permukaan.

```octave
colorbar
```

### 2.12 `shading`

Mengatur gaya pewarnaan permukaan.

```octave
shading flat
shading interp
shading faceted
```

- `flat`: satu warna per bidang,
- `interp`: transisi warna halus antar titik,
- `faceted`: seperti `flat` tetapi garis tepi bidang tetap terlihat.

### 2.13 `hidden`

Mengatur penghilangan garis yang tertutup pada plot tipe mesh.

```octave
hidden on
hidden off
```

---

## 3. Sintaks Penting

Berikut beberapa fungsi utama yang digunakan pada praktikum ini.

### 3.1 Kurva 3D

```octave
plot3 (x, y, z)
```

### 3.2 Grid koordinat

```octave
[X, Y] = meshgrid (x, y)
```

### 3.3 Permukaan dan variasinya

```octave
mesh (X, Y, Z)
surf (X, Y, Z)
meshc (X, Y, Z)
surfc (X, Y, Z)
surfl (X, Y, Z)
```

### 3.4 Pengaturan tampilan

```octave
title ("Judul")
xlabel ("Sumbu X")
ylabel ("Sumbu Y")
zlabel ("Sumbu Z")
grid on
view (45, 30)
colormap ("jet")
colorbar
shading interp
hidden on
```

### 3.5 Interaksi tampilan 3D

```octave
rotate3d on
zoom on
pan on
```

---

## 4. Contoh Kode dan Penjelasan

### 4.1 Contoh 1 — Kurva Spiral 3D dengan `plot3`

```octave
t = linspace (0, 8*pi, 300);
x = cos (t);
y = sin (t);
z = t;

figure;
plot3 (x, y, z, "b", "LineWidth", 2);
grid on;
xlabel ("x");
ylabel ("y");
zlabel ("z");
title ("Kurva Spiral 3D");
view (45, 25);
```

### 4.2 Penjelasan

- `t` adalah parameter kurva.
- `x = cos(t)` dan `y = sin(t)` membentuk lingkaran pada bidang `x-y`.
- `z = t` membuat kurva naik ke atas sehingga terbentuk spiral.
- `plot3` digunakan untuk menggambar kurva tiga dimensi.
- `view (45, 25)` mengatur sudut pandang agar bentuk spiral lebih jelas.

---

### 4.3 Contoh 2 — Membuat Permukaan dari Fungsi Dua Variabel

```octave
x = -3:0.2:3;
y = -3:0.2:3;
[X, Y] = meshgrid (x, y);
Z = X.^2 + Y.^2;

figure;
mesh (X, Y, Z);
grid on;
xlabel ("x");
ylabel ("y");
zlabel ("z");
title ("Permukaan z = x^2 + y^2");
view (45, 30);
```

### 4.4 Penjelasan

- `meshgrid` membentuk semua pasangan koordinat `x` dan `y`.
- `Z = X.^2 + Y.^2` menghitung nilai fungsi pada setiap titik grid.
- `mesh` menampilkan permukaan dalam bentuk wireframe.
- Bentuk yang dihasilkan adalah paraboloid terbuka ke atas.

---

### 4.5 Contoh 3 — Permukaan Berwarna dengan `surf`

```octave
x = -2:0.1:2;
y = -2:0.1:2;
[X, Y] = meshgrid (x, y);
Z = sin (X) .* cos (Y);

figure;
surf (X, Y, Z);
xlabel ("x");
ylabel ("y");
zlabel ("z");
title ("Permukaan z = sin(x) cos(y)");
colormap ("jet");
colorbar;
shading interp;
view (50, 30);
```

### 4.6 Penjelasan

- `sin (X) .* cos (Y)` dihitung elemen per elemen untuk seluruh grid.
- `surf` menampilkan permukaan dengan warna berdasarkan nilai `Z`.
- `colormap ("jet")` memberi peta warna yang kontras.
- `colorbar` menambahkan legenda skala warna.
- `shading interp` menghaluskan peralihan warna.

---

### 4.7 Contoh 4 — Permukaan dan Kontur dengan `surfc`

```octave
[X, Y, Z] = peaks (40);

figure;
surfc (X, Y, Z);
xlabel ("x");
ylabel ("y");
zlabel ("z");
title ("Visualisasi surfc dari data peaks");
colormap ("parula");
colorbar;
view (40, 35);
```

### 4.8 Penjelasan

- `peaks` menghasilkan data permukaan uji yang sering digunakan untuk demonstrasi plotting.
- `surfc` menampilkan permukaan utama dan kontur di bawahnya.
- Grafik ini memudahkan pembacaan bentuk global permukaan sekaligus garis-garis levelnya.

---

### 4.9 Contoh 5 — Efek Pencahayaan dengan `surfl`

```octave
[X, Y, Z] = peaks (50);

figure;
surfl (X, Y, Z);
shading interp;
colormap ("bone");
colorbar;
xlabel ("x");
ylabel ("y");
zlabel ("z");
title ("Permukaan dengan Efek Pencahayaan");
view (45, 30);
```

### 4.10 Penjelasan

- `surfl` memberi kesan pencahayaan pada permukaan.
- Efek ini membantu pembaca melihat tonjolan, lembah, dan arah kemiringan permukaan.
- `shading interp` memperhalus tampilan sehingga efek pencahayaan terlihat lebih baik.

---

### 4.11 Contoh 6 — Interaksi Tampilan Grafik 3D

```octave
[X, Y, Z] = peaks (35);

figure;
surf (X, Y, Z);
shading interp;
colormap ("hot");
colorbar;
grid on;
rotate3d on;
```

### 4.12 Penjelasan

- `rotate3d on` mengaktifkan rotasi interaktif pada GUI.
- Setelah aktif, tampilan dapat diputar dengan mouse untuk melihat permukaan dari sudut yang berbeda.
- Fitur ini sangat membantu ketika menganalisis bentuk permukaan yang kompleks.

---

## 5. Langkah Praktikum

Ikuti langkah berikut secara berurutan.

1. Jalankan Octave.
2. Buat file skrip baru dengan nama `praktikum_visualisasi_3d.m`.
3. Ketik dan jalankan contoh `plot3` untuk menampilkan spiral 3D.
4. Ubah parameter `view` dan amati perubahan sudut pandang.
5. Buat grid menggunakan `meshgrid`.
6. Hitung suatu fungsi dua variabel dan tampilkan dengan `mesh`.
7. Ubah visualisasi yang sama menjadi `surf`.
8. Tambahkan `colormap`, `colorbar`, dan `shading interp`.
9. Coba `surfc` atau `meshc` untuk melihat kontur.
10. Aktifkan `rotate3d on` dan amati grafik dari beberapa arah.
11. Simpan gambar hasil visualisasi jika diperlukan dengan `print`.

Contoh penyimpanan gambar:

```octave
print ("permukaan3d.png", "-dpng")
```

---

## 6. Tugas Latihan

### 6.1 Tugas Latihan

Kerjakan perintah berikut di Octave.

1. Buat kurva 3D dengan:

```octave
t = linspace (0, 6*pi, 200);
x = sin (t);
y = cos (2*t);
z = t;
plot3 (x, y, z);
grid on;
```

2. Buat permukaan dari fungsi:

```octave
z = x^2 - y^2
```

3. Tampilkan permukaan tersebut dengan `mesh` dan `surf` pada dua figure yang berbeda.
4. Tambahkan `title`, `xlabel`, `ylabel`, `zlabel`, dan `grid on`.
5. Gunakan `colormap ("cool")` dan `colorbar`.
6. Ubah sudut pandang menjadi minimal tiga variasi yang berbeda.

---

## 7. Tugas Praktikum

### 7.1 Judul
**Membuat Visualisasi Kurva 3D dan Permukaan Fungsi di GNU Octave**

### 7.2 Tujuan
Mahasiswa mampu:

- membuat kurva tiga dimensi,
- membentuk grid permukaan,
- memvisualisasikan fungsi dua variabel,
- mengatur tampilan visualisasi agar informatif.

### 7.3 Instruksi Tugas
Buat **satu file script saja** bernama `praktikum_visualisasi3d.m`.

Ketentuan:
- tidak perlu membuat folder baru,
- tidak perlu memecah program menjadi beberapa file,
- seluruh bagian dikerjakan dalam satu script yang bisa langsung dijalankan.

Isi script harus memuat:
- satu kurva 3D parametrik dengan `plot3`,
- satu permukaan fungsi dengan `meshgrid` dan `surf`,
- satu perbandingan tampilan `mesh`, `surf`, dan `surfc` atau `meshc`,
- pengaturan `view`, `colormap`, `colorbar`, dan `shading`,
- penyimpanan salah satu figure ke file gambar.

Contoh kerangka:

```octave
clc;
clear;

disp("=== PRAKTIKUM 12: VISUALISASI 3D ===");

t = linspace(0, 10*pi, 400);
x = cos(t);
y = sin(t);
z = 0.2 * t;

figure(1);
plot3(x, y, z, "LineWidth", 2);
grid on;
title("Kurva 3D Parametrik");
xlabel("x");
ylabel("y");
zlabel("z");
view(45, 25);

range = linspace(-8, 8, 81);
[X, Y] = meshgrid(range, range);
R = sqrt(X.^2 + Y.^2);
Z = sin(R) ./ R;
Z(R == 0) = 1;

figure(2);
surf(X, Y, Z);
shading interp;
colormap("jet");
colorbar;
grid on;
title("Permukaan Fungsi Sombrero");
xlabel("x");
ylabel("y");
zlabel("z");
view(50, 30);

[X2, Y2, Z2] = peaks(40);

figure(3);
subplot(1, 3, 1);
mesh(X2, Y2, Z2);
title("Mesh");
grid on;

subplot(1, 3, 2);
surf(X2, Y2, Z2);
title("Surf");
shading interp;
grid on;

subplot(1, 3, 3);
surfc(X2, Y2, Z2);
title("Surfc");
grid on;

print("hasil_visualisasi3d.png", "-dpng");
```

### 7.4 Luaran yang Dikumpulkan

1. `praktikum_visualisasi3d.m`
2. satu file gambar hasil visualisasi
3. tangkapan layar hasil eksekusi

---

## 8. Ringkasan

Pada praktikum ini, mahasiswa telah mempelajari:

- pembuatan kurva tiga dimensi dengan `plot3`,
- pembentukan grid data menggunakan `meshgrid`,
- visualisasi permukaan dengan `mesh`, `surf`, `meshc`, `surfc`, dan `surfl`,
- pengaturan sudut pandang dengan `view`,
- pengaturan tampilan warna melalui `colormap`, `colorbar`, dan `shading`,
- cara menyusun skrip visualisasi 3D yang rapi dan informatif.

Pemahaman materi ini menjadi dasar penting untuk topik yang lebih lanjut seperti analisis permukaan, visualisasi data hasil simulasi, optimasi, dan komputasi ilmiah berbasis matriks.

---

## 9. Referensi

1. GNU Octave Manual 11.1.0 — Top  
   https://docs.octave.org/latest/
2. GNU Octave Manual — Three-Dimensional Plots  
   https://docs.octave.org/latest/Three_002dDimensional-Plots.html
3. GNU Octave Manual — Three-dimensional Function Plotting  
   https://docs.octave.org/latest/Three_002ddimensional-Function-Plotting.html
4. GNU Octave Manual — Plot Annotations  
   https://docs.octave.org/latest/Plot-Annotations.html
5. GNU Octave Manual — Manipulation of Plot Objects  
   https://docs.octave.org/latest/Manipulation-of-Plot-Objects.html
