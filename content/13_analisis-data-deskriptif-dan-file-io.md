# Analisis Data Deskriptif dan File I/O

### Identitas Modul
- **Mata kuliah**: Pemrograman Dasar
- **Topik**: Analisis Data Deskriptif dan File I/O
- **Perangkat lunak**: GNU Octave
- **Bentuk bahan ajar**: Modul praktikum berbasis markdown
- **Acuan utama**: Dokumentasi resmi GNU Octave 11.1.0

---

## 1. Deskripsi Singkat

Pada pertemuan ini, mahasiswa mempelajari cara melakukan analisis data deskriptif dasar di GNU Octave serta cara membaca dan menulis data ke file. Materi statistik deskriptif berfokus pada ringkasan data menggunakan ukuran pemusatan dan penyebaran seperti `mean`, `median`, `mode`, `bounds`, `range`, `iqr`, `std`, dan `var`.

Selain itu, mahasiswa juga mempelajari dua pendekatan dasar File I/O di Octave. Pendekatan pertama menggunakan perintah sederhana seperti `save` dan `load` untuk menyimpan dan memuat variabel. Pendekatan kedua menggunakan fungsi level lebih rendah seperti `fopen`, `fprintf`, `fscanf`, `fgetl`, dan `fclose` untuk menulis serta membaca file teks secara lebih terkontrol.

Dengan materi ini, mahasiswa diharapkan mampu membaca data numerik, merangkum data secara statistik, lalu menyimpan hasil analisis ke file untuk dipakai kembali pada praktikum berikutnya.

---

## 2. Capaian Pembelajaran

Setelah menyelesaikan praktikum ini, mahasiswa diharapkan mampu:

1. menjelaskan tujuan analisis data deskriptif,
2. menghitung ukuran pemusatan data menggunakan `mean`, `median`, dan `mode`,
3. menghitung ukuran penyebaran data menggunakan `range`, `iqr`, `std`, dan `var`,
4. memahami analisis data vektor dan matriks di Octave,
5. menyimpan variabel ke file menggunakan `save`,
6. memuat kembali data dari file menggunakan `load`,
7. menulis dan membaca file teks sederhana menggunakan `fopen`, `fprintf`, `fscanf`, dan `fclose`,
8. membuat skrip analisis data yang rapi dan dapat dijalankan ulang.

---

## 3. Prasyarat

Mahasiswa sebaiknya telah memahami:

- variabel, skalar, vektor, dan matriks,
- operator dasar Octave,
- script `.m`,
- string dan output dasar,
- penggunaan fungsi bawaan Octave.

---

## 4. Dasar Teori

## 4.1 Statistik Deskriptif di Octave

GNU Octave menyediakan dukungan statistik dasar di inti bahasa, dengan penekanan pada statistik deskriptif. Dokumentasi resmi juga menjelaskan bahwa untuk data multi-dimensi, fungsi statistik pada umumnya mengasumsikan **setiap baris adalah observasi** dan **setiap kolom adalah variabel**.

Artinya, jika data disusun dalam matriks, maka operasi seperti `mean (A)` atau `std (A)` secara default akan bekerja **per kolom**.

Contoh bentuk data:

```octave
A = [72 165 8;
     68 170 7;
     75 168 9;
     80 172 6];
```

Makna data di atas dapat dibaca sebagai:
- baris = observasi,
- kolom 1 = nilai variabel pertama,
- kolom 2 = nilai variabel kedua,
- kolom 3 = nilai variabel ketiga.

## 4.2 Ukuran Pemusatan

Ukuran pemusatan digunakan untuk merangkum nilai pusat dari suatu kumpulan data.

### a. Mean

`mean` menghitung rata-rata aritmetika data.

```octave
m = mean (x)
```

Untuk vektor, hasilnya satu nilai. Untuk matriks, hasil default adalah rata-rata setiap kolom.

### b. Median

`median` menghitung nilai tengah dari data yang sudah diurutkan.

```octave
m = median (x)
```

Median sering lebih stabil daripada mean jika terdapat pencilan.

### c. Mode

`mode` menghitung nilai yang paling sering muncul.

```octave
m = mode (x)
```

Jika ada lebih dari satu nilai dengan frekuensi tertinggi yang sama, Octave mengembalikan nilai terkecil di antaranya.

## 4.3 Ukuran Penyebaran

Ukuran penyebaran menunjukkan seberapa lebar data tersebar dari pusatnya.

### a. Nilai minimum dan maksimum

Octave menyediakan `bounds` untuk memperoleh nilai minimum dan maksimum sekaligus.

```octave
[minimum, maksimum] = bounds (x)
```

### b. Range

`range` adalah selisih nilai maksimum dan minimum.

```octave
r = range (x)
```

### c. Interquartile Range (IQR)

`iqr` menghitung jarak antara kuartil ketiga dan kuartil pertama.

```octave
r = iqr (x)
```

IQR lebih tahan terhadap pencilan dibanding `range` atau `std`.

### d. Standar deviasi

`std` mengukur penyebaran data terhadap rata-ratanya.

```octave
s = std (x)
```

### e. Varians

`var` adalah kuadrat dari standar deviasi.

```octave
v = var (x)
```

## 4.4 Operasi pada Dimensi Data

Sebagian besar fungsi statistik di Octave mendukung argumen dimensi.

Contoh:

```octave
mean (A)      % rata-rata tiap kolom
mean (A, 2)   % rata-rata tiap baris
mean (A, "all")
```

Makna:
- `mean (A)` menghitung rata-rata setiap kolom,
- `mean (A, 2)` menghitung rata-rata setiap baris,
- `mean (A, "all")` menghitung rata-rata semua elemen matriks.

## 4.5 Penanganan Nilai NaN

Banyak fungsi statistik di Octave mendukung argumen `nanflag`. Beberapa fungsi seperti `mean`, `median`, `std`, dan `var` mendukung pilihan seperti `"includenan"` atau `"omitnan"`.

Contoh:

```octave
x = [10 20 NaN 40];
mean (x)
mean (x, "omitnan")
```

Secara praktis, `omitnan` berguna ketika data hilang direpresentasikan dengan `NaN`.

## 4.6 File I/O di Octave

File I/O adalah proses membaca data dari file dan menulis data ke file. Di Octave, pendekatan dasarnya dapat dibagi menjadi dua.

### a. Simple File I/O

Menggunakan perintah seperti `save` dan `load`.

```octave
save data.mat A
load data.mat
```

Perintah ini cocok untuk menyimpan variabel Octave dengan cepat.

### b. File I/O berbasis file descriptor

Menggunakan `fopen`, `fprintf`, `fscanf`, `fgetl`, dan `fclose`.

Pola dasarnya:

```octave
fid = fopen ("file.txt", "w");
% tulis data
fclose (fid);
```

Untuk membaca file:

```octave
fid = fopen ("file.txt", "r");
% baca data
fclose (fid);
```

`fopen` mengembalikan file identifier. Jika gagal membuka file, nilainya dapat menjadi `-1`.

## 4.7 Format Output ke File

Saat menulis laporan atau hasil analisis, `fprintf` sangat berguna karena mendukung format keluaran terstruktur.

Contoh:

```octave
fprintf ("Rata-rata = %.2f\n", rata2)
```

Jika argumen pertama adalah file identifier, keluaran ditulis ke file, bukan ke layar.

---

## 5. Fungsi-Fungsi Penting

### 5.1 Statistik deskriptif

- `mean (x)` : rata-rata
- `median (x)` : nilai tengah
- `mode (x)` : modus
- `[a, b] = bounds (x)` : minimum dan maksimum
- `range (x)` : jangkauan
- `iqr (x)` : interquartile range
- `std (x)` : standar deviasi
- `var (x)` : varians
- `sum (x)` : jumlah seluruh elemen
- `sort (x)` : mengurutkan data

### 5.2 File I/O

- `save file variabel` : menyimpan variabel ke file
- `load file` : memuat data dari file
- `fid = fopen (nama, mode)` : membuka file
- `fprintf (fid, format, ...)` : menulis ke file
- `fscanf (fid, format, ukuran)` : membaca data terformat
- `baris = fgetl (fid)` : membaca satu baris teks
- `fclose (fid)` : menutup file

---

## 6. Contoh Kode dan Penjelasan

## 6.1 Contoh 1 — Statistik Deskriptif pada Vektor

```octave
nilai = [72 75 80 80 84 90 95 95 95 100];

rata2 = mean (nilai)
median_nilai = median (nilai)
modus = mode (nilai)
[minimum, maksimum] = bounds (nilai)
jarak = range (nilai)
iqr_nilai = iqr (nilai)
simpangan_baku = std (nilai)
varians_nilai = var (nilai)
```

### Penjelasan

- `mean (nilai)` menghitung rata-rata data.
- `median (nilai)` menghitung nilai tengah.
- `mode (nilai)` mencari nilai yang paling sering muncul.
- `bounds (nilai)` mengembalikan minimum dan maksimum sekaligus.
- `range (nilai)` menghitung selisih maksimum dan minimum.
- `iqr (nilai)` mengukur sebaran tengah data.
- `std (nilai)` dan `var (nilai)` mengukur tingkat sebaran data terhadap rata-rata.

## 6.2 Contoh 2 — Statistik Deskriptif pada Matriks

```octave
data = [72 165 8;
        68 170 7;
        75 168 9;
        80 172 6];

mean_kolom = mean (data)
mean_baris = mean (data, 2)
mean_semua = mean (data, "all")
std_kolom = std (data)
[var_kolom, mean_kolom_lagi] = var (data)
```

### Penjelasan

- `mean (data)` menghitung rata-rata tiap kolom.
- `mean (data, 2)` menghitung rata-rata tiap baris.
- `mean (data, "all")` menghitung rata-rata seluruh elemen.
- `std (data)` menghasilkan standar deviasi tiap kolom.
- `var (data)` menghasilkan varians tiap kolom dan dapat juga mengembalikan mean.

## 6.3 Contoh 3 — Mengabaikan Nilai NaN

```octave
x = [10 20 NaN 40 50];

mean_biasa = mean (x)
mean_tanpa_nan = mean (x, "omitnan")
median_tanpa_nan = median (x, "omitnan")
std_tanpa_nan = std (x, 0, "omitnan")
```

### Penjelasan

- Tanpa `omitnan`, hasil dapat menjadi `NaN`.
- Dengan `omitnan`, elemen `NaN` diabaikan dalam perhitungan.
- Teknik ini umum dipakai ketika data belum lengkap.

## 6.4 Contoh 4 — Menyimpan dan Memuat Variabel dengan `save` dan `load`

```octave
data = [72 75 80; 81 79 90; 88 84 92];
rata2 = mean (data);
std_data = std (data);

save hasil_analisis.mat data rata2 std_data

clear data rata2 std_data

load hasil_analisis.mat
who
```

### Penjelasan

- `save hasil_analisis.mat data rata2 std_data` menyimpan variabel yang disebutkan ke file.
- `clear` menghapus variabel dari workspace.
- `load hasil_analisis.mat` memuat kembali variabel ke workspace.
- `who` dipakai untuk memeriksa apakah variabel berhasil dimuat.

## 6.5 Contoh 5 — Menulis Laporan Ringkas ke File Teks

```octave
nilai = [72 75 80 80 84 90 95 95 95 100];

rata2 = mean (nilai);
median_nilai = median (nilai);
modus = mode (nilai);
[minimum, maksimum] = bounds (nilai);

fid = fopen ("laporan_statistik.txt", "w");

fprintf (fid, "LAPORAN STATISTIK DESKRIPTIF\n");
fprintf (fid, "===========================\n");
fprintf (fid, "Jumlah data   : %d\n", length (nilai));
fprintf (fid, "Rata-rata     : %.2f\n", rata2);
fprintf (fid, "Median        : %.2f\n", median_nilai);
fprintf (fid, "Modus         : %.2f\n", modus);
fprintf (fid, "Minimum       : %.2f\n", minimum);
fprintf (fid, "Maksimum      : %.2f\n", maksimum);

fclose (fid);
```

### Penjelasan

- `fopen (..., "w")` membuka file untuk ditulis.
- `fprintf` menulis teks dan angka terformat.
- `%.2f` berarti angka pecahan ditulis dengan dua digit di belakang koma.
- `fclose` wajib dipanggil agar file ditutup dengan benar.

## 6.6 Contoh 6 — Membaca Data Numerik dari File Teks

```octave
fid = fopen ("data_angka.txt", "w");
fprintf (fid, "10 20 30\n40 50 60\n70 80 90\n");
fclose (fid);

fid = fopen ("data_angka.txt", "r");
A = fscanf (fid, "%f", [3, 3])';
fclose (fid);

A
mean_A = mean (A)
```

### Penjelasan

- File dibuat terlebih dahulu agar contoh dapat langsung diuji.
- `fscanf` membaca bilangan dari file menurut format yang diberikan.
- Ukuran `[3, 3]` menyatakan data dibaca sebagai matriks 3×3.
- Tanda transpose `'` dipakai agar orientasi hasil sesuai dengan susunan baris pada file.

## 6.7 Contoh 7 — Membaca File Baris per Baris

```octave
fid = fopen ("catatan.txt", "w");
fprintf (fid, "baris pertama\n");
fprintf (fid, "baris kedua\n");
fprintf (fid, "baris ketiga\n");
fclose (fid);

fid = fopen ("catatan.txt", "r");
baris1 = fgetl (fid)
baris2 = fgetl (fid)
baris3 = fgetl (fid)
fclose (fid);
```

### Penjelasan

- `fgetl` membaca satu baris teks setiap kali dipanggil.
- Teknik ini berguna untuk membaca file teks sederhana, header, atau catatan hasil eksperimen.

---

## 7. Langkah Praktikum

Ikuti langkah berikut secara berurutan.

1. Buat vektor data numerik minimal 10 elemen.
2. Hitung `mean`, `median`, `mode`, `bounds`, `range`, `iqr`, `std`, dan `var`.
3. Buat sebuah matriks data berukuran minimal `4 x 3`.
4. Hitung rata-rata per kolom, per baris, dan seluruh elemen.
5. Simpan matriks dan hasil analisis ke file `.mat`.
6. Hapus variabel dari workspace, lalu muat kembali file tersebut.
7. Buat file teks laporan menggunakan `fopen`, `fprintf`, dan `fclose`.
8. Buat file teks berisi angka, lalu baca kembali menggunakan `fscanf`.
9. Bandingkan hasil data asli dan data hasil pembacaan file.
10. Simpan semua skrip pada folder praktikum yang sama.

---

## 8. Latihan Terbimbing

### Latihan 1 — Ringkasan Data Vektor

Gunakan data berikut:

```octave
x = [12 15 18 18 20 21 24 24 24 30];
```

Kerjakan:
1. hitung mean,
2. hitung median,
3. hitung mode,
4. hitung minimum dan maksimum,
5. hitung range,
6. hitung IQR,
7. hitung standar deviasi,
8. hitung varians.

### Latihan 2 — Statistik Matriks

Gunakan data berikut:

```octave
d = [70 80 90;
     75 85 95;
     72 88 91;
     78 84 93];
```

Kerjakan:
1. hitung mean tiap kolom,
2. hitung mean tiap baris,
3. hitung std tiap kolom,
4. hitung var tiap kolom,
5. hitung mean seluruh elemen.

### Latihan 3 — Menyimpan dan Memuat Data

1. Buat matriks `A` ukuran `3 x 4`.
2. Simpan ke file `data_latihan.mat`.
3. Hapus variabel `A`.
4. Muat kembali file tersebut.
5. Tampilkan isi variabel yang dimuat.

### Latihan 4 — Menulis File Teks

Buat file `ringkasan.txt` yang berisi:
- judul laporan,
- jumlah data,
- nilai minimum,
- nilai maksimum,
- rata-rata.

Gunakan `fprintf`.

### Latihan 5 — Membaca Data dari File

1. Buat file teks numerik ukuran `3 x 3`.
2. Baca file tersebut ke matriks.
3. Hitung mean tiap kolom.

---

## 9. Tugas Latihan

Kerjakan secara mandiri.

1. Buat vektor berisi 12 data numerik.
2. Urutkan data dengan `sort`.
3. Hitung mean, median, mode, minimum, maksimum, range, std, dan var.
4. Buat versi data yang mengandung `NaN`.
5. Bandingkan hasil `mean (x)` dan `mean (x, "omitnan")`.
6. Simpan seluruh hasil ke file teks.

---

## 10. Tugas Praktikum

### Judul
**Analisis Data Deskriptif dan Penyimpanan Hasil ke File**

### Tujuan
Mahasiswa mampu melakukan analisis statistik deskriptif pada data numerik serta menyimpan dan memuat hasil analisis menggunakan file.

### Instruksi

Buat folder kerja dengan nama:

```text
praktikum_octave_analisis_data
```

Di dalam folder tersebut, buat file berikut.

### 10.1 File `data_praktikum.m`

Isi file ini dengan sebuah matriks data berukuran minimal `5 x 4`.

Contoh kerangka:

```octave
data = [72 80 65 90;
        75 78 70 88;
        80 82 68 91;
        70 76 72 85;
        85 90 75 95];
```

### 10.2 File `analisis_deskriptif.m`

File ini harus:

1. memanggil atau memuat data,
2. menghitung:
   - mean tiap kolom,
   - median tiap kolom,
   - mode tiap kolom,
   - minimum dan maksimum tiap kolom,
   - range tiap kolom,
   - std tiap kolom,
   - var tiap kolom,
3. menampilkan hasil di Command Window,
4. menyimpan variabel hasil ke file `hasil_analisis.mat`.

Contoh kerangka:

```octave
clear;
clc;

run ("data_praktikum.m");

mean_kolom = mean (data);
median_kolom = median (data);
mode_kolom = mode (data);
[min_kolom, max_kolom] = bounds (data);
range_kolom = range (data);
std_kolom = std (data);
var_kolom = var (data);

mean_kolom
median_kolom
mode_kolom
min_kolom
max_kolom
range_kolom
std_kolom
var_kolom

save hasil_analisis.mat data mean_kolom median_kolom mode_kolom min_kolom max_kolom range_kolom std_kolom var_kolom
```

### 10.3 File `buat_laporan.m`

File ini harus:

1. memuat file `hasil_analisis.mat`,
2. membuat file teks bernama `laporan_hasil.txt`,
3. menuliskan ringkasan hasil analisis ke file tersebut.

Contoh kerangka:

```octave
clear;
clc;

load hasil_analisis.mat

fid = fopen ("laporan_hasil.txt", "w");

fprintf (fid, "LAPORAN ANALISIS DATA\n");
fprintf (fid, "=====================\n\n");

fprintf (fid, "Mean per kolom   : ");
fprintf (fid, "%.2f ", mean_kolom);
fprintf (fid, "\n");

fprintf (fid, "Median per kolom : ");
fprintf (fid, "%.2f ", median_kolom);
fprintf (fid, "\n");

fprintf (fid, "Mode per kolom   : ");
fprintf (fid, "%.2f ", mode_kolom);
fprintf (fid, "\n");

fprintf (fid, "Minimum per kolom: ");
fprintf (fid, "%.2f ", min_kolom);
fprintf (fid, "\n");

fprintf (fid, "Maksimum per kolom: ");
fprintf (fid, "%.2f ", max_kolom);
fprintf (fid, "\n");

fprintf (fid, "Range per kolom  : ");
fprintf (fid, "%.2f ", range_kolom);
fprintf (fid, "\n");

fprintf (fid, "Std per kolom    : ");
fprintf (fid, "%.2f ", std_kolom);
fprintf (fid, "\n");

fprintf (fid, "Var per kolom    : ");
fprintf (fid, "%.2f ", var_kolom);
fprintf (fid, "\n");

fclose (fid);
```

### 10.4 File `baca_file_teks.m`

File ini harus:

1. membuat file teks berisi data numerik,
2. membaca kembali data dari file,
3. menampilkan data hasil pembacaan,
4. menghitung mean data hasil pembacaan.

Contoh kerangka:

```octave
clear;
clc;

fid = fopen ("angka_uji.txt", "w");
fprintf (fid, "5 10 15\n20 25 30\n35 40 45\n");
fclose (fid);

fid = fopen ("angka_uji.txt", "r");
B = fscanf (fid, "%f", [3, 3])';
fclose (fid);

B
mean_B = mean (B)
```

### 10.5 Luaran yang Dikumpulkan

Mahasiswa mengumpulkan:

1. `data_praktikum.m`
2. `analisis_deskriptif.m`
3. `buat_laporan.m`
4. `baca_file_teks.m`
5. `hasil_analisis.mat`
6. `laporan_hasil.txt`
7. tangkapan layar hasil eksekusi

---

## 11. Kriteria Penilaian

- **Kebenaran data dan struktur file** : 15%
- **Kebenaran analisis deskriptif** : 25%
- **Ketepatan penggunaan `save` dan `load`** : 15%
- **Ketepatan penggunaan `fopen`, `fprintf`, `fscanf`, `fclose`** : 20%
- **Kerapian skrip dan komentar** : 10%
- **Kelengkapan luaran** : 15%

---

## 12. Kesalahan Umum yang Sering Terjadi

### 12.1 Salah memahami orientasi matriks

Kesalahan umum:
- mengira `mean (A)` menghitung rata-rata seluruh elemen.

Padahal:
- `mean (A)` default bekerja per kolom,
- gunakan `mean (A, "all")` untuk seluruh elemen.

### 12.2 Lupa menutup file

Kesalahan umum:
- file dibuka dengan `fopen`, tetapi tidak ditutup.

Akibat:
- isi file bisa tidak lengkap atau file tetap terbuka.

Solusi:
- selalu akhiri dengan `fclose (fid)`.

### 12.3 Ukuran pembacaan `fscanf` tidak sesuai

Kesalahan umum:
- ukuran matriks saat membaca tidak cocok dengan isi file.

Solusi:
- pastikan jumlah elemen dan bentuk data pada file sesuai dengan ukuran yang diminta.

### 12.4 Variabel tidak muncul setelah `load`

Penyebab:
- nama file salah,
- file tidak berada pada direktori aktif,
- file belum berhasil dibuat.

Solusi:

```octave
pwd
dir
who
```

### 12.5 Hasil statistik menjadi `NaN`

Penyebab:
- data memuat `NaN`, lalu dihitung tanpa `omitnan`.

Solusi:

```octave
mean (x, "omitnan")
median (x, "omitnan")
```

---

## 13. Ringkasan

Pada pertemuan ini, mahasiswa telah mempelajari:

- konsep statistik deskriptif pada data numerik,
- ukuran pemusatan: `mean`, `median`, `mode`,
- ukuran penyebaran: `bounds`, `range`, `iqr`, `std`, `var`,
- analisis data vektor dan matriks,
- penyimpanan variabel dengan `save`,
- pemuatan data dengan `load`,
- penulisan file teks dengan `fopen` dan `fprintf`,
- pembacaan file teks dengan `fscanf` dan `fgetl`.

Materi ini sangat penting karena pada praktik komputasi numerik, data jarang hanya ditampilkan di layar. Data biasanya perlu diringkas, disimpan, dibaca kembali, dan didokumentasikan dalam file agar dapat dipakai pada tahap analisis berikutnya.

---

## 14. Referensi

1. GNU Octave Manual 11.1.0 — https://docs.octave.org/latest/
2. Statistics — https://docs.octave.org/latest/Statistics.html
3. Descriptive Statistics — https://docs.octave.org/latest/Descriptive-Statistics.html
4. Basic Statistical Functions — https://docs.octave.org/latest/Basic-Statistical-Functions.html
5. Input and Output — https://docs.octave.org/latest/Input-and-Output.html
6. Simple File I/O — https://docs.octave.org/latest/Simple-File-I_002fO.html
7. Opening and Closing Files — https://docs.octave.org/latest/Opening-and-Closing-Files.html
8. Formatted Output — https://docs.octave.org/latest/Formatted-Output.html
9. Formatted Input — https://docs.octave.org/latest/Formatted-Input.html
10. Terminal Output — https://docs.octave.org/latest/Terminal-Output.html