# Visualisasi 2D Dasar

## 1. Deskripsi Singkat

Visualisasi data merupakan bagian penting dalam pemrograman numerik karena membantu memahami pola, tren, hubungan antar-variabel, dan hasil komputasi. Pada GNU Octave, pembuatan grafik 2D dilakukan dengan fungsi tingkat tinggi seperti `plot`, `fplot`, `bar`, `stairs`, `stem`, dan `errorbar`. Dokumentasi resmi GNU Octave terbaru saat ini merujuk ke **GNU Octave 11.1.0**.

Dalam praktikum ini, fokus utama adalah membuat grafik 2D sederhana, memberi judul dan label, menambahkan legenda, mengatur sumbu, menampilkan beberapa grafik dalam satu jendela, serta menyimpan hasil visualisasi ke file.

---

## 2. Dasar Teori

### 2.1 Plotting di Octave

Octave menyediakan fasilitas plotting tingkat tinggi untuk membuat berbagai jenis grafik dua dimensi dan tiga dimensi. Untuk kebutuhan dasar visualisasi 2D, fungsi yang paling umum digunakan adalah `plot`, yang menggambar hubungan antara data sumbu-`x` dan sumbu-`y`.

Contoh resmi pada manual:

```octave
x = -10:0.1:10;
plot (x, sin (x));
xlabel ("x");
ylabel ("sin (x)");
title ("Simple 2-D Plot");
```

Pada banyak sistem, perintah tersebut akan membuka jendela figure terpisah untuk menampilkan grafik.

### 2.2 Figure dan Axes

Setiap grafik biasanya ditampilkan dalam sebuah **figure**. Di dalam figure terdapat **axes**, yaitu area tempat kurva, batang, titik, label sumbu, dan judul ditampilkan.

### 2.3 Anotasi Grafik

Agar grafik informatif, Octave menyediakan fungsi anotasi seperti:

- `title()` untuk judul grafik,
- `xlabel()` untuk label sumbu-x,
- `ylabel()` untuk label sumbu-y,
- `legend()` untuk keterangan kurva,
- `text()` untuk menambahkan teks pada lokasi tertentu,
- `grid()` untuk menampilkan grid,
- `box()` untuk mengatur border area plot.

Menurut dokumentasi resmi, secara default grid dalam keadaan **off**, sedangkan border plot dalam keadaan **on**.

### 2.4 Pengaturan Sumbu

Fungsi `axis()` digunakan untuk mengatur batas sumbu, aspek rasio, serta beberapa properti visual lain pada axes. Jika dipanggil tanpa argumen, `axis` mengaktifkan autoscaling. Beberapa mode yang sering dipakai adalah:

- `axis([xmin xmax ymin ymax])`
- `axis("equal")`
- `axis("square")`
- `axis("tight")`

### 2.5 Plot Fungsi dengan `fplot`

Octave dapat mem-plot fungsi secara langsung dari **function handle**, string nama fungsi, atau fungsi inline tanpa perlu membuat data `x` dan `y` secara manual. Hal ini dilakukan dengan `fplot`.

Contoh:

```octave
fplot (@sin, [-10, 10], 201)
```

### 2.6 Beberapa Grafik dalam Satu Figure

Untuk menampilkan lebih dari satu grafik pada satu jendela, Octave menyediakan `subplot(m, n, p)` yang membagi figure menjadi `m` baris dan `n` kolom, lalu memilih panel ke-`p`.

### 2.7 Menyimpan Grafik

Hasil visualisasi dapat disimpan menggunakan fungsi `print`. Dokumentasi resmi menjelaskan bahwa format raster seperti PNG dan JPEG serta format vektor seperti PDF, EPS, dan SVG dapat digunakan untuk menyimpan plot.

Contoh:

```octave
print -dpng grafik1.png
```

---

## 3. Fungsi-Fungsi Penting pada Visualisasi 2D

| Fungsi | Kegunaan |
|---|---|
| `plot(x, y)` | Membuat grafik garis 2D |
| `fplot(f, [a b])` | Membuat grafik fungsi pada interval tertentu |
| `title("...")` | Menambahkan judul |
| `xlabel("...")` | Label sumbu-x |
| `ylabel("...")` | Label sumbu-y |
| `legend("...")` | Menambahkan legenda |
| `grid on` | Menampilkan grid |
| `hold on` | Menahan grafik agar plot berikutnya ditambahkan pada axes yang sama |
| `axis([...])` | Mengatur rentang sumbu |
| `subplot(m,n,p)` | Membagi figure menjadi beberapa panel |
| `stem(x,y)` | Grafik titik bertangkai |
| `bar(x,y)` | Diagram batang |
| `stairs(x,y)` | Grafik tangga |
| `errorbar(x,y,e)` | Plot dengan error bar |
| `print` | Menyimpan grafik ke file |

---

## 4. Langkah Praktikum

### 4.1 Grafik Garis Sederhana

Ketik atau simpan skrip berikut:

```octave
clc;
clear;

x = 0:0.1:2*pi;
y = sin(x);

plot(x, y);
title("Grafik y = sin(x)");
xlabel("x");
ylabel("sin(x)");
grid on;
```

**Penjelasan kode:**
- `x = 0:0.1:2*pi;` membuat vektor dari 0 sampai `2*pi` dengan langkah 0.1.
- `y = sin(x);` menghitung nilai sinus untuk setiap elemen pada `x`.
- `plot(x, y);` menampilkan grafik hubungan `x` dan `y`.
- `title`, `xlabel`, `ylabel` memperjelas informasi grafik.
- `grid on` membantu pembacaan nilai.

### 4.2 Menampilkan Dua Kurva pada Grafik yang Sama

```octave
clc;
clear;

x = 0:0.1:2*pi;
y1 = sin(x);
y2 = cos(x);

plot(x, y1, "b", x, y2, "r--");
title("Grafik sin(x) dan cos(x)");
xlabel("x");
ylabel("nilai fungsi");
legend("sin(x)", "cos(x)");
grid on;
```

**Penjelasan kode:**
- Satu pemanggilan `plot` dapat menggambar beberapa pasangan data sekaligus.
- `"b"` berarti warna biru.
- `"r--"` berarti garis merah putus-putus.
- `legend()` memberi penjelasan kurva.

### 4.3 Menggunakan `hold on`

```octave
clc;
clear;

x = 0:0.1:2*pi;
plot(x, sin(x), "b");
hold on;
plot(x, cos(x), "r");
legend("sin(x)", "cos(x)");
title("Dua kurva dengan hold on");
grid on;
hold off;
```

**Penjelasan kode:**
- `hold on` mempertahankan plot pertama agar plot berikutnya ditambahkan ke axes yang sama.
- `hold off` mengembalikan perilaku default.

### 4.4 Mengatur Sumbu dengan `axis`

```octave
clc;
clear;

x = -2*pi:0.1:2*pi;
y = sin(x);

plot(x, y);
axis([-7 7 -1.5 1.5]);
title("Pengaturan rentang sumbu");
xlabel("x");
ylabel("sin(x)");
grid on;
```

**Penjelasan kode:**
- `axis([xmin xmax ymin ymax])` mengatur batas tampilan sumbu x dan y.

### 4.5 Plot Fungsi dengan `fplot`

```octave
clc;
clear;

fplot(@(x) x.^2 - 4*x + 3, [-2, 6]);
title("Grafik fungsi kuadrat");
xlabel("x");
ylabel("f(x)");
grid on;
```

**Penjelasan kode:**
- `@(x) ...` adalah anonymous function.
- `fplot` memplot fungsi langsung pada interval yang ditentukan.
- Operator `.^` digunakan agar perpangkatan bekerja elemen demi elemen.

### 4.6 Menampilkan Beberapa Grafik dalam Satu Figure

```octave
clc;
clear;

x = 0:0.1:2*pi;

subplot(2,1,1);
plot(x, sin(x));
title("Subplot 1: sin(x)");
grid on;

subplot(2,1,2);
plot(x, cos(x));
title("Subplot 2: cos(x)");
grid on;
```

**Penjelasan kode:**
- `subplot(2,1,1)` berarti figure dibagi menjadi 2 baris, 1 kolom, lalu aktif pada panel pertama.
- `subplot(2,1,2)` memilih panel kedua.

### 4.7 Grafik Batang, Tangga, dan Stem

```octave
clc;
clear;

x = 1:5;
y = [3 7 4 8 5];

subplot(3,1,1);
bar(x, y);
title("Bar Chart");
grid on;

subplot(3,1,2);
stairs(x, y);
title("Stairs Plot");
grid on;

subplot(3,1,3);
stem(x, y);
title("Stem Plot");
grid on;
```

**Penjelasan kode:**
- `bar` cocok untuk data kategori atau frekuensi.
- `stairs` cocok untuk data bertingkat atau sinyal diskret bertahan.
- `stem` cocok untuk menampilkan data diskret.

### 4.8 Grafik dengan Error Bar

```octave
clc;
clear;

x = 1:5;
y = [10 12 11 13 12];
e = [0.5 0.8 0.4 0.7 0.6];

errorbar(x, y, e, "o-");
title("Plot dengan Error Bar");
xlabel("Pengamatan");
ylabel("Nilai");
grid on;
```

**Penjelasan kode:**
- `errorbar` menampilkan titik data beserta rentang error.
- Berguna untuk data eksperimen atau hasil pengukuran.

### 4.9 Menyimpan Grafik ke File

```octave
clc;
clear;

x = 0:0.1:2*pi;
y = sin(x);

plot(x, y);
title("Grafik untuk Disimpan");
xlabel("x");
ylabel("sin(x)");
grid on;

print -dpng grafik_sinus.png
```

**Penjelasan kode:**
- `print -dpng nama_file.png` menyimpan figure aktif ke file PNG.
- Format lain seperti PDF juga bisa digunakan, misalnya `print -dpdf nama_file.pdf`.

---

## 5. Tugas Latihan

### 5.1 Latihan 1
Buat grafik fungsi berikut pada interval `0` sampai `2*pi`:

- `y = sin(x)`
- `y = cos(x)`

Tampilkan keduanya dalam satu axes dengan warna berbeda, lalu tambahkan:
- judul,
- label sumbu,
- legenda,
- grid.

### 5.2 Latihan 2
Buat grafik fungsi:

```octave
y = x.^2
```

untuk `x = -5:0.5:5`, lalu atur sumbu agar:
- sumbu-x dari `-6` sampai `6`
- sumbu-y dari `0` sampai `30`

### 5.3 Latihan 3
Gunakan `subplot` untuk menampilkan tiga grafik berikut dalam satu figure:
- `sin(x)`
- `cos(x)`
- `sin(x) + cos(x)`

### 5.4 Latihan 4
Buat satu data diskret sederhana dan tampilkan dalam bentuk:
- `bar`
- `stem`
- `stairs`

Bandingkan tampilannya.

### 5.5 Latihan 5
Buat plot fungsi menggunakan `fplot` untuk:

```octave
f(x) = x.^3 - 3*x
```

pada interval `[-3, 3]`.

---

## 6. Tugas Praktikum

### 6.1 Judul
**Membuat Dashboard Visualisasi 2D Dasar di GNU Octave**

### 6.2 Tujuan
Mahasiswa mampu membuat beberapa jenis grafik 2D dan menyajikannya secara informatif.

### 6.3 Instruksi
Buat **satu file script saja** bernama `praktikum_visualisasi2d_dasar.m`.

Ketentuan:
- tidak perlu membuat folder baru,
- tidak perlu memecah program menjadi beberapa file,
- seluruh bagian dikerjakan dalam satu script yang bisa langsung dijalankan.

Isi script harus memuat:
- grafik `sin(x)` dan `cos(x)` dalam satu axes,
- tiga subplot fungsi sederhana,
- data diskret yang ditampilkan dengan `bar`, `stem`, dan `stairs`,
- contoh `fplot` untuk minimal dua fungsi,
- penyimpanan salah satu hasil figure ke file gambar.

Contoh target hasil:
- satu figure untuk `sin(x)` dan `cos(x)`,
- satu figure untuk subplot fungsi,
- satu figure untuk data diskret,
- satu figure untuk `fplot`,
- satu file gambar misalnya `praktikum_visualisasi2d_dasar.png`.

### 6.4 Luaran yang Dikumpulkan

1. `praktikum_visualisasi2d_dasar.m`
2. satu file gambar hasil plot
3. tangkapan layar hasil eksekusi

---

## 8. Ringkasan

Pada modul ini mahasiswa mempelajari dasar visualisasi 2D di GNU Octave, meliputi:

- grafik garis dengan `plot`,
- grafik fungsi dengan `fplot`,
- anotasi grafik menggunakan `title`, `xlabel`, `ylabel`, `legend`, dan `grid`,
- pengaturan sumbu dengan `axis`,
- penyusunan beberapa grafik dengan `subplot`,
- grafik diskret dengan `bar`, `stem`, `stairs`,
- grafik pengukuran dengan `errorbar`,
- penyimpanan hasil plot menggunakan `print`.

Kemampuan ini menjadi dasar untuk materi berikutnya seperti visualisasi data eksperimen, pemodelan numerik, dan plotting 3D.

---

## 9. Referensi Resmi

1. GNU Octave Manual (latest): https://docs.octave.org/latest/
2. Plotting: https://docs.octave.org/latest/Plotting.html
3. High-Level Plotting: https://docs.octave.org/latest/High_002dLevel-Plotting.html
4. Two-Dimensional Plots: https://docs.octave.org/latest/Two_002dDimensional-Plots.html
5. Axis Configuration: https://docs.octave.org/latest/Axis-Configuration.html
6. Two-dimensional Function Plotting: https://docs.octave.org/latest/Two_002ddimensional-Function-Plotting.html
7. Plot Annotations: https://docs.octave.org/latest/Plot-Annotations.html
8. Multiple Plots on One Page: https://docs.octave.org/latest/Multiple-Plots-on-One-Page.html
9. Printing and Saving Plots: https://docs.octave.org/latest/Printing-and-Saving-Plots.html
