# Pertemuan 5 — String, Input/Output, dan Script Pertama

## Modul ringkas
- String dipakai untuk label, pesan, nama file, dan input berbasis teks.
- Input dan output dasar membentuk alur program interaktif sederhana.
- Script `.m` dipakai untuk menyimpan serangkaian perintah agar dapat dijalankan ulang.

## Konsep inti
- Octave mendukung string dengan tanda kutip tunggal maupun ganda, tetapi dokumentasi menyarankan tanda kutip ganda agar tidak bentrok dengan operator transpose.
- String dapat digabungkan memakai notasi matriks.
- `input` membaca data dari pengguna.
- Script adalah file berisi perintah Octave yang dijalankan berurutan.

## Contoh penggunaan

```octave
clc
clear

nama = input ("Masukkan nama: ", "s");
nilai = input ("Masukkan nilai: ");

pesan = ["Halo, ", nama];
disp (pesan)

printf ("Nilai akhir %s adalah %.2f\n", nama, nilai)
```

## Penjelasan singkat fungsi dan perintah
- `input ("teks")`: membaca input numerik.
- `input ("teks", "s")`: membaca input sebagai string.
- `disp`: menampilkan string atau nilai.
- `printf`: output terformat.
- `fileread ("file.txt")`: membaca isi file sebagai string.
- `script.m`: file yang berisi rangkaian perintah tanpa deklarasi `function`.

## Contoh script pertama

```octave
clc
clear

panjang = input ("Panjang: ");
lebar = input ("Lebar: ");

luas = panjang * lebar;
keliling = 2 * (panjang + lebar);

printf ("Luas = %.2f\n", luas)
printf ("Keliling = %.2f\n", keliling)
```

## Latihan
1. Buat script yang meminta nama dan tiga nilai tugas, lalu hitung rata-ratanya.
2. Tampilkan hasil dalam kalimat yang rapi memakai `printf`.
3. Gabungkan dua string menjadi satu kalimat lengkap.
4. Simpan script dengan nama yang jelas lalu jalankan ulang.
5. Tambahkan pesan jika nilai rata-rata lebih dari 80.

## Tugas praktikum
1. Buat ringkasan tentang perbedaan string, input numerik, dan input string di Octave.
2. Tulis format `printf` yang paling sering dipakai untuk integer, pecahan, dan string.
3. Dokumentasikan langkah membuat dan menjalankan file script `.m`.

## Tugas koding
1. Buat script `input_nilai_mahasiswa.m` yang meminta nama, NIM, dan tiga nilai.
2. Hitung rata-rata nilai lalu tampilkan hasilnya dengan format kalimat lengkap.
3. Tambahkan pesan status seperti `Lulus` atau `Perlu perbaikan` berdasarkan rata-rata.

## Referensi manual Octave
- Strings: https://docs.octave.org/latest/Strings.html
- Basic input and output: https://docs.octave.org/latest/Basic-Input-and-Output.html
- Script files: https://docs.octave.org/latest/Script-Files.html
