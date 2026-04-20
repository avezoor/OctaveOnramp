# Fungsi Buatan Pengguna, Banyak Output, dan Function Handle

### Identitas Modul
- **Mata kuliah**: Pemrograman Dasar
- **Topik**: Fungsi Buatan Pengguna, Banyak Output, dan Function Handle
- **Durasi**: 1 pertemuan praktikum (100–150 menit)
- **Perangkat lunak**: GNU Octave
- **Acuan utama**: Dokumentasi resmi GNU Octave 11.1.0

---

## 1. Deskripsi Singkat

Pada praktikum ini mahasiswa mempelajari cara membuat fungsi sendiri pada GNU Octave, memisahkan program ke dalam file fungsi, mengembalikan lebih dari satu nilai, serta menggunakan **function handle** untuk menyimpan referensi fungsi di dalam variabel atau mengirim fungsi sebagai argumen ke fungsi lain. Materi ini penting karena pada program yang mulai kompleks, penulisan semua perintah dalam satu script akan menyulitkan pengujian, penggunaan ulang, dan pemeliharaan kode.

Menurut dokumentasi resmi Octave, fungsi dapat ditulis langsung di command line pada sesi interaktif atau disimpan pada file eksternal `.m` dan dipanggil seperti fungsi bawaan. Octave juga mendukung banyak nilai keluaran dari satu fungsi, serta mendukung function handle dan anonymous function untuk pemanggilan tidak langsung atau untuk parameter fungsi tingkat lanjut.

---

## 2. Capaian Pembelajaran

Setelah mengikuti praktikum ini, mahasiswa mampu:

1. Menjelaskan konsep fungsi buatan pengguna pada Octave.
2. Membuat file fungsi `.m` dengan parameter input dan output.
3. Menggunakan `nargin` untuk memeriksa jumlah input.
4. Membuat fungsi dengan lebih dari satu output.
5. Menjelaskan perbedaan script, function file, dan function handle.
6. Menggunakan function handle pada pemanggilan fungsi lain.
7. Membuat anonymous function sederhana.

---

## 3. Prasyarat

Mahasiswa diharapkan sudah memahami:
- variabel dan operator dasar,
- vektor dan matriks dasar,
- string, input/output, dan script sederhana,
- percabangan dan perulangan dasar.

---

## 4. Alat dan Bahan

- 1 komputer/laptop
- GNU Octave terpasang
- folder kerja praktikum
- editor bawaan Octave atau editor teks lain

---

## 5. Dasar Teori

### 5.1 Pengertian Fungsi Buatan Pengguna

Fungsi buatan pengguna adalah fungsi yang ditulis sendiri untuk mengerjakan satu tugas tertentu. Fungsi membantu membagi program besar menjadi bagian-bagian kecil yang lebih mudah dibaca, diuji, dan digunakan ulang.

Bentuk umum fungsi dengan satu output di Octave adalah:

```octave
function hasil = nama_fungsi(arg1, arg2, ...)
  % isi fungsi
endfunction
```

Bentuk umum fungsi tanpa output adalah:

```octave
function nama_fungsi(arg1, arg2, ...)
  % isi fungsi
endfunction
```

Bentuk umum fungsi dengan banyak output adalah:

```octave
function [out1, out2, out3] = nama_fungsi(arg1, arg2, ...)
  % isi fungsi
endfunction
```

Octave mendukung fungsi yang didefinisikan langsung secara interaktif maupun pada file eksternal. Function file dan script file sama-sama memakai ekstensi `.m`.

### 5.2 Function File dan Script File

Script file berisi kumpulan perintah yang dijalankan berurutan. Function file berisi definisi fungsi. Dalam dokumentasi Octave dijelaskan bahwa baik function file maupun script file menggunakan ekstensi `.m`. Jika ingin menaruh lebih dari satu fungsi yang saling independen dalam satu file, pendekatan yang dijelaskan adalah menggunakan script file dan mengeksekusinya terlebih dahulu agar fungsi-fungsi di dalamnya dapat dipakai.

### 5.3 Variabel Lokal pada Fungsi

Variabel di dalam fungsi bersifat **lokal** terhadap fungsi tersebut. Ini berarti variabel yang dibuat di dalam fungsi tidak otomatis tersedia di workspace utama. Demikian juga argumen input dan variabel output adalah variabel lokal di dalam fungsi.

Keuntungan variabel lokal:
- mengurangi bentrokan nama variabel,
- membuat fungsi lebih aman dipakai ulang,
- memudahkan pengujian dan debugging.

### 5.4 Pemeriksaan Input dengan `nargin`

Octave menyediakan variabel otomatis `nargin` di dalam fungsi. Nilai `nargin` menunjukkan berapa banyak argumen yang benar-benar dikirim saat fungsi dipanggil.

Ini penting karena dokumentasi resmi menjelaskan bahwa untuk fungsi `.m`, Octave otomatis melaporkan error jika argumen yang diberikan **terlalu banyak**, tetapi tidak otomatis memberi error yang jelas jika argumen **terlalu sedikit**. Karena itu, pemeriksaan dengan `nargin` sangat dianjurkan.

Contoh pola umum:

```octave
function hasil = contoh(a, b)
  if (nargin != 2)
    usage("contoh(a, b)");
  endif
  hasil = a + b;
endfunction
```

### 5.5 Banyak Output dari Satu Fungsi

Salah satu kelebihan Octave adalah fungsi dapat mengembalikan lebih dari satu nilai. Penulisannya menggunakan daftar output di sisi kiri deklarasi fungsi.

Contoh:

```octave
function [luas, keliling] = hitung_persegi(sisi)
  luas = sisi^2;
  keliling = 4 * sisi;
endfunction
```

Saat dipanggil:

```octave
[L, K] = hitung_persegi(5)
```

Jika hanya memerlukan satu output tertentu, hasil lain dapat diabaikan. Dalam praktik modern Octave, karakter `~` dapat dipakai untuk mengabaikan output tertentu dengan lebih efisien dibanding `nthargout` untuk banyak kasus sederhana.

### 5.6 `nargout`

Di dalam fungsi, `nargout` menunjukkan berapa banyak output yang diharapkan pemanggil. Dengan demikian, satu fungsi bisa dibuat berperilaku berbeda tergantung jumlah output yang diminta.

Contoh ide penggunaan:
- jika tidak ada output diminta, fungsi hanya menampilkan hasil,
- jika ada output diminta, fungsi mengembalikan nilai tanpa mencetak.

### 5.7 `return` pada Fungsi

Pada Octave, `return` **tidak** dipakai untuk mengirim nilai seperti pada beberapa bahasa lain. `return` hanya dipakai untuk menghentikan eksekusi fungsi lebih awal dan mengembalikan kontrol ke pemanggil. Nilai keluaran tetap harus diberikan dengan mengisi variabel output yang ada pada deklarasi fungsi.

### 5.8 Function Handle

Function handle adalah referensi atau penunjuk ke suatu fungsi. Sintaks dasarnya:

```octave
f = @sin;
```

Artinya variabel `f` menyimpan referensi ke fungsi `sin`. Setelah itu, fungsi dapat dipanggil melalui handle tersebut:

```octave
f(pi/4)
feval(f, pi/4)
```

Function handle berguna untuk:
- memanggil fungsi secara tidak langsung,
- mengirim fungsi ke fungsi lain,
- numerik dan optimasi,
- plotting berbasis fungsi,
- membuat program lebih fleksibel.

### 5.9 Anonymous Function

Anonymous function adalah fungsi singkat tanpa nama tetap, biasanya dipakai bersama function handle.

Contoh:

```octave
f = @(x) x^2 + 2*x + 1;
```

Fungsi tersebut dapat langsung dipanggil:

```octave
f(3)
```

Anonymous function sangat berguna ketika fungsi sederhana hanya dipakai sekali atau dipakai sebagai argumen untuk fungsi lain.

---

## 6. Sintaks Dasar yang Perlu Dikuasai

### 6.1 Fungsi dengan Satu Output

```octave
function y = kuadrat(x)
  y = x^2;
endfunction
```

### 6.2 Fungsi dengan Banyak Output

```octave
function [jumlah, selisih] = operasi_dua_bilangan(a, b)
  jumlah = a + b;
  selisih = a - b;
endfunction
```

### 6.3 Fungsi dengan Pengecekan Input

```octave
function hasil = bagi_aman(a, b)
  if (nargin != 2)
    usage("bagi_aman(a, b)");
  endif

  if (b == 0)
    error("Penyebut tidak boleh nol");
  endif

  hasil = a / b;
endfunction
```

### 6.4 Function Handle

```octave
f = @sin;
nilai = f(pi/2)
```

### 6.5 Anonymous Function

```octave
f = @(x) 3*x + 1;
f(5)
```

---

## 7. Langkah Praktikum

### 7.1 Menyiapkan Folder Kerja

Buat folder misalnya:

```text
praktikum_octave_fungsi
```

Pindah ke folder tersebut dari Octave:

```octave
pwd
cd praktikum_octave_fungsi
dir
```

### 7.2 Membuat Fungsi Pertama

Buat file bernama `luas_persegi.m` dengan isi:

```octave
function L = luas_persegi(sisi)
  % LUAS_PERSEGI Menghitung luas persegi.
  %   L = LUAS_PERSEGI(sisi)

  if (nargin != 1)
    usage("luas_persegi(sisi)");
  endif

  L = sisi^2;
endfunction
```

Jalankan:

```octave
help luas_persegi
luas_persegi(4)
```

**Penjelasan:**
- fungsi menerima satu input `sisi`,
- fungsi mengembalikan satu output `L`,
- komentar awal dapat dibaca oleh `help`,
- `nargin` dipakai agar pemanggilan fungsi lebih aman.

### 7.3 Membuat Fungsi dengan Banyak Output

Buat file `data_lingkaran.m`:

```octave
function [L, K] = data_lingkaran(r)
  % DATA_LINGKARAN Menghitung luas dan keliling lingkaran.
  %   [L, K] = DATA_LINGKARAN(r)

  if (nargin != 1)
    usage("data_lingkaran(r)");
  endif

  if (r < 0)
    error("Jari-jari tidak boleh negatif");
  endif

  L = pi * r^2;
  K = 2 * pi * r;
endfunction
```

Uji fungsi:

```octave
[luas, keliling] = data_lingkaran(7)
```

Jika hanya memerlukan keliling, salah satu output dapat diabaikan:

```octave
[~, keliling] = data_lingkaran(7)
```

### 7.4 Menggunakan `nargout`

Buat file `info_nilai.m`:

```octave
function [akar, kuadrat] = info_nilai(x)
  % INFO_NILAI Menghasilkan akar dan kuadrat dari x.

  akar = sqrt(x);
  kuadrat = x^2;

  if (nargout == 0)
    disp(["Akar    = ", num2str(akar)]);
    disp(["Kuadrat = ", num2str(kuadrat)]);
  endif
endfunction
```

Contoh pemakaian:

```octave
info_nilai(9)
[a, b] = info_nilai(9)
```

**Penjelasan:**
- jika pemanggil tidak meminta output, fungsi menampilkan hasil,
- jika pemanggil meminta output, nilai tetap tersedia untuk disimpan.

### 7.5 Menggunakan `return`

Buat file `cek_positif.m`:

```octave
function status = cek_positif(x)
  % CEK_POSITIF Mengecek apakah bilangan positif.

  status = 0;

  if (x > 0)
    status = 1;
    return;
  endif
endfunction
```

**Penjelasan:**
- `return` hanya menghentikan fungsi lebih awal,
- nilai `status` tetap harus diisi melalui variabel output.

### 7.6 Membuat dan Memakai Function Handle

Jalankan di Command Window:

```octave
f = @sin;
f(pi/2)
feval(f, pi/2)
```

**Penjelasan:**
- `@sin` membuat function handle untuk fungsi `sin`,
- handle dapat dipanggil langsung atau lewat `feval`.

### 7.7 Membuat Anonymous Function

```octave
f = @(x) x^2 + 2*x + 1;
f(3)
```

Contoh lain dengan dua parameter:

```octave
g = @(x, y) x^2 + y^2;
g(3, 4)
```

### 7.8 Function Handle sebagai Argumen Fungsi Lain

Buat file `evaluasi_fungsi.m`:

```octave
function hasil = evaluasi_fungsi(f, x)
  % EVALUASI_FUNGSI Mengevaluasi function handle f pada nilai x.

  hasil = f(x);
endfunction
```

Uji:

```octave
h1 = @sin;
h2 = @(x) x^3 - 2*x + 1;

evaluasi_fungsi(h1, pi/2)
evaluasi_fungsi(h2, 2)
```

**Penjelasan:**
- fungsi dapat menerima function handle sebagai input,
- ini membuat program lebih umum dan fleksibel.

---

## 8. Contoh Kode dan Penjelasan

### Contoh 1 — Fungsi Penjumlahan Dua Bilangan

File: `jumlah_dua.m`

```octave
function hasil = jumlah_dua(a, b)
  % JUMLAH_DUA Menjumlahkan dua bilangan.

  if (nargin != 2)
    usage("jumlah_dua(a, b)");
  endif

  hasil = a + b;
endfunction
```

Pemakaian:

```octave
jumlah_dua(8, 5)
```

**Penjelasan kode:**
- menerima dua input,
- memeriksa jumlah input,
- mengembalikan satu output.

### Contoh 2 — Fungsi dengan Dua Output

File: `operasi_dasar.m`

```octave
function [jumlah, kali] = operasi_dasar(a, b)
  % OPERASI_DASAR Menghasilkan jumlah dan hasil kali dua bilangan.

  jumlah = a + b;
  kali = a * b;
endfunction
```

Pemakaian:

```octave
[j, k] = operasi_dasar(4, 6)
```

**Penjelasan kode:**
- satu fungsi mengembalikan dua hasil,
- lebih ringkas daripada membuat dua fungsi terpisah.

### Contoh 3 — Mengabaikan Salah Satu Output

```octave
[~, hasil_kali] = operasi_dasar(4, 6)
```

**Penjelasan kode:**
- `~` dipakai untuk mengabaikan output yang tidak diperlukan.

### Contoh 4 — Anonymous Function untuk Transformasi Nilai

```octave
f = @(x) 5*x - 3;
f(10)
```

**Penjelasan kode:**
- tidak perlu membuat file `.m` baru,
- cocok untuk rumus singkat.

### Contoh 5 — Function Handle untuk Komputasi Ulang

```octave
f = @cos;
n1 = f(0);
n2 = f(pi);
```

**Penjelasan kode:**
- handle menyimpan referensi ke fungsi,
- fungsi bisa dipanggil berulang dengan input berbeda.

### Contoh 6 — Function Handle untuk Perhitungan Numerik

```octave
f = @(x) sin(2*x + 1);
hasil = fminbnd(f, 0, 2)
```

**Penjelasan kode:**
- anonymous function sering dipakai untuk fungsi numerik,
- ini sejalan dengan dokumentasi Octave yang mencontohkan anonymous function untuk menyisipkan parameter tambahan pada masalah minimisasi.

---

## 9. Praktik Mandiri Terarah

Kerjakan langkah berikut:

1. Buat file fungsi `keliling_persegi.m` yang menerima `sisi` dan mengembalikan keliling.
2. Uji fungsi dengan nilai 5, 10, dan 12.
3. Buat file fungsi `konversi_suhu.m` yang menerima suhu Celcius dan mengembalikan:
   - Fahrenheit
   - Kelvin
4. Buat anonymous function untuk menghitung `x^2 - 4*x + 4`.
5. Buat function handle untuk `tan` lalu evaluasi pada `pi/4`.
6. Buat fungsi `terapkan_fungsi.m` yang menerima function handle `f` dan sebuah nilai `x`, lalu mengembalikan hasil `f(x)`.

---

## 10. Tugas Latihan

### A. Latihan Pemahaman

Jawab pertanyaan berikut:

1. Apa manfaat penggunaan fungsi dibanding menulis semua perintah dalam satu script?
2. Apa perbedaan function file dan script file?
3. Mengapa `nargin` penting dalam fungsi buatan pengguna?
4. Apa perbedaan antara banyak output dan output berupa satu vektor?
5. Apa fungsi dari symbol `@` pada function handle?
6. Apa perbedaan function handle biasa dan anonymous function?
7. Mengapa `return` pada Octave tidak dipakai untuk mengirim nilai seperti pada bahasa C?

### B. Latihan Kode

1. Buat fungsi `volume_balok(p, l, t)`.
2. Buat fungsi `stat_dua_bilangan(a, b)` yang mengembalikan jumlah, selisih, kali, dan bagi.
3. Buat anonymous function untuk rumus `3*x^2 + 2*x - 1`.
4. Buat function handle `@sqrt` dan evaluasi untuk 16, 25, dan 49.
5. Buat fungsi yang menerima function handle dan vektor, lalu mengembalikan hasil evaluasi fungsi pada setiap elemen vektor.

Contoh salah satu latihan:

```octave
function [j, s, k, b] = stat_dua_bilangan(a, b)
  j = a + b;
  s = a - b;
  k = a * b;
  b = a / b;
endfunction
```

> Catatan: contoh di atas sengaja mengandung masalah penamaan variabel `b` karena nama input dan output berbenturan. Mahasiswa diminta memperbaikinya agar tidak membingungkan.

Versi yang benar:

```octave
function [jumlah, selisih, kali, bagi] = stat_dua_bilangan(a, b)
  jumlah = a + b;
  selisih = a - b;
  kali = a * b;
  bagi = a / b;
endfunction
```

---

## 11. Tugas Praktikum

### Judul
**Membuat Kumpulan Fungsi Dasar dan Menggunakan Function Handle di Octave**

### Tujuan
Mahasiswa mampu:
- membuat beberapa file fungsi,
- menggunakan banyak output,
- memakai `nargin` untuk validasi input,
- menggunakan function handle dan anonymous function,
- menulis script pengujian.

### Instruksi
Buat folder:

```text
praktikum_octave_fungsi_lanjut
```

Di dalam folder tersebut buat file-file berikut.

#### 1. File `hitung_balok.m`
Spesifikasi:
- input: panjang, lebar, tinggi
- output: volume dan luas permukaan
- harus memeriksa jumlah input dengan `nargin`
- tampilkan pesan error jika ada input kurang dari atau sama dengan nol

Kerangka:

```octave
function [V, LP] = hitung_balok(p, l, t)
  % HITUNG_BALOK Menghitung volume dan luas permukaan balok.

  if (nargin != 3)
    usage("hitung_balok(p, l, t)");
  endif

  if (p <= 0 || l <= 0 || t <= 0)
    error("Semua dimensi harus lebih besar dari nol");
  endif

  V = p * l * t;
  LP = 2 * (p*l + p*t + l*t);
endfunction
```

#### 2. File `konversi_nilai.m`
Spesifikasi:
- input: nilai angka 0–100
- output: huruf mutu dan status kelulusan
- gunakan percabangan `if`
- output 1: huruf mutu
- output 2: status (`"Lulus"` atau `"Tidak Lulus"`)

#### 3. File `terapkan_ke_vektor.m`
Spesifikasi:
- input: function handle `f` dan sebuah vektor `v`
- output: vektor hasil penerapan `f` pada setiap elemen `v`
- gunakan perulangan untuk menerapkan fungsi ke seluruh elemen

Contoh ide:

```octave
function hasil = terapkan_ke_vektor(f, v)
  hasil = zeros(size(v));
  for i = 1:length(v)
    hasil(i) = f(v(i));
  endfor
endfunction
```

#### 4. File `uji_semua.m`
Isi file harus:
- menguji `hitung_balok`
- menguji `konversi_nilai`
- membuat anonymous function untuk `x^2 + 1`
- memanggil `terapkan_ke_vektor` pada vektor `[1 2 3 4 5]`
- menampilkan seluruh hasil dengan `disp` atau `printf`

Contoh kerangka:

```octave
clc;
disp("=== UJI FUNGSI PRAKTIKUM ===");

[V, LP] = hitung_balok(4, 3, 2);
disp(["Volume balok        = ", num2str(V)]);
disp(["Luas permukaan      = ", num2str(LP)]);

[mutu, status] = konversi_nilai(78);
disp(["Huruf mutu          = ", mutu]);
disp(["Status              = ", status]);

f = @(x) x^2 + 1;
v = [1 2 3 4 5];
hasil = terapkan_ke_vektor(f, v);
disp("Hasil transformasi  = ");
disp(hasil);
```

#### 5. Dokumentasi dan Log
Lakukan:

```octave
diary log_praktikum_fungsi.txt
help hitung_balok
help konversi_nilai
help terapkan_ke_vektor
uji_semua
diary off
```

### Luaran yang Dikumpulkan
1. `hitung_balok.m`
2. `konversi_nilai.m`
3. `terapkan_ke_vektor.m`
4. `uji_semua.m`
5. `log_praktikum_fungsi.txt`
6. tangkapan layar hasil eksekusi

---

## 12. Kriteria Penilaian

1. **Kesesuaian struktur file** — 10%
2. **Kebenaran sintaks fungsi** — 20%
3. **Penggunaan banyak output dengan benar** — 20%
4. **Validasi input menggunakan `nargin` dan pengecekan nilai** — 15%
5. **Penggunaan function handle / anonymous function** — 20%
6. **Kerapian output, komentar, dan dokumentasi** — 15%

---

## 13. Kesalahan Umum yang Sering Terjadi

### 1. Nama file tidak sama dengan nama fungsi utama
Akibat:
- fungsi tidak dikenali atau perilakunya membingungkan.

Solusi:
- samakan nama file dan nama fungsi utama.

### 2. Variabel output tidak pernah diisi
Akibat:
- muncul error atau warning karena nilai keluaran tidak terdefinisi.

Solusi:
- pastikan semua jalur logika memberi nilai pada variabel output.

### 3. Jumlah argumen saat memanggil fungsi salah
Akibat:
- fungsi gagal dijalankan atau hasil tidak sesuai.

Solusi:
- gunakan `nargin` untuk memeriksa input.

### 4. Salah mengira `return` mengirim nilai fungsi
Akibat:
- fungsi berhenti tetapi output tetap kosong.

Solusi:
- isi dulu variabel output, lalu gunakan `return` hanya untuk keluar lebih awal.

### 5. Salah memakai command syntax untuk fungsi dengan output
Contoh yang salah:

```octave
hasil fungsi_saya 5
```

Untuk fungsi dengan output, khususnya banyak output, gunakan **function syntax**:

```octave
hasil = fungsi_saya(5)
[a, b] = fungsi_saya(5)
```

### 6. Lupa bahwa anonymous function cocok untuk rumus singkat
Akibat:
- terlalu banyak file fungsi kecil yang sebenarnya tidak perlu.

Solusi:
- gunakan anonymous function untuk fungsi singkat dan sekali pakai.

---

## 14. Ringkasan

Pada modul ini mahasiswa telah mempelajari:
- konsep fungsi buatan pengguna,
- cara membuat function file `.m`,
- penggunaan `nargin` dan `nargout`,
- fungsi dengan satu atau banyak output,
- penggunaan `return` untuk keluar lebih awal,
- function handle dengan sintaks `@nama_fungsi`,
- anonymous function dengan sintaks `@(arg) ekspresi`,
- pengiriman fungsi sebagai argumen ke fungsi lain.

Materi ini menjadi dasar penting sebelum masuk ke topik fungsi yang lebih kompleks, modularisasi program, debugging, dan pemrograman numerik yang lebih fleksibel di Octave.

---

## 15. Referensi

1. GNU Octave Manual 11.1.0 — https://docs.octave.org/latest/
2. Functions and Scripts — https://docs.octave.org/latest/Functions-and-Scripts.html
3. Introduction to Function and Script Files — https://docs.octave.org/latest/Introduction-to-Function-and-Script-Files.html
4. Defining Functions — https://docs.octave.org/latest/Defining-Functions.html
5. Multiple Return Values — https://docs.octave.org/latest/Multiple-Return-Values.html
6. Returning from a Function — https://docs.octave.org/latest/Returning-from-a-Function.html
7. Function Handles and Anonymous Functions — https://docs.octave.org/latest/Function-Handles-and-Anonymous-Functions.html
8. Function Handles — https://docs.octave.org/latest/Function-Handles.html
9. Command Syntax and Function Syntax — https://docs.octave.org/latest/Command-Syntax-and-Function-Syntax.html
10. Minimizers — https://docs.octave.org/latest/Minimizers.html