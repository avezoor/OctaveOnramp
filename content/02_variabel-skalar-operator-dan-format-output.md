# Variabel, Skalar, Operator, dan Format Output

### Identitas Modul
- **Mata kuliah**: Pemrograman Dasar
- **Topik**: Variabel, Skalar, Operator, dan Format Output
- **Durasi**: 1 pertemuan praktikum (100–150 menit)
- **Perangkat lunak**: GNU Octave
- **Acuan utama**: Dokumentasi resmi GNU Octave 11.1.0

---

## 1. Deskripsi Singkat

Pada pertemuan ini, praktikan mempelajari konsep dasar penyimpanan data pada GNU Octave melalui **variabel** dan **skalar**, penggunaan **operator** untuk melakukan perhitungan dan perbandingan, serta teknik menampilkan hasil dengan **format output** yang rapi.

Berdasarkan dokumentasi resmi GNU Octave 11.1.0, nama variabel bersifat **case-sensitive**, terdapat variabel khusus `ans` untuk hasil terakhir yang tidak disimpan ke variabel lain, operator aritmetika bekerja pada skalar maupun matriks, dan tampilan keluaran dapat diatur dengan `format`, `disp`, `printf`, `fprintf`, `sprintf`, serta fungsi konversi seperti `num2str`.

---

## 2. Capaian Pembelajaran

Setelah mengikuti praktikum ini, praktikan mampu:

1. menjelaskan pengertian variabel dan skalar dalam Octave,
2. membuat dan menggunakan variabel dengan penamaan yang benar,
3. menggunakan operator aritmetika, perbandingan, dan logika dasar,
4. membedakan operator biasa dan operator elemen-per-elemen,
5. menampilkan hasil dengan `disp`, `format`, `printf`, `sprintf`, dan `num2str`,
6. menulis skrip sederhana yang mengolah data numerik dan menampilkan hasil dengan rapi.

---

## 3. Prasyarat

Praktikan diharapkan sudah:
- memahami cara menjalankan Octave,
- mengetahui cara menggunakan Command Window dan Editor,
- mampu membuat serta menjalankan file skrip `.m` sederhana.

---

## 4. Dasar Teori

### 4.1 Variabel dalam Octave

Variabel adalah nama yang digunakan untuk menyimpan nilai. Di Octave, huruf besar dan huruf kecil dibedakan, sehingga `nilai`, `Nilai`, dan `NILAI` dianggap sebagai variabel yang berbeda.

Octave juga memiliki variabel khusus bernama `ans`, yaitu variabel otomatis yang menyimpan hasil komputasi terakhir jika hasil tersebut tidak disimpan ke variabel lain.

Contoh:

```octave
3 + 4
```

Hasil operasi di atas akan disimpan otomatis ke dalam `ans`.

Aturan umum penamaan variabel:
- dapat terdiri atas huruf, angka, dan underscore `_`,
- tidak boleh diawali angka,
- sebaiknya tidak menggunakan nama internal Octave yang diawali dan diakhiri dua underscore.

---

### 4.2 Skalar

Skalar adalah nilai tunggal, misalnya satu bilangan bulat, desimal, atau logika tunggal.

Contoh skalar:

```octave
panjang = 12;
lebar = 5;
status_lulus = true;
```

Pada contoh di atas:
- `panjang` dan `lebar` berisi satu nilai numerik,
- `status_lulus` berisi satu nilai logika.

Dalam praktik pemrograman dasar, skalar adalah bentuk data paling sederhana sebelum praktikan mempelajari vektor dan matriks.

---

### 4.3 Operator Aritmetika

Operator aritmetika digunakan untuk perhitungan matematis.

| Operator | Kegunaan | Contoh |
|---|---|---|
| `+` | penjumlahan | `a + b` |
| `-` | pengurangan | `a - b` |
| `*` | perkalian | `a * b` |
| `/` | pembagian kanan | `a / b` |
| `\` | pembagian kiri | `a \ b` |
| `^` | pangkat | `a ^ b` |
| `.*` | perkalian elemen per elemen | `A .* B` |
| `./` | pembagian elemen per elemen | `A ./ B` |
| `.^` | pangkat elemen per elemen | `A .^ 2` |

Catatan penting:
- pada **skalar**, `*` dan `.*` memberi hasil yang sama,
- pada **matriks**, `*` berarti perkalian matriks, sedangkan `.*` berarti perkalian setiap elemen yang bersesuaian,
- konsep yang sama berlaku untuk `/` dengan `./`, serta `^` dengan `.^`.

---

### 4.4 Operator Perbandingan

Operator perbandingan membandingkan dua nilai. Hasilnya bernilai benar atau salah, yang pada tampilan Octave biasanya muncul sebagai `1` untuk benar dan `0` untuk salah.

| Operator | Arti | Contoh |
|---|---|---|
| `==` | sama dengan | `a == b` |
| `!=` atau `~=` | tidak sama dengan | `a != b` |
| `<` | lebih kecil | `a < b` |
| `<=` | lebih kecil atau sama dengan | `a <= b` |
| `>` | lebih besar | `a > b` |
| `>=` | lebih besar atau sama dengan | `a >= b` |

---

### 4.5 Operator Logika

Octave mendukung nilai logika `true` dan `false`. Operasi logika dasar yang umum dipakai adalah:

| Operator | Arti | Contoh |
|---|---|---|
| `&` | dan | `a & b` |
| `|` | atau | `a | b` |
| `!` | negasi | `!a` |

Operator logika sering digunakan untuk pengambilan keputusan pada struktur `if`, `while`, dan pemilihan data.

---

### 4.6 Format Output

Output hasil perhitungan dapat ditampilkan dengan beberapa cara berikut.

#### a. Menampilkan nilai secara langsung

```octave
pi
```

Octave akan menampilkan nama variabel atau `ans` beserta nilainya.

#### b. Menampilkan nilai dengan `disp`

```octave
disp(pi)
```

`disp` menampilkan nilai tanpa nama variabel dan otomatis diakhiri newline.

#### c. Mengatur tampilan angka dengan `format`

Perintah `format` hanya mengubah **cara angka ditampilkan**, bukan nilai yang disimpan atau dihitung.

Contoh format yang sering dipakai:

```octave
format short
format long
format bank
format rat
format compact
format loose
format default
```

Keterangan singkat:
- `format short` : 5 digit signifikan,
- `format long` : 16 digit signifikan,
- `format bank` : dua angka di belakang koma, cocok untuk tampilan seperti nilai uang,
- `format rat` : pendekatan rasional,
- `format compact` : tampilan lebih rapat,
- `format loose` : tampilan lebih renggang,
- `format default` : kembali ke format bawaan.

#### d. Output terformat dengan `printf`

```octave
nilai = 89.4567;
printf("Nilai akhir = %.2f\n", nilai)
```

Contoh format string yang sering dipakai:

| Kode | Fungsi |
|---|---|
| `%d` | bilangan bulat |
| `%f` | bilangan pecahan format tetap |
| `%e` | notasi ilmiah |
| `%g` | format otomatis yang sesuai |
| `%s` | string |
| `\n` | pindah baris |

#### e. Menghasilkan string dengan `sprintf`

```octave
rata = 82.5;
teks = sprintf("Rata-rata = %.1f", rata)
```

Berbeda dari `printf`, `sprintf` tidak langsung mencetak ke layar, tetapi mengembalikan hasil format sebagai string.

#### f. Mengubah angka menjadi string dengan `num2str`

```octave
x = 123.456;
num2str(x)
num2str(x, 4)
num2str(x, "%8.2f")
```

`num2str` berguna saat hasil numerik ingin digabung dengan teks. Untuk kontrol format yang lebih fleksibel, dokumentasi Octave menyarankan `sprintf`.

---

## 5. Contoh Kode dan Penjelasan

### Contoh 1 — Variabel dan Skalar

```octave
panjang = 10;
lebar = 4;
luas = panjang * lebar
```

**Penjelasan:**
- `panjang` dan `lebar` adalah variabel skalar,
- `luas` menyimpan hasil perkalian,
- karena baris terakhir tidak diakhiri `;`, hasil langsung tampil.

---

### Contoh 2 — Variabel `ans`

```octave
8 + 6
ans * 2
```

**Penjelasan:**
- `8 + 6` menghasilkan `14` dan disimpan ke `ans`,
- baris kedua menggunakan nilai terakhir yang ada di `ans`.

---

### Contoh 3 — Case-Sensitive pada Variabel

```octave
nilai = 75;
Nilai = 90;

nilai
Nilai
```

**Penjelasan:**
- `nilai` dan `Nilai` adalah dua variabel berbeda,
- ini menunjukkan bahwa nama variabel di Octave peka huruf besar-kecil.

---

### Contoh 4 — Operator Aritmetika

```octave
a = 12;
b = 5;

jumlah = a + b
selisih = a - b
kali = a * b
bagi = a / b
pangkat = a ^ 2
```

**Penjelasan:**
- setiap variabel menyimpan hasil operasi yang berbeda,
- `^` digunakan untuk perpangkatan.

---

### Contoh 5 — Operator Perbandingan dan Logika

```octave
x = 8;
y = 12;

x < y
x == y
(x < y) & (y > 10)
!(x == y)
```

**Penjelasan:**
- `x < y` bernilai benar,
- `x == y` bernilai salah,
- ekspresi logika dapat digabung dengan `&`, `|`, dan `!`.

---

### Contoh 6 — Perbedaan `*` dan `.*`

```octave
A = [1 2; 3 4];
B = [5 6; 7 8];

A * B
A .* B
```

**Penjelasan:**
- `A * B` adalah perkalian matriks,
- `A .* B` adalah perkalian elemen yang posisinya bersesuaian.

---

### Contoh 7 — Mengatur Format Tampilan

```octave
format short
pi

format long
pi

format bank
1234.567

format default
```

**Penjelasan:**
- `format short` menampilkan angka lebih ringkas,
- `format long` menampilkan lebih banyak digit signifikan,
- `format bank` menampilkan dua angka di belakang koma,
- `format default` mengembalikan ke format standar.

---

### Contoh 8 — `disp`, `printf`, dan `sprintf`

```octave
nilai_tugas = 84.75;

% tampil sederhana
 disp(nilai_tugas)

% tampil terformat ke layar
printf("Nilai tugas = %.2f\n", nilai_tugas)

% simpan hasil format ke string
pesan = sprintf("Nilai tugas = %.2f", nilai_tugas);
disp(pesan)
```

**Penjelasan:**
- `disp` cocok untuk tampilan sederhana,
- `printf` cocok untuk keluaran terstruktur,
- `sprintf` cocok saat hasil format ingin dipakai lagi sebagai string.

---

### Contoh 9 — Menggabungkan Teks dan Angka dengan `num2str`

```octave
rata_rata = 88.125;
pesan = ["Rata-rata praktikum = ", num2str(rata_rata, 5)];
disp(pesan)
```

**Penjelasan:**
- `num2str` mengubah angka menjadi string,
- hasilnya bisa digabung ke dalam teks.

---

## 6. Langkah Praktikum

### 6.1 Persiapan

1. Jalankan GNU Octave.
2. Buka folder kerja praktikum.
3. Buat file baru bernama `pertemuan2_variabel_operator.m`.

### 6.2 Eksperimen Dasar

Ketik dan jalankan potongan kode berikut satu per satu:

```octave
x = 15;
y = 4;

x + y
x - y
x * y
x / y
x ^ y
```

Amati hasil tiap operasi.

### 6.3 Mengamati Perbandingan dan Logika

```octave
x > y
x == y
x != y
(x > y) & (y < 10)
(x < y) | (y < 10)
```

Catat hasil setiap ekspresi.

### 6.4 Mencoba Format Output

```octave
format short
pi

format long
pi

format bank
123.4567

format rat
pi

format default
```

Bandingkan bagaimana tampilan angka berubah walaupun nilainya tetap sama.

### 6.5 Mencoba `disp`, `printf`, dan `sprintf`

```octave
skor = 93.278;

disp(skor)
printf("Skor akhir = %.2f\n", skor)

teks_skor = sprintf("Skor akhir = %.3f", skor);
disp(teks_skor)
```

---

## 7. Tugas Latihan

### A. Latihan Pemahaman

Jawab pertanyaan berikut:

1. Apa perbedaan variabel dan skalar?
2. Mengapa `nilai` dan `Nilai` dianggap berbeda?
3. Apa fungsi variabel `ans`?
4. Apa perbedaan `*` dan `.*`?
5. Mengapa `format` tidak mengubah nilai sebenarnya?
6. Apa perbedaan `disp`, `printf`, dan `sprintf`?
7. Kapan `num2str` lebih berguna daripada langsung menampilkan angka?

### B. Latihan Kode

Kerjakan di Octave:

1. Buat dua variabel skalar `a = 20` dan `b = 6`, lalu hitung:
   - jumlah,
   - selisih,
   - hasil kali,
   - hasil bagi,
   - sisa bagi menggunakan `rem(a,b)`.
2. Buat tiga ekspresi perbandingan yang menghasilkan benar.
3. Buat dua ekspresi logika yang menggabungkan operator `&` dan `|`.
4. Tampilkan nilai `pi` dengan `format short`, `format long`, dan `format rat`.
5. Tampilkan kalimat berikut dengan `printf`:

```text
Hasil perhitungan = 123.46
```

6. Simpan teks berikut ke variabel string dengan `sprintf`:

```text
Nilai akhir praktikum = 87.5
```

---

## 8. Tugas Praktikum

### Judul
**Pengolahan Data Skalar dan Penyajian Output pada GNU Octave**

### Tujuan
Praktikan mampu:
- mendeklarasikan variabel dengan benar,
- menggunakan operator dasar secara tepat,
- menyusun output yang informatif dan rapi.

### Instruksi

Buat tiga file berikut.

---

### 8.1 File `hitung_data_skalar.m`

Isi file ini dengan kode untuk:
- membuat minimal 5 variabel skalar numerik,
- menghitung jumlah, rata-rata, nilai maksimum, dan nilai minimum,
- menampilkan semua hasil menggunakan `disp`.

Contoh kerangka:

```octave
clc;

n1 = 78;
n2 = 85;
n3 = 90;
n4 = 88;
n5 = 92;

jumlah = n1 + n2 + n3 + n4 + n5;
rata = jumlah / 5;
nilai_maks = max([n1 n2 n3 n4 n5]);
nilai_min = min([n1 n2 n3 n4 n5]);

disp("=== HASIL PENGOLAHAN DATA SKALAR ===");
disp(["Jumlah      = ", num2str(jumlah)]);
disp(["Rata-rata   = ", num2str(rata)]);
disp(["Maksimum    = ", num2str(nilai_maks)]);
disp(["Minimum     = ", num2str(nilai_min)]);
```

---

### 8.2 File `uji_operator.m`

Isi file ini dengan contoh penggunaan:
- operator aritmetika,
- operator perbandingan,
- operator logika,
- operator elemen-per-elemen pada dua matriks kecil.

Contoh kerangka:

```octave
clc;

a = 12;
b = 4;

A = [1 2; 3 4];
B = [2 2; 5 1];

disp("=== OPERATOR ARITMETIKA ===");
printf("a + b = %d\n", a + b);
printf("a - b = %d\n", a - b);
printf("a * b = %d\n", a * b);
printf("a / b = %.2f\n", a / b);
printf("a ^ b = %d\n", a ^ b);

disp(" ");
disp("=== OPERATOR PERBANDINGAN ===");
printf("a > b  = %d\n", a > b);
printf("a == b = %d\n", a == b);
printf("a != b = %d\n", a != b);

disp(" ");
disp("=== OPERATOR LOGIKA ===");
printf("(a > b) & (b < 10) = %d\n", (a > b) & (b < 10));
printf("(a < b) | (b < 10) = %d\n", (a < b) | (b < 10));
printf("!(a == b) = %d\n", !(a == b));

disp(" ");
disp("=== MATRIKS ===");
disp("A * B = ");
disp(A * B);
disp("A .* B = ");
disp(A .* B);
```

---

### 8.3 File `format_output_demo.m`

Isi file ini dengan demonstrasi:
- `format short`,
- `format long`,
- `format bank`,
- `disp`,
- `printf`,
- `sprintf`.

Contoh kerangka:

```octave
clc;

x = pi;
nilai = 1234.56789;

format short
disp("=== FORMAT SHORT ===");
disp(x);

disp(" ");
format long
disp("=== FORMAT LONG ===");
disp(x);

disp(" ");
format bank
disp("=== FORMAT BANK ===");
disp(nilai);

disp(" ");
format default
disp("=== DISP ===");
disp(nilai);

disp(" ");
printf("=== PRINTF ===\n");
printf("Nilai = %.3f\n", nilai);

teks = sprintf("=== SPRINTF === Nilai = %.2f", nilai);
disp(teks);
```

---

### Luaran yang Dikumpulkan

1. `hitung_data_skalar.m`
2. `uji_operator.m`
3. `format_output_demo.m`
4. tangkapan layar hasil eksekusi
5. file log praktikum bila diminta pengampu

---

## 9. Kriteria Penilaian

| Aspek | Bobot |
|---|---:|
| Ketepatan pembuatan variabel dan skalar | 20% |
| Ketepatan penggunaan operator | 25% |
| Kebenaran hasil perhitungan | 20% |
| Kerapian dan kejelasan format output | 20% |
| Kerapian penulisan kode dan komentar | 15% |

---

## 10. Kesalahan Umum

### 10.1 Salah membedakan huruf besar dan kecil

```octave
nilai = 10;
Nilai = 20;
```

Kedua variabel di atas berbeda.

### 10.2 Mengira `format` mengubah nilai sebenarnya

```octave
format short
pi
format long
pi
```

Nilai `pi` tidak berubah. Yang berubah hanya tampilan di layar.

### 10.3 Menggunakan `*` saat yang dibutuhkan `.*`

Pada matriks, `*` berarti perkalian matriks. Jika yang diinginkan adalah perkalian tiap elemen, gunakan `.*`.

### 10.4 Menggabungkan angka dan string tanpa konversi

```octave
nilai = 80;
disp(["Nilai = ", num2str(nilai)])
```

Gunakan `num2str` atau `sprintf` saat perlu menggabungkan angka dengan teks.

---

## 11. Ringkasan

Pada praktikum ini, praktikan telah mempelajari:
- pembuatan variabel dan pemahaman skalar,
- penggunaan `ans` sebagai hasil terakhir,
- operator aritmetika, perbandingan, dan logika,
- perbedaan operator biasa dan elemen-per-elemen,
- cara mengatur dan membentuk output menggunakan `format`, `disp`, `printf`, `sprintf`, dan `num2str`.

Materi ini menjadi fondasi penting untuk topik berikutnya seperti percabangan, perulangan, vektor, matriks, dan pembuatan fungsi.

---

## 12. Referensi

1. GNU Octave Manual 11.1.0 — https://docs.octave.org/latest/
2. Variables — https://docs.octave.org/latest/Variables.html
3. Arithmetic Operators — https://docs.octave.org/latest/Arithmetic-Ops.html
4. Comparison Operators — https://docs.octave.org/latest/Comparison-Ops.html
5. Logical Values — https://docs.octave.org/latest/Logical-Values.html
6. Terminal Output dan `format` — https://docs.octave.org/latest/Terminal-Output.html
7. Formatted Output (`printf`, `fprintf`, `sprintf`) — https://docs.octave.org/latest/Formatted-Output.html
8. Numerical Data and Strings (`num2str`) — https://docs.octave.org/latest/Numerical-Data-and-Strings.html