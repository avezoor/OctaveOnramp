# Pertemuan 2 — Variabel, Skalar, Operator, dan Format Output

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Penugasan variabel dan aturan penamaan.

## Capaian pembelajaran
- Memahami cara mendefinisikan variabel dan menggunakan operator numerik dasar.
- Membedakan output yang dicetak otomatis, `disp`, dan `printf`.
- Mengenal konstanta dan fungsi matematika dasar yang sering dipakai dalam praktikum.

## Pokok materi
- Penugasan variabel dan aturan penamaan.
- Operator `+`, `-`, `*`, `/`, `^` dan prioritas operasi.
- Fungsi penting: `abs`, `sqrt`, `exp`, `log`, `sin`, `cos`, `tan`, `round`, `floor`, `ceil`, `rem`.
- Format keluaran dengan `disp`, `printf`, dan kebiasaan memberi label pada hasil.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

pi
eps

x = 5;
y = 2;

hasil1 = x + y
hasil2 = x / y
hasil3 = x ^ y

disp("Nilai hasil3 adalah:")
disp(hasil3)

printf("sqrt(%d) = %.4f\n", x, sqrt(x))
printf("sin(pi/6) = %.4f\n", sin(pi/6))
printf("sisa bagi 17 dengan 5 = %d\n", rem(17, 5))
```

## Fokus praktikum
- Gunakan radian untuk fungsi trigonometri.
- Jika ingin sudut derajat, konversi dulu: `derajat * pi / 180`.
- Biasakan menamai hasil dengan variabel yang jelas, misalnya `luas`, `rata2`, `akar1`.

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Hitung nilai dari:
   - `exp(3)`
   - `log(10)`
   - `sqrt(49)`
   - `round(pi, 3)` jika tersedia, atau tampilkan `pi` dengan `printf`.
2. Ubah 30 derajat ke radian, lalu hitung `sin`, `cos`, dan `tan`.
3. Tampilkan hasil perhitungan dengan `disp` dan `printf`.
4. Buat program kecil yang menerima jari-jari lingkaran dan mencetak luas serta keliling.

## Tugas mandiri
Tulis 10 fungsi matematika dasar yang menurutmu wajib dihafal untuk praktikum numerik.

## Catatan pengajar
Bagian ini mengambil semangat tabel sintaks pada PDF, tetapi diperbarui untuk gaya penulisan Octave yang lebih rapi dan mudah dibaca. Utamakan latihan kecil dan cepat supaya mahasiswa nyaman dengan prompt.

## Referensi utama

- PDF modul: Operasi Lembar Kerja, hal. 8–10.
- Manual GNU Octave (tautan bab terkait):
  - [Simple Examples](https://docs.octave.org/latest/Simple-Examples.html)
  - [Arithmetic Operators](https://docs.octave.org/latest/Arithmetic-Ops.html)
  - [Help and Documentation](https://docs.octave.org/latest/Help-and-Documentation.html)
