# Pertemuan 8 — Fungsi Buatan Pengguna, Banyak Output, dan Function Handle

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Struktur dasar `function y = nama(x)`.

## Capaian pembelajaran
- Membuat function file yang menerima input dan mengembalikan output.
- Menulis fungsi dengan lebih dari satu keluaran.
- Mengenal function handle dan anonymous function untuk pemanggilan tidak langsung.

## Pokok materi
- Struktur dasar `function y = nama(x)`.
- Banyak output: `[x1, x2] = akar_kuadrat(a,b,c)`.
- Script vs function file.
- Function handle: `f = @sin`, anonymous function: `@(x) x.^2 + 1`.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
% file: luas_persegi_panjang.m
function L = luas_persegi_panjang(p, l)
  L = p * l;
endfunction
```

```octave
% file: akar_kuadrat.m
function [x1, x2] = akar_kuadrat(a, b, c)
  d = b^2 - 4*a*c;
  x1 = (-b + sqrt(d)) / (2*a);
  x2 = (-b - sqrt(d)) / (2*a);
endfunction
```

```octave
L = luas_persegi_panjang(5, 3)
[x1, x2] = akar_kuadrat(1, -3, -4)

f = @sin;
feval(f, pi/2)

g = @(x) x.^2 + 2*x + 1;
g(3)
```

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Buat fungsi untuk menghitung volume balok.
2. Buat fungsi untuk mengembalikan luas dan keliling persegi panjang sekaligus.
3. Buat anonymous function untuk:
   - `f(x) = x^2 - 4x + 4`
   - `g(x) = sin(x) ./ x`
4. Uji function handle pada `sin`, `cos`, dan fungsi buatan sendiri.

## Tugas mandiri
Buat library kecil berisi 3 fungsi geometri dan satu skrip utama yang memanggil semuanya.

## Catatan pengajar
Pada PDF masih ada gaya `inline` lama. Untuk pengajaran modern di Octave, lebih baik utamakan function file, function handle, dan anonymous function karena lebih konsisten dan lebih dekat dengan praktik saat ini.

## Referensi utama

- PDF modul: Operasi Fungsi, hal. 12–15.
- Manual GNU Octave (tautan bab terkait):
  - [Functions and Scripts](https://docs.octave.org/latest/Functions-and-Scripts.html)
  - [Introduction to Function and Script Files](https://docs.octave.org/latest/Introduction-to-Function-and-Script-Files.html)
  - [Function Handles](https://docs.octave.org/latest/Function-Handles.html)
