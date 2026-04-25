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

### 7.1 Tugas Latihan

Kerjakan langsung di **Command Window Octave**. Untuk materi paling awal ini, latihan tidak perlu dibuat menjadi banyak file dan tidak perlu membuat folder baru.

1. Jalankan `pwd`, `who`, dan `clc`.
2. Tampilkan bantuan singkat untuk `disp` dan `mean` dengan `help`.
3. Buat tiga variabel angka, lalu hitung rata-ratanya.
4. Tampilkan daftar variabel dengan `who` dan detailnya dengan `whos`.
5. Aktifkan `diary`, jalankan beberapa perintah latihan, lalu matikan kembali dengan `diary off`.
6. Setelah praktik selesai, tulis jawaban singkat tentang:
   - perbedaan GUI dan CLI,
   - fungsi `pwd` dan `cd`,
   - perbedaan `who` dan `whos`,
   - kegunaan `help` atau `doc`,
   - kegunaan `diary`.

Contoh alur pengerjaan:

```octave
pwd
who
clc

help disp
help mean

a = 70;
b = 80;
c = 90;
rata_rata = (a + b + c) / 3

who
whos

diary log_latihan1.txt
disp("Latihan command window selesai.")
diary off
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
- menggunakan dokumentasi bawaan.

### 8.3 Instruksi Tugas
Buat **satu file script saja** bernama `praktikum_pengantar_octave.m`.

Ketentuan:
- tidak perlu membuat folder baru,
- tidak perlu memecah program menjadi beberapa file,
- seluruh bagian dikerjakan dalam satu script yang bisa langsung dijalankan.

Isi script harus memuat:
- judul praktikum dan identitas singkat,
- minimal dua variabel angka dan hasil operasi `+`, `-`, `*`, dan `/`,
- tampilan folder aktif dengan `pwd`,
- tampilan daftar variabel dengan `who` atau `whos`,
- pesan penutup bahwa praktikum selesai dijalankan.

Contoh kerangka:

```octave
clc;
format default;

disp("=== PRAKTIKUM 1: PENGANTAR OCTAVE ===");

nama = "mahasiswa";
nim = "00000000";
kelas = "kelas_praktikum";

a = 12;
b = 4;
folder_aktif = pwd;

disp(["Nama   : ", nama]);
disp(["NIM    : ", nim]);
disp(["Kelas  : ", kelas]);
disp(["Folder : ", folder_aktif]);
disp(" ");

disp("=== OPERASI DASAR ===");
disp(["a + b = ", num2str(a + b)]);
disp(["a - b = ", num2str(a - b)]);
disp(["a * b = ", num2str(a * b)]);
disp(["a / b = ", num2str(a / b)]);
disp(" ");

disp("=== DAFTAR VARIABEL ===");
who
whos

disp("Praktikum selesai dijalankan.");
```

### 8.4 Luaran yang Dikumpulkan
Mahasiswa mengumpulkan:
1. file `praktikum_pengantar_octave.m`
2. tangkapan layar hasil eksekusi
3. file log praktikum bila diminta pengampu

---

### 8.5 A. Aspek Penilaian
1. **Kebenaran isi script dan sintaks** — 25%
2. **Pemakaian perintah dasar Octave** — 20%
3. **Keberhasilan menjalankan script** — 20%
4. **Kerapian output** — 20%
5. **Pemahaman penggunaan `help`, `who`, `whos`, dan `diary`** — 15%

### 8.6 B. Rubrik Ringkas
- **Sangat baik**: script lengkap, semua bagian berjalan, output rapi.
- **Baik**: ada kekurangan kecil tetapi script dapat dijalankan.
- **Cukup**: script sebagian berjalan, masih ada kesalahan kecil.
- **Kurang**: script tidak lengkap atau tidak dapat dijalankan.

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
