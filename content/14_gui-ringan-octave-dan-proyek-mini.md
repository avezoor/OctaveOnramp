# Pertemuan 14 — GUI Ringan Octave, Callback, dan Proyek Mini Integrasi

## Modul ringkas
- Octave menyediakan elemen GUI ringan seperti `figure` dan `uicontrol`.
- GUI sederhana cukup untuk membuat alat bantu input, slider, tombol, atau mini dashboard visual.
- Callback adalah fungsi yang dijalankan saat suatu event terjadi, misalnya tombol ditekan atau slider digeser.

## Konsep inti
- Objek GUI ditempatkan di dalam `figure`.
- `uicontrol` dipakai untuk membuat tombol, teks, edit box, slider, dan elemen dasar lain.
- Callback menerima argumen sumber event dan data event.
- Properti objek dibaca dan diubah dengan `get` dan `set`.

## Contoh penggunaan

```octave
function gui_slider_demo ()
  f = figure ("name", "Demo GUI Octave", "position", [100 100 360 180]);

  txt = uicontrol (f, ...
    "style", "text", ...
    "string", "Nilai: 0", ...
    "position", [120 110 120 25]);

  uicontrol (f, ...
    "style", "slider", ...
    "min", 0, ...
    "max", 100, ...
    "value", 0, ...
    "position", [40 70 280 20], ...
    "callback", @(h, evt) set (txt, "string", sprintf ("Nilai: %.1f", get (h, "value"))));
endfunction
```

## Penjelasan singkat fungsi dan perintah
- `figure`: membuat jendela grafik atau GUI.
- `uicontrol`: membuat kontrol GUI seperti tombol, teks, atau slider.
- `callback`: kode atau function handle yang dijalankan saat kontrol diaktifkan.
- `get (h, "property")`: membaca properti objek.
- `set (h, "property", value)`: mengubah properti objek.
- `gcbo`: mendapatkan handle objek yang callback-nya sedang berjalan.
- `gcbf`: mendapatkan figure induk dari callback aktif.
- `drawnow`: memaksa pembaruan tampilan dan juga dapat memicu pemrosesan event.

## Ide proyek mini
1. Kalkulator luas bangun datar dengan input dari edit box.
2. Visualisasi perubahan kurva saat slider parameter digeser.
3. Dashboard nilai mahasiswa yang menampilkan statistik dan grafik.
4. Tool kecil untuk memilih file data, membaca, lalu menampilkan plot.

## Latihan
1. Buat satu `figure` dengan satu tombol dan satu teks.
2. Ubah isi teks saat tombol ditekan menggunakan callback.
3. Buat slider yang mengubah nilai angka di label.
4. Gunakan `get` dan `set` untuk membaca lalu memperbarui properti.
5. Rancang proyek mini yang menggabungkan input, komputasi, dan visualisasi.

## Tugas praktikum
1. Jelaskan hubungan antara `figure`, `uicontrol`, properti, dan callback.
2. Buat rancangan antarmuka sederhana untuk proyek mini akhir.
3. Tulis alur kerja event saat tombol ditekan atau slider digeser.

## Tugas koding
1. Buat script `gui_mini_project.m` yang memiliki minimal satu tombol, satu label, dan satu input atau slider.
2. Hubungkan kontrol tersebut dengan callback yang memperbarui tampilan.
3. Tambahkan satu fitur komputasi sederhana, misalnya menghitung luas, menampilkan statistik, atau mengubah parameter plot.

## Referensi manual Octave
- Callbacks: https://docs.octave.org/latest/Callbacks.html
- Uicontrol properties: https://docs.octave.org/latest/Uicontrol-Properties.html
- GUI development: https://docs.octave.org/latest/GUI-Development.html
