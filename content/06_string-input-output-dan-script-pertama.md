# String, Input/Output, dan Script Pertama

## 1. Deskripsi Singkat

Pada praktikum ini, peserta mempelajari tiga hal penting dalam pemrograman dasar Octave, yaitu **string**, **input/output**, dan **script pertama**. String digunakan untuk menyimpan teks, input dipakai untuk menerima data dari pengguna, output dipakai untuk menampilkan hasil, dan script dipakai untuk menyimpan rangkaian perintah di dalam file `.m` agar dapat dijalankan kembali.

Berdasarkan dokumentasi resmi terbaru, manual saat ini sesuai dengan **GNU Octave 11.1.0**. Dokumentasi resmi juga menjelaskan bahwa string di Octave dapat memiliki panjang berapa pun, penggunaan tanda kutip ganda direkomendasikan untuk string, fungsi `input` dapat membaca nilai maupun string literal, dan file script berisi urutan perintah yang dievaluasi seperti saat diketik langsung pada prompt Octave.

---

## 2. Dasar Teori

### 2.1 String pada Octave

String adalah data yang berisi teks. Dalam dokumentasi Octave terbaru dijelaskan bahwa string dapat memiliki panjang berapa pun. Karena tanda petik tunggal juga dipakai untuk operator transpose, dokumentasi resmi menyarankan penggunaan **tanda petik ganda** untuk menuliskan string.

Contoh string:

```octave
judul = "Praktikum Octave";
keterangan = "Latihan string";
```

String juga dapat digabungkan dengan notasi pembentukan matriks/array karakter, misalnya:

```octave
teks = ["Halo", " ", "Octave"];
```

Hasilnya adalah string:

```text
Halo Octave
```

### 2.2 Input pada Octave

Octave menyediakan fungsi `input` untuk membaca masukan dari pengguna. Jika `input` dipanggil biasa, data yang dimasukkan akan dievaluasi sebagai ekspresi Octave. Jika ingin membaca **teks literal**, gunakan argumen kedua berupa string `"s"`.

Contoh input numerik:

```octave
nilai = input("Masukkan nilai: ");
```

Contoh input string:

```octave
nama_file = input("Masukkan nama file: ", "s");
```

### 2.3 Output pada Octave

Untuk menampilkan keluaran ke layar, Octave menyediakan beberapa fungsi penting.

#### a. `disp`
`disp(x)` menampilkan isi variabel tanpa menampilkan nama variabel. Fungsi ini selalu menambahkan baris baru di akhir output.

Contoh:

```octave
disp("Selamat datang di Octave")
```

#### b. `printf`
`printf` menampilkan output terformat ke layar menggunakan template string.

Contoh:

```octave
nilai = 85;
printf("Nilai akhir = %d\n", nilai)
```

#### c. `fprintf`
`fprintf` serupa dengan `printf`, tetapi juga dapat menulis ke file jika diberikan file identifier.

Contoh sederhana ke layar:

```octave
panjang = 12;
fprintf("Panjang = %d\n", panjang)
```

#### d. `sprintf`
`sprintf` tidak langsung menampilkan hasil ke layar, tetapi mengembalikan string yang sudah diformat.

Contoh:

```octave
x = 3.14159;
teks = sprintf("Nilai pi pendekatan = %.2f", x);
disp(teks)
```

### 2.4 Format Output

Dokumentasi Octave menjelaskan bahwa `disp` dipengaruhi oleh pengaturan format output, dan `printf`/`fprintf` menggunakan template string mirip gaya C. Beberapa kode format yang sering dipakai:

- `%d` : bilangan bulat
- `%f` : bilangan pecahan
- `%.2f` : bilangan pecahan dengan 2 angka di belakang koma
- `%s` : string
- `\n` : pindah baris

Contoh:

```octave
angka = 12.34567;
printf("%.2f\n", angka)
printf("%.4f\n", angka)
```

### 2.5 Script Pertama

Script adalah file yang berisi urutan perintah Octave. Menurut dokumentasi resmi, file script dibaca dan dievaluasi seolah-olah setiap baris diketik langsung pada prompt Octave. Script cocok dipakai untuk menyimpan langkah-langkah kerja yang akan dijalankan berulang.

Ciri penting file script:

- disimpan dengan ekstensi `.m`,
- berisi perintah-perintah Octave,
- **tidak diawali** dengan kata kunci `function` jika memang berupa script biasa.

Contoh nama file script:

```text
script_pertama.m
```

---

## 3. Materi Inti

### 3.1 Membuat dan Menyimpan String

Contoh:

```octave
pesan = "Belajar Octave itu menyenangkan";
disp(pesan)
```

**Penjelasan kode:**
- `pesan` adalah variabel string.
- Isi string ditulis di antara tanda kutip ganda.
- `disp(pesan)` menampilkan isi variabel ke layar.

### 3.2 Menggabungkan String

Contoh:

```octave
bagian1 = "Pemrograman";
bagian2 = "Dasar";
hasil = [bagian1, " ", bagian2];
disp(hasil)
```

**Penjelasan kode:**
- Dua string digabungkan menjadi satu string baru.
- `" "` dipakai untuk memberi spasi di antara dua kata.
- Penggabungan dilakukan dengan tanda kurung siku `[]`.

### 3.3 Input Angka

Contoh:

```octave
angka1 = input("Masukkan angka pertama: ");
angka2 = input("Masukkan angka kedua: ");
jumlah = angka1 + angka2;
disp(jumlah)
```

**Penjelasan kode:**
- pengguna memasukkan dua angka,
- data dibaca sebagai ekspresi numerik,
- hasil penjumlahan disimpan di `jumlah`,
- hasil ditampilkan dengan `disp`.

### 3.4 Input String

Contoh:

```octave
identitas = input("Masukkan identitas singkat: ", "s");
disp(["Input yang diterima: ", identitas])
```

**Penjelasan kode:**
- argumen kedua `"s"` membuat `input` membaca teks apa adanya,
- hasil input bisa digabung dengan string lain untuk ditampilkan.

### 3.5 Output dengan `disp`

Contoh:

```octave
keterangan = "Praktikum dimulai";
disp(keterangan)
```

**Penjelasan kode:**
- `disp` cocok untuk output cepat,
- formatnya sederhana,
- otomatis menambah baris baru.

### 3.6 Output dengan `printf`

Contoh:

```octave
nilai = 92.5;
printf("Nilai akhir = %.1f\n", nilai)
```

**Penjelasan kode:**
- `%.1f` berarti tampilkan satu angka di belakang koma,
- `\n` memindahkan output ke baris baru.

### 3.7 Output dengan `sprintf`

Contoh:

```octave
rata = 88.75;
teks_output = sprintf("Rata-rata = %.2f", rata);
disp(teks_output)
```

**Penjelasan kode:**
- `sprintf` membentuk string hasil format,
- hasilnya disimpan dulu ke variabel,
- baru ditampilkan atau dipakai lagi.

### 3.8 Script Pertama

Buat file bernama `script_pertama.m` dengan isi berikut:

```octave
clc;
clear;

judul = "SCRIPT PERTAMA OCTAVE";
disp(judul)

disp("----------------------")

teks_input = input("Masukkan teks: ", "s");
angka_input = input("Masukkan sebuah angka: ");

hasil = angka_input * 2;

printf("Teks yang dimasukkan: %s\n", teks_input)
printf("Angka yang dimasukkan: %g\n", angka_input)
printf("Hasil dikali 2      : %g\n", hasil)
```

**Penjelasan kode:**
- `clc` membersihkan Command Window,
- `clear` menghapus variabel di workspace,
- program meminta input string dan angka,
- hasil input diproses,
- output ditampilkan dengan `disp` dan `printf`.

---

## 4. Demonstrasi Praktikum

### 4.1 Percobaan 1 — Menyimpan dan Menampilkan String

```octave
kalimat = "Ini adalah latihan string";
disp(kalimat)
```

### 4.2 Percobaan 2 — Menggabungkan Dua String

```octave
kata1 = "GNU";
kata2 = "Octave";
kalimat = [kata1, " ", kata2];
disp(kalimat)
```

### 4.3 Percobaan 3 — Input dan Output Sederhana

```octave
bil = input("Masukkan sebuah bilangan: ");
printf("Bilangan yang dimasukkan adalah %g\n", bil)
```

### 4.4 Percobaan 4 — Input String

```octave
label = input("Masukkan label data: ", "s");
disp(["Label yang diterima: ", label])
```

### 4.5 Percobaan 5 — Script Interaktif

Buat file `latihan_io.m`:

```octave
clc;
clear;

judul = "LATIHAN INPUT OUTPUT";
disp(judul)

data1 = input("Masukkan angka pertama: ");
data2 = input("Masukkan angka kedua  : ");

jumlah = data1 + data2;
selisih = data1 - data2;

printf("Jumlah  = %g\n", jumlah)
printf("Selisih = %g\n", selisih)
```

Jalankan script tersebut dari editor atau dari Command Window dengan menuliskan nama file tanpa ekstensi jika file sudah berada di direktori kerja aktif.

---

## 5. Tugas Latihan

### 5.1 A. Soal Konsep

Jawab pertanyaan berikut.

1. Apa perbedaan string dan numerik pada Octave?
2. Mengapa dokumentasi Octave menyarankan penggunaan tanda kutip ganda untuk string?
3. Apa perbedaan `input("...")` dan `input("...", "s")`?
4. Apa perbedaan `disp` dan `printf`?
5. Mengapa script berguna dibanding mengetik perintah satu per satu di Command Window?

### 5.2 B. Soal Praktik

Kerjakan perintah berikut di Octave.

1. Buat variabel string berisi judul praktikum.
2. Gabungkan dua string menjadi satu kalimat.
3. Minta input satu angka, lalu tampilkan kuadratnya.
4. Minta input string, lalu tampilkan kembali dengan awalan teks keterangan.
5. Gunakan `sprintf` untuk membentuk kalimat hasil perhitungan.

Contoh target pengerjaan nomor 3:

```octave
n = input("Masukkan bilangan: ");
hasil = n^2;
printf("Kuadrat dari %g adalah %g\n", n, hasil)
```

---

## 6. Tugas Praktikum

### 6.1 Judul Tugas
**Membuat Program Interaktif Sederhana dengan String, Input/Output, dan Script**

### 6.2 Tujuan
Peserta mampu membuat file script `.m` yang:
- menerima input string,
- menerima input angka,
- menampilkan hasil dengan format yang rapi,
- menyimpan alur program dalam satu script.

### 6.3 Ketentuan Tugas
Buat satu file bernama:

```text
praktikum_string_io.m
```

Isi program harus memenuhi syarat berikut:

1. Menampilkan judul program.
2. Meminta input:
   - nama kegiatan dalam bentuk string,
   - jumlah data dalam bentuk angka,
   - nilai satuan dalam bentuk angka.
3. Menghitung total nilai.
4. Menampilkan hasil dengan format yang rapi.
5. Menampilkan pesan penutup.

### 6.4 Contoh Kerangka Program

```octave
clc;
clear;

disp("=== PROGRAM INPUT OUTPUT OCTAVE ===")

kegiatan = input("Masukkan nama kegiatan: ", "s");
jumlah = input("Masukkan jumlah data   : ");
nilai = input("Masukkan nilai satuan  : ");

total = jumlah * nilai;

printf("\n")
printf("Kegiatan     : %s\n", kegiatan)
printf("Jumlah data  : %g\n", jumlah)
printf("Nilai satuan : %g\n", nilai)
printf("Total        : %g\n", total)

disp("Program selesai dijalankan.")
```

### 6.5 Pengembangan Tugas
Tambahkan minimal dua fitur berikut:

- menampilkan hasil dalam kalimat lengkap menggunakan `sprintf`,
- meminta satu input string tambahan,
- menghitung diskon atau bonus sederhana,
- menyimpan output ke file teks menggunakan `fprintf`.

### 6.6 Luaran yang Dikumpulkan

1. File `praktikum_string_io.m`
2. Tangkapan layar hasil program saat dijalankan
3. Ringkasan singkat fungsi-fungsi yang dipakai (`input`, `disp`, `printf`, `sprintf`)

---

## 7. Ringkasan

Pada modul ini telah dipelajari bahwa:

- string digunakan untuk menyimpan teks,
- Octave menyarankan penggunaan tanda kutip ganda untuk string,
- `input` dapat membaca angka maupun string,
- `disp` cocok untuk output sederhana,
- `printf` dan `fprintf` cocok untuk output terformat,
- `sprintf` menghasilkan string yang sudah diformat,
- script adalah file `.m` yang berisi urutan perintah dan dapat dijalankan kembali.

Materi ini menjadi dasar untuk membuat program interaktif yang lebih panjang pada pertemuan berikutnya.

---

## 8. Referensi

1. GNU Octave Manual (latest), sesuai dengan GNU Octave 11.1.0  
   https://docs.octave.org/latest/
2. Strings — GNU Octave Manual  
   https://docs.octave.org/latest/Strings.html
3. Input and Output — GNU Octave Manual  
   https://docs.octave.org/latest/Input-and-Output.html
4. Terminal Input — GNU Octave Manual  
   https://docs.octave.org/latest/Terminal-Input.html
5. Terminal Output — GNU Octave Manual  
   https://docs.octave.org/latest/Terminal-Output.html
6. Formatted Output — GNU Octave Manual  
   https://docs.octave.org/latest/Formatted-Output.html
7. Script Files — GNU Octave Manual  
   https://docs.octave.org/latest/Script-Files.html
