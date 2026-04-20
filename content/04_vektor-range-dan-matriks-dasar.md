# Vektor, Range, dan Matriks Dasar

### Identitas Modul
- **Mata kuliah**: Pemrograman Dasar
- **Topik**: Vektor, Range, dan Matriks Dasar
- **Perangkat lunak**: GNU Octave
- **Bentuk file**: Markdown

---

## 1. Deskripsi Singkat

GNU Octave adalah bahasa dan lingkungan komputasi numerik yang berorientasi pada matriks. Pada topik ini, praktikan akan mempelajari cara membuat **vektor baris**, **vektor kolom**, **range**, dan **matriks dasar**, serta bagaimana mengakses elemen-elemen di dalamnya. Materi ini penting karena sebagian besar operasi numerik di Octave dibangun di atas konsep vektor dan matriks.

---

## 2. Capaian Pembelajaran

Setelah mengikuti praktikum ini, praktikan mampu:

1. menjelaskan pengertian vektor dan matriks dalam Octave,
2. membuat vektor baris dan vektor kolom,
3. membuat data berurutan menggunakan notasi range,
4. membuat matriks dasar dengan berbagai cara,
5. mengakses elemen, baris, dan kolom pada matriks,
6. menggunakan fungsi dasar yang berkaitan dengan ukuran dan bentuk data,
7. menyelesaikan latihan dan tugas praktikum berbasis vektor serta matriks.

---

## 3. Dasar Teori

### 3.1 Vektor dan Matriks dalam Octave

Dalam Octave, vektor dan matriks adalah blok dasar komputasi numerik. Matriks ditulis di dalam tanda kurung siku `[ ]`. Elemen-elemen dalam **satu baris** dipisahkan dengan **spasi** atau **koma**, sedangkan **antarbaris** dipisahkan dengan **titik koma** atau pindah baris.

Contoh:

```octave
A = [1, 2; 3, 4]
```

akan menghasilkan matriks:

```text
1  2
3  4
```

### 3.2 Vektor Baris dan Vektor Kolom

- **Vektor baris** memiliki 1 baris dan beberapa kolom.
- **Vektor kolom** memiliki beberapa baris dan 1 kolom.

Contoh:

```octave
v_baris = [2, 4, 6, 8]
v_kolom = [2; 4; 6; 8]
```

### 3.3 Range

Range adalah cara singkat untuk membuat **vektor baris dengan elemen berjarak tetap**.

Bentuk umum:

```octave
awal:akhir
awal:langkah:akhir
```

Contoh:

```octave
1:5
```

menghasilkan:

```text
1  2  3  4  5
```

Contoh lain:

```octave
2:2:10
```

menghasilkan:

```text
2  4  6  8  10
```

### 3.4 Catatan Penting tentang Range Pecahan

Range yang memakai bilangan pecahan menggunakan aritmetika floating-point. Karena itu, hasil batas akhirnya bisa saja tidak selalu persis seperti yang terlihat. Untuk kasus yang membutuhkan titik awal dan akhir yang pasti, pendekatan seperti `linspace` lebih aman.

Contoh yang umum dipakai:

```octave
x = linspace (0, 1, 6)
```

### 3.5 Matriks Dasar

Matriks dapat dibentuk secara manual atau menggunakan fungsi pembangkit.

Contoh manual:

```octave
M = [1, 2, 3; 4, 5, 6]
```

Contoh dengan fungsi bawaan:

```octave
zeros (2, 3)
ones (3, 2)
eye (3)
rand (2, 2)
```

Keterangan:
- `zeros (m, n)` membuat matriks berisi nol,
- `ones (m, n)` membuat matriks berisi satu,
- `eye (n)` membuat matriks identitas ukuran `n x n`,
- `rand (m, n)` membuat matriks acak ukuran `m x n`.

### 3.6 Ukuran Data

Beberapa fungsi yang sering digunakan:

```octave
size (A)
length (v)
rows (A)
columns (A)
numel (A)
```

Keterangan:
- `size (A)` menampilkan ukuran matriks,
- `length (v)` menampilkan panjang vektor,
- `rows (A)` menampilkan jumlah baris,
- `columns (A)` menampilkan jumlah kolom,
- `numel (A)` menampilkan jumlah seluruh elemen.

### 3.7 Akses Elemen dan Bagian Matriks

Elemen matriks dapat diakses dengan indeks:

```octave
A(baris, kolom)
```

Contoh:

```octave
A = [10, 20, 30; 40, 50, 60; 70, 80, 90];
A(2, 3)
```

hasil:

```text
60
```

Mengambil seluruh baris atau kolom:

```octave
A(1, :)   % baris pertama
A(:, 2)   % kolom kedua
```

Mengubah matriks menjadi satu kolom:

```octave
A(:)
```

### 3.8 Kata Kunci `end`

Dalam indeks, `end` berarti posisi terakhir pada dimensi tersebut.

Contoh:

```octave
v = [5, 10, 15, 20, 25];
v(end)
v(1:end-1)
v(1:2:end)
```

---

## 4. Pengenalan Sintaks Penting

### 4.1 Membuat Vektor

```octave
x = [1, 2, 3, 4]
y = [1; 2; 3; 4]
```

### 4.2 Membuat Range

```octave
1:10
0:5:30
10:-2:0
```

### 4.3 Membuat Matriks

```octave
A = [1, 2; 3, 4]
B = [1 2 3; 4 5 6]
```

### 4.4 Mengakses Data

```octave
A(1,1)
A(2,:)
A(:,1)
```

### 4.5 Mengetahui Ukuran

```octave
size (A)
rows (A)
columns (A)
numel (A)
```

---

## 5. Contoh Kode dan Penjelasan

### Contoh 1 — Vektor Baris dan Vektor Kolom

```octave
v1 = [3, 6, 9, 12]
v2 = [3; 6; 9; 12]
```

**Penjelasan:**
- `v1` adalah vektor baris karena semua elemen berada pada satu baris.
- `v2` adalah vektor kolom karena setiap elemen dipisah dengan titik koma.

---

### Contoh 2 — Membuat Range

```octave
a = 1:5
b = 2:2:12
c = 10:-2:2
```

**Penjelasan:**
- `a` menghasilkan bilangan 1 sampai 5.
- `b` menghasilkan bilangan genap dari 2 sampai 12.
- `c` menghasilkan deret menurun dari 10 ke 2 dengan langkah -2.

---

### Contoh 3 — Matriks Dasar

```octave
A = [1, 2, 3; 4, 5, 6]
B = zeros (2, 3)
C = ones (3, 2)
D = eye (3)
```

**Penjelasan:**
- `A` adalah matriks 2 baris 3 kolom.
- `B` adalah matriks nol ukuran 2 x 3.
- `C` adalah matriks satu ukuran 3 x 2.
- `D` adalah matriks identitas ukuran 3 x 3.

---

### Contoh 4 — Ukuran dan Jumlah Elemen

```octave
A = [1, 2, 3; 4, 5, 6];
ukuran = size (A)
jumlah_baris = rows (A)
jumlah_kolom = columns (A)
jumlah_elemen = numel (A)
```

**Penjelasan:**
- `size (A)` menghasilkan pasangan ukuran.
- `rows (A)` memberi jumlah baris.
- `columns (A)` memberi jumlah kolom.
- `numel (A)` memberi jumlah seluruh elemen.

---

### Contoh 5 — Mengakses Elemen Matriks

```octave
A = [10, 20, 30; 40, 50, 60; 70, 80, 90];

nilai_1 = A(2, 2)
baris_1 = A(1, :)
kolom_3 = A(:, 3)
semua = A(:)
```

**Penjelasan:**
- `A(2, 2)` mengambil elemen baris 2 kolom 2.
- `A(1, :)` mengambil seluruh elemen pada baris pertama.
- `A(:, 3)` mengambil seluruh elemen pada kolom ketiga.
- `A(:)` mengubah seluruh elemen matriks menjadi satu vektor kolom.

---

### Contoh 6 — Menggunakan `end`

```octave
v = [5, 10, 15, 20, 25, 30];

terakhir = v(end)
awal_sampai_sebelum_terakhir = v(1:end-1)
elemen_ganjil = v(1:2:end)
elemen_genap = v(2:2:end)
```

**Penjelasan:**
- `end` menunjuk elemen terakhir.
- `1:end-1` mengambil semua elemen kecuali yang terakhir.
- `1:2:end` mengambil elemen posisi ganjil.
- `2:2:end` mengambil elemen posisi genap.

---

## 6. Langkah Praktikum

### Praktik 1 — Membuat Vektor

Ketik dan jalankan perintah berikut:

```octave
clc;
v_baris = [2, 4, 6, 8, 10]
v_kolom = [2; 4; 6; 8; 10]
size (v_baris)
size (v_kolom)
```

**Tujuan:**
- membedakan bentuk vektor baris dan vektor kolom,
- memahami bahwa bentuk data memengaruhi hasil operasi berikutnya.

### Praktik 2 — Membuat Range

```octave
clc;
r1 = 1:10
r2 = 0:3:18
r3 = 20:-5:0
```

**Tujuan:**
- membuat data berurutan secara cepat,
- memahami konsep awal, langkah, dan akhir.

### Praktik 3 — Membuat Matriks

```octave
clc;
A = [1, 2, 3; 4, 5, 6; 7, 8, 9]
B = zeros (3, 3)
C = ones (2, 4)
D = eye (4)
```

**Tujuan:**
- membuat matriks secara manual,
- membuat matriks dengan fungsi bawaan.

### Praktik 4 — Mengakses Isi Matriks

```octave
clc;
A = [11, 12, 13; 21, 22, 23; 31, 32, 33];

elemen = A(3, 2)
baris_kedua = A(2, :)
kolom_pertama = A(:, 1)
vektor_kolom = A(:)
```

**Tujuan:**
- mengambil elemen tertentu,
- mengambil satu baris,
- mengambil satu kolom,
- mengubah matriks menjadi satu kolom.

### Praktik 5 — Eksplorasi Ukuran

```octave
clc;
A = [1, 2, 3, 4; 5, 6, 7, 8];

size (A)
rows (A)
columns (A)
numel (A)
```

**Tujuan:**
- memahami ukuran suatu matriks,
- membedakan jumlah baris, kolom, dan total elemen.

---

## 7. Tugas Latihan

### A. Soal Konsep

Jawab pertanyaan berikut:

1. Apa perbedaan vektor baris dan vektor kolom?
2. Apa fungsi range dalam Octave?
3. Apa perbedaan penulisan `1:5` dan `1:2:5`?
4. Bagaimana cara mengambil semua elemen pada kolom ketiga suatu matriks?
5. Apa fungsi `size`, `rows`, `columns`, dan `numel`?

### B. Soal Praktik

Kerjakan di Octave:

1. Buat vektor baris berisi `5, 10, 15, 20, 25`.
2. Buat vektor kolom berisi `7, 14, 21, 28`.
3. Buat range dari 3 sampai 15 dengan langkah 3.
4. Buat matriks 3 x 3 secara manual berisi angka 1 sampai 9.
5. Ambil baris kedua dan kolom ketiga dari matriks tersebut.
6. Ubah matriks 3 x 3 menjadi satu vektor kolom.
7. Buat matriks identitas ukuran 5 x 5.
8. Buat matriks nol ukuran 2 x 4.
9. Tampilkan jumlah seluruh elemen dari matriks `[1, 2; 3, 4; 5, 6]`.
10. Ambil elemen terakhir dari vektor `[4, 8, 12, 16, 20]`.

---

## 8. Tugas Praktikum

### Judul
**Pembuatan dan Manipulasi Vektor, Range, dan Matriks Dasar di Octave**

### Tujuan
Praktikan mampu membuat dan memanipulasi data berbentuk vektor dan matriks secara benar.

### Instruksi
Buat folder kerja dan simpan tiga file berikut.

---

### File 1 — `vektor_dan_range.m`

Isi file ini dengan program yang:
- membuat satu vektor baris,
- membuat satu vektor kolom,
- membuat tiga buah range,
- menampilkan semua hasil ke layar.

Contoh kerangka:

```octave
clc;
disp("=== VEKTOR DAN RANGE ===");

v1 = [2, 4, 6, 8, 10];
v2 = [3; 6; 9; 12; 15];

r1 = 1:5;
r2 = 2:2:12;
r3 = 15:-3:0;

disp("Vektor baris:");
disp(v1);

disp("Vektor kolom:");
disp(v2);

disp("Range 1:");
disp(r1);

disp("Range 2:");
disp(r2);

disp("Range 3:");
disp(r3);
```

---

### File 2 — `matriks_dasar.m`

Isi file ini dengan program yang:
- membuat satu matriks manual ukuran 3 x 3,
- membuat matriks nol,
- membuat matriks satu,
- membuat matriks identitas,
- menampilkan ukuran setiap matriks.

Contoh kerangka:

```octave
clc;
disp("=== MATRIKS DASAR ===");

A = [1, 2, 3; 4, 5, 6; 7, 8, 9];
B = zeros (2, 3);
C = ones (3, 2);
D = eye (4);

disp("Matriks A:");
disp(A);
disp(size(A));

disp("Matriks B:");
disp(B);
disp(size(B));

disp("Matriks C:");
disp(C);
disp(size(C));

disp("Matriks D:");
disp(D);
disp(size(D));
```

---

### File 3 — `akses_matriks.m`

Isi file ini dengan program yang:
- membuat matriks 4 x 4,
- mengambil elemen tertentu,
- mengambil satu baris,
- mengambil satu kolom,
- mengambil seluruh elemen menjadi satu kolom,
- menggunakan `end` untuk mengambil elemen terakhir.

Contoh kerangka:

```octave
clc;
disp("=== AKSES MATRIKS ===");

A = [11, 12, 13, 14;
     21, 22, 23, 24;
     31, 32, 33, 34;
     41, 42, 43, 44];

disp("Matriks A:");
disp(A);

disp("Elemen baris 3 kolom 2:");
disp(A(3,2));

disp("Baris ke-2:");
disp(A(2,:));

disp("Kolom ke-4:");
disp(A(:,4));

disp("Semua elemen sebagai satu kolom:");
disp(A(:));

disp("Elemen terakhir dari baris pertama:");
disp(A(1,end));
```

---

### Output yang Dikumpulkan

1. file `vektor_dan_range.m`
2. file `matriks_dasar.m`
3. file `akses_matriks.m`
4. tangkapan layar hasil eksekusi
5. ringkasan singkat hasil pengamatan praktikan

---

## 9. Kriteria Penilaian

| Aspek | Bobot |
|---|---:|
| Kebenaran sintaks program | 25% |
| Kebenaran pembuatan vektor dan range | 20% |
| Kebenaran pembuatan matriks | 20% |
| Kebenaran akses elemen/baris/kolom | 20% |
| Kerapian output dan dokumentasi | 15% |

---

## 10. Kesalahan Umum

### 1. Salah memisahkan elemen dan baris
Contoh salah:

```octave
A = [1, 2, 3, 4, 5, 6]
```

jika yang diinginkan sebenarnya matriks 2 x 3.

Contoh benar:

```octave
A = [1, 2, 3; 4, 5, 6]
```

### 2. Salah membedakan vektor baris dan kolom

```octave
[1, 2, 3]
[1; 2; 3]
```

Keduanya berisi nilai yang sama, tetapi bentuknya berbeda.

### 3. Salah memakai indeks

```octave
A(0,1)
```

Ini salah karena indeks di Octave dimulai dari **1**, bukan 0.

### 4. Range pecahan tidak selalu tepat di batas akhir

```octave
0:0.1:1
```

Untuk kebutuhan titik awal dan titik akhir yang pasti, gunakan `linspace`.

---

## 11. Ringkasan

Pada praktikum ini, praktikan telah mempelajari:
- cara membuat vektor baris dan vektor kolom,
- cara membuat range naik dan turun,
- cara membuat matriks dasar secara manual dan dengan fungsi bawaan,
- cara mengetahui ukuran data,
- cara mengakses elemen, baris, kolom, dan seluruh isi matriks,
- penggunaan `:` dan `end` untuk pengindeksan dasar.

Materi ini menjadi fondasi untuk operasi matriks, manipulasi data numerik, dan pemrograman berbasis array pada pertemuan-pertemuan berikutnya.

---

## 12. Referensi

1. GNU Octave Manual, versi 11.1.0.
2. Bagian **Matrices**.
3. Bagian **Ranges**.
4. Bagian **Creating a Matrix**.
5. Bagian **Index Expressions**.
6. Bagian **Special Utility Matrices**.
