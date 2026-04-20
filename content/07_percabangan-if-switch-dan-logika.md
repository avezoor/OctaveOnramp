# Percabangan `if`, `switch`, dan Operator Logika

## 1. Deskripsi Singkat

Pada praktikum ini mahasiswa mempelajari cara membuat keputusan di dalam program menggunakan struktur percabangan `if`, `elseif`, `else`, dan `switch`. Selain itu, mahasiswa juga mempelajari operator logika yang digunakan untuk menyusun kondisi, baik operator logika element-wise seperti `&`, `|`, `!` maupun operator short-circuit seperti `&&` dan `||`.

Materi ini penting karena hampir semua program membutuhkan proses pengambilan keputusan, misalnya menentukan apakah sebuah nilai lulus atau tidak, memilih menu tertentu, atau menampilkan keluaran berdasarkan kategori masukan.

---

## 2. Dasar Teori

### 2.1 Konsep Percabangan

Percabangan adalah struktur kontrol yang memungkinkan program memilih aksi yang berbeda berdasarkan hasil evaluasi kondisi tertentu. Dalam Octave, percabangan utama yang umum digunakan adalah:

- `if`
- `elseif`
- `else`
- `switch`
- `case`
- `otherwise`

Percabangan digunakan ketika program tidak selalu menjalankan langkah yang sama untuk semua input.

Contoh kebutuhan percabangan:
- mengecek apakah nilai ujian lulus,
- menentukan bilangan positif, negatif, atau nol,
- memilih menu berdasarkan kode,
- menentukan kategori nilai.

---

### 2.2 Struktur `if`

Struktur `if` digunakan ketika program harus mengevaluasi sebuah kondisi logis. Jika kondisi bernilai benar, maka blok perintah dijalankan.

Bentuk umum:

```octave
if (kondisi)
  perintah
endif
```

Jika diperlukan lebih dari satu kemungkinan, dapat digunakan `elseif` dan `else`.

Bentuk umum lengkap:

```octave
if (kondisi_1)
  perintah_1
elseif (kondisi_2)
  perintah_2
else
  perintah_lain
endif
```

---

### 2.3 Struktur `switch`

Struktur `switch` digunakan saat program harus memilih aksi berdasarkan nilai suatu ekspresi. Struktur ini lebih rapi dibanding `if` bertingkat jika pilihan bergantung pada satu variabel yang sama.

Bentuk umum:

```octave
switch (ekspresi)
  case nilai_1
    perintah_1
  case nilai_2
    perintah_2
  otherwise
    perintah_lain
endswitch
```

`otherwise` bersifat opsional, tetapi sangat disarankan agar program tetap memiliki keluaran bila tidak ada `case` yang cocok.

Pada Octave, `switch` juga mendukung label string dan kumpulan label menggunakan cell array.

---

### 2.4 Operator Perbandingan

Sebelum menggunakan percabangan, program biasanya memakai operator perbandingan untuk menghasilkan nilai logika.

| Operator | Makna |
|---|---|
| `==` | sama dengan |
| `~=` | tidak sama dengan |
| `>` | lebih besar |
| `<` | lebih kecil |
| `>=` | lebih besar atau sama dengan |
| `<=` | lebih kecil atau sama dengan |

Hasil dari operator perbandingan adalah nilai logika, yaitu benar atau salah.

Contoh:

```octave
7 > 3
5 == 5
8 ~= 2
```

---

### 2.5 Operator Logika

Operator logika digunakan untuk menggabungkan dua atau lebih kondisi.

#### a. Operator logika element-wise

| Operator | Makna |
|---|---|
| `&` | AND |
| `|` | OR |
| `!` atau `~` | NOT |

Operator ini bekerja per elemen dan dapat digunakan pada skalar maupun array.

Contoh:

```octave
(7 > 3) & (5 < 10)
(2 > 9) | (4 == 4)
!(3 == 3)
```

#### b. Operator short-circuit

| Operator | Makna |
|---|---|
| `&&` | AND short-circuit |
| `||` | OR short-circuit |

Operator short-circuit biasanya dipakai untuk kondisi skalar pada `if` dan `while`. Evaluasi dapat berhenti lebih awal ketika hasil akhir sudah dapat ditentukan.

Contoh:

```octave
(5 > 2) && (10 > 3)
(4 < 1) || (8 == 8)
```

---

### 2.6 Perbedaan `&` dengan `&&`, serta `|` dengan `||`

Perbedaan utamanya:

- `&` dan `|` mengevaluasi kedua sisi ekspresi.
- `&&` dan `||` dapat berhenti lebih cepat jika hasil sudah pasti.
- `&` dan `|` umum dipakai untuk operasi element-wise pada array.
- `&&` dan `||` lebih aman dipakai untuk kondisi tunggal pada percabangan.

Contoh sederhana:

```octave
a = 0;
b = 5;

(a ~= 0) && (b / a > 1)
```

Pada contoh di atas, bagian kedua tidak perlu dievaluasi jika bagian pertama sudah salah. Inilah manfaat short-circuit.

---

### 2.7 Catatan Penting Sintaks Octave

1. Gunakan `elseif`, bukan `else if`.
2. Gunakan penutup yang sesuai seperti `endif` dan `endswitch` agar kode lebih jelas.
3. Tulis indentasi dengan rapi agar blok program mudah dipahami.
4. `switch` pada Octave tidak menggunakan fall-through seperti pada bahasa C.

---

## 3. Sintaks Dasar dan Contoh Singkat

### 3.1 `if` tunggal

```octave
nilai = 80;

if (nilai >= 75)
  disp("Lulus");
endif
```

### 3.2 `if - else`

```octave
nilai = 65;

if (nilai >= 75)
  disp("Lulus");
else
  disp("Tidak lulus");
endif
```

### 3.3 `if - elseif - else`

```octave
nilai = 88;

if (nilai >= 85)
  disp("Grade A");
elseif (nilai >= 70)
  disp("Grade B");
elseif (nilai >= 60)
  disp("Grade C");
else
  disp("Grade D");
endif
```

### 3.4 `switch`

```octave
menu = 2;

switch (menu)
  case 1
    disp("Input data");
  case 2
    disp("Proses data");
  case 3
    disp("Tampilkan hasil");
  otherwise
    disp("Pilihan tidak tersedia");
endswitch
```

### 3.5 `switch` dengan string

```octave
hari = "senin";

switch (hari)
  case "senin"
    disp("Awal pekan");
  case "jumat"
    disp("Akhir pekan kerja");
  otherwise
    disp("Hari biasa");
endswitch
```

---

## 4. Contoh Kode dan Penjelasan

### 4.1 Contoh 1 — Menentukan Bilangan Positif, Negatif, atau Nol

```octave
bilangan = -4;

if (bilangan > 0)
  disp("Bilangan positif");
elseif (bilangan < 0)
  disp("Bilangan negatif");
else
  disp("Bilangan nol");
endif
```

**Penjelasan kode:**
- Kondisi pertama memeriksa apakah nilai lebih besar dari 0.
- Kondisi kedua memeriksa apakah nilai lebih kecil dari 0.
- Jika dua kondisi tersebut tidak terpenuhi, maka nilai pasti 0.

---

### 4.2 Contoh 2 — Menentukan Status Kelulusan dengan Operator Logika

```octave
nilai_akhir = 78;
kehadiran = 85;

if (nilai_akhir >= 75) && (kehadiran >= 80)
  disp("Lulus");
else
  disp("Tidak lulus");
endif
```

**Penjelasan kode:**
- Mahasiswa dinyatakan lulus jika dua syarat terpenuhi sekaligus.
- Operator `&&` berarti kedua kondisi harus bernilai benar.

---

### 4.3 Contoh 3 — Menentukan Kategori Usia

```octave
usia = 19;

if (usia < 12)
  disp("Kategori anak");
elseif (usia < 18)
  disp("Kategori remaja");
elseif (usia < 60)
  disp("Kategori dewasa");
else
  disp("Kategori lansia");
endif
```

**Penjelasan kode:**
- Program mengevaluasi dari atas ke bawah.
- Saat satu kondisi benar, blok berikutnya tidak diperiksa lagi.

---

### 4.4 Contoh 4 — Penggunaan `switch` untuk Menu

```octave
pilihan = 3;

switch (pilihan)
  case 1
    disp("Menambah data");
  case 2
    disp("Mengubah data");
  case 3
    disp("Menghapus data");
  otherwise
    disp("Pilihan tidak valid");
endswitch
```

**Penjelasan kode:**
- `switch` memeriksa nilai `pilihan`.
- Jika nilainya sama dengan salah satu `case`, maka perintah pada `case` tersebut dijalankan.
- Jika tidak ada yang cocok, maka `otherwise` dijalankan.

---

### 4.5 Contoh 5 — `switch` dengan Banyak Label

```octave
kode = 7;

switch (kode)
  case {6, 7}
    disp("Kode termasuk kelompok A");
  case {8, 9}
    disp("Kode termasuk kelompok B");
  otherwise
    disp("Kode tidak dikenal");
endswitch
```

**Penjelasan kode:**
- Satu `case` dapat menampung beberapa kemungkinan nilai.
- Jika `kode` adalah `6` atau `7`, program tetap masuk ke blok yang sama.

---

### 4.6 Contoh 6 — Operator `&` dan `|`

```octave
a = 8;
b = 5;

hasil1 = (a > 3) & (b < 10)
hasil2 = (a < 2) | (b == 5)
```

**Penjelasan kode:**
- `hasil1` bernilai benar karena dua kondisi sama-sama benar.
- `hasil2` bernilai benar karena salah satu kondisi benar.

---

### 4.7 Contoh 7 — Operator `!`

```octave
status = (10 > 3);
hasil = !status
```

**Penjelasan kode:**
- `status` bernilai benar.
- `!status` membalik nilai benar menjadi salah.

---

## 5. Langkah Praktikum

### 5.1 Praktik 1 — Menguji Operator Perbandingan

Jalankan perintah berikut di Command Window:

```octave
7 > 3
5 == 2
9 ~= 4
6 <= 6
```

Amati hasil yang ditampilkan.

---

### 5.2 Praktik 2 — Membuat Percabangan `if`

Ketik dan jalankan skrip berikut:

```octave
nilai = 72;

if (nilai >= 75)
  disp("Lulus");
else
  disp("Tidak lulus");
endif
```

Ubah nilai variabel `nilai` beberapa kali, lalu amati hasilnya.

---

### 5.3 Praktik 3 — Membuat Percabangan Bertingkat

```octave
nilai = 91;

if (nilai >= 85)
  disp("Predikat A");
elseif (nilai >= 75)
  disp("Predikat B");
elseif (nilai >= 60)
  disp("Predikat C");
else
  disp("Predikat D");
endif
```

---

### 5.4 Praktik 4 — Menggunakan `switch`

```octave
pilihan = 2;

switch (pilihan)
  case 1
    disp("Menu 1 dipilih");
  case 2
    disp("Menu 2 dipilih");
  case 3
    disp("Menu 3 dipilih");
  otherwise
    disp("Pilihan di luar menu");
endswitch
```

Ganti nilai `pilihan` menjadi 1, 2, 3, dan 4.

---

### 5.5 Praktik 5 — Menggunakan Operator Logika

```octave
nilai_tugas = 80;
nilai_ujian = 70;

if (nilai_tugas >= 75) && (nilai_ujian >= 75)
  disp("Lulus langsung");
elseif (nilai_tugas >= 75) || (nilai_ujian >= 75)
  disp("Perlu evaluasi tambahan");
else
  disp("Tidak lulus");
endif
```

---

## 6. Tugas Latihan

### 6.1 A. Latihan Konsep

Jawab pertanyaan berikut:

1. Apa perbedaan `if` dan `switch`?
2. Kapan `switch` lebih tepat digunakan dibanding `if` bertingkat?
3. Apa fungsi `otherwise` pada `switch`?
4. Apa perbedaan `&` dengan `&&`?
5. Mengapa `elseif` tidak boleh ditulis `else if` pada Octave?

---

### 6.2 B. Latihan Kode

Kerjakan menggunakan Octave.

#### Soal 1
Buat program untuk menentukan apakah sebuah bilangan:
- positif,
- negatif,
- atau nol.

#### Soal 2
Buat program untuk menentukan grade berdasarkan ketentuan berikut:
- `>= 85` → A
- `>= 75` → B
- `>= 65` → C
- `< 65` → D

#### Soal 3
Buat program menggunakan `switch` untuk menampilkan nama hari berdasarkan kode:
- 1 = Senin
- 2 = Selasa
- 3 = Rabu
- 4 = Kamis
- 5 = Jumat
- selain itu tampilkan pesan bahwa kode tidak valid.

#### Soal 4
Buat program untuk menentukan apakah seseorang memenuhi syarat mengikuti ujian susulan jika:
- kehadiran minimal 75, **atau**
- memiliki surat keterangan.

Gunakan operator logika.

#### Soal 5
Buat program untuk mengecek apakah sebuah bilangan berada di antara 10 dan 100.

---

## 7. Tugas Praktikum

### 7.1 Judul
**Pembuatan Program Percabangan Dasar pada Octave**

### 7.2 Tujuan
Mahasiswa mampu membuat skrip yang menggunakan:
- `if`, `elseif`, `else`,
- `switch`,
- operator logika,
- dan menampilkan output yang informatif.

### 7.3 Instruksi Tugas

Buat folder kerja dengan nama:

```text
praktikum_percabangan_octave
```

Di dalam folder tersebut, buat file berikut.

---

### 7.4 1. File `cek_nilai.m`

Buat program yang menerima nilai angka melalui variabel, lalu menampilkan:
- "Nilai A"
- "Nilai B"
- "Nilai C"
- "Nilai D"

Gunakan `if`, `elseif`, dan `else`.

Contoh kerangka:

```octave
clc;
nilai = 78;

if (nilai >= 85)
  disp("Nilai A");
elseif (nilai >= 75)
  disp("Nilai B");
elseif (nilai >= 65)
  disp("Nilai C");
else
  disp("Nilai D");
endif
```

---

### 7.5 2. File `cek_kategori.m`

Buat program menggunakan `switch` untuk memilih kategori berdasarkan kode berikut:
- 1 = Makanan
- 2 = Minuman
- 3 = Alat Tulis
- 4 = Buku
- selain itu = Kategori tidak tersedia

Contoh kerangka:

```octave
clc;
kode = 2;

switch (kode)
  case 1
    disp("Kategori Makanan");
  case 2
    disp("Kategori Minuman");
  case 3
    disp("Kategori Alat Tulis");
  case 4
    disp("Kategori Buku");
  otherwise
    disp("Kategori tidak tersedia");
endswitch
```

---

### 7.6 3. File `cek_kelayakan.m`

Buat program untuk menentukan kelayakan mengikuti praktikum lanjutan dengan syarat:
- nilai teori minimal 70,
- dan kehadiran minimal 80.

Jika dua syarat terpenuhi, tampilkan pesan layak. Jika tidak, tampilkan pesan belum layak.

Contoh kerangka:

```octave
clc;
nilai_teori = 75;
kehadiran = 90;

if (nilai_teori >= 70) && (kehadiran >= 80)
  disp("Layak mengikuti praktikum lanjutan");
else
  disp("Belum layak mengikuti praktikum lanjutan");
endif
```

---

### 7.7 4. File `cek_diskon.m`

Buat program untuk menentukan diskon belanja dengan aturan:
- total belanja >= 500000 dan member → diskon 20%
- total belanja >= 500000 dan bukan member → diskon 10%
- total belanja < 500000 → tidak ada diskon

Gunakan `if` bertingkat atau kombinasi operator logika.

---

### 7.8 5. Dokumentasi Hasil

Setiap file harus:
- dapat dijalankan tanpa error,
- memiliki komentar singkat di awal file,
- menampilkan output yang jelas.

Mahasiswa juga diminta membuat satu file laporan singkat berisi:
- nama file,
- tujuan file,
- contoh input,
- hasil output.

---

## 8. Format Pengumpulan

Mahasiswa mengumpulkan:

1. `cek_nilai.m`
2. `cek_kategori.m`
3. `cek_kelayakan.m`
4. `cek_diskon.m`
5. satu file laporan singkat dalam format `.md` atau `.pdf`
6. tangkapan layar hasil eksekusi program

---

## 9. Ringkasan

Pada praktikum ini mahasiswa telah mempelajari:
- percabangan `if`, `elseif`, dan `else`,
- percabangan `switch`, `case`, dan `otherwise`,
- operator perbandingan,
- operator logika `&`, `|`, `!`, `&&`, dan `||`,
- penerapan percabangan dalam skrip Octave sederhana.

Kemampuan membuat keputusan di dalam program merupakan dasar penting sebelum mempelajari perulangan, fungsi, dan pemrosesan data yang lebih kompleks.

---

## 10. Referensi

1. GNU Octave Manual 11.1.0 — https://docs.octave.org/latest/
2. The if Statement — https://docs.octave.org/latest/The-if-Statement.html
3. The switch Statement — https://docs.octave.org/latest/The-switch-Statement.html
4. Boolean Expressions — https://docs.octave.org/latest/Boolean-Expressions.html
5. Short-circuit Boolean Operators — https://docs.octave.org/latest/Short_002dcircuit-Boolean-Operators.html
