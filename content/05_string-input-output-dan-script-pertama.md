# Pertemuan 5 — String, Input/Output, dan Script Pertama

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Perbedaan command langsung dan script file.

## Capaian pembelajaran
- Menulis skrip `.m` pertama dengan alur input-proses-output.
- Menggunakan string, `input`, `disp`, dan `printf` untuk komunikasi program dengan pengguna.
- Menyimpan dan memanggil data sederhana dengan `save` dan `load`.

## Pokok materi
- Perbedaan command langsung dan script file.
- Komentar satu baris dengan `%`.
- Input numerik dan teks.
- Penyimpanan variabel ke file `.mat`.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
% file: luas_lingkaran.m
clc
clear

nama = input("Masukkan nama: ", "s");
r = input("Masukkan jari-jari: ");

luas = pi * r^2;
keliling = 2 * pi * r;

printf("\nHalo, %s\n", nama);
printf("Luas      = %.4f\n", luas);
printf("Keliling  = %.4f\n", keliling);

save hasil_lingkaran.mat nama r luas keliling
```

## Lanjutan

```octave
load hasil_lingkaran.mat
whos
disp(nama)
```

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Tulis skrip untuk menghitung luas segitiga.
2. Minta pengguna mengisi alas dan tinggi.
3. Cetak hasil dengan format rapi.
4. Simpan variabel hasil ke file `.mat`.
5. Muat kembali file tersebut dan tampilkan isinya.

## Tugas mandiri
Buat skrip kalkulator konversi suhu Celsius ke Fahrenheit dan Kelvin.

## Catatan pengajar
Di PDF, mahasiswa diperkenalkan pada M-file. Di Octave, istilah script file dan function file perlu dijelaskan sejak awal. Ini sesi penting agar mahasiswa berpindah dari eksperimen di prompt ke pemrograman yang bisa disimpan dan dijalankan ulang.

## Referensi utama

- PDF modul: Operasi Lembar Kerja dan M-file, hal. 8–11.
- Manual GNU Octave (tautan bab terkait):
  - [Introduction to Function and Script Files](https://docs.octave.org/latest/Introduction-to-Function-and-Script-Files.html)
  - [Input and Output](https://docs.octave.org/latest/Input-and-Output.html)
  - [Simple File I/O](https://docs.octave.org/latest/Simple-File-I_002fO.html)
