# Operasi Vektor, Matriks, dan Sistem Linier

## 1. Deskripsi Singkat

Pada pertemuan ini praktikan mempelajari operasi dasar pada vektor dan matriks di GNU Octave. Materi meliputi penjumlahan, pengurangan, perkalian skalar, perkalian elemen per elemen, perkalian matriks, transpose, pembagian elemen per elemen, dan penyelesaian sistem linier sederhana. Fokus utama modul ini adalah membedakan operasi **per elemen** dan operasi **aljabar matriks**, karena keduanya menggunakan operator yang berbeda di Octave.

Dalam dokumentasi resmi GNU Octave, operator aritmetika bekerja pada skalar maupun matriks. Operator bertitik seperti `.*`, `./`, dan `.^` digunakan untuk operasi elemen per elemen, sedangkan operator seperti `*`, `/`, dan `\` digunakan untuk operasi matriks atau penyelesaian sistem linier.

---

## 2. Dasar Teori

### 2.1 Vektor dan Matriks di Octave

Dalam Octave, matriks dibentuk menggunakan tanda kurung siku `[ ]`. Elemen pada baris yang sama dapat dipisahkan dengan spasi atau koma, sedangkan baris yang berbeda dipisahkan dengan titik koma `;`. Ukuran matriks ditentukan otomatis oleh Octave.

Secara matematis, jika sebuah matriks \(A\) memiliki \(m\) baris dan \(n\) kolom, maka dapat ditulis:

$$
A \in \mathbb{R}^{m \times n}
$$

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

### 2.2 Operasi Elemen per Elemen dan Operasi Matriks

Octave membedakan dua kelompok operasi:

#### A. Operasi elemen per elemen
Operator bertitik digunakan bila setiap elemen diproses satu per satu.

- `A .* B` → perkalian elemen per elemen
- `A ./ B` → pembagian elemen per elemen
- `A .^ B` → perpangkatan elemen per elemen

Operasi ini menuntut ukuran yang sama atau ukuran yang saling kompatibel untuk broadcasting.

Jika \(A = [a_{ij}]\) dan \(B = [b_{ij}]\) berukuran sama, maka operasi elemen per elemen dapat dituliskan sebagai:

$$
(A \odot B)_{ij} = a_{ij} b_{ij}
$$

#### B. Operasi matriks
Operator tanpa titik digunakan untuk operasi aljabar matriks.

- `A * B` → perkalian matriks
- `A / B` → right division matriks
- `A \ B` → left division matriks
- `A ^ n` → perpangkatan matriks

Perkalian matriks `A * B` hanya valid jika jumlah kolom `A` sama dengan jumlah baris `B`.

Jika \(A\) berukuran \(m \times n\) dan \(B\) berukuran \(n \times p\), maka:

$$
AB = C, \qquad C \in \mathbb{R}^{m \times p}
$$

dengan elemen hasil:

$$
c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}
$$

---

### 2.3 Penjumlahan dan Pengurangan

Penjumlahan `A + B` dan pengurangan `A - B` selalu bekerja per elemen. Karena itu, dua matriks harus memiliki ukuran yang sama atau dapat di-broadcast ke ukuran yang sama.

Secara matematis:

$$
(A + B)_{ij} = a_{ij} + b_{ij}, \qquad
(A - B)_{ij} = a_{ij} - b_{ij}
$$

Contoh:

```octave
A = [1 2; 3 4];
B = [5 6; 7 8];
A + B
A - B
```

---

### 2.4 Perkalian Skalar

Suatu skalar dapat dikalikan ke seluruh elemen vektor atau matriks.

Jika \(k\) adalah skalar dan \(A = [a_{ij}]\), maka:

$$
(kA)_{ij} = k a_{ij}
$$

```octave
A = [1 2; 3 4];
2 * A
```

Hasilnya adalah setiap elemen pada `A` dikalikan 2.

---

### 2.5 Perkalian Matriks

Perkalian matriks berbeda dari perkalian elemen per elemen.

```octave
A = [1 2; 3 4];
B = [5 6; 7 8];
A * B
```

Perhatikan bahwa hasil `A * B` tidak sama dengan `A .* B`.

---

### 2.6 Transpose

Transpose menukar baris menjadi kolom dan kolom menjadi baris.

Untuk matriks \(A = [a_{ij}]\), transposenya adalah:

$$
A^T = [a_{ji}]
$$

- `A.'` → transpose biasa
- `A'` → conjugate transpose

Untuk data real, hasil `A.'` dan `A'` sama.

Contoh:

```octave
v = [1 2 3 4];
v.'
```

---

### 2.7 Sistem Linier

Sistem linier dengan bentuk:

$$
A x = b
$$

dapat diselesaikan di Octave menggunakan operator **left division**:

```octave
x = A \ b
```

Cara ini lebih tepat daripada menghitung `inv(A) * b` secara langsung, karena dokumentasi resmi Octave menyatakan bahwa `A \ b` dihitung tanpa membentuk invers matriks secara eksplisit. Jika matriks koefisien singular atau sistem tidak persegi, Octave akan menghitung solusi minimum norm.

Bentuk umum sistem linier dapat ditulis sebagai:

$$
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
\vdots \\
x_n
\end{bmatrix}
=
\begin{bmatrix}
b_1 \\
b_2 \\
\vdots \\
b_n
\end{bmatrix}
$$

---

## 3. Sintaks Dasar yang Digunakan

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

## 4. Contoh Kode dan Penjelasan

### 4.1 Contoh 1 — Operasi Dasar pada Vektor

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

### 4.2 Contoh 2 — Perkalian Skalar pada Vektor dan Matriks

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

### 4.3 Contoh 3 — Perkalian Matriks dan Perkalian Elemen per Elemen

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

Secara manual:

$$
A =
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix},
\qquad
B =
\begin{bmatrix}
5 & 6 \\
7 & 8
\end{bmatrix}
$$

$$
AB =
\begin{bmatrix}
1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\
3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8
\end{bmatrix}
=
\begin{bmatrix}
19 & 22 \\
43 & 50
\end{bmatrix}
$$

$$
A \odot B =
\begin{bmatrix}
1 \cdot 5 & 2 \cdot 6 \\
3 \cdot 7 & 4 \cdot 8
\end{bmatrix}
=
\begin{bmatrix}
5 & 12 \\
21 & 32
\end{bmatrix}
$$

---

### 4.4 Contoh 4 — Transpose Vektor dan Matriks

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

### 4.5 Contoh 5 — Sistem Linier 2 Variabel

Misalkan sistem:

$$
\begin{aligned}
2x + y &= 5 \\
x - y &= 1
\end{aligned}
$$

Bentuk matriksnya:

$$
\begin{bmatrix}
2 & 1 \\
1 & -1
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
5 \\
1
\end{bmatrix}
$$

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

### 4.6 Contoh 6 — Memeriksa Hasil Sistem Linier

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

### 4.7 Contoh 7 — Sistem Linier 3 Variabel

Misalkan sistem:

$$
\begin{aligned}
x + y + z &= 6 \\
2x - y + z &= 3 \\
x + 2y + 3z &= 14
\end{aligned}
$$

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

## 5. Langkah Praktikum

### 5.1 Menyiapkan Data Vektor

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

### 5.2 Menyiapkan Data Matriks

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

### 5.3 Mencoba Transpose

```octave
C = [1 2 3; 4 5 6];
C_t = C.'
```

Bandingkan ukuran `C` dan `C_t`.

---

### 5.4 Menyelesaikan Sistem Linier

```octave
A = [3 2; 1 -1];
b = [18; 2];

x = A \ b
uji = A * x
```

**Amati** apakah `uji` sama dengan `b`.

---

## 6. Tugas Latihan

### 6.1 Tugas Latihan

Kerjakan langsung di Octave.

1. Buat dua vektor baris masing-masing berisi 5 elemen.
2. Hitung penjumlahan, pengurangan, dan perkalian elemen per elemen kedua vektor.
3. Buat dua matriks 2×2 dan hitung:
   - `A + B`
   - `A - B`
   - `A * B`
   - `A .* B`
4. Buat sebuah vektor baris 4 elemen lalu ubah menjadi vektor kolom.
5. Selesaikan sistem berikut:

$$
\begin{aligned}
4x + y &= 9 \\
2x - 3y &= -4
\end{aligned}
$$

Petunjuk:

```octave
A = [4 1; 2 -3];
b = [9; -4];
x = A \ b
```

6. Setelah praktik selesai, jawab singkat:
   - perbedaan `A * B` dan `A .* B`,
   - alasan `A \ b` lebih baik daripada `inv(A) * b`,
   - fungsi transpose,
   - alasan ukuran matriks penting.

---

## 7. Tugas Praktikum

### 7.1 Judul
**Implementasi Operasi Vektor, Matriks, dan Penyelesaian Sistem Linier pada GNU Octave**

### 7.2 Tujuan
Praktikan mampu membuat skrip yang:
- melakukan operasi pada vektor,
- melakukan operasi pada matriks,
- menyelesaikan sistem linier,
- menampilkan hasil secara rapi.

### 7.3 Instruksi
Buat **satu file script saja** bernama `praktikum_operasi_vektor_matriks.m`.

Ketentuan:
- tidak perlu membuat folder baru,
- tidak perlu memecah program menjadi beberapa file,
- seluruh bagian dikerjakan dalam satu script yang bisa langsung dijalankan.

Isi script harus memuat:
- operasi pada dua vektor baris,
- operasi pada dua matriks 2×2,
- contoh transpose,
- penyelesaian satu sistem linier 3 variabel,
- verifikasi hasil dengan `A * x`,
- output yang rapi dan mudah dibaca.

Model matematis sistem linier yang diimplementasikan:

$$
\begin{aligned}
2x + y - z &= 8 \\
x + 3y + 2z &= 13 \\
x - y + 2z &= 3
\end{aligned}
$$

Contoh kerangka:

```octave
clc;
clear;

disp("=== PRAKTIKUM 5: OPERASI VEKTOR, MATRIKS, DAN SISTEM LINIER ===");

v1 = [10, 20, 30, 40];
v2 = [2, 4, 5, 8];

jumlah_v = v1 + v2;
selisih_v = v1 - v2;
kali_v = v1 .* v2;
bagi_v = v1 ./ v2;

disp("=== OPERASI VEKTOR ===");
disp("v1 = "); disp(v1);
disp("v2 = "); disp(v2);
disp("v1 + v2 = "); disp(jumlah_v);
disp("v1 - v2 = "); disp(selisih_v);
disp("v1 .* v2 = "); disp(kali_v);
disp("v1 ./ v2 = "); disp(bagi_v);
disp(" ");

A = [1 2; 3 4];
B = [2 1; 0 3];

jumlah_m = A + B;
selisih_m = A - B;
kali_m = A * B;
kali_elemen = A .* B;
transpose_A = A.';

disp("=== OPERASI MATRIKS ===");
disp("A = "); disp(A);
disp("B = "); disp(B);
disp("A + B = "); disp(jumlah_m);
disp("A - B = "); disp(selisih_m);
disp("A * B = "); disp(kali_m);
disp("A .* B = "); disp(kali_elemen);
disp("A.' = "); disp(transpose_A);
disp(" ");

C = [2 1 -1;
     1 3 2;
     1 -1 2];
d = [8; 13; 3];

x = C \ d;
cek = C * x;

fprintf("=== SISTEM LINIER ===\n");
disp("Matriks C = "); disp(C);
disp("Vektor d = "); disp(d);
disp("Solusi x = "); disp(x);
disp("Verifikasi C * x = "); disp(cek);
```

---

### 7.4 Luaran yang Dikumpulkan

1. `praktikum_operasi_vektor_matriks.m`
2. tangkapan layar hasil eksekusi
3. ringkasan singkat hasil praktikum bila diminta pengampu

---

## 8. Ringkasan

Pada modul ini praktikan telah mempelajari:

- cara membuat vektor dan matriks di Octave,
- penjumlahan dan pengurangan vektor atau matriks,
- perkalian skalar,
- perbedaan antara `*` dan `.*`,
- penggunaan transpose,
- penyelesaian sistem linier dengan operator `\`.

Pemahaman materi ini sangat penting karena hampir semua komputasi numerik di Octave dibangun di atas operasi vektor, matriks, dan sistem persamaan linier.

---

## 9. Referensi

1. GNU Octave Manual 11.1.0 — https://docs.octave.org/latest/
2. Matrices — https://docs.octave.org/latest/Matrices.html
3. Arithmetic Operators — https://docs.octave.org/latest/Arithmetic-Ops.html
4. Matrix Arithmetic — https://docs.octave.org/latest/Matrix-Arithmetic.html
5. Solving Systems of Linear Equations — https://docs.octave.org/latest/Solving-Systems-of-Linear-Equations.html
6. Basic Matrix Functions — https://docs.octave.org/latest/Basic-Matrix-Functions.html
