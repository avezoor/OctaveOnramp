# Pertemuan 13 — Regresi, Interpolasi, dan Fitting Polinomial

## Modul ringkas
- Interpolasi dipakai untuk memperkirakan nilai di antara titik data.
- Fitting polinomial dipakai untuk mencari pendekatan kurva terbaik terhadap data.
- Korelasi dan kovarians membantu melihat hubungan antar variabel.

## Konsep inti
- `interp1` melakukan interpolasi satu dimensi.
- `polyfit` mencari koefisien polinomial yang meminimalkan galat kuadrat terkecil.
- `polyval` mengevaluasi polinomial hasil fitting.
- `corrcoef`, `corr`, dan `cov` dipakai untuk analisis hubungan data.

## Contoh penggunaan

```octave
clc
clear

x = [0 1 2 3 4];
y = [1 2.1 3.9 6.2 8.1];

xi = 0:0.1:4;
yi = interp1 (x, y, xi, "linear");

p = polyfit (x, y, 1);
yfit = polyval (p, xi);

plot (x, y, "ko", xi, yi, "b-", xi, yfit, "r--", "linewidth", 1.5)
legend ("data", "interpolasi linear", "fit linear")
grid on
```

## Penjelasan singkat fungsi dan perintah
- `interp1`: interpolasi 1D dengan metode seperti `"linear"` atau `"spline"`.
- `polyfit (x, y, n)`: fitting polinomial derajat `n`.
- `polyval (p, x)`: evaluasi polinomial dengan koefisien `p`.
- `cov`: matriks kovarians.
- `corr`: korelasi antar kolom data.
- `corrcoef`: koefisien korelasi Pearson dan opsi tambahan.

## Latihan
1. Lakukan interpolasi linear untuk lima titik data buatan.
2. Bandingkan interpolasi linear dan spline pada data yang sama.
3. Fit data ke polinomial derajat 1 dan derajat 2.
4. Plot data asli bersama hasil fitting.
5. Hitung `cov` dan `corrcoef` untuk dua variabel sederhana.

## Tugas praktikum
1. Jelaskan perbedaan interpolasi dan fitting dalam konteks analisis data.
2. Bandingkan hasil fit linear dan polinomial orde lebih tinggi pada data yang sama.
3. Tuliskan interpretasi sederhana dari nilai korelasi dan kovarians.

## Tugas koding
1. Buat script `interpolasi_dan_regresi.m` yang memuat data contoh dan menghitung `interp1`, `polyfit`, dan `polyval`.
2. Tampilkan plot data asli, hasil interpolasi, dan hasil fitting dalam satu figure.
3. Hitung dan tampilkan nilai `corrcoef` atau `cov` untuk data yang digunakan.

## Referensi manual Octave
- Interpolation: https://docs.octave.org/latest/Interpolation.html
- Polynomial interpolation: https://docs.octave.org/latest/Polynomial-Interpolation.html
- Correlation and regression analysis: https://docs.octave.org/latest/Correlation-and-Regression-Analysis.html
