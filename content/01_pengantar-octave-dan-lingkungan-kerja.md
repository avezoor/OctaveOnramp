# Pertemuan 1 — Pengantar Octave dan Lingkungan Kerja

## Modul ringkas
- GNU Octave adalah bahasa tingkat tinggi untuk komputasi numerik, analisis data, aljabar linear, dan eksperimen ilmiah.
- Manual `latest` di `docs.octave.org` saat ini mengacu ke GNU Octave versi 11.1.0.
- Pada pertemuan ini fokusnya adalah mengenal jendela kerja, direktori aktif, variabel di workspace, dan cara membaca dokumentasi bawaan.

## Konsep inti
- Octave bisa dijalankan lewat GUI maupun command line.
- Setiap perintah dievaluasi oleh interpreter. Jika baris tidak diakhiri `;`, hasil biasanya langsung tampil.
- Working directory menentukan lokasi file script, data, dan hasil simpan.
- Workspace adalah kumpulan variabel yang sedang aktif.
- Dokumentasi bawaan sangat penting: `help`, `doc`, `lookfor`, `who`, dan `whos` membantu belajar mandiri.

## Contoh penggunaan

```octave
clc
clear

pwd
ls

a = 10
b = 3;
c = a + b

who
whos

help plot
lookfor matrix
```

## Penjelasan singkat fungsi dan perintah
- `clc`: membersihkan tampilan command window.
- `clear`: menghapus variabel dari workspace.
- `pwd`: menampilkan folder kerja aktif.
- `ls` atau `dir`: menampilkan isi folder kerja.
- `who`: menampilkan nama variabel yang aktif.
- `whos`: menampilkan detail variabel seperti ukuran dan tipe data.
- `help nama_fungsi`: menampilkan bantuan singkat di terminal.
- `doc nama_fungsi`: membuka dokumentasi yang lebih lengkap jika tersedia.
- `lookfor kata_kunci`: mencari fungsi berdasarkan kata kunci deskripsi.

## Latihan
1. Jalankan `pwd`, lalu pindah ke folder lain dengan `cd` dan kembali lagi.
2. Buat variabel `nama`, `nim`, dan `kelas`, lalu tampilkan dengan `who`.
3. Bandingkan hasil `who` dan `whos` setelah membuat matriks `A = rand (3, 3)`.
4. Cari dokumentasi untuk `plot`, `mean`, dan `save`.
5. Tulis dua kalimat singkat tentang perbedaan `clc` dan `clear`.

## Tugas praktikum
1. Buat catatan kerja yang berisi 10 perintah Octave dasar yang paling sering dipakai di awal praktikum.
2. Jalankan semua perintah dasar yang dipelajari lalu dokumentasikan fungsi masing-masing dalam tabel singkat.
3. Simpulkan alur kerja dasar Octave mulai dari membuka program sampai membaca dokumentasi fungsi.

## Tugas koding
1. Buat script `pertemuan1_intro.m` yang menjalankan `clc`, `clear`, `pwd`, `who`, dan `whos`.
2. Tambahkan tiga variabel bebas di dalam script lalu tampilkan salah satunya ke layar.
3. Di akhir script, panggil `help mean` dan beri komentar singkat tentang fungsi tersebut.

## Referensi manual Octave
- Manual utama: https://docs.octave.org/latest/
- Pengantar: https://docs.octave.org/latest/Introduction.html
- Contoh sederhana: https://docs.octave.org/latest/Simple-Examples.html
- Bantuan dan dokumentasi: https://docs.octave.org/latest/Help-and-Documentation.html
