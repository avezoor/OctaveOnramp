# Perulangan `for`, `while`, `do-until`, `break`, dan `continue`

## 1. Deskripsi Singkat

Perulangan adalah struktur kontrol yang digunakan untuk mengeksekusi blok perintah secara berulang. Dalam GNU Octave, bentuk perulangan yang umum digunakan adalah `for`, `while`, dan `do-until`. Selain itu, Octave juga menyediakan perintah `break` untuk menghentikan loop lebih awal dan `continue` untuk melewati sisa perintah pada iterasi tertentu lalu langsung lanjut ke iterasi berikutnya.

Materi ini penting karena banyak permasalahan pemrograman dasar, komputasi numerik, pengolahan data, dan simulasi sederhana membutuhkan proses yang dilakukan berulang kali.

---

## 2. Dasar Teori

### 2.1 Konsep Perulangan

Perulangan dipakai saat suatu blok perintah perlu dijalankan lebih dari satu kali. Secara umum, perulangan dipakai untuk:

- menampilkan deret nilai,
- menjumlahkan atau menghitung akumulasi,
- memproses elemen vektor atau matriks,
- melakukan pencarian data,
- mengulangi proses sampai syarat tertentu terpenuhi.

Dalam Octave, setiap struktur kontrol memiliki penutup blok. Octave memperbolehkan penggunaan `end`, tetapi kata penutup yang lebih spesifik seperti `endfor`, `endwhile`, dan `endif` lebih disarankan karena membantu diagnosis jika ada kesalahan pasangan blok.

---

### 2.2 Perulangan `for`

Perulangan `for` digunakan ketika banyak iterasi sudah diketahui atau dapat ditentukan dari himpunan nilai tertentu.

### 2.3 Bentuk umum

```octave
for variabel = ekspresi
  pernyataan
endfor
```

`ekspresi` dapat berupa:
- range, misalnya `1:5`,
- vektor, misalnya `[2 4 6 8]`,
- hasil ekspresi lain yang menghasilkan sekumpulan nilai.

Pada setiap iterasi, `variabel` akan diisi oleh satu nilai dari ekspresi tersebut.

### 2.4 Contoh 1

```octave
for i = 1:5
  disp(i)
endfor
```

### 2.5 Penjelasan

- `i = 1:5` berarti `i` akan bernilai 1, 2, 3, 4, dan 5.
- `disp(i)` menampilkan nilai `i` pada setiap iterasi.

### 2.6 Contoh 2

```octave
jumlah = 0;
for i = 1:10
  jumlah = jumlah + i;
endfor

disp(jumlah)
```

### 2.7 Penjelasan

Program di atas menghitung jumlah bilangan 1 sampai 10.

- nilai awal `jumlah` adalah 0,
- pada setiap iterasi, nilai `i` ditambahkan ke `jumlah`,
- hasil akhirnya adalah 55.

---

### 2.8 Perulangan `while`

Perulangan `while` digunakan jika jumlah iterasi belum pasti, tetapi proses akan terus dilakukan selama kondisi bernilai benar.

### 2.9 Bentuk umum

```octave
while (kondisi)
  pernyataan
endwhile
```

### 2.10 Contoh 1

```octave
i = 1;
while (i <= 5)
  disp(i)
  i = i + 1;
endwhile
```

### 2.11 Penjelasan

- loop dimulai dengan `i = 1`,
- selama `i <= 5`, isi loop dijalankan,
- `i = i + 1` penting agar kondisi berubah,
- tanpa perubahan nilai `i`, loop bisa menjadi tak berhingga.

### 2.12 Contoh 2

```octave
nilai = 1;
while (nilai < 100)
  nilai = nilai * 2;
  disp(nilai)
endwhile
```

### 2.13 Penjelasan

Program akan terus mengalikan `nilai` dengan 2 sampai nilainya tidak lagi kurang dari 100.

---

### 2.14 Perulangan `do-until`

`do-until` mirip dengan `while`, tetapi pemeriksaan kondisi dilakukan **di akhir** loop. Karena itu, isi loop **pasti dijalankan minimal satu kali**.

### 2.15 Bentuk umum

```octave
do
  pernyataan
until (kondisi)
```

Perulangan akan terus berjalan **sampai kondisi bernilai benar**.

### 2.16 Contoh 1

```octave
i = 1;
do
  disp(i)
  i = i + 1;
until (i > 5)
```

### 2.17 Penjelasan

- isi loop dijalankan dulu,
- setelah itu kondisi `i > 5` diperiksa,
- jika kondisi belum benar, loop berulang lagi,
- hasil tampilan adalah 1 sampai 5.

### 2.18 Contoh 2

```octave
angka = 10;
do
  disp(angka)
  angka = angka - 3;
until (angka <= 0)
```

### 2.19 Penjelasan

Perintah dijalankan terus hingga `angka <= 0` bernilai benar.

---

### 2.20 Pernyataan `break`

`break` digunakan untuk menghentikan loop sebelum kondisi normalnya selesai.

### 2.21 Bentuk umum

```octave
while (kondisi)
  if (syarat_berhenti)
    break;
  endif
endwhile
```

### 2.22 Contoh

```octave
for i = 1:10
  if (i == 6)
    break;
  endif
  disp(i)
endfor
```

### 2.23 Penjelasan

- loop seharusnya berjalan dari 1 sampai 10,
- saat `i == 6`, perintah `break` dijalankan,
- loop berhenti,
- hasil yang tampil hanya 1 sampai 5.

---

### 2.24 Pernyataan `continue`

`continue` digunakan untuk melewati sisa perintah dalam iterasi saat ini dan langsung lanjut ke iterasi berikutnya.

### 2.25 Contoh

```octave
for i = 1:10
  if (rem(i, 2) != 0)
    continue;
  endif
  disp(i)
endfor
```

### 2.26 Penjelasan

- `rem(i, 2) != 0` berarti bilangan ganjil,
- saat kondisi benar, `continue` dijalankan,
- baris `disp(i)` dilewati,
- yang ditampilkan hanya bilangan genap: 2, 4, 6, 8, 10.

---

### 2.27 Kapan Menggunakan `for`, `while`, dan `do-until`

| Struktur | Kapan digunakan | Ciri utama |
|---|---|---|
| `for` | Jumlah iterasi sudah diketahui | Iterasi berdasarkan range/vektor |
| `while` | Jumlah iterasi belum pasti | Berjalan selama kondisi benar |
| `do-until` | Blok harus dijalankan minimal sekali | Kondisi dicek di akhir |

---

## 3. Contoh Kode dan Pembahasan

### 3.1 Menampilkan Deret Bilangan dengan `for`

```octave
clc;
for i = 1:2:9
  fprintf("Nilai i = %d\n", i);
endfor
```

### 3.2 Pembahasan

- `1:2:9` berarti mulai dari 1, naik 2 setiap iterasi, sampai 9,
- nilai `i` adalah 1, 3, 5, 7, 9,
- `fprintf` digunakan untuk menampilkan output dengan format tertentu.

---

### 3.3 Menjumlahkan Bilangan dengan `while`

```octave
clc;
i = 1;
jumlah = 0;

while (i <= 5)
  jumlah = jumlah + i;
  i = i + 1;
endwhile

fprintf("Jumlah = %d\n", jumlah);
```

### 3.4 Pembahasan

Program menjumlahkan bilangan 1 sampai 5.

Prosesnya:
- iterasi 1: jumlah = 1
- iterasi 2: jumlah = 3
- iterasi 3: jumlah = 6
- iterasi 4: jumlah = 10
- iterasi 5: jumlah = 15

---

### 3.5 Menu Sederhana dengan `do-until`

```octave
clc;
pilihan = 0;

do
  disp("=== MENU ===");
  disp("1. Tampilkan pesan");
  disp("2. Keluar");
  pilihan = input("Masukkan pilihan: ");

  if (pilihan == 1)
    disp("Praktikum Octave berjalan.");
  endif
until (pilihan == 2)
```

### 3.6 Pembahasan

`do-until` cocok untuk menu karena isi blok harus dijalankan dulu minimal satu kali sebelum keputusan berhenti diambil.

---

### 3.7 Menghentikan Pencarian dengan `break`

```octave
clc;
data = [4, 7, 10, 13, 20];
target = 13;
ketemu = 0;

for i = 1:length(data)
  if (data(i) == target)
    ketemu = 1;
    indeks = i;
    break;
  endif
endfor

if (ketemu == 1)
  fprintf("Data ditemukan pada indeks ke-%d\n", indeks);
else
  disp("Data tidak ditemukan.");
endif
```

### 3.8 Pembahasan

Begitu nilai target ditemukan, loop langsung dihentikan. Ini membuat program lebih efisien dibanding tetap memeriksa elemen berikutnya.

---

### 3.9 Menyaring Data dengan `continue`

```octave
clc;
for i = 1:10
  if (i == 4 || i == 7)
    continue;
  endif
  fprintf("Bilangan: %d\n", i);
endfor
```

### 3.10 Pembahasan

- saat `i = 4` atau `i = 7`, output dilewati,
- iterasi berikutnya tetap berjalan,
- bilangan 4 dan 7 tidak ditampilkan.

---

## 4. Langkah Praktikum

Ikuti langkah berikut secara berurutan.

### 4.1 Langkah 1 — Membuat script `latihan_for.m`

Isi file:

```octave
clc;
for i = 1:10
  fprintf("Iterasi ke-%d\n", i);
endfor
```

Jalankan script dan amati hasilnya.

---

### 4.2 Langkah 2 — Membuat script `latihan_while.m`

Isi file:

```octave
clc;
i = 1;
while (i <= 10)
  fprintf("Nilai i = %d\n", i);
  i = i + 1;
endwhile
```

Jalankan dan bandingkan hasilnya dengan `for`.

---

### 4.3 Langkah 3 — Membuat script `latihan_do_until.m`

Isi file:

```octave
clc;
i = 1;
do
  fprintf("Perulangan ke-%d\n", i);
  i = i + 1;
until (i > 5)
```

Amati bahwa isi loop dijalankan dulu sebelum kondisi dicek.

---

### 4.4 Langkah 4 — Membuat script `latihan_break_continue.m`

Isi file:

```octave
clc;
for i = 1:10
  if (i == 8)
    break;
  endif

  if (i == 3 || i == 5)
    continue;
  endif

  fprintf("Nilai yang ditampilkan: %d\n", i);
endfor
```

Analisis:
- kenapa angka 3 dan 5 tidak muncul,
- kenapa loop berhenti saat mencapai 8.

---

## 5. Tugas Latihan

### 5.1 Tugas Latihan

Kerjakan soal berikut di Octave.

1. Buat program dengan `for` untuk menampilkan kuadrat bilangan 1 sampai 10.
2. Buat program dengan `while` untuk menghitung jumlah bilangan genap dari 2 sampai 20.
3. Buat program dengan `do-until` untuk menampilkan bilangan dari 10 turun ke 1.
4. Buat program yang menampilkan bilangan 1 sampai 20, tetapi melewati bilangan kelipatan 3 menggunakan `continue`.
5. Buat program yang mencari bilangan pertama antara 1 sampai 100 yang habis dibagi 17 dan gunakan `break`.

---

## 6. Tugas Praktikum

### 6.1 Judul
**Simulasi Penggunaan Perulangan pada Octave**

### 6.2 Tujuan
Praktikan dapat membuat program yang memanfaatkan `for`, `while`, `do-until`, `break`, dan `continue` dalam satu studi kasus sederhana.

### 6.3 Instruksi

Buat satu file bernama `praktikum_perulangan.m` yang memenuhi ketentuan berikut.

Isi script harus memuat:
- bilangan 1 sampai 15 beserta kuadratnya dengan `for`,
- penjumlahan bilangan 1 sampai 50 dengan `while`,
- menu sederhana berulang dengan `do-until`,
- contoh `continue` untuk melewati bilangan tertentu,
- contoh `break` untuk menghentikan pencarian saat kondisi terpenuhi.

Contoh format output bagian `for`:

```text
1 -> 1
2 -> 4
3 -> 9
...
```

### 6.4 Luaran yang Dikumpulkan

1. `praktikum_perulangan.m`
2. tangkapan layar hasil eksekusi

---

## 11. Ringkasan

Pada modul ini telah dipelajari:

- `for` untuk iterasi dengan jumlah yang sudah diketahui,
- `while` untuk iterasi selama kondisi benar,
- `do-until` untuk iterasi yang dijalankan minimal sekali,
- `break` untuk menghentikan loop,
- `continue` untuk melewati satu iterasi.

Pemahaman terhadap kelima konsep ini sangat penting karena hampir semua program dasar yang melibatkan pengolahan data, pencarian, akumulasi, dan validasi input memerlukan perulangan.

---

## 12. Referensi

1. GNU Octave Manual 11.1.0 — https://docs.octave.org/latest/
2. Statements — https://docs.octave.org/latest/Statements.html
3. The for Statement — https://docs.octave.org/latest/The-for-Statement.html
4. The while Statement — https://docs.octave.org/latest/The-while-Statement.html
5. The do-until Statement — https://docs.octave.org/latest/The-do_002duntil-Statement.html
6. The break Statement — https://docs.octave.org/latest/The-break-Statement.html
7. The continue Statement — https://docs.octave.org/latest/The-continue-Statement.html
8. Boolean Expressions — https://docs.octave.org/latest/Boolean-Expressions.html
