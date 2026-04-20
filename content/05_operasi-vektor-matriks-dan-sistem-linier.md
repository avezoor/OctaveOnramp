# Operasi Vektor, Matriks, dan Sistem Linier

### Identitas Modul
- **Mata kuliah**: Pemrograman Dasar
- **Topik**: Operasi Vektor, Matriks, dan Sistem Linier
- **Durasi**: 1 pertemuan praktikum (100–150 menit)
- **Perangkat lunak**: GNU Octave
- **Acuan utama**: Dokumentasi resmi GNU Octave 11.1.0

---

## 1. Deskripsi Singkat

Pada pertemuan ini praktikan mempelajari operasi dasar pada vektor dan matriks di GNU Octave. Materi meliputi penjumlahan, pengurangan, perkalian skalar, perkalian elemen per elemen, perkalian matriks, transpose, pembagian elemen per elemen, dan penyelesaian sistem linier sederhana. Fokus utama modul ini adalah membedakan operasi **per elemen** dan operasi **aljabar matriks**, karena keduanya menggunakan operator yang berbeda di Octave.

Dalam dokumentasi resmi GNU Octave, operator aritmetika bekerja pada skalar maupun matriks. Operator bertitik seperti `.*`, `./`, dan `.^` digunakan untuk operasi elemen per elemen, sedangkan operator seperti `*`, `/`, dan `\` digunakan untuk operasi matriks atau penyelesaian sistem linier.

---

## 2. Capaian Pembelajaran

Setelah mengikuti praktikum ini, praktikan mampu:

1. Menjelaskan konsep vektor dan matriks di Octave.
2. Membuat vektor baris, vektor kolom, dan matriks sederhana.
3. Menggunakan operator aritmetika untuk vektor dan matriks.
4. Membedakan operasi elemen per elemen dan operasi matriks.
5. Menggunakan transpose untuk mengubah orientasi vektor atau matriks.
6. Menyelesaikan sistem linier sederhana dengan operator `\`.
7. Menulis skrip Octave yang memanfaatkan operasi vektor, matriks, dan sistem linier.

---

## 3. Prasyarat

Sebelum mengerjakan modul ini, praktikan sebaiknya sudah memahami:

- variabel dan skalar,
- operator aritmetika dasar,
- format penulisan skrip `.m`,
- cara menjalankan perintah di Command Window dan Editor Octave.

---

## 4. Dasar Teori

### 4.1 Vektor dan Matriks di Octave

Dalam Octave, matriks dibentuk menggunakan tanda kurung siku `[ ]`. Elemen pada baris yang sama dapat dipisahkan dengan spasi atau koma, sedangkan baris yang berbeda dipisahkan dengan titik koma `;`. Ukuran matriks ditentukan otomatis oleh Octave.

Contoh:

```octave
A = [1, 2; 3, 4]
```

membentuk matriks berukuran 2×2.

Vektor pada dasarnya adalah matriks khusus:
- **vektor baris**: memiliki satu baris,
- **vektor kolom**: memiliki satu kolom.

Contoh:

```octave
v_baris = [2, 4, 6, 8]
v_kolom = [2; 4; 6; 8]
```

---

### 4.2 Operasi Elemen per Elemen dan Operasi Matriks

Octave membedakan dua kelompok operasi:

#### A. Operasi elemen per elemen
Operator bertitik digunakan bila setiap elemen diproses satu per satu.

- `A .* B` → perkalian elemen per elemen
- `A ./ B` → pembagian elemen per elemen
- `A .^ B` → perpangkatan elemen per elemen

Operasi ini menuntut ukuran yang sama atau ukuran yang saling kompatibel untuk broadcasting.

#### B. Operasi matriks
Operator tanpa titik digunakan untuk operasi aljabar matriks.

- `A * B` → perkalian matriks
- `A / B` → right division matriks
- `A \ B` → left division matriks
- `A ^ n` → perpangkatan matriks

Perkalian matriks `A * B` hanya valid jika jumlah kolom `A` sama dengan jumlah baris `B`.

---

### 4.3 Penjumlahan dan Pengurangan

Penjumlahan `A + B` dan pengurangan `A - B` selalu bekerja per elemen. Karena itu, dua matriks harus memiliki ukuran yang sama atau dapat di-broadcast ke ukuran yang sama.

Contoh:

```octave
A = [1 2; 3 4];
B = [5 6; 7 8];
A + B
A - B
```

---

### 4.4 Perkalian Skalar

Suatu skalar dapat dikalikan ke seluruh elemen vektor atau matriks.

```octave
A = [1 2; 3 4];
2 * A
```

Hasilnya adalah setiap elemen pada `A` dikalikan 2.

---

### 4.5 Perkalian Matriks

Perkalian matriks berbeda dari perkalian elemen per elemen.

```octave
A = [1 2; 3 4];
B = [5 6; 7 8];
A * B
```

Perhatikan bahwa hasil `A * B` tidak sama dengan `A .* B`.

---

### 4.6 Transpose

Transpose menukar baris menjadi kolom dan kolom menjadi baris.

- `A.'` → transpose biasa
- `A'` → conjugate transpose

Untuk data real, hasil `A.'` dan `A'` sama.

Contoh:

```octave
v = [1 2 3 4];
v.'
```

---

### 4.7 Sistem Linier

Sistem linier dengan bentuk:

```text
A x = b
```

dapat diselesaikan di Octave menggunakan operator **left division**:

```octave
x = A \ b
```

Cara ini lebih tepat daripada menghitung `inv(A) * b` secara langsung, karena dokumentasi resmi Octave menyatakan bahwa `A \ b` dihitung tanpa membentuk invers matriks secara eksplisit. Jika matriks koefisien singular atau sistem tidak persegi, Octave akan menghitung solusi minimum norm.

---

## 5. Sintaks Dasar yang Digunakan

| Bentuk | Keterangan |
|---|---|
| `[1 2 3]` | vektor baris |
| `[1; 2; 3]` | vektor kolom |
| `[1 2; 3 4]` | matriks 2×2 |
| `A + B` | penjumlahan elemen per elemen |
| `A - B` | pengurangan elemen per elemen |
| `A * B` | perkalian matriks |
| `A .* B` | perkalian elemen per elemen |
| `A / B` | pembagian matriks kanan |
| `A \ B` | pembagian matriks kiri / penyelesaian sistem linier |
| `A ./ B` | pembagian elemen per elemen |
| `A ^ 2` | pangkat matriks |
| `A .^ 2` | pangkat elemen per elemen |
| `A.'` | transpose |
| `A'` | conjugate transpose |

---

## 6. Contoh Kode dan Penjelasan

### Contoh 1 — Operasi Dasar pada Vektor

```octave
v1 = [2, 4, 6, 8];
v2 = [1, 3, 5, 7];

jumlah = v1 + v2
selisih = v1 - v2
kali_elemen = v1 .* v2
bagi_elemen = v1 ./ v2
```

**Penjelasan:**
- `v1 + v2` menjumlahkan elemen yang posisinya sama.
- `v1 - v2` mengurangkan elemen yang posisinya sama.
- `v1 .* v2` mengalikan elemen yang posisinya sama.
- `v1 ./ v2` membagi elemen `v1` dengan elemen `v2` pada posisi yang sama.

---

### Contoh 2 — Perkalian Skalar pada Vektor dan Matriks

```octave
v = [3, 6, 9];
A = [1 2; 3 4];

hasil_v = 2 * v
hasil_A = 3 * A
```

**Penjelasan:**
- Pada `2 * v`, setiap elemen vektor dikalikan 2.
- Pada `3 * A`, setiap elemen matriks dikalikan 3.

---

### Contoh 3 — Perkalian Matriks dan Perkalian Elemen per Elemen

```octave
A = [1 2; 3 4];
B = [5 6; 7 8];

hasil_matriks = A * B
hasil_elemen = A .* B
```

**Penjelasan:**
- `A * B` mengikuti aturan aljabar matriks.
- `A .* B` hanya mengalikan elemen pada posisi yang sama.
- Dua hasil tersebut berbeda karena maknanya berbeda.

---

### Contoh 4 — Transpose Vektor dan Matriks

```octave
v = [1 2 3 4];
A = [1 2; 3 4; 5 6];

v_kolom = v.'
A_transpose = A.'
```

**Penjelasan:**
- `v.'` mengubah vektor baris menjadi vektor kolom.
- `A.'` menukar baris dan kolom matriks `A`.

---

### Contoh 5 — Sistem Linier 2 Variabel

Misalkan sistem:

```text
2x + y = 5
x - y = 1
```

Bentuk matriksnya:

```text
[2 1] [x] = [5]
[1 -1][y]   [1]
```

Implementasi di Octave:

```octave
A = [2 1; 1 -1];
b = [5; 1];

x = A \ b
```

**Penjelasan:**
- `A` adalah matriks koefisien.
- `b` adalah vektor konstanta.
- `x = A \ b` menghasilkan solusi sistem.

---

### Contoh 6 — Memeriksa Hasil Sistem Linier

```octave
A = [2 1; 1 -1];
b = [5; 1];
x = A \ b;

cek = A * x
```

**Penjelasan:**
- Jika solusi benar, hasil `A * x` akan sama atau sangat dekat dengan `b`.
- Ini adalah cara sederhana untuk memverifikasi solusi.

---

### Contoh 7 — Sistem Linier 3 Variabel

Misalkan sistem:

```text
x + y + z = 6
2x - y + z = 3
x + 2y + 3z = 14
```

Kode Octave:

```octave
A = [1 1 1;
     2 -1 1;
     1 2 3];

b = [6; 3; 14];

x = A \ b
```

**Penjelasan:**
- Karena `A` berukuran 3×3 dan `b` berukuran 3×1, bentuk sistem sesuai untuk diselesaikan dengan operator `\`.

---

## 7. Langkah Praktikum

### 7.1 Menyiapkan Data Vektor

Ketik perintah berikut di Command Window atau buat dalam file skrip:

```octave
clc;
clear;

v1 = [2, 4, 6, 8];
v2 = [1, 2, 3, 4];

v_jumlah = v1 + v2
v_selisih = v1 - v2
v_kali = v1 .* v2
v_bagi = v1 ./ v2
```

**Amati** hasil tiap operasi.

---

### 7.2 Menyiapkan Data Matriks

```octave
A = [1 2; 3 4];
B = [2 0; 1 2];

A_plus_B = A + B
A_minus_B = A - B
A_times_B = A * B
A_dot_B = A .* B
```

**Amati** perbedaan hasil `A * B` dan `A .* B`.

---

### 7.3 Mencoba Transpose

```octave
C = [1 2 3; 4 5 6];
C_t = C.'
```

Bandingkan ukuran `C` dan `C_t`.

---

### 7.4 Menyelesaikan Sistem Linier

```octave
A = [3 2; 1 -1];
b = [18; 2];

x = A \ b
uji = A * x
```

**Amati** apakah `uji` sama dengan `b`.

---

## 8. Tugas Latihan

### A. Latihan Konsep

Jawab pertanyaan berikut:

1. Apa perbedaan antara `A * B` dan `A .* B`?
2. Mengapa `A \ b` lebih baik digunakan daripada `inv(A) * b` untuk menyelesaikan sistem linier?
3. Apa perbedaan vektor baris dan vektor kolom?
4. Apa fungsi transpose dalam pengolahan vektor dan matriks?
5. Mengapa ukuran matriks penting dalam perkalian matriks?

---

### B. Latihan Praktik

Kerjakan dengan Octave:

1. Buat dua vektor baris masing-masing berisi 5 elemen.
2. Hitung penjumlahan, pengurangan, dan perkalian elemen per elemen kedua vektor.
3. Buat dua matriks 2×2 dan hitung:
   - `A + B`
   - `A - B`
   - `A * B`
   - `A .* B`
4. Buat sebuah vektor baris 4 elemen lalu ubah menjadi vektor kolom.
5. Selesaikan sistem berikut:

```text
4x + y = 9
2x - 3y = -4
```

Petunjuk:

```octave
A = [4 1; 2 -3];
b = [9; -4];
x = A \ b
```

---

## 9. Tugas Praktikum

### Judul
**Implementasi Operasi Vektor, Matriks, dan Penyelesaian Sistem Linier pada GNU Octave**

### Tujuan
Praktikan mampu membuat skrip yang:
- melakukan operasi pada vektor,
- melakukan operasi pada matriks,
- menyelesaikan sistem linier,
- menampilkan hasil secara rapi.

### Instruksi

Buat folder kerja dengan nama:

```text
praktikum_octave_operasi_matriks
```

Kemudian buat file berikut.

---

### 1. File `operasi_vektor.m`

Isi file harus:
- membuat dua vektor baris,
- menghitung penjumlahan,
- menghitung pengurangan,
- menghitung perkalian elemen per elemen,
- menghitung pembagian elemen per elemen,
- menampilkan seluruh hasil.

Contoh kerangka:

```octave
clc;
clear;

v1 = [10, 20, 30, 40];
v2 = [2, 4, 5, 8];

jumlah = v1 + v2;
selisih = v1 - v2;
kali_elemen = v1 .* v2;
bagi_elemen = v1 ./ v2;

fprintf("=== OPERASI VEKTOR ===\n");
disp("v1 = "); disp(v1);
disp("v2 = "); disp(v2);
disp("v1 + v2 = "); disp(jumlah);
disp("v1 - v2 = "); disp(selisih);
disp("v1 .* v2 = "); disp(kali_elemen);
disp("v1 ./ v2 = "); disp(bagi_elemen);
```

---

### 2. File `operasi_matriks.m`

Isi file harus:
- membuat dua matriks 2×2,
- menghitung penjumlahan,
- pengurangan,
- perkalian matriks,
- perkalian elemen per elemen,
- transpose salah satu matriks,
- menampilkan hasilnya.

Contoh kerangka:

```octave
clc;
clear;

A = [1 2; 3 4];
B = [2 1; 0 3];

jumlah = A + B;
selisih = A - B;
kali_matriks = A * B;
kali_elemen = A .* B;
transpose_A = A.';

fprintf("=== OPERASI MATRIKS ===\n");
disp("A = "); disp(A);
disp("B = "); disp(B);
disp("A + B = "); disp(jumlah);
disp("A - B = "); disp(selisih);
disp("A * B = "); disp(kali_matriks);
disp("A .* B = "); disp(kali_elemen);
disp("A.' = "); disp(transpose_A);
```

---

### 3. File `sistem_linier.m`

Isi file harus:
- mendefinisikan sistem linier 3 variabel,
- menyusun matriks koefisien `A`,
- menyusun vektor konstanta `b`,
- menghitung solusi dengan `A \ b`,
- memverifikasi hasil menggunakan `A * x`.

Contoh kerangka:

```octave
clc;
clear;

A = [2 1 -1;
     1 3 2;
     1 -1 2];

b = [8; 13; 3];

x = A \ b;
cek = A * x;

fprintf("=== SISTEM LINIER ===\n");
disp("Matriks A = "); disp(A);
disp("Vektor b = "); disp(b);
disp("Solusi x = "); disp(x);
disp("Verifikasi A * x = "); disp(cek);
```

---

### 4. File `laporan_ringkas.txt`

Tuliskan ringkasan singkat berisi:
- perbedaan `*` dan `.*`,
- perbedaan `^` dan `.^`,
- fungsi operator `\`,
- kesimpulan dari hasil praktikum.

---

## 10. Kriteria Penilaian

| Aspek | Bobot |
|---|---:|
| Kebenaran sintaks program | 20% |
| Kebenaran operasi vektor | 20% |
| Kebenaran operasi matriks | 20% |
| Kebenaran penyelesaian sistem linier | 20% |
| Kerapian output dan dokumentasi | 10% |
| Kelengkapan file tugas | 10% |

---

## 11. Kesalahan Umum yang Sering Terjadi

### 1. Salah memakai operator `*` dan `.*`

Kesalahan umum:

```octave
A * B
```

padahal yang diinginkan adalah perkalian elemen per elemen.

Solusi:
- gunakan `.*` jika setiap elemen harus dikalikan dengan elemen yang bersesuaian.

---

### 2. Ukuran matriks tidak sesuai untuk perkalian

Jika `A` berukuran 2×3 dan `B` berukuran 2×2, maka `A * B` tidak valid karena jumlah kolom `A` tidak sama dengan jumlah baris `B`.

---

### 3. Salah bentuk vektor konstanta pada sistem linier

Kesalahan umum:

```octave
b = [5, 1]
```

Padahal untuk sistem `A x = b`, biasanya `b` harus berupa vektor kolom:

```octave
b = [5; 1]
```

---

### 4. Menggunakan `inv(A) * b` untuk sistem linier sederhana

Walaupun secara konsep mirip, pendekatan yang direkomendasikan di Octave adalah:

```octave
x = A \ b
```

karena lebih stabil dan tidak perlu membentuk invers matriks secara langsung.

---

## 12. Ringkasan

Pada modul ini praktikan telah mempelajari:

- cara membuat vektor dan matriks di Octave,
- penjumlahan dan pengurangan vektor atau matriks,
- perkalian skalar,
- perbedaan antara `*` dan `.*`,
- penggunaan transpose,
- penyelesaian sistem linier dengan operator `\`.

Pemahaman materi ini sangat penting karena hampir semua komputasi numerik di Octave dibangun di atas operasi vektor, matriks, dan sistem persamaan linier.

---

## 13. Referensi

1. GNU Octave Manual 11.1.0, bagian **Matrices**.
2. GNU Octave Manual 11.1.0, bagian **Arithmetic Operators**.
3. GNU Octave Manual 11.1.0, bagian **Matrix Arithmetic**.
4. GNU Octave Manual 11.1.0, bagian **Solving Systems of Linear Equations**.
5. GNU Octave Manual 11.1.0, bagian **Basic Matrix Functions**.
