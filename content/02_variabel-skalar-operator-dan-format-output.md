# Variabel, Skalar, Operator, dan Format Output

## 1. Deskripsi Singkat

Pada pertemuan ini, praktikan mempelajari konsep dasar penyimpanan data pada GNU Octave melalui **variabel** dan **skalar**, penggunaan **operator** untuk melakukan perhitungan dan perbandingan, serta teknik menampilkan hasil dengan **format output** yang rapi.

Berdasarkan dokumentasi resmi GNU Octave 11.1.0, nama variabel bersifat **case-sensitive**, terdapat variabel khusus `ans` untuk hasil terakhir yang tidak disimpan ke variabel lain, operator aritmetika bekerja pada skalar maupun matriks, dan tampilan keluaran dapat diatur dengan `format`, `disp`, `printf`, `fprintf`, `sprintf`, serta fungsi konversi seperti `num2str`.

---

## 2. Dasar Teori

### 2.1 Variabel dalam Octave

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

### 2.2 Skalar

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

### 2.3 Operator Aritmetika

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

### 2.4 Operator Perbandingan

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

### 2.5 Operator Logika

Octave mendukung nilai logika `true` dan `false`. Operasi logika dasar yang umum dipakai adalah:

| Operator | Arti | Contoh |
|---|---|---|
| `&` | dan | `a & b` |
| `|` | atau | `a | b` |
| `!` | negasi | `!a` |

Operator logika sering digunakan untuk pengambilan keputusan pada struktur `if`, `while`, dan pemilihan data.

---

### 2.6 Format Output

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

## 3. Contoh Kode dan Penjelasan

### 3.1 Contoh 1 — Variabel dan Skalar

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

### 3.2 Contoh 2 — Variabel `ans`

```octave
8 + 6
ans * 2
```

**Penjelasan:**
- `8 + 6` menghasilkan `14` dan disimpan ke `ans`,
- baris kedua menggunakan nilai terakhir yang ada di `ans`.

---

### 3.3 Contoh 3 — Case-Sensitive pada Variabel

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

### 3.4 Contoh 4 — Operator Aritmetika

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

### 3.5 Contoh 5 — Operator Perbandingan dan Logika

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

### 3.6 Contoh 6 — Perbedaan `*` dan `.*`

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

### 3.7 Contoh 7 — Mengatur Format Tampilan

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

### 3.8 Contoh 8 — `disp`, `printf`, dan `sprintf`

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

### 3.9 Contoh 9 — Menggabungkan Teks dan Angka dengan `num2str`

```octave
rata_rata = 88.125;
pesan = ["Rata-rata praktikum = ", num2str(rata_rata, 5)];
disp(pesan)
```

**Penjelasan:**
- `num2str` mengubah angka menjadi string,
- hasilnya bisa digabung ke dalam teks.

---

## 4. Langkah Praktikum

### 4.1 Persiapan

1. Jalankan GNU Octave.
2. Buka folder kerja praktikum.
3. Buat file baru bernama `pertemuan2_variabel_operator.m`.

### 4.2 Eksperimen Dasar

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

### 4.3 Mengamati Perbandingan dan Logika

```octave
x > y
x == y
x != y
(x > y) & (y < 10)
(x < y) | (y < 10)
```

Catat hasil setiap ekspresi.

### 4.4 Mencoba Format Output

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

### 4.5 Mencoba `disp`, `printf`, dan `sprintf`

```octave
skor = 93.278;

disp(skor)
printf("Skor akhir = %.2f\n", skor)

teks_skor = sprintf("Skor akhir = %.3f", skor);
disp(teks_skor)
```

---

## 5. Tugas Latihan

### 5.1 Tugas Latihan

Kerjakan langsung di **Command Window Octave**. Untuk materi awal ini, latihan tidak perlu dibuat menjadi banyak file dan tidak perlu membuat folder baru.

1. Buat variabel `a = 20;` dan `b = 6;`.
2. Hitung `jumlah`, `selisih`, `hasil_kali`, `hasil_bagi`, dan `sisa_bagi` dengan `rem(a, b)`.
3. Buat tiga ekspresi perbandingan yang menghasilkan nilai benar.
4. Buat dua ekspresi logika yang menggunakan `&` dan `|`.
5. Tampilkan `pi` dengan `format short`, `format long`, dan `format rat`.
6. Tampilkan teks `Hasil perhitungan = 123.46` menggunakan `printf`.
7. Simpan teks `Nilai akhir praktikum = 87.5` ke variabel string dengan `sprintf`, lalu tampilkan hasilnya.

Contoh alur pengerjaan:

```octave
a = 20;
b = 6;

jumlah = a + b
selisih = a - b
hasil_kali = a * b
hasil_bagi = a / b
sisa_bagi = rem(a, b)

a > b
a != b
jumlah >= b

(a > b) & (b < 10)
(a < b) | (b < 10)

format short
pi

format long
pi

format rat
pi

format default
printf("Hasil perhitungan = %.2f\n", 123.456)

teks = sprintf("Nilai akhir praktikum = %.1f", 87.5);
disp(teks)
```

---

## 6. Tugas Praktikum

### 6.1 Judul
**Pengolahan Data Skalar dan Penyajian Output pada GNU Octave**

### 6.2 Tujuan
Praktikan mampu:
- mendeklarasikan variabel dengan benar,
- menggunakan operator dasar secara tepat,
- menyusun output yang informatif dan rapi.

### 6.3 Instruksi

Buat **satu file script saja** bernama `praktikum_variabel_operator.m`.

Ketentuan:
- tidak perlu membuat folder baru,
- tidak perlu memecah program menjadi beberapa file,
- seluruh bagian dikerjakan dalam satu script yang bisa langsung dijalankan.

Isi script harus memuat:
- judul praktikum dan identitas singkat,
- minimal 5 variabel skalar numerik,
- perhitungan jumlah, rata-rata, maksimum, dan minimum,
- contoh operator aritmetika, perbandingan, dan logika,
- dua matriks kecil `A` dan `B`, lalu tampilkan `A * B` dan `A .* B`,
- demonstrasi `format short`, `format long`, dan `format bank`,
- output dengan `disp`, `printf`, `sprintf`, dan `num2str`.

---

### 6.4 File `praktikum_variabel_operator.m`

Contoh kerangka:

```octave
clc;
format default;

disp("=== PRAKTIKUM 2: VARIABEL, SKALAR, OPERATOR, DAN FORMAT OUTPUT ===");

nama = "mahasiswa";
nim = "00000000";
kelas = "kelas_praktikum";

disp(["Nama  : ", nama]);
disp(["NIM   : ", nim]);
disp(["Kelas : ", kelas]);
disp(" ");

n1 = 78;
n2 = 85;
n3 = 90;
n4 = 88;
n5 = 92;

jumlah = n1 + n2 + n3 + n4 + n5;
rata = jumlah / 5;
nilai_maks = max([n1 n2 n3 n4 n5]);
nilai_min = min([n1 n2 n3 n4 n5]);

disp("=== DATA SKALAR ===");
disp(["Jumlah    = ", num2str(jumlah)]);
disp(["Rata-rata = ", num2str(rata)]);
disp(["Maksimum  = ", num2str(nilai_maks)]);
disp(["Minimum   = ", num2str(nilai_min)]);
disp(" ");

a = 12;
b = 4;

disp("=== OPERATOR ARITMETIKA ===");
printf("a + b = %d\n", a + b);
printf("a - b = %d\n", a - b);
printf("a * b = %d\n", a * b);
printf("a / b = %.2f\n", a / b);
printf("a ^ b = %d\n", a ^ b);

disp(" ");
disp("=== OPERATOR PERBANDINGAN DAN LOGIKA ===");
printf("a > b = %d\n", a > b);
printf("a == b = %d\n", a == b);
printf("a != b = %d\n", a != b);
printf("(a > b) & (b < 10) = %d\n", (a > b) & (b < 10));
printf("(a < b) | (b < 10) = %d\n", (a < b) | (b < 10));

disp(" ");
A = [1 2; 3 4];
B = [2 2; 5 1];
disp("=== MATRIKS ===");
disp("A * B = ");
disp(A * B);
disp("A .* B = ");
disp(A .* B);

disp(" ");
format short
disp("=== FORMAT SHORT ===");
disp(pi);

format long
disp("=== FORMAT LONG ===");
disp(pi);

format bank
disp("=== FORMAT BANK ===");
disp(1234.56789);

format default
disp(" ");
disp("=== OUTPUT TERFORMAT ===");
printf("Rata-rata data = %.2f\n", rata);
pesan = sprintf("Nilai akhir praktikum = %.1f", rata);
disp(pesan);
```

Script boleh dikembangkan sesuai kebutuhan, tetapi seluruh hasil harus keluar dari satu file tersebut saat dijalankan.

---

### 6.5 Luaran yang Dikumpulkan

1. `praktikum_variabel_operator.m`
2. tangkapan layar hasil eksekusi script

---

## 7. Ringkasan

Pada praktikum ini, praktikan telah mempelajari:
- pembuatan variabel dan pemahaman skalar,
- penggunaan `ans` sebagai hasil terakhir,
- operator aritmetika, perbandingan, dan logika,
- perbedaan operator biasa dan elemen-per-elemen,
- cara mengatur dan membentuk output menggunakan `format`, `disp`, `printf`, `sprintf`, dan `num2str`.

Materi ini menjadi fondasi penting untuk topik berikutnya seperti percabangan, perulangan, vektor, matriks, dan pembuatan fungsi.

---

## 8. Referensi

1. GNU Octave Manual 11.1.0 — https://docs.octave.org/latest/
2. Variables — https://docs.octave.org/latest/Variables.html
3. Arithmetic Operators — https://docs.octave.org/latest/Arithmetic-Ops.html
4. Comparison Operators — https://docs.octave.org/latest/Comparison-Ops.html
5. Logical Values — https://docs.octave.org/latest/Logical-Values.html
6. Terminal Output dan `format` — https://docs.octave.org/latest/Terminal-Output.html
7. Formatted Output (`printf`, `fprintf`, `sprintf`) — https://docs.octave.org/latest/Formatted-Output.html
8. Numerical Data and Strings (`num2str`) — https://docs.octave.org/latest/Numerical-Data-and-Strings.html
