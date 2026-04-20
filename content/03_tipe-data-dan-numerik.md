# Tipe Data dan Tipe Data Numerik

## 1. Deskripsi Singkat

Pada praktikum ini, peserta mempelajari konsep **tipe data** dalam GNU Octave, terutama tipe data numerik yang paling sering digunakan dalam pemrograman dan komputasi numerik. Materi ini penting karena jenis data menentukan cara nilai disimpan, ditampilkan, dibandingkan, dan diproses oleh program.

Dalam GNU Octave, tersedia beberapa tipe data bawaan seperti:
- data numerik real dan kompleks,
- string atau karakter,
- logical,
- struct,
- cell array,
- dan beberapa tipe lain yang dapat dikenali melalui fungsi seperti `class`, `isa`, dan `typeinfo`.

Fokus utama pertemuan ini adalah memahami:
- pengertian tipe data,
- perbedaan tipe data umum dan tipe data numerik,
- tipe numerik `double`, `single`, dan integer,
- bilangan real dan kompleks,
- cara memeriksa tipe data,
- serta perilaku konversi tipe pada operasi campuran.

---

## 2. Dasar Teori

### 2.1 Pengertian Tipe Data

Tipe data adalah klasifikasi yang menjelaskan **jenis nilai** yang disimpan oleh suatu variabel dan **cara Octave memperlakukan nilai tersebut** saat diproses.

Contoh sederhana:
- `10` adalah nilai numerik,
- `"halo"` adalah data string,
- `true` adalah data logical.

Tipe data memengaruhi:
- kebutuhan memori,
- ketelitian numerik,
- hasil operasi,
- kompatibilitas dengan fungsi tertentu.

---

### 2.2 Tipe Data Bawaan di Octave

Secara umum, Octave menyediakan tipe data bawaan seperti:
- real dan complex scalars/matrices,
- ranges,
- character strings,
- structures,
- cell arrays.

Untuk praktikum dasar, tipe yang paling sering dijumpai adalah:
- **double**
- **single**
- **integer** (`int8`, `uint8`, `int16`, `uint16`, `int32`, `uint32`, `int64`, `uint64`)
- **logical**
- **char / string**

Walaupun pertemuan ini berfokus pada tipe data numerik, peserta tetap perlu mengenali bahwa tidak semua data dalam Octave berbentuk angka.

---

### 2.3 Tipe Data Numerik

Tipe data numerik digunakan untuk menyimpan bilangan dan melakukan perhitungan matematika.

Di Octave, data numerik dapat berupa:
- **real**
- **complex**
- **floating point**
- **integer**

Bentuk nilainya dapat berupa:
- skalar,
- vektor,
- matriks.

Contoh:
```octave
a = 5;
b = [1 2 3];
c = [1 2; 3 4];
z = 3 + 4i;
```

---

### 2.4 `double` sebagai Default

Secara default, konstanta numerik di Octave direpresentasikan sebagai **double precision floating point**.

Contoh:
```octave
x = 10;
class(x)
```

Hasil yang diharapkan:
```octave
ans = double
```

Artinya, ketika menulis angka biasa seperti `10`, `3.14`, atau `2e3`, Octave akan menyimpannya sebagai `double`.

### 2.5 Karakteristik `double`
- presisi tinggi,
- paling umum digunakan,
- cocok untuk komputasi numerik umum,
- menjadi tipe default hampir pada seluruh operasi dasar.

Contoh:
```octave
a = 3.14159;
b = 1200;
c = 1.2e3;

class(a)
class(b)
class(c)
```

---

### 2.6 `single`

Tipe `single` adalah floating point presisi tunggal.

Contoh:
```octave
x = single(3.14);
class(x)
```

Hasil:
```octave
ans = single
```

### 2.7 Kapan `single` dipakai?
- ketika ingin menghemat memori,
- ketika presisi `double` tidak diperlukan,
- pada data besar atau aplikasi tertentu yang memang memakai presisi tunggal.

Perbandingan sederhana:
```octave
a = 3.14;
b = single(3.14);

class(a)
class(b)
```

---

### 2.8 Integer

Octave mendukung integer bertanda dan tidak bertanda dengan ukuran 8, 16, 32, dan 64 bit.

### 2.9 Integer bertanda
- `int8`
- `int16`
- `int32`
- `int64`

### 2.10 Integer tak bertanda
- `uint8`
- `uint16`
- `uint32`
- `uint64`

Contoh:
```octave
a = int8(12);
b = uint8(12);
c = int16(1000);

class(a)
class(b)
class(c)
```

### 2.11 Catatan penting
Integer sering dipakai untuk **menyimpan data**, bukan untuk komputasi utama, karena banyak operasi numerik di Octave lebih alami menggunakan floating point.

---

### 2.12 Bilangan Real dan Kompleks

### 2.13 Bilangan real
Bilangan real tidak memiliki bagian imajiner.

```octave
x = 10;
y = -3.5;
```

### 2.14 Bilangan kompleks
Bilangan kompleks memiliki bagian real dan imajiner.

```octave
z1 = 3 + 4i;
z2 = complex(5, -2);
```

Untuk memeriksa bagian real dan imajiner:
```octave
real(z1)
imag(z1)
```

Untuk mengecek apakah kompleks:
```octave
isreal(z1)
iscomplex(z1)
```

---

### 2.15 Notasi Bilangan di Octave

Octave menerima beberapa notasi bilangan:
- desimal,
- ilmiah / eksponensial,
- heksadesimal,
- biner.

Contoh:
```octave
a = 42;
b = 1.05e-1;
c = 0x2A;
d = 0b101010;
```

Angka juga dapat memakai underscore untuk keterbacaan:
```octave
e = 1_000_000;
```

---

### 2.16 Logical sebagai Data Numerik Khusus

Nilai logical adalah:
- `true`
- `false`

Dalam banyak konteks, logical berkaitan erat dengan komputasi numerik karena hasil perbandingan dan operasi logika sering dipakai dalam seleksi dan pengulangan.

Contoh:
```octave
a = 10 > 5;
b = 3 == 4;

class(a)
class(b)
```

Contoh lain:
```octave
x = [1 2 3 4 5];
mask = x > 3
```

---

### 2.17 Memeriksa Tipe Data

Fungsi yang umum dipakai:

### 2.18 `class(x)`
Mengembalikan nama kelas atau tipe data dari variabel.

```octave
x = 5;
class(x)
```

### 2.19 `isa(x, "tipe")`
Mengecek apakah suatu variabel bertipe tertentu.

```octave
x = uint8(5);
isa(x, "uint8")
isa(x, "double")
```

### 2.20 `typeinfo(x)`
Menampilkan informasi tipe data.

```octave
x = 2 + 3i;
typeinfo(x)
```

### 2.21 `whos`
Menampilkan daftar variabel beserta informasi detailnya.

```octave
a = 5;
b = uint8(7);
c = single(2.5);
whos
```

---

### 2.22 Konversi Tipe Data

Konversi tipe dapat dilakukan dengan fungsi konstruktor tipe data.

Contoh:
```octave
a = 5;
b = single(a);
c = int16(a);
d = double(c);

class(a)
class(b)
class(c)
class(d)
```

### 2.23 Konversi yang sering dipakai
- `double(x)`
- `single(x)`
- `int8(x)`
- `uint8(x)`
- `int16(x)`
- `uint16(x)`
- `int32(x)`
- `uint32(x)`
- `int64(x)`
- `uint64(x)`

---

### 2.24 Operasi Campuran dan Konversi Otomatis

Octave mendukung banyak operasi campuran antar tipe data, tetapi hasil tipe akhirnya tidak selalu sama dengan operand awal.

Contoh:
```octave
a = uint8(1) + 1;
b = single(1) + 1;

class(a)
class(b)
```

Ada fungsi yang otomatis mengonversi ke tipe tertentu, tetapi ada juga operasi yang menghasilkan error jika tipe operand tidak kompatibel.

Contoh yang perlu diperhatikan:
```octave
a = min(int8(100), int16(120));
class(a)
```

Namun beberapa penjumlahan antar integer dengan ukuran berbeda dapat menghasilkan error:
```octave
int8(100) + int16(20)
```

Karena itu, peserta perlu berhati-hati saat mencampur:
- integer berbeda ukuran,
- signed dan unsigned,
- single dan double,
- logical dan numerik.

---

### 2.25 Overflow dan Underflow pada Integer

Operasi integer memiliki keterbatasan rentang nilai.

Contoh:
```octave
a = uint8(10) - uint8(20)
```

Karena `uint8` tidak dapat mewakili bilangan negatif, hasilnya tidak sama seperti pengurangan pada `double`.

Peserta perlu memahami bahwa:
- integer memiliki batas bawah dan batas atas,
- hasil operasi yang keluar dari rentang dapat menyebabkan pembulatan atau saturasi sesuai perilaku integer di Octave,
- integer lebih aman dipakai untuk penyimpanan data diskrit daripada komputasi umum.

---

## 3. Langkah Praktikum

### 3.1 Menyiapkan Lingkungan Kerja

Jalankan perintah berikut:
```octave
clc
clear
pwd
who
```

### 3.2 Mencoba Berbagai Tipe Data

Ketik dan jalankan:
```octave
a = 10;
b = single(10);
c = int8(10);
d = uint16(10);
e = 3 + 4i;
f = true;
g = "data";

class(a)
class(b)
class(c)
class(d)
class(e)
class(f)
class(g)
```

### 3.3 Melihat Detail Workspace

```octave
whos
```

Amati:
- nama variabel,
- ukuran,
- byte,
- class.

### 3.4 Mencoba Konversi Tipe

```octave
x = 25.75;

x_double = double(x);
x_single = single(x);
x_int8 = int8(x);
x_uint8 = uint8(x);

class(x_double)
class(x_single)
class(x_int8)
class(x_uint8)
```

### 3.5 Mencoba Bilangan Kompleks

```octave
z = 5 + 2i;

real(z)
imag(z)
abs(z)
class(z)
```

### 3.6 Mencoba Operasi Campuran

```octave
a = uint8(5);
b = 2;
c = a + b;
class(c)

d = single(2.5);
e = 4;
f = d + e;
class(f)
```

---

## 4. Contoh Kode dan Penjelasan

## 5. Contoh 1 — Memeriksa Tipe Data Variabel

```octave
a = 10;
b = 2.5;
c = single(2.5);
d = int16(100);

class(a)
class(b)
class(c)
class(d)
```

### 5.1 Penjelasan
- `a` dan `b` akan bertipe `double`.
- `c` bertipe `single` karena dikonversi secara eksplisit.
- `d` bertipe `int16`.

---

## 6. Contoh 2 — Data Kompleks

```octave
z = 3 + 4i;

real(z)
imag(z)
abs(z)
class(z)
```

### 6.1 Penjelasan
- `real(z)` mengambil bagian real.
- `imag(z)` mengambil bagian imajiner.
- `abs(z)` menghitung magnitudo.
- `z` tetap termasuk data numerik.

---

## 7. Contoh 3 — Integer Bertanda dan Tidak Bertanda

```octave
a = int8(120);
b = uint8(120);

class(a)
class(b)
```

### 7.1 Penjelasan
- `int8` dapat menyimpan bilangan negatif dan positif dalam rentang kecil.
- `uint8` hanya untuk bilangan tidak negatif.
- Keduanya memakai ukuran 8-bit tetapi makna nilainya berbeda.

---

## 8. Contoh 4 — Konversi Tipe

```octave
x = 12.9;

x1 = int8(x);
x2 = uint8(x);
x3 = single(x);
x4 = double(x);

x1
x2
x3
x4
```

### 8.1 Penjelasan
- Saat nilai pecahan dikonversi ke integer, bagian pecahan tidak dipertahankan seperti pada floating point.
- `single` dan `double` tetap merepresentasikan bilangan pecahan.

---

## 9. Contoh 5 — Operasi Campuran

```octave
a = uint8(1);
b = 1;
c = a + b;

class(c)
c
```

### 9.1 Penjelasan
- Octave dapat melakukan konversi otomatis pada beberapa operasi campuran.
- Namun tidak semua kombinasi tipe data bisa digabung tanpa error.

---

## 10. Contoh 6 — Mengecek Tipe dengan `isa` dan `typeinfo`

```octave
x = single(9.75);

isa(x, "single")
isa(x, "double")
typeinfo(x)
```

### 10.1 Penjelasan
- `isa` berguna untuk validasi tipe.
- `typeinfo` memberi keterangan tipe dalam bentuk string.

---

## 11. Tugas Latihan

### 11.1 Latihan 1
Buat variabel berikut lalu tentukan tipenya:
```octave
a = 100;
b = single(100);
c = int32(100);
d = 2 + 5i;
e = false;
```

Tampilkan hasil dengan:
```octave
class(a)
class(b)
class(c)
class(d)
class(e)
```

### 11.2 Latihan 2
Lakukan konversi nilai `45.75` ke:
- `double`
- `single`
- `int8`
- `uint16`

Tuliskan hasil dan tipe datanya.

### 11.3 Latihan 3
Buat dua variabel kompleks, lalu tampilkan:
- bagian real,
- bagian imajiner,
- magnitudo.

### 11.4 Latihan 4
Coba operasi berikut:
```octave
uint8(10) + 5
single(10) + 5
int8(10) + int16(5)
```

Tuliskan mana yang berhasil dan mana yang error.

### 11.5 Latihan 5
Gunakan `whos` untuk melihat semua variabel yang telah dibuat. Catat:
- nama variabel,
- class,
- jumlah byte.

---

## 12. Tugas Praktikum

## 13. Judul
**Eksplorasi Tipe Data dan Tipe Data Numerik di GNU Octave**

## 14. Tujuan
Peserta mampu:
- membedakan tipe data umum dan numerik,
- membuat data numerik dengan beberapa tipe,
- melakukan konversi tipe,
- mengamati hasil operasi campuran,
- dan mendokumentasikan hasil pengamatan.

## 15. Instruksi

Buat folder kerja:
```text
praktikum_tipe_data_octave
```

Di dalam folder tersebut, buat file berikut.

### 15.1 1. File `eksplorasi_tipe_data.m`

Isi file minimal:
- membuat variabel bertipe `double`,
- `single`,
- `int8`,
- `uint8`,
- kompleks,
- logical,
- string,
- lalu menampilkan `class` masing-masing.

Contoh kerangka:
```octave
clc;
clear;

a = 25;
b = single(25);
c = int8(25);
d = uint8(25);
e = 3 + 4i;
f = true;
g = "praktikum";

disp("=== HASIL EKSPLORASI TIPE DATA ===");
disp(["class(a) = ", class(a)]);
disp(["class(b) = ", class(b)]);
disp(["class(c) = ", class(c)]);
disp(["class(d) = ", class(d)]);
disp(["class(e) = ", class(e)]);
disp(["class(f) = ", class(f)]);
disp(["class(g) = ", class(g)]);
```

### 15.2 2. File `konversi_numerik.m`

Isi file minimal:
- membuat satu nilai pecahan,
- mengonversinya ke beberapa tipe numerik,
- menampilkan hasil konversi.

Contoh kerangka:
```octave
clc;
clear;

x = 123.75;

x_double = double(x);
x_single = single(x);
x_int16 = int16(x);
x_uint16 = uint16(x);

disp("=== KONVERSI TIPE NUMERIK ===");
disp(["double : ", num2str(x_double)]);
disp(["single : ", num2str(x_single)]);
disp(["int16  : ", num2str(x_int16)]);
disp(["uint16 : ", num2str(x_uint16)]);
```

### 15.3 3. File `uji_operasi_campuran.m`

Isi file minimal:
- coba tiga operasi campuran antar tipe data,
- tampilkan hasil dan tipe akhirnya jika berhasil,
- beri komentar singkat pada kode untuk menjelaskan pengamatan.

Contoh:
```octave
clc;
clear;

a = uint8(5);
b = 2;
c = a + b;

d = single(2.5);
e = 3;
f = d + e;

disp("=== OPERASI CAMPURAN ===");
disp(c);
disp(class(c));
disp(f);
disp(class(f));
```

### 15.4 4. File `laporan_ringkas.txt`
Tuliskan jawaban singkat untuk pertanyaan berikut:
1. Apa tipe default untuk bilangan biasa di Octave?
2. Apa perbedaan `single` dan `double`?
3. Kapan integer lebih cocok digunakan?
4. Mengapa operasi campuran perlu diperhatikan?
5. Apa fungsi `class`, `isa`, dan `typeinfo`?

---

## 16. Format Laporan Singkat

Laporan minimal memuat:
- judul praktikum,
- tujuan,
- daftar file,
- hasil eksekusi,
- analisis singkat,
- kesimpulan.

---

## 17. Ringkasan

Pada modul ini, peserta telah mempelajari:
- konsep tipe data dalam Octave,
- jenis tipe data umum,
- tipe numerik `double`, `single`, dan integer,
- data real dan kompleks,
- logical sebagai tipe penting dalam komputasi,
- fungsi pemeriksa tipe seperti `class`, `isa`, `typeinfo`, dan `whos`,
- serta konversi tipe dan operasi campuran.

Pemahaman ini penting sebagai dasar sebelum masuk ke materi:
- percabangan,
- perulangan,
- fungsi,
- pengolahan data,
- dan visualisasi.

---

## 18. Referensi

1. GNU Octave Manual 11.1.0 — https://docs.octave.org/latest/
2. Data Types — https://docs.octave.org/latest/Data-Types.html
3. Numeric Data Types — https://docs.octave.org/latest/Numeric-Data-Types.html
4. Integer Data Types — https://docs.octave.org/latest/Integer-Data-Types.html
5. Automatic Conversion of Data Types — https://docs.octave.org/latest/Automatic-Conversion-of-Data-Types.html
6. Predicates for Numeric Objects — https://docs.octave.org/latest/Predicates-for-Numeric-Objects.html
