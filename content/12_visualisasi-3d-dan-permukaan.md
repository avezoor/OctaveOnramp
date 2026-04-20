# Visualisasi 3D dan Permukaan

### Identitas Modul
- **Mata kuliah**: Pemrograman Dasar
- **Topik**: Visualisasi 3D dan Permukaan
- **Perangkat lunak**: GNU Octave
- **Bentuk bahan ajar**: Modul praktikum berbasis markdown
- **Acuan utama**: Dokumentasi resmi GNU Octave 11.1.0

---

## 1. Deskripsi Singkat

Pada pertemuan ini, mahasiswa mempelajari dasar visualisasi tiga dimensi di GNU Octave. Materi mencakup pembuatan kurva 3D menggunakan `plot3`, pembentukan grid permukaan dengan `meshgrid`, serta visualisasi permukaan menggunakan `mesh`, `surf`, `surfc`, `meshc`, dan `surfl`.

Selain membuat grafik, mahasiswa juga belajar mengatur tampilan visualisasi 3D melalui `view`, `xlabel`, `ylabel`, `zlabel`, `title`, `grid`, `colormap`, `colorbar`, `shading`, dan `hidden`. Dengan materi ini, mahasiswa dapat mulai membaca bentuk permukaan fungsi dua variabel, memahami hubungan antara data `x`, `y`, dan `z`, serta menampilkan hasil komputasi numerik dalam bentuk grafik 3D yang informatif.

---

## 2. Capaian Pembelajaran

Setelah menyelesaikan praktikum ini, mahasiswa diharapkan mampu:

1. menjelaskan konsep dasar visualisasi 3D di Octave,
2. membuat kurva tiga dimensi menggunakan `plot3`,
3. membentuk grid permukaan menggunakan `meshgrid`,
4. menampilkan permukaan data menggunakan `mesh` dan `surf`,
5. menggunakan `surfc`, `meshc`, atau `surfl` untuk variasi visualisasi permukaan,
6. mengatur sudut pandang, warna, dan penyajian permukaan dengan `view`, `colormap`, `colorbar`, dan `shading`,
7. menulis skrip visualisasi 3D yang rapi, dapat dijalankan ulang, dan mudah dianalisis.

---

## 3. Prasyarat

Mahasiswa sebaiknya telah memahami:

- variabel, skalar, vektor, dan matriks,
- operator dasar dan operasi elemen per elemen,
- fungsi bawaan Octave,
- visualisasi 2D dasar seperti `plot`, `xlabel`, `ylabel`, `title`, `legend`, dan `grid`.

---

## 4. Dasar Teori

## 4.1 Visualisasi 3D di Octave

Octave menyediakan fungsi plotting tingkat tinggi untuk membuat grafik dua dimensi maupun tiga dimensi. Pada visualisasi 3D, data biasanya dinyatakan sebagai:

- **kurva 3D**, yaitu lintasan titik dalam ruang dengan koordinat `(x, y, z)`,
- **permukaan 3D**, yaitu himpunan titik pada bidang `x-y` yang memiliki ketinggian `z`.

Visualisasi 3D berguna untuk:

- melihat bentuk fungsi dua variabel,
- membandingkan ketinggian atau nilai suatu permukaan,
- mempelajari struktur data yang memiliki tiga komponen,
- menampilkan hasil simulasi atau komputasi numerik.

## 4.2 Kurva 3D dengan `plot3`

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

## 4.3 Grid Permukaan dengan `meshgrid`

Untuk menggambar permukaan, biasanya diperlukan titik-titik koordinat `x` dan `y` dalam bentuk grid. Fungsi `meshgrid` digunakan untuk membentuk pasangan koordinat tersebut.

```octave
[X, Y] = meshgrid (x, y)
```

Jika `x` dan `y` berupa vektor, maka `X` dan `Y` akan menjadi matriks yang mewakili semua kombinasi pasangan titik pada bidang `x-y`. Nilai `Z` kemudian dihitung dari fungsi tertentu, misalnya:

```octave
Z = X.^2 + Y.^2;
```

Setelah itu, `X`, `Y`, dan `Z` dapat dipakai untuk membuat visualisasi permukaan.

## 4.4 Plot Permukaan dengan `mesh` dan `surf`

### `mesh`

`mesh` menampilkan permukaan dalam bentuk rangka kawat (wireframe). Struktur permukaan terlihat jelas karena garis-garis grid masih tampak.

```octave
mesh (X, Y, Z)
```

Visualisasi ini cocok untuk memahami bentuk geometri permukaan.

### `surf`

`surf` menampilkan permukaan dengan bidang-bidang berwarna. Warna permukaan mengikuti skala nilai data dan colormap aktif.

```octave
surf (X, Y, Z)
```

Visualisasi ini lebih baik untuk menekankan tinggi-rendah permukaan melalui gradasi warna.

## 4.5 Variasi Permukaan: `meshc`, `surfc`, dan `surfl`

- `meshc` menampilkan **mesh** beserta **contour** di bawahnya.
- `surfc` menampilkan **surface** beserta **contour** di bawahnya.
- `surfl` menampilkan permukaan dengan efek pencahayaan sehingga bentuk permukaan lebih mudah dibaca.

Ketiga fungsi ini membantu memperkaya interpretasi visual terhadap data permukaan.

## 4.6 Sudut Pandang dengan `view`

Fungsi `view` digunakan untuk mengatur sudut pandang terhadap grafik 3D.

```octave
view (azimuth, elevation)
```

Contoh:

```octave
view (45, 30)
```

Artinya, grafik dilihat dari azimuth 45 derajat dan elevation 30 derajat. `view (2)` mengubah pandangan menjadi tampilan 2D, sedangkan `view (3)` mengembalikan tampilan 3D standar.

## 4.7 Warna dan Penyajian Permukaan

Agar grafik lebih mudah dibaca, Octave menyediakan beberapa pengaturan tampilan.

### `colormap`

Mengatur peta warna yang digunakan permukaan.

```octave
colormap ("jet")
colormap ("parula")
colormap ("gray")
```

### `colorbar`

Menambahkan skala warna sehingga nilai data dapat diinterpretasikan dari warna pada permukaan.

```octave
colorbar
```

### `shading`

Mengatur gaya pewarnaan permukaan.

```octave
shading flat
shading interp
shading faceted
```

- `flat`: satu warna per bidang,
- `interp`: transisi warna halus antar titik,
- `faceted`: seperti `flat` tetapi garis tepi bidang tetap terlihat.

### `hidden`

Mengatur penghilangan garis yang tertutup pada plot tipe mesh.

```octave
hidden on
hidden off
```

---

## 5. Sintaks Penting

Berikut beberapa fungsi utama yang digunakan pada praktikum ini.

### Kurva 3D

```octave
plot3 (x, y, z)
```

### Grid koordinat

```octave
[X, Y] = meshgrid (x, y)
```

### Permukaan dan variasinya

```octave
mesh (X, Y, Z)
surf (X, Y, Z)
meshc (X, Y, Z)
surfc (X, Y, Z)
surfl (X, Y, Z)
```

### Pengaturan tampilan

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

### Interaksi tampilan 3D

```octave
rotate3d on
zoom on
pan on
```

---

## 6. Contoh Kode dan Penjelasan

## 6.1 Contoh 1 — Kurva Spiral 3D dengan `plot3`

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

### Penjelasan

- `t` adalah parameter kurva.
- `x = cos(t)` dan `y = sin(t)` membentuk lingkaran pada bidang `x-y`.
- `z = t` membuat kurva naik ke atas sehingga terbentuk spiral.
- `plot3` digunakan untuk menggambar kurva tiga dimensi.
- `view (45, 25)` mengatur sudut pandang agar bentuk spiral lebih jelas.

---

## 6.2 Contoh 2 — Membuat Permukaan dari Fungsi Dua Variabel

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

### Penjelasan

- `meshgrid` membentuk semua pasangan koordinat `x` dan `y`.
- `Z = X.^2 + Y.^2` menghitung nilai fungsi pada setiap titik grid.
- `mesh` menampilkan permukaan dalam bentuk wireframe.
- Bentuk yang dihasilkan adalah paraboloid terbuka ke atas.

---

## 6.3 Contoh 3 — Permukaan Berwarna dengan `surf`

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

### Penjelasan

- `sin (X) .* cos (Y)` dihitung elemen per elemen untuk seluruh grid.
- `surf` menampilkan permukaan dengan warna berdasarkan nilai `Z`.
- `colormap ("jet")` memberi peta warna yang kontras.
- `colorbar` menambahkan legenda skala warna.
- `shading interp` menghaluskan peralihan warna.

---

## 6.4 Contoh 4 — Permukaan dan Kontur dengan `surfc`

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

### Penjelasan

- `peaks` menghasilkan data permukaan uji yang sering digunakan untuk demonstrasi plotting.
- `surfc` menampilkan permukaan utama dan kontur di bawahnya.
- Grafik ini memudahkan pembacaan bentuk global permukaan sekaligus garis-garis levelnya.

---

## 6.5 Contoh 5 — Efek Pencahayaan dengan `surfl`

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

### Penjelasan

- `surfl` memberi kesan pencahayaan pada permukaan.
- Efek ini membantu pembaca melihat tonjolan, lembah, dan arah kemiringan permukaan.
- `shading interp` memperhalus tampilan sehingga efek pencahayaan terlihat lebih baik.

---

## 6.6 Contoh 6 — Interaksi Tampilan Grafik 3D

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

### Penjelasan

- `rotate3d on` mengaktifkan rotasi interaktif pada GUI.
- Setelah aktif, tampilan dapat diputar dengan mouse untuk melihat permukaan dari sudut yang berbeda.
- Fitur ini sangat membantu ketika menganalisis bentuk permukaan yang kompleks.

---

## 7. Langkah Praktikum

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

## 8. Tugas Latihan

### A. Latihan Konsep

Jawab pertanyaan berikut.

1. Apa perbedaan fungsi `plot3` dan `plot`?
2. Mengapa `meshgrid` diperlukan pada pembuatan permukaan 3D?
3. Apa perbedaan tampilan antara `mesh` dan `surf`?
4. Apa fungsi `view` dalam visualisasi 3D?
5. Mengapa `colorbar` penting pada plot permukaan berwarna?
6. Apa pengaruh `shading interp` terhadap tampilan permukaan?
7. Kapan `surfc` lebih berguna daripada `surf` biasa?

### B. Latihan Praktik

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

## 9. Tugas Praktikum

### Judul
**Membuat Visualisasi Kurva 3D dan Permukaan Fungsi di GNU Octave**

### Tujuan
Mahasiswa mampu:

- membuat kurva tiga dimensi,
- membentuk grid permukaan,
- memvisualisasikan fungsi dua variabel,
- mengatur tampilan visualisasi agar informatif.

### Instruksi Tugas

Buat folder kerja dengan nama:

```text
praktikum_octave_visualisasi3d
```

Di dalam folder tersebut, buat file berikut.

## 9.1 File `kurva3d_dasar.m`

Isi file harus menampilkan satu kurva 3D parametrik.

Spesifikasi minimal:

- menggunakan `plot3`,
- memiliki judul dan label sumbu,
- mengaktifkan grid,
- mengatur sudut pandang dengan `view`.

Contoh kerangka:

```octave
t = linspace (0, 10*pi, 400);
x = cos (t);
y = sin (t);
z = 0.2 * t;

figure;
plot3 (x, y, z, "LineWidth", 2);
grid on;
title ("Kurva 3D Parametrik");
xlabel ("x");
ylabel ("y");
zlabel ("z");
view (45, 25);
```

## 9.2 File `permukaan_fungsi.m`

Buat visualisasi permukaan dari fungsi:

```octave
z = sin (sqrt (x.^2 + y.^2)) ./ sqrt (x.^2 + y.^2)
```

Ketentuan:

- gunakan `meshgrid`,
- tampilkan dengan `surf`,
- gunakan `colorbar`,
- gunakan `shading interp`,
- atur `colormap`.

Contoh kerangka aman terhadap pembagian nol di pusat:

```octave
range = linspace (-8, 8, 81);
[X, Y] = meshgrid (range, range);
R = sqrt (X.^2 + Y.^2);
Z = sin (R) ./ R;
Z(R == 0) = 1;

figure;
surf (X, Y, Z);
shading interp;
colormap ("jet");
colorbar;
grid on;
title ("Permukaan Fungsi Sombrero");
xlabel ("x");
ylabel ("y");
zlabel ("z");
view (50, 30);
```

## 9.3 File `perbandingan_permukaan.m`

Gunakan data yang sama untuk membandingkan minimal tiga bentuk visualisasi:

- `mesh`,
- `surf`,
- `surfc` atau `meshc`.

Contoh kerangka:

```octave
[X, Y, Z] = peaks (40);

figure (1);
mesh (X, Y, Z);
grid on;
title ("Mesh Plot");

figure (2);
surf (X, Y, Z);
shading interp;
colorbar;
title ("Surface Plot");

figure (3);
surfc (X, Y, Z);
colorbar;
title ("Surface dengan Contour");
```

## 9.4 File `catatan_hasil.txt`

Tuliskan ringkasan singkat yang menjawab:

1. perbedaan visual antara `mesh` dan `surf`,
2. fungsi `colorbar`,
3. pengaruh `view` terhadap pembacaan grafik,
4. visualisasi mana yang paling mudah dibaca dan alasannya.

### Luaran yang Dikumpulkan

1. `kurva3d_dasar.m`
2. `permukaan_fungsi.m`
3. `perbandingan_permukaan.m`
4. `catatan_hasil.txt`
5. tangkapan layar hasil eksekusi

---

## 10. Kriteria Penilaian

| Aspek | Bobot |
|---|---:|
| Kebenaran sintaks program | 20% |
| Keberhasilan membuat kurva 3D | 15% |
| Keberhasilan membuat permukaan fungsi | 20% |
| Penggunaan `meshgrid`, `view`, `colormap`, dan `colorbar` | 20% |
| Kerapian tampilan grafik dan label | 15% |
| Analisis singkat pada catatan hasil | 10% |

---

## 11. Kesalahan Umum yang Sering Terjadi

### 1. Lupa memakai operator elemen per elemen

Kesalahan umum:

```octave
Z = sin (X) * cos (Y)
```

Seharusnya:

```octave
Z = sin (X) .* cos (Y)
```

Karena `X` dan `Y` berupa matriks, operasi perkalian, pembagian, dan perpangkatan sering harus dilakukan secara elemen per elemen.

### 2. Ukuran `X`, `Y`, dan `Z` tidak sesuai

Pastikan `Z` memiliki ukuran yang sama dengan `X` dan `Y` saat menggunakan `mesh` atau `surf`.

### 3. Permukaan tampak datar atau sulit dibaca

Coba ubah:

- sudut pandang dengan `view`,
- peta warna dengan `colormap`,
- tampilan warna dengan `shading interp`,
- aktifkan `colorbar`.

### 4. Grafik 3D tampak seperti 2D

Kemungkinan sudut pandang belum tepat. Gunakan:

```octave
view (3)
```

atau pilih kombinasi azimuth dan elevation yang lebih sesuai.

### 5. Nilai tak terdefinisi di titik tertentu

Pada fungsi seperti `sin(R)/R`, akan muncul bentuk `0/0` saat `R = 0`. Tangani titik tersebut secara khusus.

---

## 12. Ringkasan

Pada praktikum ini, mahasiswa telah mempelajari:

- pembuatan kurva tiga dimensi dengan `plot3`,
- pembentukan grid data menggunakan `meshgrid`,
- visualisasi permukaan dengan `mesh`, `surf`, `meshc`, `surfc`, dan `surfl`,
- pengaturan sudut pandang dengan `view`,
- pengaturan tampilan warna melalui `colormap`, `colorbar`, dan `shading`,
- cara menyusun skrip visualisasi 3D yang rapi dan informatif.

Pemahaman materi ini menjadi dasar penting untuk topik yang lebih lanjut seperti analisis permukaan, visualisasi data hasil simulasi, optimasi, dan komputasi ilmiah berbasis matriks.

---

## 13. Referensi

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
