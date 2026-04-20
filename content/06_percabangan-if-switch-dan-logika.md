# Pertemuan 6 — Percabangan if, switch, dan Operator Logika

## Modul ringkas
- Percabangan dipakai saat program harus memilih aksi berdasarkan kondisi.
- `if` cocok untuk kondisi berbasis ekspresi logika.
- `switch` cocok untuk banyak pilihan berdasarkan satu ekspresi yang sama.

## Konsep inti
- Kondisi dianggap benar jika nilainya tidak kosong dan semua elemennya bukan nol.
- Bentuk umum `if` adalah `if ... elseif ... else ... endif`.
- Bentuk umum `switch` adalah `switch ... case ... otherwise ... endswitch`.
- Operator logika yang sering dipakai adalah `==`, `~=`, `<`, `<=`, `>`, `>=`, `&&`, `||`, dan `!`.

## Contoh penggunaan

```octave
clc
clear

nilai = input ("Masukkan nilai: ");

if (nilai >= 85)
  disp ("Grade A")
elseif (nilai >= 70)
  disp ("Grade B")
elseif (nilai >= 60)
  disp ("Grade C")
else
  disp ("Perlu perbaikan")
endif

hari = "senin";

switch (hari)
  case "senin"
    disp ("Awal pekan")
  case {"sabtu", "minggu"}
    disp ("Akhir pekan")
  otherwise
    disp ("Hari kerja")
endswitch
```

## Penjelasan singkat fungsi dan perintah
- `if`: percabangan utama berbasis kondisi.
- `elseif`: kondisi tambahan jika syarat sebelumnya salah.
- `else`: blok cadangan jika semua kondisi salah.
- `switch`: percabangan untuk satu ekspresi yang diuji ke beberapa label.
- `case`: label yang diperiksa pada `switch`.
- `otherwise`: bagian default pada `switch`.
- `&&` dan `||`: operator logika short-circuit untuk kondisi skalar.
- `&` dan `|`: operator logika elemen per elemen.

## Latihan
1. Buat program untuk menentukan bilangan positif, negatif, atau nol.
2. Buat program yang mengecek apakah sebuah angka ganjil atau genap.
3. Buat menu sederhana dengan `switch` untuk pilihan `"luas"`, `"keliling"`, atau `"keluar"`.
4. Gunakan operator logika gabungan untuk menentukan lulus jika nilai tugas dan ujian sama-sama di atas batas tertentu.
5. Uji apa yang terjadi jika menulis `else if` alih-alih `elseif`.

## Tugas praktikum
1. Buat tabel perbandingan kapan `if` lebih cocok dipakai daripada `switch`.
2. Susun minimal lima contoh ekspresi logika dan tentukan hasil benar atau salahnya.
3. Jelaskan aturan dasar `elseif` dan `otherwise` dalam bahasa singkat.

## Tugas koding
1. Buat script `penentu_grade.m` yang menerima satu nilai dan mengembalikan grade huruf.
2. Buat script kedua `menu_bangun_datar.m` yang memakai `switch` untuk memilih perhitungan.
3. Tambahkan validasi sederhana untuk menangani input yang tidak sesuai.

## Referensi manual Octave
- Statements: https://docs.octave.org/latest/Statements.html
- The if statement: https://docs.octave.org/latest/The-if-Statement.html
- The switch statement: https://docs.octave.org/latest/The-switch-Statement.html
