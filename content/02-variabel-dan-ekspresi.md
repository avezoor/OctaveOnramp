# Pertemuan 2 - Variabel dan Ekspresi

## Tujuan
Mahasiswa mampu membuat variabel, memahami tipe data dasar, dan menyusun ekspresi matematika di GNU Octave.

## Materi
- Aturan penamaan variabel
- Operator aritmatika
- Urutan operasi
- Menampilkan nilai dengan `disp` dan `printf`

## Aturan Variabel
Nama variabel sebaiknya singkat, jelas, dan menggambarkan nilai yang disimpan. Hindari nama yang sama dengan fungsi bawaan Octave.

```octave
panjang = 12
lebar = 8
luas = panjang * lebar
```

## Ekspresi Matematika
Octave mengikuti urutan operasi matematika umum: pangkat, perkalian atau pembagian, lalu penjumlahan atau pengurangan.

```octave
hasil1 = 2 + 3 * 4
hasil2 = (2 + 3) * 4
```

## Praktik
Hitung luas dan keliling persegi panjang dengan nilai panjang dan lebar yang berbeda.

```octave
panjang = 10;
lebar = 6;

luas = panjang * lebar;
keliling = 2 * (panjang + lebar);

printf("Luas: %d\n", luas);
printf("Keliling: %d\n", keliling);
```

## Latihan
1. Buat variabel `alas` dan `tinggi`, lalu hitung luas segitiga.
2. Buat variabel `r`, lalu hitung luas lingkaran dengan `pi * r^2`.
3. Bandingkan hasil ekspresi `10 / 2 + 3` dan `10 / (2 + 3)`.
