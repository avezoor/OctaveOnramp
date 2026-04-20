# Pertemuan 7 — Perulangan `for`, `while`, `do-until`, `break`, dan `continue`

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: `for` untuk jumlah iterasi yang sudah diketahui.

## Capaian pembelajaran
- Mengulang proses dengan `for`, `while`, dan `do-until`.
- Memilih jenis loop yang sesuai dengan masalah.
- Mengontrol loop dengan `break` dan `continue`.

## Pokok materi
- `for` untuk jumlah iterasi yang sudah diketahui.
- `while` untuk iterasi berbasis kondisi.
- `do-until` saat badan loop harus dijalankan minimal sekali.
- Pola akumulasi, penghitung, validasi input, dan pencarian.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

jumlah = 0;
for i = 1:10
  jumlah = jumlah + i;
endfor
printf("Jumlah 1..10 = %d\n", jumlah)
```

```octave
i = 1;
while (i <= 5)
  printf("i = %d\n", i)
  i = i + 1;
endwhile
```

```octave
x = -1;
do
  x = input("Masukkan bilangan positif: ");
until (x > 0)
```

```octave
for n = 1:10
  if (rem(n,2) != 0)
    continue;
  endif
  disp(n)
endfor
```

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Hitung jumlah kuadrat `1^2 + 2^2 + ... + 10^2`.
2. Cetak semua bilangan genap dari 1 sampai 30.
3. Buat `while` untuk menghitung berapa kali harus membagi 100 dengan 2 sampai kurang dari 1.
4. Buat validasi input agar pengguna hanya boleh memasukkan angka 0–100.
5. Gunakan `break` untuk menghentikan loop jika pengguna mengetik `-1`.

## Tugas mandiri
Buat program yang menampilkan tabel perkalian 1–10 dengan loop bersarang.

## Catatan pengajar
Mahasiswa sering bingung membedakan `for` dan `while`. Tekankan aturan sederhana: jika jumlah langkah sudah tahu, pilih `for`; jika berhenti berdasarkan kondisi, pilih `while`.

## Referensi utama

- PDF modul: Control Flow, hal. 20–26.
- Manual GNU Octave (tautan bab terkait):
  - [The for Statement](https://docs.octave.org/latest/The-for-Statement.html)
  - [The while Statement](https://docs.octave.org/latest/The-while-Statement.html)
  - [The do-until Statement](https://docs.octave.org/latest/The-do_002duntil-Statement.html)
  - [The break Statement](https://docs.octave.org/latest/The-break-Statement.html)
  - [The continue Statement](https://docs.octave.org/latest/The-continue-Statement.html)
