# Pertemuan 6 — Percabangan `if`, `switch`, dan Operator Logika

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Operator `==`, `~=`, `<`, `<=`, `>`, `>=`.

## Capaian pembelajaran
- Memahami cara kerja keputusan program dengan `if`, `elseif`, `else`.
- Menggunakan operator relasional dan logika untuk menyusun syarat.
- Mengenal kapan `switch` lebih rapi daripada rantai `if` panjang.

## Pokok materi
- Operator `==`, `~=`, `<`, `<=`, `>`, `>=`.
- Operator logika `&&`, `||`, `!`/`~` dan gabungannya.
- Struktur `if ... elseif ... else ... endif`.
- Struktur `switch ... case ... otherwise ... endswitch`.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

nilai = input("Masukkan nilai ujian: ");

if (nilai >= 85)
  grade = "A";
elseif (nilai >= 70)
  grade = "B";
elseif (nilai >= 60)
  grade = "C";
else
  grade = "D";
endif

printf("Grade Anda: %s\n", grade)
```

```octave
hari = input("Masukkan kode hari (1-7): ");

switch (hari)
  case 1
    disp("Senin")
  case 2
    disp("Selasa")
  case 3
    disp("Rabu")
  otherwise
    disp("Kode di luar contoh")
endswitch
```

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Buat program cek bilangan ganjil/genap.
2. Buat program klasifikasi suhu:
   - `< 20` dingin
   - `20–30` normal
   - `> 30` panas
3. Buat menu sederhana dengan `switch`:
   - 1: tambah
   - 2: kurang
   - 3: kali
   - 4: bagi
4. Uji dengan beberapa input berbeda.

## Tugas mandiri
Buat program yang menentukan apakah sebuah tahun termasuk tahun kabisat.

## Catatan pengajar
Gunakan banyak contoh dekat dengan kehidupan sehari-hari: nilai, suhu, tarif, diskon, dan bilangan ganjil-genap. Mahasiswa biasanya lebih cepat paham jika syarat program terasa nyata.

## Referensi utama

- PDF modul: Control Flow, hal. 20–26.
- Manual GNU Octave (tautan bab terkait):
  - [The if Statement](https://docs.octave.org/latest/The-if-Statement.html)
  - [The switch Statement](https://docs.octave.org/latest/The-switch-Statement.html)
  - [Statements](https://docs.octave.org/latest/Statements.html)
