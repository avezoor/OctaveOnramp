# Pertemuan 1 — Pengantar Octave dan Lingkungan Kerja

## Identitas sesi
- Durasi: 1 x 60 menit
- Format: teori singkat + demo + praktikum
- Tingkat: dasar
- Fokus: Apa itu Octave, kapan dipakai, dan hubungan kompatibilitasnya dengan gaya kerja MATLAB.

## Capaian pembelajaran
- Mengenal peran GNU Octave sebagai lingkungan komputasi numerik berbasis matriks.
- Memahami alur kerja dasar: membuka Octave, mengetik perintah, membaca output, dan memakai bantuan bawaan.
- Mengenal command history, working directory, dan kebiasaan kerja yang rapi sejak awal.

## Pokok materi
- Apa itu Octave, kapan dipakai, dan hubungan kompatibilitasnya dengan gaya kerja MATLAB.
- Prompt, command window, editor, dan arti tanda titik koma `;` untuk menahan output.
- Perintah navigasi dasar: `pwd`, `cd`, `dir`/`ls`, `who`, `whos`, `clc`, `clear`.
- Sistem bantuan: `help --list`, `help nama_fungsi`, `lookfor kata_kunci`, `doc`.

## Alur 60 menit
- 10 menit: pembukaan konsep dan konteks masalah
- 20 menit: demo kode oleh pengajar
- 20 menit: latihan mandiri/berpasangan
- 10 menit: review hasil, tanya jawab, dan refleksi

## Demo inti

```octave
clc
clear

pwd
who
whos

a = 10
b = 3;
c = a + b

help plot
lookfor matrix
```

**Catatan penting**
- Baris tanpa `;` akan menampilkan hasil ke layar.
- `help nama_fungsi` sangat penting di praktikum karena membuat mahasiswa bisa belajar mandiri.
- Biasakan memeriksa folder kerja dengan `pwd` sebelum menyimpan skrip.

## Checklist praktikum
- [ ] Menjalankan semua contoh tanpa error
- [ ] Menjelaskan arti tiap baris penting
- [ ] Menyimpan file kerja dengan nama rapi
- [ ] Menuliskan satu kesalahan umum yang berhasil diperbaiki

## Latihan 60 menit

1. Buka Octave lalu jalankan `pwd`, `who`, `whos`, dan `help --list`.
2. Buat tiga variabel: `nama`, `nim`, dan `kelas`.
3. Bersihkan layar dengan `clc`, lalu tampilkan kembali variabel yang ada.
4. Cari dokumentasi untuk `plot`, `mean`, dan `save`.
5. Tulis ringkasan singkat: apa beda `clear` dan `clc`?

## Tugas mandiri
Buat catatan pribadi berisi 10 perintah Octave yang paling sering dipakai di awal praktikum.

## Catatan pengajar
Materi ini mengadaptasi bagian pengenalan MATLAB pada PDF menjadi alur yang relevan untuk Octave. Fokusnya bukan pada fitur komersial/toolbox, melainkan pada kebiasaan kerja komputasi yang benar: memahami prompt, direktori kerja, dokumentasi, dan eksperimen cepat.

## Referensi utama

- PDF modul: Pendahuluan dan Operasi Lembar Kerja, terutama hal. 4–10.
- Manual GNU Octave (tautan bab terkait):
  - [Top / daftar isi manual](https://docs.octave.org/latest/)
  - [Help and Documentation](https://docs.octave.org/latest/Help-and-Documentation.html)
  - [Simple Examples](https://docs.octave.org/latest/Simple-Examples.html)
