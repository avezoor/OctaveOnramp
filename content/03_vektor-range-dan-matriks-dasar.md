# Pertemuan 3 — Vektor, Range, dan Matriks Dasar

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Pembentukan matriks dengan `[ ]`, pemisah kolom spasi/koma, dan pemisah baris titik koma.

## Capaian pembelajaran
- Membuat vektor dan matriks dengan sintaks dasar Octave.
- Memahami range `m:n` dan `m:k:n` untuk membangkitkan data otomatis.
- Mempraktikkan indexing, slicing, transpose, dan ukuran matriks.

## Pokok materi
- Pembentukan matriks dengan `[ ]`, pemisah kolom spasi/koma, dan pemisah baris titik koma.
- Range: `1:10`, `0:0.5:5`, `linspace`, `logspace`.
- Fungsi pembentuk: `zeros`, `ones`, `eye`, `rand`, `randn`, `size`, `length`, `numel`.
- Indexing: `A(2,3)`, `A(:,2)`, `A(1,:)`, `A(:)`, transpose `A'`.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

x = 1:10
y = 0:0.5:5
z = linspace(0, 2*pi, 9)

A = [1 2 3; 4 5 6; 7 8 9]
B = rand(3, 2);
C = ones(2, 4);

size(A)
length(x)
numel(B)

A(2,3)
A(:,2)
A(1,:)
A'
```

## Konsep kunci
- **Vektor baris**: `x = [1 2 3]`
- **Vektor kolom**: `x = [1; 2; 3]`
- **Semua elemen**: `A(:)`
- **Transpose**: ubah baris menjadi kolom atau sebaliknya.

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Buat vektor:
   - `1` sampai `20`
   - bilangan ganjil `1` sampai `19`
   - 11 titik dari `-1` ke `1`
2. Buat matriks 3x3 berisi angka 1–9.
3. Ambil:
   - baris kedua
   - kolom ketiga
   - elemen pojok kanan bawah
4. Buat matriks identitas 4x4.
5. Buat matriks acak 5x5 lalu hitung ukurannya.

## Tugas mandiri
Rancang sendiri satu matriks 4x4 dan tulis 5 operasi indexing yang berbeda.

## Catatan pengajar
Ini sesi yang sangat penting karena banyak materi lanjutan di Octave bertumpu pada vektor dan matriks. Pada PDF, topik ini muncul sebagai modul besar; di sini dipisah supaya mahasiswa punya waktu praktik yang cukup.

## Referensi utama

- PDF modul: Operasi Array, Vektor, dan Matriks, hal. 16–18.
- Manual GNU Octave (tautan bab terkait):
  - [Creating a Matrix](https://docs.octave.org/latest/Creating-a-Matrix.html)
  - [Matrices](https://docs.octave.org/latest/Matrices.html)
  - [Ranges](https://docs.octave.org/latest/Ranges.html)
