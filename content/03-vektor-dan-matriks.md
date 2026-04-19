# Pertemuan 3 - Vektor dan Matriks

## Tujuan
Mahasiswa mampu membuat vektor dan matriks sederhana, mengakses elemennya, serta melakukan operasi dasar.

## Materi
- Vektor baris dan vektor kolom
- Matriks dua dimensi
- Akses elemen dengan indeks
- Operasi elemen dan operasi matriks

## Vektor
Vektor baris ditulis dengan spasi atau koma, sedangkan vektor kolom ditulis dengan titik koma.

```octave
baris = [1 2 3 4]
kolom = [1; 2; 3; 4]
```

## Matriks
Matriks dibuat dengan baris dan kolom. Setiap baris dipisahkan memakai titik koma.

```octave
A = [1 2 3; 4 5 6; 7 8 9]
B = [9 8 7; 6 5 4; 3 2 1]
```

## Akses Elemen
Indeks di Octave dimulai dari 1. Format akses elemen adalah `nama_matriks(baris, kolom)`.

```octave
A(1, 2)
A(3, 1)
```

## Operasi Dasar
Gunakan `+`, `-`, dan `*` untuk operasi matriks. Untuk operasi per elemen, gunakan tanda titik seperti `.*` atau `.^`.

```octave
A + B
A * B
A .* B
```

## Latihan
1. Buat matriks 2x3 berisi angka bebas.
2. Tampilkan elemen pada baris kedua kolom ketiga.
3. Buat dua vektor dengan ukuran sama, lalu jumlahkan keduanya.
