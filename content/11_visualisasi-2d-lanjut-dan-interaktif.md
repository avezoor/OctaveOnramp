# Visualisasi 2D Lanjut, Subplot, Histogram, dan Interaksi

## 1. Deskripsi Singkat

Pada pertemuan ini, mahasiswa mempelajari teknik visualisasi 2D yang lebih lanjut di GNU Octave. Jika pada materi sebelumnya fokus masih pada plot dasar, pada modul ini pembahasan diperluas ke pengaturan beberapa grafik dalam satu jendela menggunakan `subplot`, pembuatan histogram untuk melihat distribusi data menggunakan `hist`, serta interaksi dengan grafik menggunakan fasilitas seperti `ginput`, `gtext`, `zoom`, dan `pan`.

Materi ini penting karena pada praktik komputasi numerik, mahasiswa tidak hanya perlu membuat grafik, tetapi juga harus mampu membandingkan beberapa grafik sekaligus, membaca pola distribusi data, dan berinteraksi langsung dengan tampilan grafik untuk analisis yang lebih baik.

---

## 2. Dasar Teori

### 2.1 Visualisasi 2D Lanjut

Octave menyediakan fungsi plotting tingkat tinggi untuk membuat berbagai grafik 2D. Grafik tidak hanya berfungsi sebagai tampilan hasil, tetapi juga sebagai alat eksplorasi data. Dalam praktik yang lebih lanjut, visualisasi perlu diatur agar bisa membandingkan beberapa data sekaligus, memberi informasi statistik dasar, serta memberi ruang interaksi pengguna terhadap grafik.

Visualisasi 2D di Octave berada dalam sistem objek grafik yang berbasis `figure`, `axes`, dan objek-objek turunan seperti `line`, `patch`, dan `text`. Banyak fungsi plotting tingkat tinggi akan membuat objek-objek ini secara otomatis, tetapi pengguna tetap dapat mengatur propertinya untuk memperoleh tampilan yang lebih baik.

### 2.2 Subplot

Fungsi `subplot` digunakan untuk membagi satu jendela figure menjadi beberapa area axes. Bentuk umum pemakaiannya adalah:

```octave
subplot (rows, cols, index)
```

Perintah tersebut membagi figure menjadi `rows × cols` bagian dan mengaktifkan bagian ke-`index` sebagai area gambar saat ini. Dengan demikian, beberapa grafik dapat ditampilkan dan dibandingkan secara bersamaan pada satu jendela.

Beberapa variasi pemakaian `subplot` juga mendukung:

- pengaturan dengan format singkat `subplot (rcn)`,
- penggantian axes tertentu,
- opsi `"align"` untuk penyelarasan tampilan,
- opsi `"replace"` untuk mengganti axes yang sudah ada.

### 2.3 Histogram

Histogram digunakan untuk menampilkan distribusi frekuensi data numerik. Pada Octave, histogram dasar dapat dibuat menggunakan fungsi `hist`. Fungsi ini dapat dipanggil dalam beberapa bentuk, misalnya:

```octave
hist (data)
hist (data, jumlah_bin)
hist (data, pusat_bin)
```

Jika dipanggil tanpa output, `hist` akan langsung menampilkan grafik histogram. Jika dipanggil dengan output, fungsi ini mengembalikan frekuensi dan pusat bin tanpa menggambar grafik. Hal ini berguna ketika data histogram ingin diolah lebih lanjut sebelum divisualisasikan.

Histogram membantu mahasiswa memahami bentuk sebaran data, seperti:

- data cenderung simetris,
- data condong ke kiri atau kanan,
- data menyebar lebar atau sempit,
- data memiliki kelompok tertentu.

### 2.4 Interaksi dengan Plot

Octave menyediakan beberapa fungsi untuk berinteraksi dengan plot, antara lain:

- `ginput` untuk mengambil koordinat titik yang dipilih pengguna pada figure,
- `gtext` untuk menempatkan teks pada lokasi yang dipilih dengan mouse,
- `zoom` untuk memperbesar atau memperkecil tampilan,
- `pan` untuk menggeser area tampilan grafik.

Interaksi ini berguna saat pengguna ingin:

- membaca nilai titik tertentu,
- memberi anotasi manual pada grafik,
- meninjau bagian grafik yang detail,
- menggeser tampilan saat data terlalu rapat.

### 2.5 Anotasi dan Tata Letak

Dalam visualisasi lanjut, tata letak menjadi sangat penting. Elemen yang sering dipakai meliputi:

- `title` untuk judul grafik,
- `xlabel` dan `ylabel` untuk label sumbu,
- `legend` untuk keterangan kurva,
- `text` untuk menambahkan tulisan pada koordinat tertentu,
- `grid on` untuk membantu pembacaan grafik.

Kombinasi tata letak yang baik akan membuat visualisasi lebih komunikatif dan mudah dipahami.

---

## 3. Sintaks Penting

Berikut beberapa fungsi utama yang digunakan pada praktikum ini.

### 3.1 Subplot

```octave
subplot (2, 2, 1)
subplot (2, 2, 2)
subplot (2, 2, 3)
subplot (2, 2, 4)
```

### 3.2 Histogram

```octave
hist (data)
hist (data, 10)
[n, x] = hist (data, 10)
```

### 3.3 Interaksi Plot

```octave
[x, y] = ginput (1)
gtext ("titik penting")
zoom on
pan on
```

### 3.4 Anotasi Tambahan

```octave
title ("Judul Grafik")
xlabel ("Sumbu X")
ylabel ("Sumbu Y")
legend ("Data A", "Data B")
text (2, 5, "Puncak")
grid on
```

---

## 4. Contoh Kode dan Penjelasan

## 5. Contoh 1 — Membandingkan Beberapa Kurva dengan Subplot

```octave
clc;
clear;
close all;

x = 0:0.1:2*pi;

subplot (2, 2, 1);
plot (x, sin (x), "b", "linewidth", 1.5);
title ("y = sin(x)");
xlabel ("x");
ylabel ("sin(x)");
grid on;

subplot (2, 2, 2);
plot (x, cos (x), "r", "linewidth", 1.5);
title ("y = cos(x)");
xlabel ("x");
ylabel ("cos(x)");
grid on;

subplot (2, 2, 3);
plot (x, tan (x), "k");
title ("y = tan(x)");
xlabel ("x");
ylabel ("tan(x)");
axis ([0 2*pi -5 5]);
grid on;

subplot (2, 2, 4);
plot (x, sin (x) + cos (x), "m", "linewidth", 1.5);
title ("y = sin(x) + cos(x)");
xlabel ("x");
ylabel ("hasil");
grid on;
```

### 5.1 Penjelasan

- `subplot (2, 2, 1)` membagi figure menjadi 4 bagian dan memilih posisi pertama.
- Setiap bagian diisi dengan grafik yang berbeda.
- `axis ([0 2*pi -5 5])` digunakan untuk membatasi tampilan grafik `tan(x)` agar tetap terbaca.
- `grid on` menambahkan garis bantu.

Contoh ini menunjukkan bagaimana beberapa fungsi dapat dibandingkan secara langsung dalam satu jendela.

---

## 6. Contoh 2 — Subplot untuk Data Eksperimen

```octave
clc;
clear;
close all;

x = 1:10;
y1 = x;
y2 = x.^2;
y3 = 2.^x;
y4 = log (x);

subplot (2, 2, 1);
plot (x, y1, "-ob");
title ("Linear");
grid on;

subplot (2, 2, 2);
plot (x, y2, "-sr");
title ("Kuadrat");
grid on;

subplot (2, 2, 3);
plot (x, y3, "-^g");
title ("Eksponensial");
grid on;

subplot (2, 2, 4);
plot (x, y4, "-dk");
title ("Logaritma");
grid on;
```

### 6.1 Penjelasan

Contoh ini memperlihatkan bahwa `subplot` sangat berguna untuk membandingkan karakter pertumbuhan beberapa fungsi matematis pada domain yang sama.

---

## 7. Contoh 3 — Histogram Distribusi Data Acak

```octave
clc;
clear;
close all;

data = randn (1, 1000);
hist (data, 20);
title ("Histogram Data Acak Normal");
xlabel ("Nilai Data");
ylabel ("Frekuensi");
grid on;
```

### 7.1 Penjelasan

- `randn (1, 1000)` menghasilkan 1000 data acak berdistribusi normal.
- `hist (data, 20)` menampilkan histogram dengan 20 bin.
- Grafik yang muncul akan memperlihatkan sebaran data di sekitar nol.

---

## 8. Contoh 4 — Mengambil Nilai Histogram Tanpa Langsung Menggambar

```octave
clc;
clear;
close all;

data = [4 5 5 6 6 6 7 7 8 8 8 8 9 10 10];
[n, pusat] = hist (data, 5);

disp ("Frekuensi tiap bin:");
disp (n);

disp ("Pusat bin:");
disp (pusat);

bar (pusat, n);
title ("Histogram dari Hasil Perhitungan Manual");
xlabel ("Pusat Bin");
ylabel ("Frekuensi");
grid on;
```

### 8.1 Penjelasan

- Dengan `[n, pusat] = hist (...)`, histogram tidak langsung digambar, tetapi frekuensinya dihitung.
- `bar (pusat, n)` kemudian digunakan untuk menampilkan hasil perhitungan dalam bentuk diagram batang.
- Cara ini berguna jika ingin memproses frekuensi terlebih dahulu.

---

## 9. Contoh 5 — Menentukan Titik pada Grafik dengan `ginput`

```octave
clc;
clear;
close all;

x = 0:0.1:10;
y = sin (x);

plot (x, y, "b", "linewidth", 1.5);
title ("Klik Satu Titik pada Kurva");
xlabel ("x");
ylabel ("sin(x)");
grid on;

[xp, yp] = ginput (1);
hold on;
plot (xp, yp, "ro", "markersize", 8, "markerfacecolor", "r");
text (xp, yp, sprintf ("(%.2f, %.2f)", xp, yp));
```

### 9.1 Penjelasan

- `ginput (1)` menunggu satu klik dari pengguna pada figure.
- Nilai koordinat titik hasil klik disimpan ke `xp` dan `yp`.
- Titik tersebut kemudian diberi marker dan label koordinat.

---

## 10. Contoh 6 — Menempatkan Teks Interaktif dengan `gtext`

```octave
clc;
clear;
close all;

x = 0:0.1:2*pi;
plot (x, sin (x), "linewidth", 1.5);
grid on;
title ("Klik untuk Menempatkan Teks");

legend ("sin(x)");
gtext ("puncak lokal");
```

### 10.1 Penjelasan

- `gtext` memungkinkan pengguna menempatkan teks dengan memilih posisi pada grafik menggunakan mouse.
- Fitur ini cocok untuk anotasi manual.

---

## 11. Contoh 7 — Mengaktifkan Zoom dan Pan

```octave
clc;
clear;
close all;

x = linspace (0, 100, 1000);
y = sin (x) + 0.2 * randn (size (x));

plot (x, y);
title ("Gunakan Zoom dan Pan pada Figure");
xlabel ("x");
ylabel ("y");
grid on;

zoom on;
```

Untuk mencoba pergeseran tampilan, jalankan versi berikut:

```octave
pan on;
```

### 11.1 Penjelasan

- `zoom on` mengaktifkan mode pembesaran pada GUI figure.
- `pan on` mengaktifkan mode penggeseran tampilan.
- Keduanya membantu saat data sangat rapat atau domain grafik sangat panjang.

---

## 12. Langkah Praktikum

Ikuti langkah berikut secara berurutan.

### 12.1 Bagian A — Eksplorasi Subplot

1. Buat satu skrip baru.
2. Tampilkan empat fungsi berbeda dalam satu figure dengan `subplot (2, 2, index)`.
3. Tambahkan judul, label sumbu, dan grid pada masing-masing subplot.
4. Simpan hasil dan amati perbedaan bentuk grafik.

### 12.2 Bagian B — Eksplorasi Histogram

1. Buat data acak menggunakan `rand`, `randn`, atau data manual.
2. Tampilkan histogram dengan jumlah bin berbeda, misalnya 5, 10, dan 20.
3. Bandingkan bentuk histogram yang dihasilkan.
4. Ambil keluaran `[n, x] = hist (...)` lalu tampilkan lagi dengan `bar`.

### 12.3 Bagian C — Interaksi Plot

1. Buat grafik garis sederhana.
2. Gunakan `ginput (1)` untuk memilih titik tertentu.
3. Tandai titik yang dipilih.
4. Tambahkan teks menggunakan `text` atau `gtext`.
5. Aktifkan `zoom on` dan `pan on` untuk mencoba eksplorasi visual.

---

## 13. Tugas Latihan

Kerjakan soal berikut di Octave.

### 13.1 Latihan 1
Buat empat subplot dalam satu figure yang masing-masing menampilkan:

- `y = x`
- `y = x.^2`
- `y = sqrt(x)`
- `y = 1 ./ (x + 1)`

Gunakan domain `x = 0:0.1:10`.

### 13.2 Latihan 2
Buat histogram dari 500 data acak uniform dengan 10 bin. Tambahkan judul dan label sumbu.

### 13.3 Latihan 3
Buat histogram dari 500 data acak normal dengan 10 bin, lalu bandingkan dengan histogram 20 bin. Tuliskan pengamatan singkat tentang perbedaannya.

### 13.4 Latihan 4
Buat grafik `y = sin(x)` untuk `x = 0:0.1:2*pi`, lalu pilih dua titik menggunakan `ginput (2)`. Tampilkan koordinat kedua titik tersebut di Command Window.

### 13.5 Latihan 5
Buat satu grafik dan beri anotasi teks pada dua posisi berbeda menggunakan `text` atau `gtext`.

---

## 14. Tugas Praktikum

### 14.1 Judul Tugas
**Membuat Dashboard Grafik Sederhana di GNU Octave**

### 14.2 Tujuan
Mahasiswa mampu menyusun satu figure yang berisi beberapa jenis visualisasi 2D dan interaksi sederhana.

### 14.3 Instruksi

Buat file skrip bernama:

```text
praktikum_visualisasi2d_lanjut.m
```

Isi skrip harus memenuhi ketentuan berikut:

1. Membuat satu figure dengan 4 subplot:
   - grafik fungsi `sin(x)`
   - grafik fungsi `cos(x)`
   - grafik fungsi `sin(x) + cos(x)`
   - histogram dari 500 data acak normal
2. Menggunakan `x = 0:0.1:2*pi`.
3. Menambahkan judul, label sumbu bila relevan, dan `grid on`.
4. Meminta pengguna memilih satu titik pada subplot `sin(x) + cos(x)` dengan `ginput (1)`.
5. Menandai titik yang dipilih dan menampilkan koordinatnya.
6. Menghitung nilai minimum, maksimum, rata-rata, dan simpangan baku dari data histogram.
7. Menampilkan ringkasan statistik tersebut di Command Window.
8. Menyimpan figure hasil akhir ke file `hasil_visualisasi2d_lanjut.png`.

Petunjuk penyimpanan:

```octave
print ("hasil_visualisasi2d_lanjut.png", "-dpng")
```

### 14.4 Luaran yang Dikumpulkan

1. `praktikum_visualisasi2d_lanjut.m`
2. file gambar `hasil_visualisasi2d_lanjut.png`
3. tangkapan layar hasil eksekusi

---

## 17. Ringkasan

Pada modul ini mahasiswa telah mempelajari:

- visualisasi 2D lanjut di Octave,
- penggunaan `subplot` untuk menyusun banyak grafik pada satu figure,
- penggunaan `hist` untuk melihat distribusi frekuensi data,
- penggunaan `ginput`, `gtext`, `zoom`, dan `pan` untuk interaksi grafik,
- penyusunan grafik yang lebih informatif dan komunikatif.

Kemampuan ini penting sebagai fondasi untuk analisis data numerik, visualisasi hasil eksperimen, dan pengembangan aplikasi komputasi yang lebih interaktif.

---

## 18. Referensi

1. GNU Octave Manual 11.1.0, bagian **Plotting**.  
   https://docs.octave.org/latest/Plotting.html

2. GNU Octave Manual 11.1.0, bagian **Two-Dimensional Plots**.  
   https://docs.octave.org/latest/Two_002dDimensional-Plots.html

3. GNU Octave Manual 11.1.0, bagian **Multiple Plots on One Page**.  
   https://docs.octave.org/latest/Multiple-Plots-on-One-Page.html

4. GNU Octave Manual 11.1.0, bagian **Interacting with Plots**.  
   https://docs.octave.org/latest/Interacting-with-Plots.html

5. GNU Octave Manual 11.1.0, bagian **Plot Annotations**.  
   https://docs.octave.org/latest/Plot-Annotations.html

6. GNU Octave Manual 11.1.0, bagian **Manipulation of Plot Objects**.  
   https://docs.octave.org/latest/Manipulation-of-Plot-Objects.html
