# Pengantar Octave dan Lingkungan Kerja

## 1. Deskripsi Singkat

GNU Octave adalah perangkat lunak komputasi numerik yang menyediakan bahasa pemrograman tingkat tinggi, terutama cocok untuk komputasi ilmiah, aljabar linear, eksperimen numerik, dan pembelajaran dasar pemrograman numerik. Pada versi dokumentasi terbaru, Octave tersedia dalam GUI dan CLI. GUI-nya memuat IDE yang mencakup editor kode dengan syntax highlighting, debugger bawaan, browser dokumentasi, dan interpreter Octave itu sendiri.

Pada praktikum ini, mahasiswa akan mengenal antarmuka Octave, memahami cara menjalankan perintah dasar, mengelola direktori kerja, menggunakan bantuan dokumentasi, serta menulis dan menjalankan skrip sederhana `.m`.

---

## 2. Dasar Teori

### 2.1 Apa itu GNU Octave?

GNU Octave adalah bahasa dan lingkungan komputasi numerik bebas yang digunakan untuk menjalankan, menggunakan, dan mengembangkan program numerik.

### 2.2 Cara Menjalankan Octave

Secara umum Octave dapat dijalankan dengan:
- membuka GUI Octave dari menu aplikasi,
- membuka CLI dari terminal/shell,
- atau mengetik `octave` pada command shell.

Saat siap menerima input, Octave menampilkan prompt seperti `>>` atau `octave:1>`.

### 2.3 Komponen Lingkungan Kerja Octave

GUI Octave menyediakan IDE yang memuat:
- **Command Window** untuk menjalankan perintah secara interaktif,
- **Editor** untuk menulis skrip/fungsi,
- **Documentation Browser** untuk membaca bantuan,
- **Debugger** bawaan,
- **Command History** untuk melihat riwayat perintah,
- **File Browser** untuk menelusuri file,
- **Workspace** untuk memantau variabel yang aktif.

### 2.4 Bantuan dan Dokumentasi

Octave memiliki fasilitas bantuan yang kuat:
- `help nama_fungsi` menampilkan bantuan singkat suatu fungsi,
- `help --list` menampilkan operator, keyword, dan fungsi yang tersedia pada sesi saat itu,
- `doc nama_fungsi` membuka dokumentasi manual,
- `lookfor kata_kunci` mencari fungsi berdasarkan teks dokumentasinya,
- `news` menampilkan ringkasan hal baru pada rilis saat ini.

### 2.5 Direktori Kerja

Octave bekerja berdasarkan **current working directory**:
- `pwd` mengembalikan direktori kerja aktif,
- `cd folder_tujuan` berpindah ke folder lain,
- `dir` menampilkan isi direktori,
- `ls` juga menampilkan isi direktori.

### 2.6 Variabel dan Workspace

Di Octave, nama variabel harus terdiri atas huruf, digit, dan underscore, tetapi tidak boleh diawali digit. Untuk melihat variabel yang sedang ada di memori dapat digunakan `who` dan `whos`.

### 2.7 Riwayat Perintah dan Editing

Octave menggunakan GNU Readline untuk pengeditan command line dan riwayat perintah. Riwayat perintah terakhir dapat dipanggil kembali. Tab completion tersedia untuk melengkapi nama perintah dan variabel.

### 2.8 Skrip dan Fungsi Sederhana

Program Octave bisa ditulis langsung di Command Window untuk eksperimen cepat, atau disimpan pada file eksternal `.m`. Fungsi dapat didefinisikan langsung pada sesi interaktif maupun pada file eksternal, lalu dipanggil seperti fungsi bawaan.

---

## 3. Pengenalan Perintah Dasar Lingkungan Kerja

### 3.1 Perintah yang Sering Dipakai

- `pwd` : menampilkan direktori kerja aktif.
- `cd nama_folder` : berpindah ke folder lain.
- `dir` : menampilkan isi folder aktif.
- `ls` : menampilkan isi folder.
- `who` : menampilkan nama variabel yang ada di workspace.
- `whos` : menampilkan detail variabel di workspace.
- `help fungsi` : bantuan singkat sebuah fungsi.
- `help --list` : daftar operator, keyword, dan fungsi dalam sesi aktif.
- `doc fungsi` : membuka dokumentasi manual.
- `lookfor kata` : mencari fungsi berdasarkan kata kunci dokumentasi.
- `clc` : membersihkan layar terminal/command window.
- `diary on`, `diary off`, `diary nama_file` : merekam sesi interaktif ke file.

### 3.2 Perintah Menjalankan Octave dari Terminal

- `octave` : membuka sesi interaktif Octave.
- `octave nama_file.m` : menjalankan file skrip dan keluar setelah selesai.
- `octave --help` : menampilkan opsi startup yang tersedia.

---

## 4. Langkah Praktikum

### 4.1 Menjalankan Octave

1. Buka Octave dari menu aplikasi atau jalankan `octave` dari terminal.
2. Amati prompt `>>`.
3. Jika menggunakan GUI, perhatikan jendela:
   - Command Window
   - Editor
   - Command History
   - File Browser / Current Directory
   - Workspace

### 4.2 Mengenali Lingkungan Kerja

Di Command Window, jalankan:

```octave
pwd
who
clc
```

**Penjelasan:**
- `pwd` menampilkan folder kerja aktif.
- `who` menampilkan variabel yang sedang tersimpan di sesi.
- `clc` membersihkan layar agar tampilan lebih rapi.

### 4.3 Mencoba Bantuan Dokumentasi

Jalankan:

```octave
help plot
help --list
doc rand
lookfor matrix
```

**Penjelasan:**
- `help plot` memberi ringkasan fungsi `plot`.
- `help --list` menampilkan daftar fungsi/keyword yang tersedia.
- `doc rand` membuka manual pada entri `rand`.
- `lookfor matrix` mencari fungsi yang dokumentasinya berkaitan dengan kata `matrix`.

### 4.4 Mengelola Folder Kerja

Buat satu folder untuk praktikum, lalu pindah ke folder tersebut.

```octave
pwd
dir
cd pertemuan1
pwd
dir
```

**Penjelasan:**
- sebelum `cd`, cek lokasi awal dengan `pwd`;
- `dir` membantu memastikan file/folder yang tersedia;
- setelah pindah folder, gunakan `pwd` lagi untuk memastikan direktori aktif benar.

---

## 5. Contoh Kode dan Penjelasan

### 5.1 Contoh 1 — Operasi Dasar di Command Window

```octave
2 + 3
10 - 4
6 * 7
20 / 5
2 ^ 3
```

**Penjelasan kode:**
- `+` untuk penjumlahan
- `-` untuk pengurangan
- `*` untuk perkalian
- `/` untuk pembagian
- `^` untuk perpangkatan

Kode ini dijalankan langsung pada Command Window dan cocok untuk membiasakan mahasiswa dengan pola kerja interaktif Octave.

---

### 5.2 Contoh 2 — Menggunakan Variabel

```octave
a = 10;
b = 3;
jumlah = a + b
selisih = a - b
hasil_kali = a * b
hasil_bagi = a / b
```

**Penjelasan kode:**
- `a` dan `b` adalah variabel.
- Tanda `=` digunakan untuk memberi nilai.
- Tanda `;` menahan output agar tidak langsung ditampilkan.
- `jumlah`, `selisih`, `hasil_kali`, dan `hasil_bagi` adalah nama variabel hasil.

---

### 5.3 Contoh 3 — Mengecek Workspace

```octave
x = 12;
y = 5;
z = x * y;

who
whos
```

**Penjelasan kode:**
- `who` menampilkan daftar nama variabel.
- `whos` menampilkan detail yang lebih lengkap seperti ukuran dan tipe data variabel.

---

### 5.4 Contoh 4 — Membuat Skrip Sederhana

Buat file bernama `halo_octave.m`, lalu isi dengan:

```octave
clc;
identitas = "praktikan";
kode = "00000000";

disp("=== DATA PRAKTIKAN ===");
disp(["Identitas: ", identitas]);
disp(["Kode     : ", kode]);
```

**Penjelasan kode:**
- `clc` membersihkan layar.
- `disp(...)` digunakan untuk menampilkan teks.
- Skrip `.m` cocok digunakan untuk menyimpan rangkaian perintah yang akan dijalankan berulang.
- File seperti ini dapat dijalankan dari GUI atau lewat terminal menggunakan `octave halo_octave.m`.

---

### 5.5 Contoh 5 — Fungsi Sederhana dengan Dokumentasi Bantuan

Buat file `luas_persegi_panjang.m`:

```octave
function L = luas_persegi_panjang(p, l)
  % LUAS_PERSEGI_PANJANG Menghitung luas persegi panjang.
  %   L = LUAS_PERSEGI_PANJANG(p, l) menerima panjang p
  %   dan lebar l, lalu mengembalikan nilai luasnya.

  L = p * l;
endfunction
```

Lalu jalankan:

```octave
help luas_persegi_panjang
luas_persegi_panjang(8, 5)
```

**Penjelasan kode:**
- `function L = ...` mendefinisikan fungsi yang mengembalikan nilai `L`.
- Komentar pertama dipakai oleh `help` sebagai dokumentasi fungsi.
- `endfunction` menutup definisi fungsi.

---

## 6. Praktik Mandiri Terarah

Ikuti langkah berikut:

1. Jalankan Octave.
2. Periksa direktori aktif dengan `pwd`.
3. Pindah ke folder praktikum dengan `cd`.
4. Tampilkan isi folder dengan `dir`.
5. Buat variabel:
   ```octave
   identitas = "mahasiswa";
   angkatan = 2026;
   tinggi = 168;
   ```
6. Periksa variabel menggunakan `who` dan `whos`.
7. Cari bantuan fungsi `sin`, `plot`, dan `disp`.
8. Aktifkan diary:
   ```octave
   diary praktikum1_log.txt
   ```
9. Jalankan beberapa perintah latihan.
10. Matikan diary:
   ```octave
   diary off
   ```

**Tujuan kegiatan ini** adalah membiasakan mahasiswa dengan alur kerja Octave: membuka lingkungan, bekerja di direktori yang benar, menjalankan perintah, melihat workspace, lalu merekam sesi kerja.

---

## 7. Tugas Latihan

### 7.1 A. Latihan Pemahaman
Jawab pertanyaan berikut:

1. Apa perbedaan utama GUI dan CLI pada Octave?
2. Apa fungsi `pwd` dan `cd`?
3. Apa perbedaan `who` dan `whos`?
4. Mengapa `help` dan `doc` sama-sama penting?
5. Apa kegunaan `diary` dalam praktikum?

### 7.2 B. Latihan Perintah
Kerjakan di Octave:

1. Tampilkan direktori kerja aktif.
2. Tampilkan isi folder aktif.
3. Buat tiga variabel angka, lalu hitung rata-ratanya.
4. Tampilkan daftar semua variabel yang ada.
5. Cari dokumentasi fungsi `mean`.

Contoh jawaban untuk nomor 3:

```octave
a = 70;
b = 80;
c = 90;
rata_rata = (a + b + c) / 3
```

---

## 8. Tugas Praktikum

### 8.1 Judul
**Eksplorasi Lingkungan Kerja GNU Octave dan Pembuatan Skrip Dasar**

### 8.2 Tujuan
Mahasiswa mampu:
- menggunakan lingkungan kerja Octave dengan benar,
- mengelola direktori kerja,
- membuat skrip `.m`,
- membuat satu fungsi sederhana,
- menggunakan dokumentasi bawaan.

### 8.3 Instruksi Tugas
Buat folder dengan nama:

```text
praktikum_octave_mahasiswa
```

Di dalamnya, buat file berikut:

#### 1. File `identitas_praktikum.m`
Isi file harus:
- menampilkan judul praktikum,
- menampilkan identitas umum,
- menampilkan kode peserta,
- menampilkan kelas atau kelompok,
- menampilkan hasil operasi:
  - penjumlahan
  - pengurangan
  - perkalian
  - pembagian

Contoh kerangka:

```octave
clc;
disp("=== PRAKTIKUM 1: PENGANTAR OCTAVE ===");

identitas = "mahasiswa";
kode_peserta = "00000000";
kelas = "kelas_praktikum";

disp(["Identitas    : ", identitas]);
disp(["Kode Peserta : ", kode_peserta]);
disp(["Kelas        : ", kelas]);

a = 12;
b = 4;

disp(["a + b = ", num2str(a + b)]);
disp(["a - b = ", num2str(a - b)]);
disp(["a * b = ", num2str(a * b)]);
disp(["a / b = ", num2str(a / b)]);
```

#### 2. File fungsi `hitung_lingkaran.m`
Buat fungsi yang menerima jari-jari `r`, lalu menghasilkan:
- luas lingkaran
- keliling lingkaran

Contoh spesifikasi:
- input: `r`
- output: `L`, `K`

Kerangka:

```octave
function [L, K] = hitung_lingkaran(r)
  % HITUNG_LINGKARAN Menghitung luas dan keliling lingkaran.
  %   [L, K] = HITUNG_LINGKARAN(r) menerima jari-jari r.

  L = pi * r^2;
  K = 2 * pi * r;
endfunction
```

#### 3. File `uji_fungsi.m`
Gunakan file ini untuk menguji fungsi yang dibuat:

```octave
clc;
r = 7;
[L, K] = hitung_lingkaran(r);

disp(["Jari-jari = ", num2str(r)]);
disp(["Luas      = ", num2str(L)]);
disp(["Keliling  = ", num2str(K)]);
```

#### 4. Gunakan perintah dokumentasi
Di Command Window, jalankan:

```octave
help hitung_lingkaran
who
whos
pwd
dir
```

#### 5. Simpan log sesi praktikum
Gunakan:

```octave
diary log_praktikum1.txt
```

Jalankan pengujian, lalu akhiri dengan:

```octave
diary off
```

### 8.4 Luaran yang Dikumpulkan
Mahasiswa mengumpulkan:
1. file `identitas_praktikum.m`
2. file `hitung_lingkaran.m`
3. file `uji_fungsi.m`
4. file log `log_praktikum1.txt`
5. tangkapan layar hasil eksekusi

---

### 8.5 A. Aspek Penilaian
1. **Kebenaran struktur folder dan file** — 15%
2. **Kebenaran sintaks skrip** — 20%
3. **Kebenaran fungsi yang dibuat** — 20%
4. **Keberhasilan menjalankan dan menguji file** — 20%
5. **Pemanfaatan dokumentasi/help dan diary** — 10%
6. **Kerapian output dan dokumentasi komentar** — 15%

### 8.6 B. Rubrik Ringkas
- **Sangat baik**: semua file benar, fungsi berjalan, log tersedia, komentar rapi.
- **Baik**: ada kekurangan kecil tetapi program berjalan.
- **Cukup**: program sebagian berjalan, masih ada kesalahan sintaks/logika.
- **Kurang**: file tidak lengkap atau program tidak dapat dijalankan.

---

## 9. Ringkasan

Pada praktikum ini mahasiswa telah mempelajari:
- pengertian GNU Octave,
- cara menjalankan Octave melalui GUI atau CLI,
- komponen lingkungan kerja Octave,
- penggunaan `help`, `doc`, dan `lookfor`,
- penggunaan `pwd`, `cd`, `dir`, `ls`,
- penggunaan `who`, `whos`, `clc`, dan `diary`,
- pembuatan skrip dan fungsi sederhana `.m`.

Fondasi ini penting karena hampir semua praktik pemrograman dasar di Octave bertumpu pada kemampuan mengelola lingkungan kerja, membaca dokumentasi, dan menulis skrip yang dapat dijalankan ulang.

---

## 10. Referensi

1. GNU Octave Manual 11.1.0 — https://docs.octave.org/latest/
2. Introduction — https://docs.octave.org/latest/Introduction.html
3. Running Octave — https://docs.octave.org/latest/Running-Octave.html
4. Commands for Getting Help — https://docs.octave.org/latest/Getting-Help.html
5. Current Working Directory — https://docs.octave.org/latest/Current-Working-Directory.html
6. Status of Variables — https://docs.octave.org/latest/Status-of-Variables.html
7. Diary and Echo Commands — https://docs.octave.org/latest/Diary-and-Echo-Commands.html
8. Functions and Scripts — https://docs.octave.org/latest/Functions-and-Scripts.html
9. Comments and the Help System — https://docs.octave.org/latest/Comments-and-the-Help-System.html
10. Octave Workspace Windows — https://docs.octave.org/latest/Octave-Workspace-Windows.html
